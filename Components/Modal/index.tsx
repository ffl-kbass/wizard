import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { ModalWrapp, ButtonWrapp } from './Styles'

interface ModalData {
  show?: boolean;
  onClickClose?: any;
  path?: string;
}

const Modal: React.FC<ModalData> = ({onClickClose, path, show}) => {
	const router = useRouter();
	const modal = useRef()
	
	const leave = () => {
		router.push(path)
	}
	
	return (
		(show ? 
			<ModalWrapp>
				<div ref={modal}>
					<h1>Cancel Form</h1>
					<p>Are you sure you want to leave this form? All your progess will be lost.</p>
					<ButtonWrapp>
						<button onClick={leave}>Leave</button>
						<button onClick={onClickClose}>Resume</button>
					</ButtonWrapp>
				</div>
			</ModalWrapp>
			:
			null
		)
	)
}

export default Modal