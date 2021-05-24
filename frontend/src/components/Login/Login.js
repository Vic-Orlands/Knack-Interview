import React, { Component } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import classes from './Login.module.css';

import loaderGif from '../../assets/loading.gif';

// import { withCookies, Cookies } from 'react-cookie';
import Axios from 'axios';
class Login extends Component {
	state = {
		show: false,
		username: '',
		password: '',
		passwordError: '',
		isSubmitting: false
	};

	onClickShow = () => {
		this.setState({
			show: !this.state.show
		});
	};

	handleInputChange = ({ target }) => {
		this.setState({
			[target.name]: target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			isSubmitting: true
		});

		// destructuring the username and passwords states
		const { username, password } = this.state;

		const userLogin = {
			username: username.toLowerCase(),
			password: password
		};

		// using axios to call the endpoints
		Axios.post('https://www.spendwise.ng/api/accounts/blog_in/', userLogin, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				if (res.status === 200 && res.data.agent === 'admin') {
					this.setState({
						isSubmitting: false
					});
					// Cookies.set('user', res.data, { path: "/admin" });
					// Cookies.get('user');
					localStorage.setItem('admin', JSON.stringify(res.data));
					localStorage.setItem('adminToken', JSON.stringify(res.data.token));
					this.props.history.push('/admin/home');
				} else if (res.status === 200 && res.data.agent === 'blogger') {
					this.setState({
						isSubmitting: false,
						passwordError: 'User is not an admin'
					});
				} else return null;
			})
			.catch((err) => {
				this.setState({
					isSubmitting: false,
					passwordError: 'Incorrect username and password'
				});
				setTimeout(() => {
					this.setState({
						username: '',
						password: '',
						passwordError: ''
					});
				}, 4000);
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
