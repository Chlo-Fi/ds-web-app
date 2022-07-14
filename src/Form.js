import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({ name: "", email: ""});

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form Submitted.");
        console.log(form);
    }

    const onChange = (event) => {
        console.log("Changed input field");
        const name = event.target.name;
        const value = event.target.value;

        console.log('event.target.name:');
        console.log({ name });
        console.log('event.target.value:');
        console.log({ value })

        setForm({...form, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={onChange} placeholder="Name (e.g. John)" />
            <input type="email" name="email" onChange={onChange} placeholder="Email (e.g. john.doe@example.com)" />
            <button type="submit">Submit Form</button>
        </form>
    );
}

export default Form;