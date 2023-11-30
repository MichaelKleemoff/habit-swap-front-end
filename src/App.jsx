// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';

import './App.css';

// COMPONENTS
import NavBar from './Components/NavBar';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/badHabits' element={<Index />} />
						<Route path='/badHabits/new' element={<New />} />
						<Route path='/badHabits/:id' element={<Show />} />
						<Route path='/badHabits/:id/edit' element={<Edit />} />
						<Route path='*' element={<FourOFour />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
