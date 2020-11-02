import React from "react";
import FormTest from "./FormTest/FormTest";
import "../css/styles.scss"

class BadgeForm extends React.Component {
    state = { form: {} };

    handleChange = (e) => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }

    render() {
        return ( 
            <div className="container">
                <FormTest onChange={this.handleChange} formValue={this.state.state}/>
                {console.log(this.state.form)}
            </div>
        )
    };
}

export default BadgeForm;