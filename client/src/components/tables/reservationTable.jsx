import React from "react";
import {useGetReservationQuery , useDeleteReservationMutation} from "../../store/api/reservationQuery";
import toast from "react-hot-toast";




const ReservationTable = () => {
    const { data: reservations, error, isLoading, isError , refetch } = useGetReservationQuery();
    const [deleteReservation] = useDeleteReservationMutation();




    const handleDeleteReservation = async (id) => {
        try {
          const response = await deleteReservation(id);
          console.log("response",response)
            if (response.data) {
                refetch();
                toast.success("Reservation deleted successfully");
                } else {
                toast.error("Error deleting reservation");
                }

          
        } catch (error) {
          console.error(error);
        }
      }


    
    return (
      
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      City
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Check In
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Check Out
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                        </th>
                    <th scope="col" className="px-6 py-3 bg-gray-200"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                  { reservations ? 
                      reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                             className="inline-block size-[80px] rounded"
                              src={reservation.apartment.images[0]}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {reservation.apartment.name}
                            </div>
                           
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservation.apartment.city}
                        </div>
                        <div className="text-sm text-gray-500">
                          {reservation.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservation.checkIn}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservation.checkOut}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            reservation.status === "Reserved"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {reservation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                        type="button"
                        onClick={()=>handleDeleteReservation(reservation._id)}
                        className="inline-flex items-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )
                  
                  ) : 
                  <tr>
                  <td colSpan="6" className="text-center py-4 dark:text-gray-700">No Reservation found...</td>
                </tr>                  
                  }
                  {/* <!-- More items... --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ReservationTable;