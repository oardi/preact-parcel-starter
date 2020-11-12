import { h } from 'preact';
import { useState } from 'preact/hooks';

export const ButtonCounter = ({ name, onClicked }) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
		onClicked ? onClicked() : undefined;
	}

	return (
		<button onClick={() => handleClick()} class="btn btn-outline-primary">
			{name} - You clicked me {count} times
		</button>
	)
}
