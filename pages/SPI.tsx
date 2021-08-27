import Head from 'next/head'
import SPIWizard from '../Components/SPI/Wizard'
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
        <SPIWizard
          stageTitles={['Service Information','Contact','Applicant Payment','Invoice Number']}
        >
          <ServiceInformation/>
          <Contact />
          <ApplicantPayment/>
          <InvoiceNumber/>
        </SPIWizard>
      </>
  )
}
