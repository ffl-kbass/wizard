import React, { useState } from 'react'
import { Table, TableWrapp, InputAndButton, Button} from './Styles'
import { Information, Input } from '../../../Wizard/Styles'
 
const ServiceInformation: React.FC = () => {
	const [lineItems, setLineItem] = useState<any[]>(
		[{
			frn: '',
			billFrequency: '',
			date: '',
			dateType: '',
			totalAmount: 0,
			discountPercentage: 80,
			discountAmount: 0,
			applicationPortionPaidDate: '',
			applicantCheckNumber: 0
		}]
	)	

	const handleNewLineItem = () => {
		setLineItem(oldArray => [...oldArray,
			{
				frn: '',
				billFrequency: '',
				date: '',
				dateType: '',
				totalAmount: 0,
				discountPercentage: 0,
				discountAmount: 0,
				applicationPortionPaidDate: '',
				applicantCheckNumber: 0
			}
		]);
	}

	const updateItem = (index, whichvalue, newvalue) => {
		let g = lineItems[index]
		g[whichvalue] = newvalue
		if (index === -1){
			// handle error
			console.log('no match')
		}
		else
			setLineItem([
			...lineItems.slice(0,index),
			g,
			...lineItems.slice(index+1)
			]
		);
	}

  return (
	<>
		<Information>
			<h2>Instructions</h2>
			<p>
				Select the Funding Request Number(s) that you wish to include on this form.
				For each FRN selected, enter the date and the amount to be submitted for payment by the SLD.
				Applicant payment information is optional and can be recorded here for quick reference later.
			</p>
		</Information>	
		<Information>
			<h2>Data Entry Tips</h2>
			<ul>
				<li>With the text cursor in one of the cells below, use Ctrl+&apos; (single-quote) to copy the value from the cell directly above to the current one.</li>
				<li>With the text cursor in one of the cells below, use Ctrl+Shift+&apos; (single-quote) to copy the values from all of the cells in the row directly above to the current row.</li>
				<li>Enter a partial FRN or name of an applicant and click the Find button to search for an FRN.</li>
				<li>When the discount amount is left at 0.00, it is automatically calculated based on the discount percentage of the FRN.</li>
				<li>The &apos;Disc Pct&apos; column is display only. Percentage from FRN will be populated when form is Saved, or when Find or Calculate buttons are used.</li>
				<li>Billed dates should be entered in the form mm/yyyy, shipping dates should be entered in the form mm/dd/yyyy.</li>
			</ul>
		</Information>
		<TableWrapp>
			<Table>
				<thead>
					<tr>
						<th scope="col">FRN</th>
						<th scope="col">Bill Frequency</th>
						<th scope="col">Date</th>
						<th scope="col">Date Type</th>
						<th scope="col">Total Amount</th>
						<th scope="col">Discount Percentage</th>
						<th scope="col">Discount Amount</th>
						<th scope="col">Applicant Portion Paid Date</th>
						<th scope="col">Applicant Check Number</th>
					</tr>
				</thead>
				<tbody>
					{lineItems.map((item, index) =>
						<tr key={index}>
							<td data-content="FRN">
								<InputAndButton>
									<Input type="text" value={item.frn} onChange={(e) => updateItem(index, 'frn', e.target.value)}/>
									<button>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<	path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
										</svg>
									</button>
								</InputAndButton>
							</td>
							<td data-content="Bill Frequency">
								<Input type="text" value={item.billFrequency} onChange={(e) => updateItem(index, 'billFrequency', e.target.value)}/>
							</td>
							<td data-content="Date">
								<Input type="text" value={item.date} onChange={(e) => updateItem(index, 'date', e.target.value)}/>
							</td>
							<td data-content="Date Type">
								<Input type="text" value={item.dateType} onChange={(e) => updateItem(index, 'dateType', e.target.value)}/>
							</td>
							<td data-content="Total Amount">
								<Input type="number" value={item.totalAmount} onChange={(e) => updateItem(index, 'totalAmount', e.target.value)}/>
							</td>
							<td data-content="Discount Percentage">
								<Input type="text" disabled value={item.discountPercentage} onChange={(e) => updateItem(index, 'discountPercentage', e.target.value)}/>
							</td>
							<td data-content="Discount Amount">
								<Input type="number" value={item.discountAmount} onChange={(e) => updateItem(index, 'discountAmount', e.target.value)}/>
							</td>
							<td data-content="Applicant Portion Paid Date">
								<Input type="text" value={item.applicationPortionPaidDate} onChange={(e) => updateItem(index, 'applicationPortionPaidDate', e.target.value)}/>
							</td>
							<td data-content="Applicant Check Number">
								<Input type="text" value={item.applicantCheckNumber} onChange={(e) => updateItem(index, 'applicantCheckNumber', e.target.value)}/>
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</TableWrapp>
		<Button onClick={handleNewLineItem}>
			New Lineitem
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
			</svg>
		</Button>
	</>
  )
}

export default ServiceInformation;