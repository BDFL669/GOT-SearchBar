import React from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import House from "./components/House";

export default function App() {
	const { data, setData } = useFetch();
	return (
		<main className='main'>
		<h3 id='title'>Input your Favourite GOT House 'n chill:</h3>
		<input
		type="search"
		placeholder="What's your favorite house?"
		value={data.slug}
		onChange={(e) => setData({ ...data, slug: e.target.value.toLowerCase() })}
		/>
		<br />
		{data.results.length > 0 ? <House family={data.results[0]} /> : null}
		</main>
	);
}