import styled from 'styled-components'

export const PageWrapp = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #ffffff;
	color: hsl(180, 6%, 20%);
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
	overflow-y: auto;
`;

export const NavBar = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 2rem;
	flex: none;
	display: flex;
	align-items:center;
	justify-content: flex-end;
	border-bottom: 1px hsl(180, 5%, 88%) solid;
`;

export const School = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;	
	padding: 0 .5rem;
	div {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		:last-child {
			margin-right: 1rem;
		}
		:first-of-type {
			color: hsl(180, 6%, 80%);
		}
		p {
			margin:0 1rem;
			font-size: .865rem;
		}
		svg {
			height: 1rem;
			width: 1rem;
			color: hsl(180, 6%, 80%);
		}
	}
`;

export const NavButton = styled.div`
	flex: none;
	width: 4rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: hsl(180, 6%, 80%);
	border-left: 1px hsl(180, 5%, 88%) solid;
	svg {
		height: 1.25rem;
		width: 1.25rem;
	}
`;

export const Account = styled.div`
	flex: none;
	width: 12rem;
	height: 100%;
	display:flex;
	justify-content: flex-start;
	align-items: center;
	border-left: 1px hsl(180, 5%, 88%) solid;
	padding: 0 1rem;
	font-weight: 600;
	font-size: .865rem;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		margin-right: 1rem;
		border-radius: 9999px;
		background-color: hsl(180, 6%, 80%);
		svg {
			height: 1.5rem;
			width: 1.5rem;
			color: #ffffff;
		}
	}
`;

export const SideBar = styled.div`
	flex: none;
	height: 100%;
	width: 16rem;
	display: grid;
	grid-template-rows: 4rem auto;
	background-color: hsl(213, 100%, 35%);
`;

export const SideBarContent = styled.ul`
	width: 100%;
	height: 100%;
	padding: 2rem 0;

	li {
		width: 100%;
		color: #ffffff;
		a {
			display: block;
			width: 100%;
			padding: .5rem 1.5rem;
			text-align: left;
			font-weight: 600;
			:hover {
				background-color: hsl(213, 100%, 55%)
			}
		}
	}
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

export const Tooltip = styled.div`
	position: absolute;
	top: calc(100% + 5px);
	background-color: hsla(0 0% 0% .5);
	border-radius: .25rem;
	color: #ffffff;
	font-size: .875rem;
`;