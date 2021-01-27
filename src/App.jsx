import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { ButtonCounter } from './components/ButtonCounter';

export const App = () => {
	const [name] = useState("Hello Preact Parcel");

	return (
		<div style={{ textAlign: 'center' }}>
			<h3>{name}</h3>
			<ButtonCounter />
		</div>
	);
}
