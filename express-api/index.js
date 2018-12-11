const express = require("express");
const app = express();
const { PORT } = require("./config");

require("./routes/views")(app);
require("./routes/api")(app);

function init(){
    console.log("Starting Express...");
    app.listen(PORT, ()=>{
        console.log("Express server is active.");
    });
}

init();