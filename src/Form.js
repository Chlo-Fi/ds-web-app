import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        size: "",
        zipcode: "",
        lot: "",
        bath: "",
        bed: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const form_data = new FormData();
        form_data.append("1", form.size);
        form_data.append("2", form.zipcode);
        form_data.append("3", form.lot);
        form_data.append("4", form.bath);
        form_data.append("5", form.bed);

        fetch('https://realty-price-prediction.herokuapp.com/', {
            method: 'POST',
            body: form_data
        })
            .then(response => console.log(response)
    };

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4> Listing Price Predictor </h4>
            <p> Enter the below information to retrieve a prediction on the listing price of the property.</p>
            <input type="number" name="size" onChange={onChange} placeholder="Size of Home (in sq ft)" />
            <input type="number" name="zipcode" onChange={onChange} placeholder="Zip Code" />
            <input type="number" name="lot" onChange={onChange} placeholder="Size of Lot (in acres)" />
            <input type="number" name="bath" onChange={onChange} placeholder="Number of Bathrooms" />
            <input type="number" name="bed" onChange={onChange} placeholder="Number of Bedrooms" />
            <button type="submit">Submit Form</button>
        </form>
    );
}

export default Form;