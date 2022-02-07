import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchDbGet } from '../../backend/backend'
import { currentUserSelector , tokenSelector } from '../../redux/user/user.selector'
import { refreshingUser } from '../../redux/user/user.action'
import { toast } from 'react-toastify'
import AddCard from '../DialoguePopup/AddCard'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import EditProfile from '../DialoguePopup/EditProfile'
import Preview from '../Preview/Preview'
import AccountSettingsCss from './AccountSettings.module.scss'
import ChangePassword from './ChangePassword'
import swal from 'sweetalert'

const AccountSettings = () => {
	const currentUser = useSelector((state) => currentUserSelector(state))
	const token = useSelector((state) => state.userReducer.token)
	const dispatch = useDispatch()
	const [state, setstate] = useState({
		activeCard: 'gold',
		user: currentUser,
	})


	const [popup, setpopup] = useState({
		editProfile: false,
		editCard: false,
	})

	const changeActiveCard = (card) => {
		if (card.is_active != '1') {
			swal({
				title: "Are you sure?",
				text: "Do you want use this card as an active card?",
				buttons: true,
			})
			.then((changeActive) => {
				if (changeActive) {
					fetchDbGet(`api/user/change-active-card/${card.id}`, token).then((res) => {
						if(res.status){
							dispatch(refreshingUser())
							toast.success(res.message)
						} else {
							toast.error('Failed to Update user card.')
						}
					})
				}
			});
		}
	}

	const removeCard = (card) => {
		if (card.is_active != '1') {
			swal({
				title: "Are you sure?",
				text: "You want to remove this card!",
				icon: "error",
				buttons: true,
				dangerMode: true,
			})
			.then((changeActive) => {
				if (changeActive) {
					fetchDbGet(`api/user/delete-card/${card.id}`, token).then((res) => {
						if(res.status){
							dispatch(refreshingUser())
							toast.success(res.message)
						} else {
							toast.error('Failed to Remove Card.')
						}
					})
				}
			});
		}
	}

	useEffect(() => {
		setstate({ ...state, user: currentUser })
	}, [popup, currentUser])
	
	function closePopup() {
		setpopup({ editCard: false, editProfile: false })
	}
	
	return (
		<div className={AccountSettingsCss.container}>
			<div className={AccountSettingsCss.top}>
				<h4>Profile Setting</h4>
				<h5 onClick={() => setpopup({ editCard: false, editProfile: true })}>
					Edit Account ›
				</h5>
			</div>
			<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
			<form>
				<div className={AccountSettingsCss.row}>
					<div className={AccountSettingsCss.col}>
						<label>First Name</label>
						<input
							type="text"
							placeholder="First Name"
							value={state.user.name}
							disabled
						/>
					</div>
					<div className={AccountSettingsCss.col}>
						<label>Last Name</label>
						<input
							type="text"
							placeholder="Last Name"
							value={state.user.last_name}
							disabled
						/>
					</div>
					<div className={AccountSettingsCss.col}>
						<label>Phone Number</label>
						<input
							type="text"
							placeholder="Phone Number"
							value={state.user.phone}
							disabled
						/>
					</div>
					<div className={AccountSettingsCss.col}>
						<label>Email Address</label>
						<input
							type="text"
							placeholder="Email Address"
							value={state.user.email}
							disabled
						/>
					</div>
				</div>
			</form>
			<hr />
			<ChangePassword />
			<hr />
			<div className={AccountSettingsCss.top}>
				<h4>Payment Setting</h4>
				<h5 onClick={() => setpopup({ ...popup, editCard: true })}>
					Add Card ›{' '}
				</h5>
			</div>
			<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
			<div className={AccountSettingsCss.ad_ons}>
				<div className={AccountSettingsCss.ad_on}>
					{currentUser.cards.map((card) => (
						<div
							key={card.id}
							className={`${AccountSettingsCss.card} ${
								card.is_active === '1' ? AccountSettingsCss.activeCard : null
							}`}
							onClick={() => setstate({ ...state, plans: 'silver' })}
						>
							<label className={AccountSettingsCss.container2} htmlFor={'radio_card_'+card.id}>
								<input
									type="radio"
									name="plans"
									value="silver"
									id={'radio_card_'+card.id}
									checked={card.is_active === '1'}
									onChange={() => changeActiveCard(card)}
								/>
								<span className={AccountSettingsCss.checkmark}></span>
							</label>
							<div className={AccountSettingsCss.top}>
								<h2>
									{card.card_number.substring(0, 4) + ' '}
									&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;{' ' + card.card_number.substring(card.card_number.length - 4)}
								</h2>
								<img alt="" src="images/path3789.svg" />
							</div>

							{ card.is_active != '1' ? 
							<span 
								className={AccountSettingsCss.cross_span} 
								onClick={() => {removeCard(card)}}
							>
								<img alt="" src="images/x-circle.png"/>
							</span> : null}
						</div>
					))}
				</div>
			</div>
			{popup.editProfile ? (
				<Preview>
					<DialoguePopup title={'Edit Your Profile'} closePopup={closePopup}>
						<EditProfile
							popup={popup}
							closePopup={closePopup}
							user={state.user}
						/>
					</DialoguePopup>
				</Preview>
			) : null}
			{popup.editCard ? (
				<Preview>
					<DialoguePopup title={'Add Card'} closePopup={closePopup}>
						<AddCard closePopup={closePopup} />
					</DialoguePopup>
				</Preview>
			) : null}
		</div>
	)
}

export default AccountSettings
