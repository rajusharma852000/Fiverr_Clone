import { DELETE_GIG_ROUTE, GET_USER_GIGS_ROUTE } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import { FaDeleteLeft } from "react-icons/fa6";
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const [cookies] = useCookies();
  const [gigs, setGigs] = useState([]);
  const [reRender, setReRender] = useState(0);
  useEffect(() => {
    const getUserGigs = async () => {
      try {
        const { data } = await axios.get(GET_USER_GIGS_ROUTE, {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          }
        });
        setGigs(data.gigs);
      }
      catch (err) {
        console.log(err);
      }
    };
    getUserGigs();
  }, [reRender]);

  const deleteGig = async (gigId) => {
    try {
      if (gigId) {
        const response = await axios.delete(`${DELETE_GIG_ROUTE}/${gigId}`, {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        });

        if (response.status === 200) {
          toast.success("Gig Deleted  Successfully");
          router.push("/seller/gigs")
          setReRender((reRender + 1) %  2);
        }
      }
    }
    catch (err) {
      toast.error("Can't Delete Gig")
      console.log("error in seller/gigs/index.jsx: ", err);
    }
  }
  return (
    <div className="min-h-[80vh] my-10 mt-0 px-32">
      <h3 className="m-5 text-2xl font-semibold">All your Gigs</h3>
      {gigs?.length > 0 ? (<div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#1f2937]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                Delivery Time
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="hover:bg-gray-50 dark:hover:bg-gray-600">
            {gigs?.map(({ title, category, price, deliveryTime, id }) => {
              return (
                <tr
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">{category}</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4">{deliveryTime}</td>
                  <td className="px-6 py-4S">
                    <Link
                      href={`/seller/gigs/${id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4 "><FaDeleteLeft onClick={() => deleteGig(id)} className='text-2xl cursor-pointer' /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>) : (<>
        <span className='m-5'>
          You haven't created any Gig yet
          <p onClick={() => router.push("/seller/gigs/create")} className='ml-5 text-blue-600 underline cursor-pointer' >Create Gig</p>
        </span>

      </>)}
    </div>
  );
}

export default index
