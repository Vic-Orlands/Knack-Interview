import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Employee.module.css';

import { IoIosClose } from 'react-icons/io';
import { MdPhone, MdMail } from 'react-icons/md';
import Meeting from '../Meeting/Meeting';

const Employee = (props) => {
	const [ openModal, setOpenModal ] = useState(false);

	const onclose = (e) => {
		props.onClose && props.onClose(e);
	};

	const openUserDetails = (e) => {
		setOpenModal(!openModal);
	};

	if (!props.open) {
		return null;
	}

	return (
		<div className={classes['homepage-container']}>
			<section className={classes['homepage-content']}>
				<IoIosClose className={classes['close-modal']} onClick={onclose} />

				<header>
					<h2>Employee Details</h2>
					<p>See full details of other employees you want to schedule and share a survey </p>
				</header>

				<hr />

				<section className={classes['employee-details']}>
					<div className={classes['name-container']}>
						<label>
							<b>Full Name:</b>
							<p>Victor Innocent</p>
						</label>

						<label>
							<b>Sex:</b>
							<p>Male</p>
						</label>

						<label>
							<b>Location of Employee:</b>
							<p>London</p>
						</label>

						<label>
							<b>Position/Department:</b>
							<p>Software Developer</p>
						</label>

						<label>
							<b>Is Employee Available for a meeting:</b>
							<p>Yes</p>
						</label>
					</div>

					<div className={classes['btn-container']}>
						<button onClick={openUserDetails}>
							<MdPhone className={classes['font']} />
							Schedule a meeting
						</button>

						<button>
							<NavLink to="/survey" id={classes['link']}>
								<MdMail className={classes['font']} />
								Send a Survey
							</NavLink>
						</button>
					</div>
				</section>

				<Meeting open={openModal} onClose={openUserDetails} />
			</section>
		</div>
	);
};

export default Employee;
