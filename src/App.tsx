import React, { useState } from "react";
import "./App.css";
import { Ratings } from "./components/rating/Ratings";

function App() {
	const [rating,setRating] = useState(2.5)
	function getCurrentRatings(val:number){
		setRating(val)
	}
	return <div className="container"></div>
}

export default App;
