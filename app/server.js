/* The NodeJS Framework for Smart Back-End
   ▄█   ▄█▄    ▄████████    ▄████████    ▄████████ ▄██   ▄   
  ███ ▄███▀   ███    ███   ███    ███   ███    ███ ███   ██▄ 
  ███▐██▀     ███    ███   ███    █▀    ███    █▀  ███▄▄▄███ 
 ▄█████▀      ███    ███   ███         ▄███▄▄▄     ▀▀▀▀▀▀███ 
▀▀█████▄    ▀███████████ ▀███████████ ▀▀███▀▀▀     ▄██   ███ 
  ███▐██▄     ███    ███          ███   ███        ███   ███ 
  ███ ▀███▄   ███    ███    ▄█    ███   ███        ███   ███ 
  ███   ▀█▀   ███    █▀   ▄████████▀    ███         ▀█████▀  
  ▀ Author : S.Katheeskumar [https://katheesh.github.io] */

import express from "express";
import env from "dotenv";

import {
	routes
} from "../config/routes";

import api from "../routes/api";
import web from "../routes/web";

// Create our Express application
var app = express();

var port = process.env.PORT || 5050;

var publix = __dirname.substring(0, __dirname.length - 3) + "public";

app.use(express.static(publix));

app.use("/", routes(web));

app.use("/api", routes(api));

app.set("view engine", "ejs");

// Start the server
app.listen(port, (err) => {
	console.log(
		"🌍 kasfy development server started on http://127.0.0.1:" + port
	);
});
