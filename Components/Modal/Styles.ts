import styled from 'styled-components'

export const ModalWrapp = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: hsl(44, 0%, 0%, 15%);
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: center;

	>div {
		width: 100%;
		padding: 1.5rem;
		background-color: hsl(126, 0%, 100%);

		@media (min-width: 1024px) {
			width: 30rem;
			border-radius: .25rem;
		}

		h1 {
			font-weight: 600;
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		p {
			margin-top: .5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}
`;

export const ButtonWrapp = styled.div`
	margin-top: 1rem;
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
	button {
		background-color: hsl(360, 98%, 52%);
		color: hsl(0, 0%, 100%);
		:hover {
			background-color: hsl(360, 98%, 65%)
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
`;