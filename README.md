# cpsc473_project01

## Installation Instructions

1. Install MongoDB
2. Install NodeJS
3. Install DeployD-Cli
    ```
    sudo npm install deployd-cli -g
    ```
3. Clone Repository
    ```
    git clone https://github.com/p0six/cpsc473_project01.git
    ```
4. Install dependencies
    ```
    npm install
    pip3 install -r requirements.txt
    ```
5. Start DeployD Server
    ```
    dpd -n deployd -H localhost -d -o

	OR run as a daemon...
	sudo npm install -g forever
        forever start production.js

    ```
6. Populate Database with some Events
    ```
    python3 eventData.py
    ```
7. Browse to http://localhost:1337/

## Some notes...
Once data has been populated, the app no longer needs to be started via 'dpd', and can instead start via 'npm start'
