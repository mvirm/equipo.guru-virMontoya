const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validation = (input) => {
    let error = ''

    if(!input)  {error = 'You must enter a e-mail'}
    else if(!emailRegex.test(input)) {error = 'You must enter a validate e-mail'}

    return error
}

export default validation;