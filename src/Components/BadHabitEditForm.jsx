import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const BadHabitEditForm = () => {
	let { id } = useParams();
	const navigate = useNavigate();

	const [badHabit, setBadHabit] = useState({
		name: '',
		image_url: '',
		category: '',
		description: '',
		is_my_habit: false,
		rating: '',
	});

	const handleTextChange = (event) => {
		setBadHabit({ ...badHabit, [event.target.id]: event.target.value });
	};

	const handleCheckboxChange = () => {
		setBadHabit({ ...badHabit, is_my_habit: !badHabit.is_my_habit });
	};

	// Update a `badHabit`. Redirect to show view
	const updateBadHabit = () => {
		const httpOptions = {
			method: 'PUT',
			body: JSON.stringify(badHabit),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		fetch(`${API}/badHabits/${id}`, httpOptions)
			.then(() => {
				navigate(`/badHabits/${id}`);
			})
			.catch((error) => console.error(error));
	};

	// On page load, fill in the form with the `badHabit` data
	useEffect(() => {
		fetch(`${API}/badHabits/${id}`)
			.then((response) => response.json())
			.then((responseJSON) => {
				setBadHabit(responseJSON);
			})
			.catch((error) => console.error(error));
	}, [id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		updateBadHabit();
	};

	const { name, img_url, category, description, is_my_habit, rating } =
		badHabit;

	return (
		<div className='bad-habit-edit-form'>
			<h1>Bad Habit Edit Form</h1>
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
			<Link to={`/badHabits/${id}`} className='bad-habit-edit-form-link'>
				<button>Nevermind!</button>
			</Link>
		</div>
	);
};

export default BadHabitEditForm;
