## Install angular globally
`npm install -g @angular/cli`
### Create a workspace and initial application
`ng new my-app`
### run the application
a. `cd my-app`
b. `npm start` or
`ng serve --open`
Our application is now running on localhost port 4200. Let’s open the browser and visit:
`http://localhost:4200/`
Note that if you get the message:
'Port 4200 is already in use. Use '--port' to specify a different port'
This means that you already have another service running on port 4200. If this is the case you can either 1. shut down the other service or 2. use the --port flag when running ng serve like this:

`ng serve --port 9001`
Open browser at `http://localhost:9001/`
