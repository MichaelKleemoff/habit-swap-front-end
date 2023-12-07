import { useState } from 'react';
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

function GoodHabitForm() {
	// let { id }

	const [goodHabit, setGoodHabit] = useState({
		name: '',
		image_url: '',
		category: '',
		description: '',
		is_my_habit: false,
		rating: '',
	});

	// Add a `goodHabit`. Redirect to the index view.
	const addGoodHabit = (goodHabit) => {
		const httpOptions = {
			method: 'POST',
			body: JSON.stringify(goodHabit),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		fetch(`${API}/badHabits`, httpOptions)
			.then((response) => response.json)
			.then(() => {
				navigate(`/badHabits`);
			})
			.catch((error) => console.error('catch', error));
	};

	const handleTextChange = (event) => {
		setGoodHabit({ ...goodHabit, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		addGoodHabit();
	};

	const { name, img_url, category, description, rating } = goodHabit;

	return (
		<div className='good-habit-form'>
			<h1>Add a Good Habit</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name: </label>
				<input
					id='name'
					value={name}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of good habit'
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
					placeholder='Describe the good habit and its benefits'
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

export default GoodHabitForm;
