const express = require('express');
const app = express();
app.use(express.json()); //to take the request body from the frontend then we could able to destructure it
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;

const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const bidsRoute = require('./routes/bidsRoute');
const notificationsRoute = require('./routes/notificationsRoute');

app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);
app.use('/api/bids', bidsRoute);
app.use('/api/notifications', notificationsRoute);


// deployment config
const path = require("path"); //this is input statements
__dirname = path.resolve(); //this is input statements

// render deployment
// this code executed only if it is production. not in local not in dev 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  }); //use to telling compiler or cloud service intrepreter -> we have to execute the client also not only the server.
}


app.listen(port, () => console.log(`Node/Express Server started on port ${port}`));