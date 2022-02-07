import React, { useState } from 'react'
import COrdersCss from './CompleteOrders.module.scss'
import Preview from '../Preview/Preview'
import DeletePopUp from '../DialoguePopup/DeletePopUp'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import { InsideSpinner, Spinner } from '../Spinner/Spinner'
import { fetchDbGet } from '../../backend/backend'
import moment from 'moment'
import axios from 'axios'
import { refreshingUser } from '../../redux/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { savingFormInState } from '../../redux/data/data.action'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

const CompleteOrders = ({ userLegalForms, loading }) => {
	const [popup, setpopup] = React.useState(false)
	const token = useSelector((state) => state.userReducer.token)
	const [currentPage, setcurrentPage] = useState(1)
	const [search, setsearch] = useState('')
	const dispatch = useDispatch()
	const history = useHistory()
	const closePopup = () => {
		setpopup(false)
	}

	const completeUserLegalforms = userLegalForms.filter(
		(form) => form.status === '2'
	)

	const [newloading, setloading] = useState(false)
	
	const refinedForms = completeUserLegalforms.filter((form) =>
		form.title.toLowerCase().includes(search.toLowerCase())
	)

	// refund form function
	const refundSwal = (form_id) => {
		swal({
			title: "Are you sure?",
			text: "When you apply for refund, you have to wait for the admin response!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willRefund) => {
			if (willRefund) {

				fetchDbGet(`api/user/apply-for-refund/${form_id}`, token).then((res) => {
					console.log(res.status)
					if(res.status){
						swal('Refund Has been requested, Please wait for admin\'s response', {
							icon: "success",
						});
						dispatch(refreshingUser())
					} else {
						swal(res.message, {
							icon: "error",
						});
					}
				})
			}
		});
	}

	// edit form function
	const editForm = (form) => {
		dispatch(savingFormInState(form.legal_form_detail))
		setloading(true)
		setTimeout(() => {
			history.push(
				`/businessform?form=${form.legal_form_detail.id}&edit=true&uid=${form.id}`
			)
			setloading(false)
		}, 1000)
	}
	const getPdf = (id) => {
		setloading(true)
		const link = document.createElement('a')
		link.target = '_blank'
		link.download = 'Legal Document'
		axios({
			url: `http://tlts-back.maqware.com/api/user/download-form/${id}`,
			method: 'get',
			headers: {
				Accept: 'application/pdf',
				'Content-Type': 'application/pdf',
				mode: 'no-cors',
				Authorization: 'Bearer ' + token,
			},
			responseType: 'blob',
		})
		.then((res) => {
			link.href = URL.createObjectURL(
				new Blob([res.data], { type: 'application/pdf' })
			)
			link.click()
			setloading(false)
		})
		.catch((err) => setloading(false))
	}

	const paginate = (array, page_size, page_number) => {
		return array.slice((page_number - 1) * page_size, page_number * page_size)
	}
	const paginateArray = paginate(refinedForms, 5, currentPage)

	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(paginateArray / 5); i++) {
		pageNumbers.push(i)
	}
	let totalPages
	if (refinedForms.length === 0) {
		totalPages = 1
	} else {
		totalPages = Math.ceil(refinedForms.length / 5)
	}

	if (currentPage > totalPages) {
		setcurrentPage(totalPages)
	}
	if (currentPage <= 0) setcurrentPage(1)
	return (
		<div className={COrdersCss.container}>
			{newloading ? <Spinner /> : null}
			{loading ? (
				<InsideSpinner />
			) : completeUserLegalforms.length === 0 ? (
				<div className={COrdersCss.noforms}>
					<span>You don't have any complete orders yet ! </span>
				</div>
			) : (
				<>
					<div className={COrdersCss.topbar}>
						<div className={COrdersCss.search}>
							<input
								type="text"
								placeholder="Search Here..."
								value={search}
								onChange={(e) => setsearch(e.target.value)}
							/>
							<img alt="" src="images/Group 18.svg" />
						</div>
						<div>
							<img alt="" src="images/Button.svg" />
						</div>
						<div>
							<img alt="" src="images/icon.svg" />
						</div>
					</div>
					<div className={COrdersCss.table}>
						<table>
							<thead>
								<tr>
									<td>Document Type</td>
									<td>Date</td>
									<td>Time Left</td>
									<td>Actions</td>
								</tr>
							</thead>
							<tbody>
								{paginateArray.map((form, idx) => {
									return (
										<tr key={idx}>
											<td>{form.title}</td>
											<td>
												{' '}
												{moment(form.payment_date).format('MMM Do, YYYY')}
											</td>
											<td>
												<span>
													<i className="fal fa-clock"></i> {form.edit_days_left}{' '}
													Days left
												</span>
											</td>
											<td>
												<img 
													alt=""
													src="images/Inbox - In.svg"
													title="Download"
													onClick={() => getPdf(form.id)}
												/>
												{form.edit_days_left === 0 ? null : (
													<img
														alt=""
														src="images/Edit.svg"
														onClick={() => editForm(form)}
														title="Edit Document"
													/>
												)}
												{form.refund_days_left === 0 ? null : (
													<img
													alt=""
													src="images/refund-purple.svg"
													title="Refund"
													onClick={() => refundSwal(form.id)}
													/>
												)}
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className={COrdersCss.pages}>
						<div
							className={COrdersCss.back}
							onClick={() => setcurrentPage(currentPage - 1)}
						>
							&lt;
						</div>
						{[...Array(totalPages)].map((i, j) => (
							<NumberGen
								key={j + 1}
								counter={j + 1}
								setcurrentPage={setcurrentPage}
								currentPage={currentPage}
							/>
						))}
						<div
							className={COrdersCss.front}
							onClick={() => setcurrentPage(currentPage + 1)}
						>
							&gt;
						</div>
					</div>
				</>
			)}
			{popup ? (
				<Preview position="fixed">
					<DialoguePopup>
						<DeletePopUp closePopup={closePopup} />
					</DialoguePopup>
				</Preview>
			) : null}
		</div>
	)
}

const NumberGen = ({ counter, currentPage, setcurrentPage }) => {
	return (
		<div
			className={COrdersCss.numbers}
			style={
				counter === currentPage
					? { border: '2px solid #4200FF', color: '#4200FF' }
					: null
			}
			onClick={() => setcurrentPage(counter)}
		>
			{counter}
		</div>
	)
}
export default CompleteOrders
