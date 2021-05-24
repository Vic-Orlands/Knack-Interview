import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

import { FaBell, FaHome } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Nav = () => {
	return (
		<nav>
			<NavLink to="/home" className={classes['nav-home-font']}>
				<FaHome />
			</NavLink>

			<div className={classes['nav-description']}>
				<FaBell id={classes['bell']} />

				<div>
					<h1>VI</h1>

					<div>
						<h2>Victor Innocent</h2>
						<h3>Welcome back, Victor</h3>
					</div>

					<IoMdArrowDropdown size={24} />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
