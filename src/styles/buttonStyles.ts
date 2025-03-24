export type ButtonVariant = 'default' | 'outline' | 'rounded' | 'ghost' | 'link';

export const getButtonStyles = (theme: any, variant: ButtonVariant) => {
	const buttonVariants = {
		default: `bg-[${theme.colors.primary}] text-[${theme.colors.text}] rounded-md px-4 py-2`,
		outline: `border border-[${theme.colors.primary}] text-[${theme.colors.primary}] bg-transparent rounded-md px-4 py-2`,
		rounded: `bg-[${theme.colors.primary}] text-[${theme.colors.text}] rounded-full px-4 py-2`,
		ghost: `bg-transparent text-[${theme.colors.primary}] hover:bg-gray-100 rounded-md px-4 py-2`,
		link: `text-[${theme.colors.primary}] underline px-2`,
	};
	return buttonVariants[variant] || buttonVariants.default;
}