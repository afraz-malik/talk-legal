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

	useEffect(() => {
		fetchDbGet('api/user/refund', token).then((res) => {
			setRefunds(res.data)
		})

	}, []);

	return (
		<div className={RefundCss.container}>
			{console.log(refunds)}

			{/* { loading ? 
				<InsideSpinner/> :
			<span>Refunds</span>} */}
			
			<div className={RefundCss.top}>
				<h4>Refund Details</h4>
			</div>
			
			<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
			
			{/*<div className={RefundCss.box}>
				<div className={RefundCss.rectangle}>
					<div className={RefundCss.box}>
						<div className={RefundCss.myhead}>
							<h1> You're TLTM Store Credit</h1>
						</div>
					</div>
					<div className={RefundCss.creditdot}>
						<img alt="" src="images/credit-dot.svg" />
					</div>
					<div className={RefundCss.credit}>
						<img alt="" src="images/credit.svg" />
					</div>
				</div>
			</div>*/}
	
			<div className={RefundCss.tltm_box}>
				<div className={RefundCss.tltm_head}>
					<h1> Your TLTM Store <br/> Credit </h1>
					
					<div className={RefundCss.doller}>$0</div>
					
					<div className={RefundCss.credit}>
						<img alt="" src="images/credit.svg" />
					</div>
				</div>
			</div>
			{/* <div className={RefundCss.creditBox}>
				<div className={RefundCss.nav}>
					<a href="#">Document Title</a>
				</div>
			</div> */}

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
						{refunds.length > 0 ? refunds.map((refund, idx) => {
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
		</div>
	);
};

export default Refund;
