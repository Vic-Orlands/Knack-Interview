import React, { useState, useEffect } from 'react';
import { IoMdPerson } from 'react-icons/io';
import UserDetails from '../Employee_Details/Employee.details';
import classes from './Homepage.module.css';
import axios from 'axios';

import Nav from '../Nav/Nav';
import Sidemenu from '../Sidemenu/Sidemenu';

const Homepage = () => {
	const [openModal, setOpenModal] = useState(false);
	const [employees, setEmployees] = useState([]);
	const [employee, setEmployee] = useState(null);

	const openUserDetails = (employee) => {
		setEmployee(employee);
		setOpenModal(!openModal);
	};

	const getEmployees = async () => {
		try {
			let response = await axios.get('/employee_api/employee');
			console.log({ response });
			if (response.statusText === "OK")
				setEmployees(response.data);
		} catch (error) {
			console.log({ error });
		}
	}

	useEffect(() => {
		getEmployees();
	}, []);
	// <----getting number of drafts---->
	// const no_of_posts_published = allPosts.filter((post) => post.is_approved === true);

	// <----converting the timestamp to normal date time---->
	// const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

	return (
		<section className={classes['section']}>
			<Sidemenu />
			<Nav />

			<section className={classes['homepage-container']}>
				<header>
					<div>
						<h2>Employee Directory</h2>
						<p>Find other employees, share surveys and schedule meetings easily!</p>
					</div>
				</header>

				<section className={classes['search-input']}>
					<label htmlFor="">
						Filter list by location and department
						<input type="text" placeholder="Filter list by attributes" />
					</label>

					<label htmlFor="">
						Filter list by availability
						<select name="" id="">
							<option value="all">All Employees</option>
							<option value="not_available">Not Available</option>
							<option value="is_avilable">Is Available</option>
						</select>
					</label>
				</section>

				<section className={classes['employee-list']}>
					<div className={classes['employee-header']}>
						<h3>All Employees</h3>

						<h4>
							Departments
						</h4>
					</div>
					<br />
					<hr />

					{employees.map((employee) =>
						<article>
							<div>
								<h4 onClick={() => openUserDetails(employee)}>{employee.name}</h4>

								<div className={classes['category']}>
									<h6>{`Location: ${employee.location}`}</h6>

									<h6>
										<IoMdPerson size={18} className={classes['person-icon']} />
										Is Available: <b>{employee.isAvailable ? 'yes' : 'No'}</b>
									</h6>
								</div>
							</div>

							<h5 className={classes['meeting']}>Schedule a meeting</h5>

							<h5 className={classes['dpt']}>{employee.department}</h5>
						</article>
					)}
				</section>
			</section>

			<UserDetails open={openModal} onClose={openUserDetails} employee={employee} />
		</section>
	);
};

export default Homepage;
