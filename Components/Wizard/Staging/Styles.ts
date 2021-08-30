import styled from 'styled-components'

export const StageWrapp = styled.div`
	width: 100%;
	height: 4rem;
	display: flex;
	overflow:hidden;
`;

export const StageContentWrapp = styled.div`
	width: 100%;
	overflow: hidden;
	border: 1px hsl(180, 5%, 88%) solid;
	border-radius: .25rem;
	background-color: #ffffff;
	position: relative;
`;

export const StageContentRatio = styled.div`
	width: 6rem;
	height: 100%;
	border-radius: .25rem;
	background-color: hsl(198, 100%, 95%);
`;

export const StageContent = styled.div`
	transition: all .25s;
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0 1rem;
	display: flex;
	flex-direction: row;
	flex-wrap: none;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		height: auto;
	}
`;

interface StageProps {
	active: boolean
}

export const Stage = styled.button<StageProps>`
	padding: .5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: .5rem;
	border-radius: .25rem;
	position: relative;
	:first-of-type {
		/* margin-left: 3rem; */
	}

	:hover {
		background-color: hsl(213, 100%, 98%);
	}

	div {
		flex: none;
		width: 1rem;
		height: 1rem;
		margin-bottom: .5rem;
		border-radius: 9999px;
		border: ${props => props.active ? "hsl(209, 100%, 85%)" : "hsl(180, 6%, 90%)"} .25rem solid;
		background-color: ${props => props.active ? "hsl(209, 100%, 55%)" : "hsl(180, 6%, 80%)"};
	}

	p {
		width: 6rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: .75rem;
		font-weight: 600;
		color: #8B8E8E;
	}
`;