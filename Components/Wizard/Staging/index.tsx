import React, { useEffect, useState } from 'react'
import {
	StageWrapp,
	StageContentWrapp,
	StageContent,
	Stage
} from './Styles'

interface StagingData {
  stages?: string[];
  stagePos?: number;
  onClickValue?: any;
}

 
const Staging: React.FC<StagingData> = ({stages, stagePos, onClickValue}) => {
	const [styles, setStyles] = useState<any>({})
	const [hasPage] = useState<boolean>(stages.length > 7)

	useEffect(() => {
		if(hasPage){
			// 7 is the max number of stages that will fit before overflowing
			if(((stages.length - 7) * 2) -.5 > stagePos){
				setStyles({
					left: -64 * stagePos,
				})
			}
		}
	}, [hasPage, stages, stagePos]);

  return (
	  <StageWrapp>
		<StageContentWrapp>
			<StageContent style={styles}>
			{stages.map((stage, index) => 
				<Stage key={index} active={(stagePos >= index)} onClick={onClickValue(index)}>
					<div/>
					<p>{stage}</p>
				</Stage> 
			)}
			</StageContent>
		</StageContentWrapp>
	</StageWrapp>
  )
}

export default Staging;