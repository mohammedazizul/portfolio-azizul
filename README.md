# Web Portfolio of Mohammed Azizul

A lightweight Single Page web app for web portfolio.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)

## Overview

A lightweight single page web app for web portfolio.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js and npm - [Download and Install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohammedazizul/portfolio-azizul
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-azizul
   ```
3. Install server dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server and client concurrently:
   ```bash
   npm start
   ```
2. Access the application in your browser at http://localhost:3000

## Configuration

1. Environment Variables: Configure your environment variables in a .env file in the root directory. Ensure that sensitive information such as API keys, database credentials, etc., are not committed to version control.

## Folder Structure

    portfolio-azizul/
    ├── README.md           # Project README file
    ├── package-lock.json   #
    ├── package.json        #
    ├── public/             # Public assets
    └── src/                # Source files
         ├── assets/        # Client assets/images
         ├── components/    # Project components
         ├── data/          # Static data
         ├── images/        # Project images
         ├── pages/         # Project pages/routes
         ├── App.css/       # Client root style sheet
         ├── App.js/        # Client root routes
         └── index.js/      # Client root
