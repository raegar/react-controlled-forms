import React, { useState, useEffect } from 'react';
import TextQuestion from '../components/TextQuestion';

const FormContainer = () => {
    const [fullname, setFullname] = useState('');

    const handleFullnameChange = e => {
        e.preventDefault();
        setFullname(e.target.value);
    }

    useEffect(() => {
        console.log('fullname: ', fullname);
    }, [fullname]) //[fullname] can be passed as a dependency, useEffect will run only when fullname changes.

    const handleClearForm = e => {
        e.preventDefault();
        setFullname('');
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        const formPayload = {
            name: fullname
        };

        console.log('Send this in a POST request:', formPayload);
        handleClearForm(e);
    }

    return (
        <form className="container" onSubmit={handleFormSubmit}>
			<h2>Personal Details</h2>
            <TextQuestion
                inputType={'text'}
                question={'Enter name'}
                name={'fullname'}
                onChange={handleFullnameChange}
                content={fullname}
                placeholder={'Type name here'} />
            <input
                type="submit"
                value="Submit" />
            <button
                onClick={handleClearForm}>Clear form</button>
        </form>
    );

}

export default FormContainer;
