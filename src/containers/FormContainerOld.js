import React, {Component} from 'react';
import TextQuestion from '../components/TextQuestion';

class FormContainerOld extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
	}
	
	handleNameChange(e) {
		this.setState({ fullname: e.target.value }, () => console.log('fullname:', this.state.fullname));
	}
	
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			fullname: ''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			fullname: this.state.fullname
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h2>Personal Details</h2>
				<TextQuestion
					inputType={'text'}
					question={'Enter name'}
					name={'fullname'}
					onChange={this.handleNameChange}
					content={this.state.fullname}
					placeholder={'Type fullname here'} />
				<input
					type="submit"
					value="Submit"/>
				<button
					onClick={this.handleClearForm}>Clear form</button>
			</form>
		);
	}
}

export default FormContainerOld;
