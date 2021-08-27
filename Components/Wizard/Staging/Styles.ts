import styled from 'styled-components'

export const StageWrapp = styled.div`
	width: 100%;
	height: 4rem;
	padding: .25rem;
	display: flex;
	flex-direction: row;
	flex-wrap: none;
	justify-content: space-evenly;
	align-items: center;
	border-radius: .25rem;
	border: 1px hsl(180, 6%, 90%) solid;
	background-color: #ffffff;
	@media (max-width: 768px) {
    	flex-wrap: wrap;
		height: auto;
  	}
`;

interface Props {
	active: boolean
}

export const Stage = styled.button<Props>`
	padding: .5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: .5rem;
	border-radius: .25rem;
	
	:hover {
		background-color: hsl(213, 100%, 98%)
	}

	div {
		flex: none;
		width: 1rem;
		height: 1rem;
		margin-bottom: .5rem;
		border-radius: 9999px;
		border: ${props => props.active ? "hsl(209, 100%, 85%)" : "hsl(0, 0%, 80%)"} .25rem solid;
		background-color: ${props => props.active ? "hsl(209, 100%, 55%)" : "hsl(0, 0%, 65%)"};
	}

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: .75rem;
		font-weight: bold;
		color: #8B8E8E;
	}
`;