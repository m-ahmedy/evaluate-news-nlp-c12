import { isValidUrl } from './urlChecker'

function handleSubmit(event) {
    // Default Behaviour
    event.preventDefault()
    console.log('Submitted!', { event })

    // Get the form input
    const form = event.target
    const urlInputField = form['url']
    const textValue = urlInputField.value

    // Check if the url is indeed a valid url
    const urlValidity = isValidUrl(textValue)

    if (urlValidity) {
        fetch('http://localhost:8081/check-article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: textValue })
        })
            .then(rawResponse => rawResponse.json())
            .then(response => {
                console.log('Received Response', { response })
                const { subjectivity, score_tag, confidence, agreement, irony } = response
                console.log({ subjectivity, score_tag, confidence, agreement, irony })

                const resultsDiv = document.getElementById('results')

                resultsDiv.innerHTML = ''

                const resultsList = document.createElement('ul')
                resultsList.innerHTML = `
                <li>Subjectivity: ${subjectivity}</li>
                <li>Score Tag: ${score_tag}</li>
                <li>Confidence: ${confidence}</li>
                <li>Agreement: ${agreement}</li>
                <li>Irony: ${irony}</li>
                `

                resultsDiv.appendChild(resultsList)
            })
    } else {
        // If the url is invalid, Show an alert
        alert('Please enter a valid URL')
    }
}

export { handleSubmit }
