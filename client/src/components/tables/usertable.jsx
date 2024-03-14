import React from "react";
import DashCard from "../myn/DashCard";
import {useGetUsersQuery , useDeleteUserMutation} from "../../store/api/userQuery";
import toast from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";

const UserTable = () => {

    const { data, error, isLoading, refetch } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        refetch();
        toast.success('User deleted successfully');
    }

    
    
    return (
        <>
        <DashCard />
        
        {/* <!-- Table Section --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Card --> */}
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
          {/* <!-- Header --> */}
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Users
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Add users, edit and more.
              </p>
            </div>

            
          </div>
          {/* <!-- End Header --> */}

          {/* <!-- Table --> */}
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>


                <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                  <div className=" ps-6 flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Name
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Role
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Phone
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Portfolio
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Created
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-end"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              { data ? (
                data?.map((user) => (
              
              <tr>
             
                <td className="ps-6 size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                    <div className="flex items-center gap-x-3">
                    <img
                        className="inline-block size-[38px] rounded-full cursor-pointer"
                        src={user.image}
                        alt="Image Description"
                        onClick={() => openModal(user.image)}
                      />                      <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{user.username}</span>
                        <span className="block text-sm text-gray-500">{user.email}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-72 whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{user.role}</span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                      {/* <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg> */}
                      {user.phone}
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <span className="text-xs text-gray-500">1/5</span>
                      <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-500">28 Dec, 12:12</span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5">
                    <button
                      className="
                        inline-flex items-center justify-center
                        rounded-lg
                        bg-red-50 text-red-500
                        hover:bg-red-100
                        dark:bg-red-500/10 dark:text-red-500
                        dark:hover:bg-red-600/10
                        focus:outline-none
                        focus:ring-1 focus:ring-red-500
                        active:bg-red-200
                        dark:active:bg-red-600/20
                      "

                    onClick={() => handleDeleteUser(user._id)}
                    >
                    <RiDeleteBinLine />
                    </button>
                  </div>
                </td>
              </tr>

                )
              )) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 dark:text-red-600">Loading...</td>

                </tr>
                
                )}
            </tbody>
          </table>
          {/* <!-- End Table --> */}

          {/* <!-- Footer --> */}
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-800 dark:text-gray-200">6</span> results
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Prev
                </button>

                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Next
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End Footer --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Card --> */}
</div>
{/* <!-- End Table Section --> */}
        </>

    );
    }

    export default UserTable;