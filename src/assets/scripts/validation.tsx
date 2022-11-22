// * Validation for contact form, copy from Hans

export const submitData = async (url: RequestInfo | URL, method: string, data: string, contentType = 'application/json') => {
    // * Function for validate thru api
    const res = await fetch(url, {
        method: method,
        headers: {
            'content-Type': contentType
        },
        body: data
    })

    if (res.status === 200) {
        return true
    }

    return false
}
// * Function for validate submit button
export const validate = (e: any, form: any) => {
    if (e.type === 'submit') {
     const errors: any = {}
     errors.name = validate_name(form.name)
     errors.email = validate_email(form.email)
     errors.comments = validate_comments(form.comments)
     return errors
 
    } else {
         const {id, value} = e.target
         switch(id) {
             case 'name':
                 return validate_name(value)
             case 'email':
                 return validate_email(value)
             case 'comments':
                 return validate_comments(value)
         }
    }
 }
//  * Function for validate the name
 const validate_name = (value: string | any) => {
     if (!value)
         return 'A name is required'
     else if (value.length < 2)
         return 'Must be a valid name'
     else
         return null
 }
//  * Function for validate the email with regex
 const validate_email = (value: any) => {
     const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     
     if (!value)
         return 'An email address is required'
     else if (!regex_email.test(value))
         return 'Must be a valid email address'
     else
         return null
 }
//  * Function for validate comments
 const validate_comments = (value: number | any) => {
     if (!value)
         return 'A comment is required'
     else if (value.length < 5)
         return 'Your comment must be at least 5 characters long'
     else
         return null
 }