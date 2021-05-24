import React, { useState, useEffect } from 'react';
import { IoMdPerson } from 'react-icons/io';
import UserDetails from '../Employee_Details/Employee.details';
import classes from './Homepage.module.css';
import axios from 'axios';

import Nav from '../Nav/Nav';
import Sidemenu from '../Sidemenu/Sidemenu';

const Homepage = () => {
	const [ openModal, setOpenModal ] = useState(false);

	const openUserDetails = (e) => {
		setOpenModal(!openModal);
	};

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

					<article>
						<div>
							<h4 onClick={openUserDetails}>Victor Innocent</h4>

							<div className={classes['category']}>
								<h6>Location: London</h6>

								<h6>
									<IoMdPerson size={18} className={classes['person-icon']} />
									Is Available: <b>Yes</b>
								</h6>
							</div>
						</div>

						<h5 className={classes['meeting']}>Schedule a meeting</h5>

						<h5 className={classes['dpt']}>Software Developer</h5>
					</article>

					<article>
						<div>
							<h4 onClick={openUserDetails}>Victor Innocent</h4>

							<div className={classes['category']}>
								<h6>Location: Nigeria</h6>
								<h6>
									<IoMdPerson size={18} className={classes['person-icon']} />
									Is Available: <b> No</b>
								</h6>
							</div>
						</div>

						<h5 className={classes['no-meeting']}>Can't Schedule a meeting at this time</h5>

						<h5 className={classes['dpt']}>Data Analyst</h5>
					</article>

					<article>
						<div>
							<h4 onClick={openUserDetails}>Victor Innocent</h4>

							<div className={classes['category']}>
								<h6>Location: Paris</h6>
								<h6>
									<IoMdPerson size={18} className={classes['person-icon']} />
									Is Available: <b> Yes</b>
								</h6>
							</div>
						</div>

						<h5 className={classes['meeting']}>Schedule a meeting</h5>

						<h5 className={classes['dpt']}>Technical Writer</h5>
					</article>

					<article>
						<div>
							<h4 onClick={openUserDetails}>Victor Innocent</h4>

							<div className={classes['category']}>
								<h6>Location: Nigeria</h6>
								<h6>
									<IoMdPerson size={18} className={classes['person-icon']} />
									Is Available: <b> No</b>
								</h6>
							</div>
						</div>

						<h5 className={classes['no-meeting']}>Can't Schedule a meeting at this time</h5>

						<h5 className={classes['dpt']}>Data Analyst</h5>
					</article>
				</section>
			</section>

			<UserDetails open={openModal} onClose={openUserDetails} />
		</section>
	);
};

export default Homepage;
