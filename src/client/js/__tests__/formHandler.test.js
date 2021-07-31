import { handleSubmit, ghostFunction } from '../formHandler'

describe('Testing formHandler module', () => {
    it('Is handleSubmit function defined', () => {
        expect(handleSubmit).toBeDefined()
    })

    it('Is ghostFunction undefined', ()=> {
        expect(ghostFunction).not.toBeDefined()
    })
})

