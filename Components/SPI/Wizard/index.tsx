import React, {useState} from 'react';
import Staging from './Staging'
import Link from 'next/link'
import { WizardWrapp, PageWrapp, ButtonWrapp } from './Styles'

interface WizardProps {
  stageTitles: string[];
}

const Wizard: React.FC<WizardProps> = ({children, stageTitles}) => {

	const [stageIndex, setStageIndex] = useState<number>(0)
	const [stages] = useState<any[]>(React.Children.toArray(children))
	const [stageData, setStageData] = useState<any[]>(stageTitles)
	const handleOnClick = e => () => setStageIndex(e);


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

	return (
		<PageWrapp>
			<Staging 
				stages = {stageData}
				stagePos = {stageIndex}
				onClickValue={handleOnClick}
			/>
			<WizardWrapp>
				<div>
					{(React.Children.count(children) == stageTitles.length ? stages[stageIndex] : 'Stages and Stage Titles must be equal.')}
				</div>
				<ButtonWrapp>
					{(
						stageIndex > 0 ?
						<button onClick={prevClick}>Previous</button>
						:
						<Link href="/">
							Cancel
						</Link>
					)}
					{(
						stageIndex == stages.length - 1 ?
						<button onClick={nextClick}>Finish</button>
						:
						<button onClick={nextClick}>Next</button>
					)}
				</ButtonWrapp>
			</WizardWrapp>
		</PageWrapp>
	)
}

export default Wizard;