import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Field } from 'react-final-form'

function SandPSelector () {
    return (
        <div>
        <Link to='/sale'><button>Sales</button></Link>
        <Link to='/purchase'><button>Purchases</button></Link>
        <Form
    // onSubmit={onSubmit}
    // validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
          <label>Interests</label>
          {/* <Field name="interests" component={InterestPicker} /> */}
        </div>

        <h2>Render Function</h2>
        <Field
          name="bio"
          render={({ input, meta }) => (
            <div>
              <label>Bio</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <h2>Render Function as Children</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit">Submit</button>
      </form>
    )}
  />
        </div>
    )
}

export default SandPSelector
