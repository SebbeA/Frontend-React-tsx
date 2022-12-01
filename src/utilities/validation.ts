export const textValidation = (elementName: string, value: string, minLength: number = 3) => {
    if (value.length == 0)
        return `${elementName} is required`
    else if (value.length < minLength)
        return `${elementName} must contain atleast ${minLength} chars`
    else
        return ''
}

export const emailValidation = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
        return `please fill in your ${elementName}`
    else if (!regEx.test(value))
        return `Your ${elementName} must be a valid email adress`
    else
        return ''
}