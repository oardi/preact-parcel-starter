import { h, Fragment } from 'preact';
import { ButtonCounter } from '../components/ButtonCounter';

export function Home() {
	const onChildClicked = () => {
		console.warn('callback from parent triggered');
	}

	return (
		<Fragment>
			<h1>
				Home
			</h1>
			<ButtonCounter name="Click me" onClicked={(e) => onChildClicked(e)} />
		</Fragment>
	);
}
