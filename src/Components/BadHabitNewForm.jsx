import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

function BadHabitNewForm() {
	const navigate = useNavigate();

	const [badHabit, setBadHabit] = useState({
		name: '',
		image_url: '',
		category: '',
		description: '',
		is_my_habit: false,
		rating: '',
	});

	// Add a `badHabit`. Redirect to the index view.
	const addBadHabit = () => {
		const httpOptions = {
			method: 'POST',
			body: JSON.stringify(badHabit),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		fetch(`${API}/badHabits`, httpOptions)
			.then(() => {
				navigate(`/badHabits`);
			})
			.catch((error) => console.error('catch', error));
	};

	const handleTextChange = (event) => {
		setBadHabit({ ...badHabit, [event.target.id]: event.target.value });
	};

	const handleCheckboxChange = () => {
		setBadHabit({ ...badHabit, is_my_habit: !badHabit.is_my_habit });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addBadHabit();
	};

	const { name, img_url, category, description, is_my_habit, rating } =
		badHabit;

	return (
		<div className='bad-habit-new-form'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name: </label>
				<input
					id='name'
					value={name}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of bad habit'
					required
				/>
				<label htmlFor='img_url'>Image URL: </label>
				<input
					id='img_url'
					type='text'
					pattern='http[s]*://.+'
					required
					value={img_url}
					placeholder='http://'
					onChange={handleTextChange}
				/>
				<label htmlFor='category'>Category: </label>
				<input
					id='category'
					type='text'
					name='category'
					value={category}
					placeholder='physical health, mental well-being, ...'
					onChange={handleTextChange}
				/>
				<label htmlFor='description'>Description:</label>
				<textarea
					id='description'
					name='description'
					value={description}
					onChange={handleTextChange}
					placeholder='Describe the bad habit and its effects'
				/>
				<label htmlFor='is_my_habit'>Is My Bad Habit: </label>
				<input
					id='is_my_habit'
					type='checkbox'
					onChange={handleCheckboxChange}
					checked={is_my_habit}
				/>
				<label htmlFor='rating'>Rating: </label>
				<input
					id='rating'
					type='number'
					min='1'
					max='10'
					step='1'
					name='rating'
					value={rating}
					placeholder='Value between 1-10'
					onChange={handleTextChange}
				/>
				<br />

				<input type='submit' />
			</form>
		</div>
	);
}

export default BadHabitNewForm;
