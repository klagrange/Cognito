import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

class SignUp extends Component {


    static onSubmit(values) {
        console.log(values)
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    label="Username"
                />
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label="Email"
                />
                <div>
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'SignUp',
    onSubmit: SignUp.onSubmit
  })(SignUp)
  