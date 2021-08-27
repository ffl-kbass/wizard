import React, { useState } from 'react'
import {

} from './Styles'
import { Information, Textarea, InputWrapp } from '../Styles'
 
const ApplicantPayment: React.FC = () => {
	const [payment, setPayment] = useState<any>(
		{
			payment: ''
		}
	)

  return (
      <>
		<Information>
			<h2>Notes</h2>
			<p>
				This is not a required field, and will not appear on the SPI. If text is entered here, it will appear on the corresponding Service Certification form in the box labeled &quot;Date Applicant Portion Paid and Check No. or Date will be Paid&quot;. Examples: &quot;04/01/2009&quot;, &quot;123456 02/01/2005; 654321 03/15/2005&quot;.
			</p>
		</Information>
		<InputWrapp>
			<label>
				Applicant Payment Information
				<Textarea value={payment.payment} onChange={(e) => setPayment(prev => ({...prev, payment: e.target.value}))}>
				</Textarea>
			</label>
		</InputWrapp>
      </>
  )
}

export default ApplicantPayment;