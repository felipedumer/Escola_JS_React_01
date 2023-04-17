import React, {Fragment, useState} from 'react';

const initialState = {
    name: ''
}

const Form = (props) => {
    const [fields, setSatellites] = useState(initialState);

    const handleFieldChange = (e) => setSatellites({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addSatellite(fields);
        event.preventDefault();
        setSatellites(initialState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name> </label>
                    <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldChange}/>
                </div>
                <br/>
                <input type={"submit"}/>
            </form>
        </Fragment>
    )
};

export default Form;