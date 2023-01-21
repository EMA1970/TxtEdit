# TxtEdit
This application is a text editor that runs in the browser. This app will be a single-page application that meets the PWA criteria. Additionally, it will feature data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline. 

- [TxtEdit](#txtedit)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Deployment](#deployment)
  - [License](#license)
  - [Contribution](#contribution)

## Description 
This is a text editor web application that qualifies the criteria of a Progressive Web Apps(PWAs). It uses service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps. The proposed benefits of this strategy are that it allows everyone to access the basic content and functionality of a web page, using any browser or internet connection, while also providing an enheanced version of the page to those with more advanced browser software of greater bandwidth.. It gives us basic user experience across compatiability across browsers to ensure stability. 

When a user open an application, a IndededDB immediately creates a database storage to collect contents entered. 

## Installation 
For developers: 
1. Clone this repo. 
2. Direct to the root file and open the integrated terminal.
3. Enter `npm install` into the command terminal to install all required dependencies.
4. Enter `npm run start:dev` to start a developmental server for project.
   1. This command runs `cd server && npm run server` and `cd client && npm run dev` concurrently.
      1. The first start a local development server for the server-side of the project. 
      2. The second runs a "webpack-dev-server" command in the "client" directory, which is likely starting a local development server for the client-side of the project. 
5. Access the application by navigating to the output url : `http://localhost:8080/` 

## Usage 
When a user arrive at the application homepage. They may run the application in browser or click on `install` button on the top of the page to run the application locally without browser internet suppport. 

## Screenshot 

## Deployment 


## License 
   GNU GENERAL PUBLIC LICENSE
   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



## Contribution 
Made by Eileen Ma 