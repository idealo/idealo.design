import { Verifier } from '@pact-foundation/pact'
import path from 'path'
import { app } from './server'
import {
    fetchMap,
    fetchTags,
    fetchComponents,
    fetchSingleComponent
} from './db'
import '@testing-library/jest-dom/extend-expect';
import {mockupComponent, mockupTags, mockupMap, mockupSingleComponent} from '../ui/pages/LibraryPage/component-consumer-contract.spec'

jest.mock('./db', () => {
    return {
        fetchMap: jest.fn(),
        fetchTags: jest.fn(),
        fetchComponents: jest.fn(),
        fetchSingleComponent: jest.fn()
    }
})

describe('Pact Verification', () => {

    const server = app.listen(7777, '0000',() => console.log('server running for api testing') )

    test('should validate the expectations of our consumer', () => {
        fetchMap.mockReturnValue([mockupMap])
        fetchTags.mockReturnValue([mockupTags])
        fetchComponents.mockReturnValue([mockupComponent])
        fetchSingleComponent.mockReturnValue(mockupSingleComponent)

        const opts = {
            provider: 'ComponentProvider',
            providerBaseUrl: 'http://localhost:7777',
            pactUrls: [path.resolve(process.cwd(), 'src/__tests__/pact/componentconsumer-componentprovider.json')],
            publishVerificationResult: true,
            providerVersion: '1.0.0',
            logLevel: 'INFO',
        }

        return new Verifier(opts).verifyProvider().then(output => {
            server.close()
            console.log('pact verification complete !')
            console.log(output)
        }).catch(error => {
            server.close()
            fail(error)
        })
    })
})