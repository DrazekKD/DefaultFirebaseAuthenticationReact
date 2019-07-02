import React from 'react';
import { Link } from 'react-router-dom';
import  * as ROUTES from '../../constants/routes'
import { FirebaseContext } from '../Firebase';

import SignUpForm from './SignUpForm';

const SignUpPage = () => (
	<div>
		<h1>SingUp</h1>
		<FirebaseContext.Consumer>
			{firebase => <SignUpForm firebase={firebase}/>}
		</FirebaseContext.Consumer>
	</div>
);

const SignUpLink = () => (
	<p>
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);
export default SignUpPage;

export {SignUpForm, SignUpLink}