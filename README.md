
<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Arad119/Dathost-API">
    <img src="images/Logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Dathost API</h3>

  <p align="center">
    An Express server which fetches players online and the next subscription renewal date from the Dathost Server API.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#example-output-with-explanation">Example Output With Explanation</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-server">Running the Server</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Dathost-API Screenshot][product-screenshot]

Dathost-API is a Node.js Express server designed to fetch the current number of players online, and the next subscription renewal date from a chosen gameserver from the Dathost API. It provides an endpoint to retrieve the fetched data and also saves the data locally in a JSON format.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [NodeJS](https://nodejs.org/)
* [Express](https://www.npmjs.com/package/express)
* [Dathost REST API](https://dathost.readme.io/reference/cs2-servers-rest-api)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- OUTPUT EXAMPLE -->
### Example Output With Explanation

![Dathost-API Preview][product-preview]

  - The current player count on the server, which is 3 players.
  - The next subscription renewal date, which is on Sunday the 5th of May 2024.
  - The local date and time when the data was fetched is April 17, 2024, at 07:45:00 PM.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get the server up and running follow these simple steps.

### Prerequisites

- Node.js installed on your machine
- Dathost API credentials (ACCOUNT_NAME, PASSWORD) set in your environment variables
- A Dathost Server ID set in your environment variables

### Running The Server

1. Clone the repo  - ```git clone https://github.com/Arad119/Dathost-API.git```
2. Go into the directory and install NPM packages -  `npm install`
3. Set up environment variables by creating a `.env` file in the root directory and adding your Dathost API credentials and server ID:
```
ACCOUNT_NAME=your_dathost_account_name
PASSWORD=your_dathost_password
SERVER_ID=your_dathost_server_id
```
4. Run the server - `npm start`

### Usage

Once the server is running, you can access the Dathost API data by sending a GET request to the root endpoint (`/`). The server fetches the data from the Dathost API when it starts and then at regular intervals to keep it updated.
NOTE: The Dathost API is rate-limited to only allow 60 requests per minute (per user).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Arad119/Dathost-API.svg?style=for-the-badge
[contributors-url]: https://github.com/Arad119/Dathost-API/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Arad119/Dathost-API.svg?style=for-the-badge
[forks-url]: https://github.com/Arad119/Dathost-API/network/members
[stars-shield]: https://img.shields.io/github/stars/Arad119/Dathost-API.svg?style=for-the-badge
[stars-url]: https://github.com/Arad119/Dathost-API/stargazers
[issues-shield]: https://img.shields.io/github/issues/Arad119/Dathost-API.svg?style=for-the-badge
[issues-url]: https://github.com/Arad119/Dathost-API/issues
[license-shield]: https://img.shields.io/github/license/Arad119/Dathost-API.svg?style=for-the-badge
[license-url]: https://github.com/Arad119/Dathost-API/blob/master/LICENSE.txt
[product-screenshot]: images/Program.png
[product-preview]: images/Output.png
