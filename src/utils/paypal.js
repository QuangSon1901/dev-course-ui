import { loadScript } from '@paypal/paypal-js';

export const buttonsOption = {
    fundingSource: FUNDING.PAYPAL,
    createOrder: (data, actions, err) => {
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    description: 'Cool looking table',
                    amount: {
                        currency_code: 'USD',
                        value: 6.0,
                    },
                },
            ],
        });
    },
    onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
    },
    onError: (err) => {
        console.log(err);
    },
};
