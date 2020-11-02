import React from "react";


class FormTest extends React.Component {

    state = {};
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleClick = e => {
        console.log(
            "button was clicked");
    }
    render ()
    {
        return(
            <div>
                <h1>Formulario de Prueba</h1>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={this.state.firstName} onChange={this.props.onChange} />
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastName} onChange={this.props.onChange} />
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.props.onChange} />
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.props.onChange} />
                    </div> 
                    <button type="button" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )   
     }
}

export default FormTest;