# Serokell Frontend Task
## Description
The task contains client and server sides. Webpage created using HTML, SCSS and JavaScript. And server-side written using Node.js

## Features

- Landing page displaying a feedback form.
- Collects user feedback data through the form submission.
- Prints the received feedback data to the server console.

## Prerequisites

- Node.js and npm should be installed on your system.

## Getting started

1. Clone this repository to your local machine:
```bash
git clone https://github.com/BlacktorDied/Serokell-Frontend-Task.git
```

2. Navigate to the project folder: 
```bash
cd <your_path>/Serokell-Frontend-Task
```

3. Install the required dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the landing page.

## Project Structure
```bash
C:.
│   package-lock.json
│   package.json
│   server.js
│
├───node_modules
|   └─── ...
|
└───public
    │   index.html
    │   reset.css
    │   script.js
    │   style.css
    │   style.css.map
    │   style.scss
    │
    └───img
            ... (images folder)
```

- The public folder contains all the static files served by the server, including the index.html, style.css, and image files.
- The server.js file contains the code for the Node.js server and handles the GET and POST requests for the landing page and feedback form, respectively.
- The package.json and package-lock.json files manage project dependencies.

## Authors
Alexander Dozorin - [https://github.com/BlacktorDied](https://github.com/BlacktorDied)
