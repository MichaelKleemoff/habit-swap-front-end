import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GoodHabit from './GoodHabit';

const API = import.meta.env.VITE_API_URL;

const GoodHabits = () => {
	const [goodHabits, setGoodHabits] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		fetch(`${API}/badHabits/${id}/goodHabits`)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setGoodHabits(response);
			});
	}, [id, API]);

	return (
		<section className='good-habits'>
			<h2>Good Habits Swap</h2>
			<ul className='good-habits-list'>
				{goodHabits.map((goodHabit) => (
					<GoodHabit key={goodHabit.id} goodHabit={goodHabit} />
				))}
			</ul>
		</section>
	);
};

export default GoodHabits;
