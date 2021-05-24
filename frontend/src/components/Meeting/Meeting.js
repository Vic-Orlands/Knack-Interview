import React, { useState } from 'react';
import classes from './Meeting.module.css';

import loaderGif from '../../assets/createGif.gif';

const Meeting = (props) => {
	const [ loading, setLoading ] = useState(false);
	const [ sentMessage, setSentMessage ] = useState('');

	const scheduleMeeting = () => {
		setLoading(true);

		// message appears after 3seconds
		setTimeout(() => {
			setLoading(false);
			setSentMessage(' Meeting sent successfully!');
			window.location.reload();
		}, 3000);
	};

	const onclose = (e) => {
		window.location.reload();
	};

	if (!props.open) {
		return null;
	}

	return (
		<div className={classes['meeting-container']}>
			<section className={classes['meeting-content']}>
				<header>
					<h2>Meeting Details</h2>
					<p>Schedule a meeting at ease</p>
				</header>

				<hr />

				<section className={classes['employee-details']}>
					<form className={classes['meeting-details']}>
						<label>
							<b>Name of scheduler:</b>
							<input type="text" required />
						</label>

						<label>
							<b>Time of meeting:</b>
							<input type="text" />
						</label>

						<label>
							<b>Agenda of meeting:</b>
							<textarea name="" id="" cols="30" rows="10" />
						</label>
					</form>

					<center>{sentMessage ? <p>{sentMessage}</p> : ''}</center>

					<div className={classes['btn-container']}>
						<button onClick={onclose}>Cancel this meeting</button>

						{!loading ? (
							<button onClick={scheduleMeeting}>Schedule this meeting</button>
						) : (
							<button className={classes['gifButton']}>
								<img src={loaderGif} alt="img" className={classes['loadGif']} />
							</button>
						)}
					</div>
				</section>
			</section>
		</div>
	);
};

export default Meeting;
