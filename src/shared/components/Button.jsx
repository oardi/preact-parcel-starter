import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { VARIANT } from './component.enums';
import { withColor } from './withColor';

const BaseButton = ({
	children,
	block = false,
	disabled = false,
	isRounded = false,
	isActive = false,
	onClick,
	color,
	variant = VARIANT.normal
}) => {

	useEffect(() => {
		console.warn('init');
	}, []);

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push(`btn`);
		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(`btn-link`);
			cssClasses.push(`btn-link-${color}`);
		}
		if (isRounded && variant !== 'text') {
			cssClasses.push(`rounded-pill`);
		}
		if (block) {
			cssClasses.push('btn-block');
		}
		if (isActive) {
			cssClasses.push('active');
		}
		return cssClasses.join(' ');
	};

	const handleClick = (e) => {
		onClick ? onClick(e) : undefined;
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			disabled={disabled}
			onClick={(e) => handleClick(e)}
		>
			{children}
		</button>
	);
};

export const Button = withColor(BaseButton);