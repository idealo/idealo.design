<img src="idealog_Design_System_icon.png" align="right"/>

# idealo Next Web Platform

**Version 1.0.0**

As part of the **idealo Design System**, the **Next Web Platform** is a marketing-website created for designers and developers at idealo to exchange ideas and problem-solutions about the **idealo Design System**.

---

### Contributors

- Nicolas Forgerit
- Eda Güngör
- Grace Dodi
- Hai Trang Vu Thi
- Julia Schafferus
- Lilit Harutyunyan
- Pede Mahulomé
- Bettina Müller

---
## Installation

Here are the steps to run this project on your local machine:

### 1. Cloning the project

`git clone https://github.com/idealo/nwp`

### 2. Installing npm (if not already installed)

`npm install`

**Make sure you are using the latest version of npm!** 

Check for your npm version with: `npm --version`

### 3. Installing node.js (if not already installed)

- use the node installer found at https://nodejs.org/en/download/

or 

- use nvm to install 
    `nvm install node`
  
Make sure you are using node version 13.8 or lower version if necessary.

### 4. Installing and running docker 

Install docker by following instructions found on the official docker website https://docs.docker.com/engine/install/.

Use `docker run -d -p 6379:6379 -t redis` to run redis key-value database.

### 5. Installing webpack

- change into the */packages/ideal.design* directory

- run `npx webpack` 

### 6. Starting the server

- nagivate into the */dist* directory
- run the node server: `node server.js`

**Success!** - **You can now find idealo Design System under `localhost:8080`**

---
### License & copyright
information about license and copyright 

