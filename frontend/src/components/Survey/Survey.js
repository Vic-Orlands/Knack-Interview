import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import Nav from '../Nav/Nav';
import classes from './Survey.module.css';
import Sidemenu from '../Sidemenu/Sidemenu';

class SurveyApp extends Component {
	json = {
		pages: [
			{
				name: 'employee',
				elements: [
					{ type: 'text', name: 'employeeName', title: 'What is your name?', isRequired: true },
					{ type: 'text', name: 'employeeLocation', title: 'Location', isRequired: true },
					{ type: 'text', name: 'employeeGender', title: 'Gender' },
					{ type: 'text', name: 'Feedback', title: 'What time do you close from work', isRequired: true },
					{ type: 'text', name: 'Feedback', title: 'Is this site user experience good?', isRequired: true }
				]
			}
		]
	};

	onComplete(survey, options) {
		console.log('Survey results: ' + JSON.stringify(survey.data));
	}

	render() {
		var model = new Survey.Model(this.json);
		return (
			<div className={classes['survey-container']}>
				<Sidemenu />
				<Nav />

				<div className={classes['survey-content']}>
					<Survey.Survey model={model} onComplete={this.onComplete} />
				</div>
			</div>
		);
	}
}
export default SurveyApp;
