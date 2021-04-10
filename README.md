# google-drive-table-app
Table app for Google Drive integration

## Debugging tool

https://kosy-software.github.io/kosy-debug-app/?url=https://kosy-software.github.io/google-drive-table-app

## Alias localhost
Since google doesn't like people running their API's on localhost (don't ask me why...), create an alias to localhost:

### For windows
1) Open a text editor in administrator mode
2) Open the hosts file "c:\Windows\System32\drivers\etc\hosts"
3) Add an alias to 127.0.0.1

### For linux/mac
1) Run the command "sudo nano /etc/hosts"
2) Add an alias to 127.0.0.1

## Create google drive credentials
1) Start the google developer console (https://console.developers.google.com/)
2) Log in with your google account (if you don't have one, they're free...)
3) Create a project
4) Enable the Google Drive and Google Picker APIs
5) Create an API key
6) Create an OAuth 2.0 Client Id for a Web application and whitelist "http://HOST:PORT" and "https://HOST:PORT" where HOST is the alias you've created in 'Alias localhost' and PORT is whatever port you want the development server to run on.
7) (optional) create SSL certificates for local.dev.com
8) Wait for about 15 to 30 minutes before google accepts the token...

## Create a settings file

In the root of the application, add a settings.json file:

```Typescript
{
    "google": {
        "api_key": "The Api key you created in 'Create google drive credentials' step 5",
        "client_id": "The Client Id you created in 'Create google drive credentials' step 6"
    },
    "devServer": {
        "port": "The port you want the development server to run on (this needs to be the PORT of the url  you've whitelisted in 'Create google drive credentials' step 6)",
        "host": "The HOST you want the development server to run on (see 'Alias localhost')",
        "ssl": false | true | { 
            "certPath": "Path to the SSL certificate in PEM format",
            "keyPath": "(optiona) path to the certificate key", 
            "caPath": "(optional) path to the root certificate in PEM format"
        }
    }
}
```

## Install node package manager
To run the code, you'll need a bunch of packages installed. The package manger we've chosen to use is node package manager (npm).
1) Install npm on your local machine.
2) Check that npm is installed properly by running "npm --version" (without quotes). If you're on a windows machine and already have a command console open before the installation, you need to open a new command console before npm becomes available.
3) Run "npm install" (without quotes). This will download all necessary packages into the node_modules folder.

## To actually run the code
If you've done all of the previous steps:

- Run "npm start" (without quotes) to run the application in development mode.
- Run "npm run-script build" (without quotes) to compile the application into the ./dist folder.