import { loadScript } from '@paypal/paypal-js';

const Paypal = async () => {
    let paypal;

    try {
        paypal = await loadScript({ 'client-id': 'test' });
    } catch (error) {
        console.error('failed to load the PayPal JS SDK script', error);
    }

    if (paypal) {
        try {
            await paypal.Buttons().render('#your-container-element');
        } catch (error) {
            console.error('failed to render the PayPal Buttons', error);
        }
    }
    return <div></div>;
};

export default Paypal;
