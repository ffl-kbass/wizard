import React from 'react'
import {
	StageWrapp,
	Stage
} from './Styles'

interface StagingData {
  stages?: string[];
  stagePos?: number;
  onClickValue?: any;
}

 
const Staging: React.FC<StagingData> = ({stages, stagePos, onClickValue}) => {
  return (
      <StageWrapp>
		  {stages.map((stage, index) => 
		 	<Stage key={index} active={(stagePos >= index)} onClick={onClickValue(index)}>
				 <div/>
				 <p>{stage}</p>
			</Stage> 
		  )}
      </StageWrapp>
  )
}

export default Staging;