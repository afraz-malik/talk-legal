import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchDbPost } from '../../backend/backend'
import { addCardStart, refreshingUser } from '../../redux/user/user.action'
import DialoguePopupCss from './DialoguePopup.module.scss'
import { useHistory } from 'react-router-dom'
// import toast from "cogo-toast";

const AddCard = ({ popup, closePopup }) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const token = useSelector((state) => state.userReducer.token)
	const [state, setstate] = useState({
		card_holder_name: '',
		card_number: '',
		expiry: '',
		cvv: '',
		is_active: '1',
	})
	const handleChange = (event) => {
		if (event.target.name === 'card_number' || event.target.name === 'cvv') {
			// event.preventDefault();
			// console.log(event.target.name, event.target.value);
			// toast.dismiss();toast.warn("Enter Only digits");
			event.target.value = event.target.value
				.replace(/[^\dA-Z]/g, '')
				.replace(/(.{4})/g, '$1 ')
				.trim()
		}
		setstate({ ...state, [event.target.name]: event.target.value })
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		const payload = {
			...state,
			card_number: parseInt(state.card_number.replace(/\s/g, '')),
			expiry_year: parseInt(state.expiry.split('-')[0]),
			expiry_month: parseInt(state.expiry.split('-')[1]),
		}
		fetchDbPost(`api/user/create-card`, token, payload).then((response) => {
			if (response.hasOwnProperty('status')) {
				toast.dismiss()
				toast.success(response.message)
				dispatch(refreshingUser())
				closePopup()
			} else {
				toast.dismiss()
				toast.error('Card could not be added.')
			}
		})
	}
	return (
		<div className={DialoguePopupCss.edit}>
			<form className={DialoguePopupCss.form} onSubmit={handleSubmit}>
				<label>Card Number</label>
				<input
					value={state.card_number}
					name="card_number"
					onChange={handleChange}
					id="cardnumber"
					type="tel"
					inputmode="numeric"
					autoComplete="cc-number"
					pattern="[0-9\s]{19}"
					maxLength="19"
					placeholder="xxxx xxxx xxxx xxxx"
					required
				/>
				<label>Card Holder Name</label>
				<input
					type="text"
					placeholder="Enter Card Holder Name"
					value={state.card_holder_name}
					name="card_holder_name"
					onChange={handleChange}
					required
				/>
				<label>Expiry Date</label>
				<input
					type="month"
					placeholder="Enter Expiry Date"
					value={state.expiry}
					name="expiry"
					onChange={handleChange}
					min="2022-01" 
					max="2050-12" 
					required
				/>
				<label>CVV</label>
				<input
					value={state.cvv}
					name="cvv"
					onChange={handleChange}
					type="password"
					// type="tel"
					inputmode="numeric"
					autoComplete="cc-number"
					pattern="[0-9\s]{3}"
					maxLength="3"
					id="cardnumber"
					placeholder="Enter CVV"
					required
				/>
				<div className={DialoguePopupCss.greenButtons}>
					<button type="button" onClick={() => closePopup()}>
						Cancel
					</button>
					<button type="submit">Add Card</button>
				</div>
			</form>
		</div>
	)
}

export default AddCard
