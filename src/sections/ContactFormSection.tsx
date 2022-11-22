// * Code copy from Hans
// * importing useState so we can track and state variables in a function
import React, { useState } from 'react'
import { submitData, validate } from '../assets/scripts/validation'
import { IError, IProps } from '../models/Validation'


const ContactFormSection: React.FC <IProps> = () => {
    let currentPage = "Contact Us"
    //! window.top.document.title = `${currentPage} || Fixxo` 
    // * sets and defines useState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState<IError>()
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    // * validate handleChange with a "live" update when pressing keys
    const handleChange = (e: {target: any, type?: string}) => {
        const {id, value} = e.target

        switch(id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
            break
        }

        setErrors({...errors, [id]: validate(e, {name, email, comments})})
  }
//  * validation for handleSubmit. False until all criterias are forfilled 
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setFailedSubmit(false)
        setSubmitted(false)
        setErrors(validate(e, {name, email, comments}))
  
        if (errors?.name === null && errors.email === null && errors.comments === null) {
        
        let json = JSON.stringify({ name, email, comments})
        
        setName('')
        setEmail('')
        setComments('')
        setErrors({})
        // * if all is true API will post
        if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
            setSubmitted(true)
            setFailedSubmit(false)
            // * else error message will print
        } else {
            setSubmitted(false)
            setFailedSubmit(true)
        }
   
        } else {
            setSubmitted(false)
        }
  }

    return (
        <section className="contact-form">
            <div className="container">
                {/* If all is true this will print */}
                {
                submitted ? (
                <div className="alert alert-success text-center mb-5" role="alert">
                <h3>Thank you for your comments</h3> 
                <p>We will contact you as soon as possible.</p>
                </div>  ) : (<></>)
                }
                {/* If one or all is false this will print, but this dosn't work */}
                {
                failedSubmit ? (
                <div className="alert alert-danger text-center mb-5" role="alert">
                <h3>Something went wrong!</h3> 
                <p>We couldn't submit your comments right now, try again later.</p>
                </div>  ) : (<></>)
                }
                
                {/* Structure for the contact-form */}
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={name} onChange={handleChange} className={(errors?.name ? 'error': '')} />
                        <div className="errorMessage">{errors?.name}</div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Email" value={email} onChange={handleChange} className={(errors?.email ? 'error': '')} />
                        <div className="errorMessage">{errors?.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" placeholder="Comments" value={comments} onChange={handleChange} className={(errors?.comments ? 'error': '')} style={(errors?.comments ? {border: '1px solid #FF7373'}: {} )} ></textarea>
                        <div className="errorMessage">{errors?.comments}</div>
                    </div>
                    <div>
                        <button type="submit" className="button-theme">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection