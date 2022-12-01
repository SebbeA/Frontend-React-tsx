// * Code copy from Hans
// * importing useState so we can track and state variables in a function
import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { emailValidation, textValidation } from '../utilities/validation'

interface FormDataType {
    name: string
    email: string
    comments: string
}

const ContactFormSection: React.FC = () => {
    // let currentPage = "Contact Us"
    const defaultValues: FormDataType = {name: '', email: '', comments: ''}

    // * sets and defines useState
    const [formData, setFormData] = useState<FormDataType>(defaultValues)
    const [errors, setErrors] = useState<FormDataType>(defaultValues)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

    // * validate handleChange with a "live" update when pressing keys
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})

        if (id === 'name')
            setErrors({...errors, [id]: textValidation(id, value)})

        if (id === 'email')
            setErrors({...errors, [id]: emailValidation(id, value)})
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})

        if (id === 'comments')
            setErrors({...errors, [id]: textValidation(id, value, 5)})
    }

//  * validation for handleSubmit. False until all criterias are forfilled 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(false)
        setFailedSubmit(false)

        if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
            if (errors.name === '' && errors.email === '' && errors.comments === '') {

                const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if(res.status === 200) {
                    setSubmitted(true)
                    setFormData(defaultValues)
                } else {
                    setSubmitted(false)
                    setFailedSubmit(true)
                }
            }
    }

    return (
        <section className="contact-form">
            <div className="container">
                {/* If all is true this will print */}
                {submitted ? (<AlertNotification alertType="success" title="Thank you for your comments!" text="We will contact you as soon as possible"  />) : (<></>)}

                {/* If one or all is false this will print, but this dosn't work */}
                {failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!" text="We couldn't submit your comments right now, try again later."  />) : (<></>)}
               
                {/* Structure for the contact-form */}
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={(e) => handleChange(e)} className={(errors?.name ? 'error': '')} />
                        <div className="errorMessage">{errors?.name}</div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={(e) => handleChange(e)} className={(errors?.email ? 'error': '')} />
                        <div className="errorMessage">{errors?.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" placeholder="Comments" value={formData.comments} onChange={(e) => handleTextareaChange(e)} className={(errors?.comments ? 'error': '')} style={(errors?.comments ? {border: '1px solid #FF7373'}: {} )} ></textarea>
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