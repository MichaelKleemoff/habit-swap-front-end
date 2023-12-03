/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BadHabit = ({ badHabit }) => {
	const { name, img_url, id } = badHabit;

	return (
		<li className='bad-habits-list-line'>
			<Link to={`/badHabits/${id}`} className='bad-habits-list-line-link'>
				<h2>{name}</h2>
				<img src={img_url} alt={name} />
			</Link>
		</li>
	);
};

export default BadHabit;
