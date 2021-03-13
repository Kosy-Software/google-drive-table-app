# google-drive-table-app
Table app for Google Drive integration

## Alias localhost
Since google doesn't like you running their API's on localhost (don't ask me why...), create an alias to localhost.

### For windows
1) Open a text editor in administrator mode
2) Open the hosts file "c:\Windows\System32\drivers\etc\hosts"
3) Add an alias to 127.0.0.1, for the rest of this example, I'll use "dev.local.com"

### For linux/mac
1) Run the command "sudo nano /etc/hosts"
2) Add an alias to 127.0.0.1, for the rest of this example, I'll use "dev.local.com"

## Create google drive credentials
1) Start the google developer console (https://console.developers.google.com/)
2) Log in with your google account (if you don't have one, they're free...)
3) Create a project
4) Enable the Google Drive and Google Picker APIs
5) Create an API key
6) Create an OAuth 2.0 Client Id for a Web application and whitelist "http://dev.local.com:5500" (*)
7) Create a settings.json file in the root of the application (this file should never be checked in, it is explicitly .gitignore'd). It should contain the following information:

{
    "google": {
        "api_key": "The Api key you created in step 5",
        "client_id": "The Client Id you created in step 6"
    }
}

## To actually run the code
1) When using visual studio code, install the live server plugin for ease of access.
2) Install the latest version of the typescript compiler (https://www.typescriptlang.org/download)
3) Open a command line tool and enter the following command: "tsc" (without quotes)
4) Press the Go Live button.


(*) If you're using the live server plugin, the default server port is 5500. If you're not using live server, enter the port the app will be running on.