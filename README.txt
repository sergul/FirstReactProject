Environment Setup

1. Install VSCode

2. Install Node.js from https://nodejs.org/en/ (check with "node -v" command). NOTE: npm comes with Node.js installation

######################################################################################################
Create a new project

1. Create a new project folder

2. Create an "index.html" file in "~/public/

3. Include:
		<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
   to have the latest react CDN

######################################################################################################   
Setup a local live-server

1. Install "live-server" by "npm install -g live-server" (check with live-server -v)

2. Run this command to open the index.html in chrome browser "live-server public --browser=chrome"

######################################################################################################
Setup babel in VSCode for JSX, ES6, ES7 -> ES5 translation

1. npm install -g babel-cli or yarn add global babel-cli

2. create package.json file by "npm init"

3. install babel presets by "npm install babel-preset-react babel-preset-env" or "yarn add babel-preset-react babel-preset-env"
if the first option own't add the 

	"babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1"
	
	Dependencies int "package.json" file
	
you can reinstall all the dependencies by running "yarn install" (make sure you have the yarn.lock file)
	
4. run "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch" to start translation from source to target output

######################################################################################################

Setup the debugger

Make sure you have "webRoot": "${workspaceRoot}/src" in launch.json file

