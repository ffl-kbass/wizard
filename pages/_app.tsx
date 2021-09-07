import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import { 
  PageWrapp,
  SideBar,
  SideBarContent,
  MainContent,
  NavBar,
  Content,
  Logo,
  LogoWrapp,
  School,
  NavButton,
  Account
 } from '../Components/Wrapper/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <PageWrapp>
        <SideBar>
          <LogoWrapp>
            <Logo>LOGO HERE</Logo>
          </LogoWrapp>
          <SideBarContent>
              <li>
                <Link href="/SPI">SPI Wizard</Link>
              </li>
          </SideBarContent>
        </SideBar>
        <MainContent>
          <NavBar>
            <School>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p>Search...</p>
              </div>
              <div>
                <p>School Name</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </School>
            <NavButton>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </NavButton>
            <NavButton>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </NavButton>
            <Account>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <p>John Smith</p>
            </Account>
          </NavBar>
          {/* Everything above here is really just a facade, it's not actually meant to do anything, and because of that does not require any dynamic components. */}
          <Content>
            <Component {...pageProps} />
          </Content>
        </MainContent>
      </PageWrapp>
    </>
  )
}

export default MyApp
