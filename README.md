First of this is the frontend and i havent connected the styles so let a fellow friend help, also due to this not being the complete app the pages are limited. 
And i created this nextjs version to suite the problem statements. We would talk on email.


Step 1: Download the Project from GitHub
Navigate to the GitHub Repository:

Open your web browser and go to the GitHub repository for the Swim School Web App. 
Download the Project:

On the repository page, look for the "Code" button (usually green) and click on it.
In the dropdown menu, click on "Download ZIP". This will download a ZIP file of the repository to your computer.
Extract the ZIP File:

Locate the downloaded ZIP file on your computer (usually in the Downloads folder).
Right-click on the ZIP file and select "Extract All" (Windows) or "Open With > Archive Utility" (Mac) to extract the files.
Choose a destination folder where you want to extract the files. Remember this location for later.
Step 2: Install Node.js and npm
Node.js is a JavaScript runtime that comes with npm, a package manager for JavaScript.

Download Node.js:

Go to the Node.js website.
Download the LTS (Long Term Support) version for your operating system.
Install Node.js:

Run the installer and follow the installation prompts.
Verify the Installation:

Open a terminal or command prompt and type the following commands:
bash
Copy code
node -v
npm -v
You should see the versions of Node.js and npm displayed.

Step 3: Install Visual Studio Code
Visual Studio Code (VS Code) is a popular code editor.

Download Visual Studio Code:

Go to the Visual Studio Code website.
Download and install the version for your operating system.
Open Visual Studio Code:

Launch Visual Studio Code after installation.
Step 4: Open the Project in Visual Studio Code
Open the Project Folder:
In Visual Studio Code, click on "File" > "Open Folder...".
Navigate to the location where you extracted the ZIP file and select the project folder. Click "Open".
Step 5: Install Project Dependencies
Dependencies are libraries or packages that your project needs to work properly.

Open the Integrated Terminal in VS Code:

In Visual Studio Code, open the integrated terminal by clicking on "Terminal" > "New Terminal".
Navigate to the Project Directory:

Ensure you are in the project directory (it should be by default if you opened the folder in VS Code).
Install Dependencies:

In the terminal, run the following command to install all required dependencies:
bash
Copy code
npm install
This command reads the package.json file and installs everything listed under dependencies and devDependencies.

Step 6: Set Up Environment Variables
Environment variables are used to store configuration settings.

Create a .env.local File:

In the project directory, create a new file named .env.local.
Add Environment Variables:

Open the .env.local file and add your environment variables. For example:
env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:3000/api
Save and Close the File:

Save the file and close the editor.
Step 7: Start the Development Server
Now that everything is set up, you can start the development server.

Run the Development Server:

In the terminal, ensure you are in the project directory and run the following command:
bash
Copy code
npm run dev
Open Your Web Browser:

Open your web browser and go to http://localhost:3000. You should see the Swim School Web App running.
