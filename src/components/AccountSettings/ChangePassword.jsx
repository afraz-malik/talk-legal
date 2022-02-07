import React, { useState } from 'react'
import { Spinner } from '../Spinner/Spinner'
import { toast } from 'react-toastify'
import { fetchDbPost } from '../../backend/backend'
import { useSelector } from 'react-redux'
import AccountSettingsCss from './AccountSettings.module.scss'

const ChangePassword = () => {
	const token = useSelector((state) => state.userReducer.token)
	const initialState = {
		old_password: '',
		password: '',
		password_confirmation: '',
	}
	const [state, setState] = useState(initialState)
	const [loading, setloading] = useState(false)

	const togglePassword = (val) => {
		var x = document.getElementById(`${val}`)
		if (x.type === 'password') {
			x.type = 'text'
		} else {
			x.type = 'password'
		}
	}
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		if (state.password === state.password_confirmation) {
			setloading(true)
			fetchDbPost('api/user/change_pass', token, {
				old_password: state.old_password,
				password: state.password,
				password_confirmation: state.password_confirmation,
			})
				.then((res) => {
					if (res.status) {
						setState(initialState)
						toast.dismiss()
						toast.success('Password Changed Successfully')
						setloading(false)
					} else {
						throw new Error(res.msg)
					}
				})
				.catch((e) => {
					toast.dismiss()
					toast.error(e.message)
					setloading(false)
				})
		} else {
			toast.dismiss()
			toast.error('Password Not Matched')
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h5>Password Setting</h5>
				<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
				<div className={AccountSettingsCss.col}>
					<label>Current Password</label>
					<input
						type="password"
						placeholder="Enter Current Password"
						// defaultValue="Johnfudoe"
						id="cp"
						required
						name="old_password"
						onChange={handleChange}
						value={state.old_password}
					/>
					<img
						alt=""
						src="images/Group 1000001848.svg"
						onClick={() => togglePassword('cp')}
						style={{ display: state.old_password ? 'block' : 'none' }}
					/>
				</div>
				<div className={AccountSettingsCss.col}>
					<label>New Password</label>
					<input
						type="password"
						required
						placeholder="Enter New Password"
						id="np"
						name="password"
						onChange={handleChange}
						value={state.password}
					/>
					<img
						alt=""
						src="images/Group 1000001848.svg"
						onClick={() => togglePassword('np')}
						style={{ display: state.password ? 'block' : 'none' }}
					/>
				</div>
				<div className={AccountSettingsCss.col}>
					<label>Re-enter Password</label>
					<input
						type="password"
						required
						placeholder="Enter New Password again"
						id="rp"
						name="password_confirmation"
						onChange={handleChange}
						value={state.password_confirmation}
					/>
					<img
						alt=""
						src="images/Group 1000001848.svg"
						onClick={() => togglePassword('rp')}
						style={{
							display: state.password_confirmation ? 'block' : 'none',
						}}
					/>
				</div>
				<div className={AccountSettingsCss.col}>
					<input type="submit" value="Change Password" />
				</div>
				{/* <hr /> */}
				{/* <div className={AccountSettingsCss.top}>
					<h4>Payment Setting</h4>
					<h5 onClick={() => setpopup({ editCard: true, editProfile: false })}>
						Add Card ›
					</h5>
				</div>
				<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
				<div className={AccountSettingsCss.ad_ons}>
					<div className={AccountSettingsCss.ad_on}>
						<div
							className={`${AccountSettingsCss.card} ${
								state.activeCard === 'silver'
									? AccountSettingsCss.activeCard
									: null
							}`}
							onClick={() => setstate({ ...state, activeCard: 'silver' })}
						>
							<label className={AccountSettingsCss.container2}>
								<input
									type="radio"
									name="activeCard"
									value="silver"
									checked={state.activeCard === 'silver'}
									onChange={(e) =>
										setstate({
											...state,
											activeCard: e.target.value,
										})
									}
								/>
								<span className={AccountSettingsCss.checkmark}></span>
							</label>
							<div className={AccountSettingsCss.top}>
								<h2>
									4756 &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
									3847
								</h2>
								<img alt="" src="images/path3789.svg" />
							</div>
						</div>
						<div
							className={`${AccountSettingsCss.card} ${
								state.activeCard === 'gold'
									? AccountSettingsCss.activeCard
									: null
							}`}
							onClick={() => setstate({ ...state, activeCard: 'gold' })}
						>
							<label className={AccountSettingsCss.container2}>
								<input
									type="radio"
									name="activeCard"
									value="gold"
									checked={state.activeCard === 'gold'}
									onChange={(e) =>
										setstate({
											...state,
											activeCard: e.target.value,
										})
									}
								/>
								<span className={AccountSettingsCss.checkmark}></span>
							</label>
							<div className={AccountSettingsCss.top}>
								<h2>
									4756 &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
									3847
								</h2>
								<img alt="" src="images/Group 1000001865.svg" />
							</div>
						</div>
					</div>
				</div> */}
				{loading ? <Spinner /> : null}
			</form>
		</>
	)
}

export default ChangePassword
