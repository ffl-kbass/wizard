import Head from 'next/head'
import Wizard from '../Components/Wizard'

export default function SPI() {
  return (
      <>
        <Head>
          <title>Create Next App</title>
        </Head>
        <Wizard
          stageTitles={['test','test2']}
        >
          <div>
            This is a stage.
          </div>
          <div>
            This is a second stage
          </div>
        </Wizard>
      </>
  )
}
