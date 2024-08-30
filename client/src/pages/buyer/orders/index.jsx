import { useStateProvider } from '@/context/StateContext';
import { GET_BUYER_ORDERS_ROUTE } from '@/utils/constants';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const index = () => {
    const [cookies] = useCookies();

    const [orders, setOrders] = useState();
    const [{ userInfo }] = useStateProvider();

    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await axios.get(GET_BUYER_ORDERS_ROUTE, {
                    headers: {
                        Authorization: `Bearer ${cookies.jwt}`,
                    }
                });
                console.log("data: ", data);
                setOrders(data.orders);
            }
            catch (err) {
                console.log("error at buyers/orders/index.jsx", err);
            }
        };
        if (userInfo) {
            getOrders();
        }
    }, [userInfo]);
    return (
        <div className="min-h-[80vh] my-10 mt-0 px-32">
            <h3 className="m-5 text-2xl font-semibold">All your orders</h3>
            {orders?.length > 0 ? (<div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#1f2937]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delivery Time (Days)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Order Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Send Message
                            </th>
                        </tr>
                    </thead>
                    <tbody className="hover:bg-gray-50 dark:hover:bg-gray-600">
                        {orders?.map((order) => {
                            return (
                                <tr
                                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    key={order?.id}
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {order.id}
                                    </th>
                                    <td className="px-6 py-4">{order.gig.title}</td>
                                    <td className="px-6 py-4">{order.gig.category}</td>
                                    <td className="px-6 py-4">{order.gig.price}</td>
                                    <td className="px-6 py-4">{order.gig.deliveryTime} days</td>
                                    <td className="px-6 py-4">{order.createdAt.split("T")[0]}</td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={`/buyer/orders/messages/${order.id}`}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Send
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>) : (<p className='m-5'>No haven't ordered anything yet</p>)}
        </div>
    )
}

export default index
