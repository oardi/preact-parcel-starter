import { h, Fragment } from 'preact';
import { ButtonCounter } from '../components/ButtonCounter';
import { Button } from '../shared/components/Button';
import { COLOR } from '../shared/components/component.enums';

export function Home() {
	const onChildClicked = () => {
		console.warn('callback from parent triggered');
	}

	return (
		<Fragment>
			<h1>
				Home
			</h1>
			<ButtonCounter
				name="Click me"
				onClicked={(e) => onChildClicked(e)}
			/>

			<Button color={COLOR.primary}>
				some button
			</Button>
		</Fragment>
	);
}
