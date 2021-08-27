import styled from 'styled-components'

export const PageWrapp = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 4rem auto;
	grid-row-gap: 1rem;
`;

export const WizardWrapp = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: auto 2rem;
	padding: 1rem;
	border-radius: .25rem;
	border: 1px hsl(180, 6%, 90%) solid;
	background-color: #ffffff;
`;

export const ButtonWrapp = styled.div`
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
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
	button,a {
		border-radius: .25rem;
		padding: .4rem .8rem;
		font-weight: 600;
		font-size: .875rem;
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
	border: solid 1px hsl(209, 100%, 55%);
	color: hsl(209, 100%, 55%);
	background-color: hsl(209, 100%, 95%);
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
	border: 1px hsl(180, 6%, 90%) solid;
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
	border: 1px hsl(180, 6%, 90%) solid;
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
		border: 1px hsl(180, 6%, 90%) solid;
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