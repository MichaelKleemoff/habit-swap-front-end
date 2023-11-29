// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<FourOFour />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
