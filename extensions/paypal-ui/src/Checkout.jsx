import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useAvailablePaymentOptions,
  useSelectedPaymentOptions,
} from '@shopify/ui-extensions-react/checkout';
import React, { useEffect } from 'react';
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const availPay = useAvailablePaymentOptions();
  const selPay = useSelectedPaymentOptions();
  console.log(availPay);
  console.log(selPay);
  // const useCheckoutSettings = useCheckout()
  // console.log(useCheckoutSettings);
  

  return (
    <Banner title="Paypal Ui">
      {translate('welcome', { target: extension.target })}
    </Banner>
  );
}