// Create web server
// Path: server.js
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
app.get("/", function (req, res) {
    res.render("home");
});
app.get("/skills", function (req, res) {
    res.render("skills");
});
app.get("/members", function (req, res) {
    res.render("members");
});
app.get("/comments", function (req, res) {
    res.render("comments");
});
app.get("/chat", function (req, res) {
    res.render("chat");
});
io.on("connection", function (socket) {
    console.log("Co nguoi ket noi: " + socket.id);
    socket.on("disconnect", function () {
        console.log(socket.id + " ngat ket noi");
    });
    socket.on("Client-send-data", function (data) {
        console.log(data);
        io.sockets.emit("Server-send-data", data);
    });
});
console.log("Server dang chay tai cong 3000");
// Create file chat.js
Path: public/js/chat.js
var socket = io("http://localhost:3000");
socket.on("Server-send-data", function (data) {
    console.log(data);
});
socket.on("disconnect", function () {
    console.log("Ngat ket noi");
});
function send() {
    var text = document.getElementById("text").value;
    socket.emit("Client-send-data", text);
}

        
