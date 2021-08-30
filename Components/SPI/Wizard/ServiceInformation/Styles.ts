import styled from 'styled-components'

export const TableWrapp = styled.div`
	margin-bottom: 1rem;
	border: 1px hsl(180, 5%, 88%) solid;
	border-radius: .25rem;
	max-height: 18rem;
	overflow-y: scroll;
	input {
		padding: .25rem .35rem;
	}
`;

export const Table = styled.table`
	th, td {
		padding: .35rem .5rem;
		text-align: left;
		font-size: 0.875rem;
	}
	th {
		background-color: hsl(0, 0%, 98%);
		color: hsl(180, 3%, 30%);
	}
	th, tr:not(:last-child) {
		border-bottom: 1px hsl(180, 5%, 88%) solid;
	}
`;

export const InputAndButton = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	input {
		border-radius: .25rem 0 0 .25rem;
	}
	button {
		border-radius: 0 .25rem .25rem 0;
		background-color: hsl(209, 100%, 55%);
		color: #ffffff;
		font-size: .75rem;
		font-weight: 600;
		padding: .25rem .5rem;
		:hover {
			background-color: hsl(209, 100%, 65%)
		}
		svg {
			height: 1rem;
		}
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 0 .25rem;
	border-radius: .25rem;
	border: 1px hsl(180, 5%, 88%) solid;
	background-color: ${props => props.disabled ? "hsl(0, 0%, 96%)" : "hsl(0, 0%, 100%)"};
	:focus {
		border: 1px hsl(213, 100%, 35%) solid;
		outline: none;
	}
`;

export const Button = styled.button`
	border-radius: .25rem;
	padding: .4rem .8rem;
	background-color: hsl(209, 100%, 55%);
	color: #ffffff;
	font-weight: 600;
	font-size: .875rem;
	display: flex;
	align-items: center;
	:hover {
		background-color: hsl(209, 100%, 65%)
	}
	svg {
		height: 1rem;
		margin-right: .5rem;
	}
`;
