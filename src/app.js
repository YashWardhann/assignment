const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api.routes.js");


async function StartServer() {
    const app = express();  
    const urlEncodedParser = bodyParser.urlencoded({ extended: true });
    
    const PORT =  process.env.PORT || process.argv[2] || 8080;

    const server = app.listen(PORT, () => {
        console.log(`Listening to port ${server.address().port}`);
    });
    
    // Load the server loaders 
    await require("./loaders").default({ expressApp: app });
    
    // Mount the primary routes 
    app.use(urlEncodedParser);
    app.use((req, res, next) => {
        console.log(`Incoming ${req.method} request to ${req.url}`);
        next();
    });

    app.use("/api", apiRoutes);
}

const app = StartServer();
// Export the app for testing purposes
module.exports = app;