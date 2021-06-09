import { Verifier } from '@pact-foundation/pact'
import path from 'path'
import { app } from './index'
import { fetchList,
    updateSinglePost,
    deleteSinglePost,
    archiveSinglePost,
    fetchPostsByCategorySlug,
    fetchDistinctCategories,
    fetchAllCategories,
    fetchSinglePost
} from './db'

jest.mock('./db', () => {
    return { fetchList: jest.fn(),
        updateSinglePost: jest.fn(),
        deleteSinglePost: jest.fn(),
        archiveSinglePost: jest.fn(),
        fetchPostsByCategorySlug: jest.fn(),
        fetchDistinctCategories: jest.fn(),
        fetchAllCategories: jest.fn(),
        fetchSinglePost: jest.fn()
    }
})

describe('Pact Verification', () => {

    app.listen(7777, '0000',() => console.log('server running for api testing') )

    test('should validate the expectations of our consumer', () => {
        const opts = {
            provider: 'Provider',
            providerBaseUrl: '7777',
           // pactBrokerUrl: process.env.PACT_BROKER_URL,
          //  pactBrokerToken: process.env.PACT_BROKER_TOKEN,
            pactUrls: [path.resolve(process.cwd(), 'src/__tests__/pact/consumer-provider.json')],
            publishVerificationResult: true,
            providerVersion: '1.0.0',
            logLevel: 'DEBUG',
        };

        return new Verifier(opts).verifyProvider();
    });
});