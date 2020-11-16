import { h } from 'preact';
import { COLOR } from './component.enums'

export const withColor = (WrappedComponent) => {
	const HOC = (props) => {
		return (
			<WrappedComponent
				{...props}
				color={props.color ? props.color : COLOR.secondary}
			/>
		)
	};

	return HOC;
}
