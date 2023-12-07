import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GoodHabit from './GoodHabit';
import GoodHabitForm from './GoodHabitForm';

const API = import.meta.env.VITE_API_URL;

const GoodHabits = () => {
	const [goodHabits, setGoodHabits] = useState([]);
	let { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${API}/badHabits/${id}/goodHabits`)
			.then((response) => response.json())
			.then((responseJSON) => {
				console.log(responseJSON);
				setGoodHabits(responseJSON);
			});
	}, [id, API]);

	const handleDelete = () => {
		deleteGoodHabit();
	};

	const deleteGoodHabit = (goodHabitId) => {
		const httpOptions = { method: 'DELETE' };
		fetch(`${API}/badHabits/${id}/goodHabits/${goodHabitId}`, httpOptions)
			.then(() => navigate(`/badHabits`))
			.catch((error) => console.log(error));
	};

	return (
		<section className='good-habits'>
			<h2>Good Habits Swap</h2>

			<ul className='good-habits-list'>
				{goodHabits.map((goodHabit) => (
					<GoodHabit
						key={goodHabit.id}
						goodHabit={goodHabit}
						handleDelete={handleDelete}
					/>
				))}
			</ul>

			<GoodHabitForm>
				<h3>Add a New Good Habit</h3>
			</GoodHabitForm>
		</section>
	);
};

export default GoodHabits;
