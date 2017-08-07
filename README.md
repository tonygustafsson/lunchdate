# Lunch Date
A react app for keeping track on colleges lunch plans.

## System parts
The system has three parts:
* The RethinkDB server. You need to create a databse with two tables: dates and places. Not included.
* The NodeJS server in /server. Communicates with the RethinkDB and the client with REST API.
* The client, built with React and Redux.

## Setup
### RethinkDB
Install RethinkDB:
You will have to do it your own way. I installed Docker CE for Ubuntu using these instructions: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/
Then downloaded the container https://hub.docker.com/_/rethinkdb/

I then created a volume like so:
`sudo docker run -d -v /home/tony.gustafsson/lunchdate/rethinkdb/data -p 8080:8080 -p 28015:28015 -p 29015:29015 --name rethinkdb rethinkdb`

Then I could start it with /etc/rc.local with the following command:
`#!/bin/bash -e`
**sudo /usr/bin/docker start rethinkdb**
`sudo /usr/bin/nodejs /home/tony.gustafsson/lunchdate/server/server.js`
`sudo /usr/bin/nodejs /home/tony.gustafsson/lunchdate/client/client.js`
`exit 0`

When it's started you should be able so go the the servers IP on port :8080.
There you will create the database "lunchdate" and the two tables "dates" and "places".

### NodeJS API Server
I installed NodeJS for Ubuntu:
`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs`

I could then go to the server files on the server and run:
`npm install`

We can then start the server by:
`node server.js`

The server should then respond to the servers IP on port 8081, try IP:8081/lunchdate/place/list
Since the places table is empty you should get an empty array ([]).

You can change the port from 8081 to something else in /server/server.js. You might also want to change
clientUrl which is used for CORS, if this does not match the client URL it won't work.
You may also want to the placeLogImgPath if needed.

To make the server start automatically, we use /etc/rc.local like so:
`#!/bin/bash -e`
`sudo /usr/bin/docker start rethinkdb`
**sudo /usr/bin/nodejs /home/tony.gustafsson/lunchdate/server/server.js**
`sudo /usr/bin/nodejs /home/tony.gustafsson/lunchdate/client/client.js`
`exit 0`

### React client
The client is a compiled React + Redux client that is delivered with an express server (just as the API above).
This is based on Facebook React Create App, to see all commands, please visit: https://github.com/facebookincubator/create-react-app

Copy the files in /client and run:
`npm install`
NPM should already be installed if you have installed the API server.

To start the development environment:
`npm start`
The server should start on port 80. Edit /client/client.js if you want to change the port. The URL must match the clientUrl in the server.js.
You will also have to change the static folder binding in this file to be able to start the client not being in the same folder.
Make this folder an absolute path to your compiled/deployed folder.

You must compile the client:
`npm run build`

Now you can start the client in production mode:
`node client.js`

When this works we can make it start automatically with /etc/rc.local:
`#!/bin/bash -e`
`sudo /usr/bin/docker start rethinkdb`
`sudo /usr/bin/nodejs /home/tony.gustafsson/lunchdate/server/server.js`
**sudo /usr/bin/nodejs /home/tony.gustafsson/lunchdate/client/client.js**
`exit 0`

Have fun :)
