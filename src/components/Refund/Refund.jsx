import React, { useState, useEffect } from "react";
import RefundCss from "./Refund.module.scss";
import { fetchDbGet } from '../../backend/backend'
import { InsideSpinner } from "../Spinner/Spinner";
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import axios from 'axios'


const Refund = ({ loading }) => {
	const token = useSelector((state) => state.userReducer.token)

	const [refunds, setRefunds] = useState([]);

	const [walletBalance, setWalletBalance] = useState(0);

	useEffect(() => {
		fetchDbGet('api/user/refund', token).then((res) => {
			setRefunds(res.data)
		})

		fetchDbGet('api/user/user-wallet-balance', token).then((res) => {
			setWalletBalance(res.data)
		})

	}, []);

	// pagination
	const [currentPage, setcurrentPage] = useState(1)

	const paginate = (array, page_size, page_number) => {
		return array.slice((page_number - 1) * page_size, page_number * page_size)
	}
	const paginateArray = paginate(refunds, 5, currentPage)

	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(paginateArray / 5); i++) {
		pageNumbers.push(i)
	}
	let totalPages
	if (refunds.length === 0) {
		totalPages = 1
	} else {
		totalPages = Math.ceil(refunds.length / 5)
	}

	if (currentPage > totalPages) {
		setcurrentPage(totalPages)
	}
	if (currentPage <= 0) setcurrentPage(1)
	// pagination

	return (
		<div className={RefundCss.container}>
			<div className={RefundCss.top}>
				<h4>Refund Details</h4>
			</div>
			
			<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
	
			<div className={RefundCss.tltm_box}>
				<div className={RefundCss.tltm_head}>
					<h1> Your TLTM Store <br/> Credit </h1>
					
					<div className={RefundCss.doller}>${walletBalance}</div>
					
					<div className={RefundCss.credit}>
						<img alt="" src="images/credit.svg" />
					</div>
				</div>
			</div>

			{/*Refund detail Table*/}
			<div className={RefundCss.table}>
				<table>
					<thead>
						<tr>
							<td>Document Title</td>
							<td>Apply Date</td>
							<td>Status</td>
							<td>Amount</td>
							<td>Remarks</td>
						</tr>
					</thead>
					<tbody>
						{paginateArray.length > 0 ? paginateArray.map((refund, idx) => {
							return (
								<tr key={idx}>
									<td>{refund.legal_form.title}</td>
									<td>
										{' '}
										{moment(refund.created_at).format('MMM Do, YYYY')}
									</td>
									<td>
										{refund.status}
									</td>
									<td>${refund.amount}</td>
									<td>{refund.reason}</td>
								</tr>
							)
						}) : <tr><td colSpan='5' className={RefundCss.align_center}>No Refunds Available</td></tr>
						}
					</tbody>
				</table>
			</div>
			<div className={RefundCss.pages}>
				<div
					className={RefundCss.back}
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
					className={RefundCss.front}
					onClick={() => setcurrentPage(currentPage + 1)}
				>
					&gt;
				</div>
			</div>
		</div>
	);
};

const NumberGen = ({ counter, currentPage, setcurrentPage }) => {
	return (
		<div
			className={RefundCss.numbers}
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

export default Refund;
