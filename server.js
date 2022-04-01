require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const knex = require("./db/knex");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/build"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server has connected to port ${port}🧚✨`);
});

//endpoints

//get all todos
app.get("/todo", async (req, res) => {
	await knex
		.select()
		.from("todo_list")
		.then((datas) => {
			res.send(datas);
		})
		.catch((err) => console.log("error:", err));
});

//get todo item by id
app.get("/todo/:id", async (req, res) => {
	await knex
		.select()
		.from("todo_list")
		.where("id", req.params.id)
		.then((datas) => {
			res.send(datas);
		})
		.catch((err) => console.log("error:", err));
});

//create a todo item
app.post("/todo", async (req, res) => {
	await knex("todo_list")
		.insert({
			todo: req.body.todo,
			due_day: req.body.due_day,
		})
		.then(() => knex.select().from("todo_list"))
		.then((datas) => {
			res.send(datas);
		})
		.catch((err) => console.log("error:", err));
});

//update a todo item
app.put("/todo/:id", async (req, res) => {
	await knex("todo_list")
		.where("id", req.params.id)
		.update({
			todo: req.body.todo,
			due_day: req.body.due_day,
		})
		.then(() => knex.select().from("todo_list"))
		.then((datas) => {
			res.send(datas);
		})
		.catch((err) => console.log("error:", err));
});

//delete a todo item
app.delete("/todo/:id", async (req, res) => {
	await knex("todo_list")
		.where("id", req.params.id)
		.del()
		.then(() => knex.select().from("todo_list"))
		.then((datas) => {
			res.send(datas);
		})
		.catch((err) => console.log("error:", err));
});

//Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/build/index.html"));
});

module.exports = app;
