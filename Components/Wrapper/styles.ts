import styled from 'styled-components'

export const PageWrapp = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	flex-wrap: none;
`;

export const MainContent = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: 4rem auto;
`;

export const Content = styled.div`
	width: 100%;
	padding: 2rem;
	flex: 1 1 0%;
`;

export const NavBar = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 2rem;
	flex: none;
	display: flex;
	align-items:center;
	justify-content: flex-end;
	border-bottom: 1px hsl(180, 6%, 90%) solid;
`;

export const School = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;	
	padding: 0 .5rem;
	::after {
		content: '';
		display: block;
		margin-left: 1rem;
		height: 1rem;
		width: 1rem;
		border-radius: 9999px;
		background-color: hsl(0 0% 90%)
	}
`;

export const Question = styled.div`
	width: 3.5rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px hsl(180, 6%, 90%) solid;
	svg {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export const Bell = styled.div`
	width: 3.5rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px hsl(180, 6%, 90%) solid;
	svg {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export const Account = styled.div`
	width: 10rem;
	height: 100%;
	display:flex;
	justify-content: flex-start;
	align-items: center;
	border-left: 1px hsl(180, 6%, 90%) solid;
	padding: 0 .5rem;
	div {
		width: 2.5rem;
		height: 2.5rem;
		margin-right: 1rem;
		border-radius: 9999px;
		background-color: hsl(0, 0%, 90%)
	}
`;

export const SideBar = styled.div`
	height: 100%;
	width: 18rem;
	background-color: #0050B3;
`;

export const LogoWrapp = styled.div`
	height: 4rem;
	padding: 0 2rem;
	flex: none;
	display: flex;
	align-items:center;
	justify-content: center;
	border-bottom: 1px #003980 solid;
`;

export const Logo = styled.div`
	width: 100%;
	height: 2rem;
	border-radius: 9999px;
	background-color: #ffffff;
	display: flex;
	justify-content:center;
	align-items:center;
	font-weight: bold;
`;