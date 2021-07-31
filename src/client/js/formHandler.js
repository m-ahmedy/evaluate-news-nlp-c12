import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()
    console.log({ event })

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(rawResponse => rawResponse.json())
        .then(function (response) {
            document.getElementById('results').innerHTML = response.message
        })
}

export { handleSubmit }
