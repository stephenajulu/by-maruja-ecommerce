import { configure, MercadoPagoPaymentRequest, preferences } from 'mercadopago';
import { tryCatch } from 'fp-ts/lib/TaskEither';
import { toError } from 'fp-ts/lib/Either';

export function configureMercadoPagoSDK() {
  configure({
    sandbox: process.env.useMercadoPagoSandbox === 'true',
    access_token: process.env.mercadoPagoAccessToken,
  });
}

export const createPreference = (data: MercadoPagoPaymentRequest) => tryCatch(() => preferences.create(data), toError);
