import { Verifier } from'@pact-foundation/pact'
import path from 'path'

describe('Pact Verification', () => {
    test('should validate the expectations of our consumer', () => {
        const opts = {
            provider: 'Provider',
            providerBaseUrl: 'http://localhost:8080',
           // pactBrokerUrl: process.env.PACT_BROKER_URL,
          //  pactBrokerToken: process.env.PACT_BROKER_TOKEN,
            pactUrls: [path.resolve(process.cwd(), 'src/__tests__/pact/consumer-provider.json')],
            publishVerificationResult: true,
            providerVersion: '1.0.0',
            logLevel: 'INFO',
        };

        return new Verifier(opts).verifyProvider();
    });
});