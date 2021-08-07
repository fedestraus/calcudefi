import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function TaskSelector(props) {
	const {
		taskA,
		taskB,
		taskC,
		taskD,
		taskE,
		setTaskA,
		setTaskB,
		setTaskC,
		setTaskD,
		setTaskE,
	} = props

	const handleChange = event => {
		const task = event.target.name
		const isChecked = event.target.checked
		if (isChecked === true) {
			if (task === 'A') {
				setTaskA({...taskA, 'checked': true, 'disabled': false})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'B') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'checked': true, 'disabled': false})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'C') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'checked': true, 'disabled': false})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'D') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'checked': true, 'disabled': false})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'E') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'checked': true, 'disabled': false})
			}
		} else {
			setTaskA({...taskA, 'checked': false, 'disabled': false})
			setTaskB({...taskB, 'checked': false, 'disabled': false})
			setTaskC({...taskC, 'checked': false, 'disabled': false})
			setTaskD({...taskD, 'checked': false, 'disabled': false})
			setTaskE({...taskE, 'checked': false, 'disabled': false})
		}
	}

	return (
		<FormGroup row={false}>
			<FormControlLabel
				control={
					<Checkbox
						checked={taskA.checkedA}
						onChange={handleChange}
						name="A"
						color="primary"
						disabled={taskA.disabled}
					/>
				}
				label="Calcular APR pasado"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={taskB.checkedB}
						onChange={handleChange}
						name="B"
						color="primary"
						disabled={taskB.disabled}
					/>
				}
				label="Calcular rendimiento en USD"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={taskC.checkedC}
						onChange={handleChange}
						name="C"
						color="primary"
						disabled={taskC.disabled}
					/>
				}
				label="Calcular cuántos Tokens tendré"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={taskD.checkedD}
						onChange={handleChange}
						name="D"
						color="primary"
						disabled={taskD.disabled}
					/>
				}
				label="Calcular en cuánto tiempo demoraría juntar 'x' cantidad de Tokens"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={taskE.checkedE}
						onChange={handleChange}
						name="E"
						color="primary"
						disabled={taskE.disabled}
					/>
				}
				label="Calcular tokens necesarios para juntar 'x' cantidad de Tokens en un período de tiempo dado"
			/>
		</FormGroup>
	)
}