import { Elements } from '@stripe/react-stripe-js';
import { CREATE_ORDER } from '../utils/constants';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import CheckoutForm from '@/components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [cookies] = useCookies();
    const router = useRouter();
    const { gigId } = router.query;
    const stripePromise = loadStripe("pk_test_51PrGyJCLOFghKtLWPg80rWLVfk4COYSYnJlRDvyFJtap5UZ0pgAU449sW3FbbbsmBFWY998szvoHLkPuQYzJMntq00tfly6hth");

    useEffect(() => {
        const createOrder = async () => {
            try {
                const { data } = await axios.post(CREATE_ORDER, { gigId }, {
                    headers: {
                        Authorization: `Bearer ${cookies.jwt}`,
                    }
                });
                setClientSecret(data.clientSecret);
            }
            catch (err) {
                console.log(err);
            }
        }
        if (gigId) {
            createOrder();
        }
    }, [gigId]);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div className="min-h-[80vh] max-w-full mx-20 flex flex-col gap-10 items-center">
            <h1 className="text-3xl">
                Please complete the payment to place the order.
            </h1>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default checkout;
