import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const BadHabitDetails = () => {
	const [badHabit, setBadHabit] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${API}/badHabits/${id}`)
			.then((response) => response.json())
			.then((responseJSON) => {
				console.log(responseJSON);
				setBadHabit(responseJSON);
			})
			.catch((error) => console.log(error));
	}, [id]);

	const handleDelete = () => {
		deleteBadHabit();
	};

	const deleteBadHabit = () => {
		const httpOptions = { method: 'DELETE' };
		fetch(`${API}/badHabits/${id}`, httpOptions)
			.then(() => navigate(`/badHabits`))
			.catch((error) => console.log(error));
	};

	const { name, img_url, category, description, is_my_habit, rating } =
		badHabit;

	return (
		<article className='bad-habits-details'>
			<section className='bad-habits-details-name'>
				<h1>{name}</h1>
				<img src={img_url} alt={name} />
			</section>
			<section className='bad-habits-details-info'>
				<h2>{is_my_habit ? '✅' : null}</h2>
				<p>{description}</p>
				<h3>
					category: <span>{category}</span>
				</h3>
				<h3>
					rating: <span>{rating}</span>
				</h3>
			</section>
			<div className='showNavigation'>
				<div>
					<Link to={`/badHabits`}>
						<button>Back</button>
					</Link>
				</div>
				<div>
					<Link to={`/badHabits/${id}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</article>
	);
};

export default BadHabitDetails;
