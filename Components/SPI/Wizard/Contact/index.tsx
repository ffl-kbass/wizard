import React, { useState } from 'react'
import { Information, Input, InputWrapp } from '../../../Wizard/Styles'
 
const Contact: React.FC = () => {
	const [contact, setContact] = useState<any>(
		{
			contactPerson: '',
			authorizedPerson: '',
		}
	)

  return (
      <>
		<Information>
			<h2>Notes</h2>
			<p>
				Account administrators can edit contacts by going to the My Account page and then clicking the Contacts sub-tab.
			</p>
		</Information>
		<InputWrapp>
			<label>
				Who should be designated as the contact person for this form?
				<Input type='text' value={contact.contactPerson} onChange={(e) => setContact(prev => ({...prev, contactPerson: e.target.value}))}/>
			</label>
		</InputWrapp>
		<InputWrapp>
			<label>
				Who should be designated as the authorized person for this form?
				<Input type='text' value={contact.authorizedPerson} onChange={(e) => setContact(prev => ({...prev, authorizedPerson: e.target.value}))}/>
			</label>
		</InputWrapp>
      </>
  )
}

export default Contact;