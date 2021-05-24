import React from 'react';
import classes from './Meeting.module.css';

const Meeting = (props) => {
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

					<div className={classes['btn-container']}>
						<button onClick={onclose}>Cancel this meeting</button>

						<button>Schedule this meeting</button>
					</div>
				</section>
			</section>
		</div>
	);
};

export default Meeting;
