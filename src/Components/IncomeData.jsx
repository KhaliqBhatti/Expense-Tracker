import React from "react";
import { useDelIncomeMutation, useGetIncomeQuery } from "./Slices/ApiSlice";

export default function Income() {
  const { data } = useGetIncomeQuery();
  const [DelIncome] = useDelIncomeMutation();
//   console.log(DelIncome, "delData");
  const handleDelete = (id) => {
    DelIncome(id);
  };

  return (
    <div className="flex flex-col items-center py-3   from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br rounded-md lg:w-[33vw]">
      <h1 className="text-xl font-semibold mb-4 ">Income</h1>
      <div className="flex items-center justify-center w-full">
        <div
          className={`overflow-y-auto relative shadow-md sm:rounded-lg w-full `}
        >
          <div className="overflow-y-auto relative shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-full ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="flex justify-between">
                  <th scope="col" className="py-3 px-1">
                    Categ
                  </th>
                  <th scope="col" className="py-3 px-1">
                    Source
                  </th>
                 
                  <th scope="col" className="py-3 px-1">
                    Amount
                  </th>
                  <th scope="col" className="py-3 px-1">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-1">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="w-full ">
                {data?.map((ele) => (
                  <tr
                    key={ele.id}
                    className="flex justify-between w-[100%] py-1  text-black px-1"
                  >
                    <td>{ele.type ? ele.type : 'No Select'}</td>
                    <td>{ele.category ? ele.category : 'No Select'}</td>
                    <td>{ele.description ? ele.description : 'No Select'}</td>
                    <td className="text-[#5dfc07f5]">${ele.ammount ? ele.ammount : 'No Select'}</td>
                    <td>{ele.date ? ele.date :'no Select'}</td>
                    <td>
                      <button
                        className="bg-red-500 px-2 py-1 rounded-sm text-white"
                        onClick={() => handleDelete(ele.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
