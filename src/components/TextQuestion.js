import React from 'react';

const TextQuestion = (props) => (
	<div>
		<label>{props.question}: </label>
		<input
			type={props.inputType}
			name={props.name}
			value={props.content}
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default TextQuestion;