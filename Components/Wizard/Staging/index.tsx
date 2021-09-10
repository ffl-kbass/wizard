import React, { useEffect, useRef, useState } from 'react'
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
	const stage = useRef<any>()
	const [elements, setElements] = useState<any>()

	useEffect(() => {
		if(hasPage){
			//128 is the size of stage cell
			setElements(Math.floor(stage.current.offsetWidth / 128))
			if(stagePos + elements - 1 <= stages.length){
				setStyles({
					left: -128 * (stagePos - (stagePos == 0 ? 0 : 1)),
				})
			}
		}
	}, [hasPage, elements, stages, stagePos]);

  return (
	  <StageWrapp>
		<StageContentWrapp>
			<StageContent style={styles} ref={stage} active={(elements <= stages.length ? true : false)}>
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