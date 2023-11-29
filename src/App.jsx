// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import Show from './Pages/Show';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/badHabits' element={<Index />} />
						<Route path='badHabits/:id' element={<Show />} />
						<Route path='*' element={<FourOFour />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
