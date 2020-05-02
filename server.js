const express = require("express");
const app = express();
app.get("/", function(request, response) {
    response.send("<h1>Hello, it's a Node server!</h1>");
});
app.get("/contact", function(request, response) {
    response.send("<h1>Please send an email to strikingraghu@gmail.com</h1>");
});
app.get("/about", function(request, response) {
    response.send("<h1>IT Professional</h1>")
});
app.listen(3000, function() {
    console.log("Staring Express Server");
});