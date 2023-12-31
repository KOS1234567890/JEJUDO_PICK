"use client";
import React, { useEffect, useState } from 'react'
import style from '../../pages/course-list/courseList.module.scss'
import CouseItem from './CouseItem'
import axios from 'axios';

function SliceCourse() {
	const [data, setData] = useState([]);
	let sliceData = data.slice(0, 3);
	let loginID;
	if (typeof window !== 'undefined') {
		loginID = localStorage.getItem('loginId')
	}
	async function getCourse() {
		const result = await axios.get(`/server_api/course?profile=${loginID}`)
			.then(res => {
				setData(res.data)
			})
	}

	useEffect(() => {
		getCourse();
	}, [])

	return (
		<>
			<ul className={style.list_wrap}>
				{
					sliceData.map((item, k) => (
						<li key={k}>
							<CouseItem item={item} setData={setData} />
						</li>
					))
				}
			</ul>
		</>

	)
}

export default SliceCourse