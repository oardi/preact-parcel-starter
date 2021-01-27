import { h } from 'preact';
import { useState } from 'preact/hooks';

export const ButtonCounter = ({ onClicked }) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(prevCount => prevCount + 1);
		onClicked && onClicked();
	}

	return (
		<button onClick={() => handleClick()} class="btn btn-primary">
			clicked: {count}
		</button>
	)
}
