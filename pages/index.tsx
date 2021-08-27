import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <Head>
          <title>Home Page</title>
        </Head>
        <Link href="SPI">SPI Wizard</Link>
      </>
  )
}
