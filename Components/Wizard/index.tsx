import React, {useState, useEffect, createRef} from 'react';
import { useRouter } from 'next/router'
import Staging from './Staging'
import Modal from '../Modal'
import { WizardWrapp, PageWrapp, ButtonWrapp } from './Styles'

interface WizardProps {
  stageTitles: string[];
}

const Wizard: React.FC<WizardProps> = ({children, stageTitles}) => {

	const [stageIndex, setStageIndex] = useState<number>(0)
	const [stages] = useState<any[]>(React.Children.toArray(children))
	const [stageData, setStageData] = useState<any[]>(stageTitles)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const handleOnClick = e => () => setStageIndex(e);
	const wizard = createRef<any>();
	const router = useRouter()
	const [query, setQuery] = useState<any>()


	const nextClick = () => {
		if(stageIndex < stages.length - 1){
			setStageIndex(prev => (prev + 1));
		}
	};

	const prevClick = () => {
		if(stageIndex > 0){
			setStageIndex(prev => (prev - 1));
		}
	};

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	const finish = () => {

	}

	useEffect(() => {
		setQuery(router.query.page)
		console.log(router.query)
		console.log(query)
	}, []);

	return (
		<PageWrapp>
			<Modal path="/" show={isOpen} onClickClose={closeModal}/>
			<Staging 
				stages = {stageData}
				stagePos = {stageIndex}
				onClickValue={handleOnClick}
			/>
			<WizardWrapp>
				<div ref={wizard}>
					{(React.Children.count(children) == stageTitles.length ? stages[stageIndex] : 'Stages and Stage Titles must be equal.')}
				</div>
				<ButtonWrapp>
					{(
						stageIndex > 0 ?
						<button onClick={prevClick}>
							Previous
						</button>
						:
						<button className="cancelled" onClick={openModal}>
							Leave
						</button>
					)}
					{(
						stageIndex == stages.length - 1 ?
						<button className="finished" onClick={finish}>
							Complete
						</button>
						:
						<button onClick={nextClick}>
							Next
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</button>
					)}
				</ButtonWrapp>
			</WizardWrapp>
		</PageWrapp>
	)
}

export default Wizard;