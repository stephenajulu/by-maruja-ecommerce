import { configure, preferences } from 'mercadopago';
import { mocked } from 'ts-jest/utils';
import { configureMercadoPagoSDK, createPreference } from '../../src/lamda-services/mercadopago.service';
import { mock as paymentDataMock } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { mock as paymentDataResponseMock } from '../../__mocks__/mercado-pago-create-payment-response.mock';

jest.mock('mercadopago');

test('configureMercadoPagoSDK should configure mercado pago with the correct configuration', () => {
  const mockedInstance = mocked(configure);

  configureMercadoPagoSDK();

  expect(mockedInstance).toBeCalledTimes(1);
  expect(mockedInstance).toBeCalledWith({
    sandbox: true,
    access_token: process.env.mercadoPagoAccessToken,
  });
});

test('createPreference should create preference on mercado pago sdk with proper data', async () => {
  const mockedInstance = mocked(preferences.create);
  mockedInstance.mockResolvedValue(paymentDataResponseMock);

  await createPreference(paymentDataMock)();

  expect(mockedInstance).toBeCalledTimes(1);
  expect(mockedInstance).toBeCalledWith(paymentDataMock);
});
