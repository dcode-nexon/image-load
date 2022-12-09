import './scss/style.scss';

function App() {
	//src폴더안쪽에서 public폴더까지의 절대값 경로를 구하는 구문
	const path = process.env.PUBLIC_URL;
	return (
		<div className='wrap'>
			<img src={path + '/img/Blizzards.jpg'} alt='Blizzards' />
			<img src={path + '/img/Calm.jpg'} alt='Calm' />
			<img src={path + '/img/Dusty_Road2.jpg'} alt='Dusty_Road' />
		</div>
	);
}

export default App;
