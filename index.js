require("dotenv").config();

const fs = require("fs");
const express = require("express");
const fetch = require("node-fetch");

const app = express();

let serverData = null;

// Function to fetch information from Dathost API and save it locally
const fetchServerInfo = async () => {
  try {
    const username = process.env.ACCOUNT_NAME;
    const password = process.env.PASSWORD;
    const headers = {
      authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
        "base64"
      )}`,
    };

    const serverId = process.env.SERVER_ID;

    if (!serverId) {
      console.error("Server ID not provided in environment variables.");
      return;
    }

    const serverResponse = await fetch(
      `https://dathost.net/api/0.1/game-servers/${serverId}`,
      {
        method: "GET",
        headers,
      }
    );

    if (serverResponse.ok) {
      const serverInfo = await serverResponse.json();

      // Add local date and time to the fetched data
      const localDateTime = new Date().toLocaleString();

      // Extract required fields
      serverData = {
        players_online: serverInfo.players_online,
        subscription_renewal_next_attempt_at: new Date(
          serverInfo.subscription_renewal_next_attempt_at * 1000
        ).toDateString(), // Convert UNIX timestamp to date
        localDateTime,
      };

      console.log("Server data fetched:", serverData);

      // Save the extracted data to a local file
      fs.writeFile("serverData.json", JSON.stringify(serverData), (err) => {
        if (err) {
          console.error("Error saving server data locally:", err);
        } else {
          console.log("Server data saved locally");
        }
      });
    } else {
      console.error(
        `Failed to fetch information for server ID ${serverId}:`,
        serverResponse.statusText
      );
    }
  } catch (error) {
    console.error("Error fetching server information:", error.message);
  }
};

// Fetch server data when the server starts
fetchServerInfo();

// Schedule the fetchServerInfo function to run every 30 seconds
const fetchInterval = 30 * 1000; // 30 seconds in milliseconds
setInterval(fetchServerInfo, fetchInterval);

// Route to get the server data
app.get("/", (req, res) => {
  if (serverData) {
    res.json(serverData);
  } else {
    res.status(500).json({ error: "Server data not available" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
