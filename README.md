# budgetter
manage your finances easily.

# about the app
this is a simple budget application that can help you track how you spend your money. you can record your income streams as well as expences and it calculates the difference for you.

# technology stack used
i have used the MERN stack to build this app. MERN stands for MongoDB - Express - React - Node.
MongoDB for the database(MongoDB Atlas Cloud Database)
Node & Express for the server-side
React for the client-side

# project structure
i have a root directory which is the "budgetter" folder
inside the root directory is:
 a "client" folder with the front-end code, that is the reactjs app.
 a "server.js" file which is acts as our back-end server.
 a "package.json" file for our installed back-end packages.
 a "controller" folder containing the controller class files.
 a "models" folder containing the model class files.
 a "routes" folder containing the project routes files.
 a "config" folder containing the database connection file as well a "config.env" file containing the server connection parameters.
 
 # app deployment
 i have put my API behind a proxy. this allows my Express and ReactJs files to still live on one machine but each will be served by a different server.
 the front-end ReactJs files are served from the :3000 port while the the back-end Express files are served from the :5000 port.
 
 # hosting
 my project(both client-side and server-side) files are hosted on heroku.
 my database is hosted on MongoDB Atlas which is a global cloud database provided by the MongoDB team.
 
 
