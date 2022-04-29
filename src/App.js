import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

// function App() {
// 	const [pokemons, setPokemons] = useState([]);

// 	useEffect(() => {
// 		axios
// 			.get("https://pokeapi.co/api/v2/pokemon/")
// 			.then((response) => setPokemons(response.data.results));
// 	}, []);

// 	return (
// 		<div>
// 			{pokemons.map((pokemon, index) => {
// 				return <p key={index}>{pokemon.name}</p>;
// 			})}
// 		</div>
// 	);
// }

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios.get("/todo").then((response) => {
			setTodos(response.data);
		});
	}, []);
	console.log(todos);
	return (
		<div className="App">
			{todos.map((todo, index) => {
				return (
					<div className="backGround" key={index}>
						<p>{todo.id}</p>
						<p>{todo.todo}</p>
						<p className="dueday">{todo.due_day}</p>
					</div>
				);
			})}
		</div>
	);
}

export default App;

// function App() {
// 	const [todos, setTodos] = useState([]);

// 	useEffect(() => {
// 		setTodos(["feed boo"]);
// 	}, []);

// 	return (
// 		<div className="App">
// 			<p>{todos}</p>
// 		</div>
// 	);
// }
