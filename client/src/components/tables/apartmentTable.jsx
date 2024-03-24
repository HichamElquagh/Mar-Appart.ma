import { useState , useEffect } from "react";
import ApartmentModal from "../modals/ApartmentModal";
import DashCard from "../dash/DashCard";
import { useGetApartmentsQuery , useDeleteApartmentMutation } from "../../store/api/apartmentQuery";
import { RiDeleteBinLine } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';
import { Box } from "@mui/material";




export default function ApartmentsTable () {
  const [showModal, setShowModal] = useState(false);
  const [showModalForUpdate, setShowModalForUpdate] = useState(false);
  const [apartmentToUpdate, setApartmentToUpdate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Adjust this value according to your needs

  const handleUpdate = (apartment) => {
    setShowModalForUpdate(true);
    setApartmentToUpdate(apartment);
    setShowModal(true);
  }

  console.log("hhhhhhh",showModalForUpdate)

  const { data: apartments, error, isLoading, refetch } = useGetApartmentsQuery();
  
  useEffect(() => { 
    refetch();
  }, [showModal, showModalForUpdate]);

  const [deleteApartment] = useDeleteApartmentMutation();



const handleDelete = async (id) => {
   
    const result = await deleteApartment(id);
    if (result.data) {
      toast.success('Apartment deleted successfully');
      refetch();
    } else {
      toast.error('Apartment not deleted');
    }
  
}

  if(apartments === undefined) {
    return <Box>Loading...</Box>
  }
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apartments.slice(indexOfFirstItem, indexOfLastItem);
 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  
  return (  
    <>
  
      <DashCard/>
        {/* // <!-- Table Section --> */}
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
                        APARTMENT
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Add apartment, edit and more.
                      </p>
                    </div>
        
                    <div>
                      <div className="inline-flex gap-x-2">
                      <div classNameName=" rounded-lg mb-3 me-3 pt-6">
                        <div className='flex justify-end mt-5'>
                          <button onClick={() => {setShowModal(true)
                            setShowModalForUpdate(false);}} className="block text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 " type="button">
                          + Add New Apartment
                          </button>
                        </div>
                        </div>    
                      <ApartmentModal showModal={showModal} setShowModal={setShowModal} apartmentToUpdate={apartmentToUpdate } showModalForUpdate={showModalForUpdate} setShowModalForUpdate={setApartmentToUpdate}/>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Header --> */}
        
                  {/* <!-- Table --> */}
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                      <tr>
                        <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> Name </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              City
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Address
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Price
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Description
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Number of Persons
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Space
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Characteristics
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Owner
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Details
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                      {apartments && currentItems.map((apartment) => (
                      <tr key={apartment._id}>
                        <td className=" ps-5 size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <img className="inline-block size-[70px] rounded" src={apartment.images[0]} alt="Apartment Image"/>
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.name}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.city}</span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.address}</span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.price}</span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="text-xs px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {apartment.description}
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.numberOfPersons}</span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.space}</span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <ul className="list-disc list-inside text-sm font-semibold text-gray-800 dark:text-gray-200">
                              {apartment.characteristics.map((characteristic, index) => (
                                <li key={index}>{characteristic}</li>
                              ))}
                            </ul>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">

                          <div className=" py-3">
                            <img src={apartment.owner.image} className="inline-block size-[30px] rounded-full" alt="" />
                            <span className=" ms-3 inline-block text-sm font-semibold text-gray-800 dark:text-gray-200">{apartment.owner.username}</span>
                          </div>
                          <span className="inline-block   text-x font-semibold text-gray-800 dark:text-gray-200 ">                          &#9990; 
 : {apartment.owner.phone}</span>
                        </td>

                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <button
                            onClick={() => handleUpdate(apartment)}
                            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              Edit
                            </button>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <button
                            onClick={() => handleDelete(apartment._id)}
                            className="inline-flex items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <RiDeleteBinLine />
                            </button>
                          </div>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* <!-- End Table --> */}
        
                   {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{apartments.length}</span> results
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Prev
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastItem >= apartments.length}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Table Section -->    ) */}
        </>
    )
}