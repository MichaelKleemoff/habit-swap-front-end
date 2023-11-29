/* eslint-disable react/prop-types */
const BadHabit = ({ badHabit }) => {
	const { name, img_url, description } = badHabit;
	console.log(name);

	return (
		<li className='BadHabits-list-line'>
			<section>
				<h2>{name}</h2>
			</section>
			<section>
				<img src={img_url} alt={name} />
				<p>{description}</p>
			</section>
		</li>
	);
};

export default BadHabit;
