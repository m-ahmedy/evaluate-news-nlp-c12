import { isUri } from 'valid-url'

function isValidUrl(inputText) {
    return isUri(inputText) ? true : false;
}

export { isValidUrl }
