import React from 'react';
import { FirebaseContext } from '../Firebase';
import SignUpFormBase from './SignUpFormBase';
import SignUpLink from './SignUpLink';

const SignUpPage = () => (
	<div>
		<h1>SingUp</h1>
		<FirebaseContext.Consumer>
			{firebase => <SignUpForm firebase={firebase}/>}
		</FirebaseContext.Consumer>
		<SignUpLink/>
	</div>
);


const SignUpForm = SignUpFormBase;

export default SignUpPage;