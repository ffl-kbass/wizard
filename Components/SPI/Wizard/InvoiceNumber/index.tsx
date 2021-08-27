import React, { useState } from 'react'
import { Information, InputWrapp, Input, RadioWrapp } from '../../../Wizard/Styles'
 
const InvoiceNumber: React.FC = () => {
	const [invoice, setInvoice] = useState<any>(
		{
			identifier: '',
			method: ''
		}
	)

  return (
      <>
		<Information>
			<h2>Instructions</h2>
			<ul>
				<li>Enter a name or number of your choice to identify this form, then, enter the format in which the form should be generated.</li>
				<li>Choose Online Submission in order to have the form submitted automatically through the SLD&apos;s website.</li>
				<li>Choose SLD E-mail Attachment in order to download a text file which can be encrypted with the SLD&apos;s encryption key and sent to the SLD via e-mail.</li>
			</ul>
		</Information>
		<InputWrapp>
			<label>
				Form Identifier
				<Input type='text' value={invoice.identifier} onChange={(e) => setInvoice(prev => ({...prev, identifier: e.target.value}))}/>
			</label>
		</InputWrapp>
		<RadioWrapp>
			<p>Method of Submission</p>
			<div>
				<label>
					<input type='radio' name="method" value="online" onChange={(e) => setInvoice(prev => ({...prev, method: e.target.value}))}/>
					Online
				</label>
				<label>
					<input type='radio' name="method" value="sld e-mail attachment" onChange={(e) => setInvoice(prev => ({...prev, method: e.target.value}))}/>
					SLD E-mail Attachment
				</label>
			</div>
		</RadioWrapp>
      </>
  )
}

export default InvoiceNumber;