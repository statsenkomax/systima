# Playwright TypeScript Demo Framework

## Overview

This is a sample project that utilizes playwright build in runner with page object model/fixtures as a base design. For
the demo purpose test cases are created on https://app.staging.systima.no/ site

## Getting Started

### Prerequisites

- Nodejs: Download and install nodejs from [here](https://nodejs.org/en/download)
- Visual Studio Code: Download and install VS Code from [here](https://code.visualstudio.com/)

### Execution in local

1. Clone the repository:

   ```sh
   git clone git@github.com:statsenkomax/systima.git
   ```
2. Navigate to root project directory and install the following
    * Install npm packages using
   ```
   npm install
   ```
    * If this is your first time with nodejs playwright framework you will need to download the required browsers
   ```
   npx playwright install
   ```
4. Add Login and Password into .env file
3. In root project directory to execute below command to run all UI tests
   ```
   npx playwright test
   ```