import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyClUGbDrUSX5SoFM32B2mqV4UGCE4oGp50';

//create a new componet
//this componet should create some html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


//take this componet's genetated HTML and
//put it into page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
