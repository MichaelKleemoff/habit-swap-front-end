import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<h1>
				<Link to='/badHabits'>Bad Habits</Link>
			</h1>
			<button>
				<Link to='/badHabits/new'>New Bad Habit</Link>
			</button>
		</nav>
	);
};

export default NavBar;
