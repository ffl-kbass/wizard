import styled from 'styled-components'

export const TableWrapp = styled.div`
	margin-bottom: 1rem;
	border: 1px hsl(180, 6%, 90%) solid;
	border-radius: .25rem;
	max-height: 18rem;
	overflow-y: scroll;
	input {
		padding: 0 .25rem;
	}
`;

export const Table = styled.table`
	th, td {
		padding: .35rem .5rem;
		text-align: left;
	}
	th {
		background-color: hsl(0, 0%, 98%);
		color: hsl(180, 3%, 30%);
		font-size: .75rem;
	}
	th, tr:not(:last-child) {
		border-bottom: 1px hsl(180, 6%, 90%) solid;
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
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 0 .25rem;
	border-radius: .25rem;
	border: 1px hsl(180, 6%, 90%) solid;
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
	:hover {
		background-color: hsl(209, 100%, 65%)
	}
`;
