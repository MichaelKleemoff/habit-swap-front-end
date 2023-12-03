/* eslint-disable react/prop-types */
const GoodHabit = ({ goodHabit }) => {
	const { name, img_url, category, description, rating } = goodHabit;

	return (
		<li className='good-habits-list-line'>
			<section className='good-habits-list-line-name'>
				<h3>{name}</h3>
				<img src={img_url} alt={name} width='150' height='150' />
			</section>
			<section className='good-habits-list-line-info'>
				<p>{description}</p>
				<h4>
					category: <span>{category}</span>
				</h4>
				<h4>
					rating: <span>{rating}</span>
				</h4>
			</section>
		</li>
	);
};

export default GoodHabit;
