import { useState } from 'react';
import { toast } from 'react-toastify';

import { FaSignInAlt } from 'react-icons/fa';

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt /> Login
				</h1>
				<p>Please Login to get support</p>

				<section className='form'>
					<form onSubmit={onSubmit}>
						<div className='form-group'>
							<input
								type='email'
								className='form-control'
								name='email'
								id='email'
								value={email}
								onChange={onChange}
								placeholder='Enter your email'
								required
							/>
						</div>
						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								name='password'
								id='password'
								value={password}
								onChange={onChange}
								placeholder='Enter your password'
								required
							/>
						</div>
						<div className='form-group'>
							<button className='btn btn-block'>Submit</button>
						</div>
					</form>
				</section>
			</section>
		</>
	);
};
