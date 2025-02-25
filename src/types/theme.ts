export type ColorPalette = {
	primary:string;
	secondary:string;
	accent:string;
	background:string;
	text:string;
	custom?:string;
}
export type Typography = {
	primary:string;
	secondary:string;
	custom?:string;
	size:{
		base:string;
		sm:string;
		lg:string;
		xl:string;
	}
}
export type Theme ={
	colors:ColorPalette;
	typography:Typography;
}