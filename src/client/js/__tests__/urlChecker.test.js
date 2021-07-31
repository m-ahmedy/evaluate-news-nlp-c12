import { isValidUrl } from '../urlChecker'

describe('Testing urlChecker module', () => {
    it('Is isValidUrl defined', () => {
        expect(isValidUrl).toBeDefined()
    })

    it('Is validation logic returns true appropriately', () => {
        const validUrls = [
            'https://en.wikipedia.org/wiki/String_interpolation',
            'https://developers.google.com/web/fundamentals/primers/service-workers'
        ]

        validUrls.forEach(url => {
            expect(isValidUrl(url)).toBeTruthy()
        })
    })

    it('Is validation logic returns false appropriately', () => {
        const invalidUrls = [
            'Mahmoud',
            'webpack@google.com'
        ]

        invalidUrls.forEach(url => {
            expect(isValidUrl(url)).toBeFalsy()
        })
    })
})
