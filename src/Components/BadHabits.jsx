import { useState, useEffect } from 'react';
import BadHabit from './BadHabit';

const API = import.meta.env.VITE_API_URL;

const BadHabits = () => {
	const [badHabits, setBadHabits] = useState([]);

	useEffect(() => {
		fetch(`${API}/badHabits`)
			.then((response) => response.json())
			.then((responseJSON) => {
				console.log(responseJSON);
				setBadHabits(responseJSON.data.payload);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='bad-habits'>
			<h1>My Bad Habits</h1>
			<ul className='bad-habits-list'>
				{badHabits.map((badHabit) => (
					<BadHabit key={badHabit.id} badHabit={badHabit} />
				))}
			</ul>
		</div>
	);
};

export default BadHabits;
