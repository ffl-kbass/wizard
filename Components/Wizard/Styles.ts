import styled from 'styled-components'

export const PageWrapp = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 4rem auto;
	grid-row-gap: 1rem;
	overflow: auto;
	
	@media (min-width: 1024px) {
		overflow: hidden;
	}
`;

export const WizardWrapp = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: auto 4rem;
	padding: 1rem;
	border-radius: .25rem;
	border: 1px hsl(180, 5%, 88%) solid;
	background-color: #ffffff;
	
	>div {
		width: 100%;
	}
`;

export const ButtonWrapp = styled.div`
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-top: 2rem;
	button:last-child {
		border-radius: .25rem;
		padding: .4rem .8rem;
		background-color: hsl(209, 100%, 55%);
		color: #ffffff;
		font-weight: 600;
		font-size: .875rem;
		margin-left: 1rem;
		:hover {
			background-color: hsl(209, 100%, 65%)
		}
	}
	button.cancelled {
		background-color: hsl(360, 98%, 52%);
		color: hsl(0, 0%, 100%);
		:hover {
			background-color: hsl(360, 98%, 65%)
		}
	}
	button.finished {
		background-color: hsl(126, 75%, 43%);
		color: hsl(0, 0%, 100%);
		:hover {
			background-color: hsl(126, 75%, 50%)
		}
	}
	button,a {
		border-radius: .25rem;
		padding: .4rem .8rem;
		font-weight: 600;
		font-size: .875rem;
		display: flex;
		align-items: center;
		svg {
			:first {
				margin-right: .5rem;
			}
			:last-of-type {
				margin-left: .5rem;
			}
			height: 1rem;
		}
	}
	button {
		:hover {
			background-color: hsl(0, 0%, 95%)
		}
	}
`;

export const Information = styled.div`
	flex: none;
	width: 100%;
	font-size: .85rem;
	padding: .5rem;
	margin-bottom: 1rem;
	border-radius: .25rem;
	border: solid 1px hsl(203, 100%, 89%);
	color: hsl(211, 85%, 46%);
	background-color: hsl(199, 100%, 95%);
	h2 {
		font-size: 1rem;
		font-weight: bold;
	}
	ul {
		list-style: inside;
		font-size: .75rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: .5rem;
	border-radius: .25rem;
	border: 1px hsl(180, 5%, 88%) solid;
	background-color: ${props => props.disabled ? "hsl(0, 0%, 96%)" : "hsl(0, 0%, 100%)"};
	:focus {
		border: 1px hsl(213, 100%, 35%) solid;
		outline: none;
	}
`;

export const InputWrapp = styled.div`
	label {
		display: flex;
		flex-direction: column;
		color: hsl(180, 3%, 30%);
		font-size: .865rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}
	input {
		margin-top: .5rem;
		width: 10rem;
	}
	textarea {
		margin-top: .5rem;
	}
`;

export const Textarea = styled.textarea`
	width: 100%;
	min-height: 12rem;
	padding: 0 .25rem;
	border-radius: .25rem;
	border: 1px hsl(180, 5%, 88%) solid;
	background-color: ${props => props.disabled ? "hsl(0, 0%, 96%)" : "hsl(0, 0%, 100%)"};
	:focus {
		border: 1px hsl(213, 100%, 35%) solid;
		outline: none;
	}
`;

export const RadioWrapp = styled.div`
	div {
		background-color: hsl(0, 0%, 98%);
		padding: 1rem;
		border-radius: .25rem;
		border: 1px hsl(180, 5%, 88%) solid;
		display: inline-flex;
		flex-direction: column;
	}
	p {
		color: hsl(180, 3%, 30%);
		font-size: .865rem;
		font-weight: 600;
		margin-bottom: .5rem;
	}
	label:not(:first-of-type){
		margin-top: 1rem;
	}
	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: hsl(180, 3%, 30%);
		font-size: .865rem;
		font-weight: 600;
	}
	input {
		margin-right: .5rem;
	}
`;

export const Button = styled.button`
	border-radius: .25rem;
	padding: .4rem .8rem;
	background-color: hsl(209, 100%, 55%);
	color: #ffffff;
	font-weight: 600;
	font-size: .875rem;
`;

export const Dialog = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	
`;