import Head from 'next/head'
import Wizard from '../Components/Wizard'
import ServiceInformation from '../Components/SPI/Wizard/ServiceInformation';
import Contact from '../Components/SPI/Wizard/Contact';
import ApplicantPayment from '../Components/SPI/Wizard/ApplicantPayment';
import InvoiceNumber from '../Components/SPI/Wizard/InvoiceNumber';

export default function Home() {
  return (
      <>
        <Head>
          <title>Create Next App</title>
        </Head>
        <Wizard
          stageTitles={['Service Information','Contact','Applicant Payment','Invoice Number', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9']}
        >
          <ServiceInformation/>
          <Contact />
          <ApplicantPayment/>
          <InvoiceNumber/>
          <div>test</div>
          <div>test2</div>
          <div>test3</div>
          <div>test4</div>
          <div>test5</div>
          <div>test6</div>
          <div>test7</div>
          <div>test8</div>
          <div>test9</div>
        </Wizard>
      </>
  )
}
