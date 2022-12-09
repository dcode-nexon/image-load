import './scss/style.scss';

import pic1 from './img/Blizzards.jpg';
import pic2 from './img/Calm.jpg';
import pic3 from './img/Dusty_Road.jpg';

const imgs = [pic1, pic2, pic3];

function App() {
	return (
		<div className='wrap'>
			{imgs.map((pic, idx) => (
				<img src={pic} alt={pic} key={idx} />
			))}
		</div>
	);
}

export default App;
