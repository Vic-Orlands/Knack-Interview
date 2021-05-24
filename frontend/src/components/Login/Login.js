import React, { Component } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import classes from './Login.module.css';

import loaderGif from '../../assets/loading.gif';

// import { withCookies, Cookies } from 'react-cookie';
import Axios from 'axios';
class Login extends Component {
	state = {
		show: false,
	};

	onClickShow = () => {
		this.setState({
			show: !this.state.show
		});
	};


	render() {
		const { username, password, passwordError, isSubmitting } = this.state;

		return (
			<main className={classes['login-container']}>
				<div className={classes['center-container']}>
					<p>
						<b>Knacklab.co</b> <br/> Building a happier, engaged and <b> productive Workforce</b>
					</p>

					<form>
						<label htmlFor="username">
							Username
							<input
								type="text"
								name="username"
								value={username}
								onChange={this.handleInputChange}
								autoComplete="username"
							/>
						</label>

						<br />
						<br />

						<label htmlFor="password">Password</label>

						<label htmlFor="password" className={classes['innerPasswrd']}>
							{!this.state.show ? (
								<input
									type="password"
									name="password"
									value={password}
									onChange={this.handleInputChange}
									autoComplete="current-password"
								/>
							) : (
								<input
									type="text"
									name="password"
									value={password}
									onChange={this.handleInputChange}
									autoComplete="current-password"
								/>
							)}
							<span onClick={this.onClickShow}>Show</span>
						</label>

						{passwordError ? <p className={classes['errorMsg']}>{passwordError}</p> : ''}

						<br />
						<br />

						<div className={classes['btnLabel']} onClick={this.handleSubmit}>
							<button disabled={!username || !password}>Submit</button>
							{isSubmitting ? (
								<img src={loaderGif} alt="img" className={classes['loadingGif']} />
							) : (
								<IoIosArrowRoundForward id={classes['btnArrow']} />
							)}
						</div>
					</form>
				</div>
			</main>
		);
	}
}

export default Login;
