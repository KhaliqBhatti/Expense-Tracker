import React, { useState } from "react";
import Expanse from "./ExpanseData";
import Income from "./IncomeData";
import {
  useCreateExpenseMutation,
  useCreateIncomeMutation,
  useGetExpenseQuery,
  useGetIncomeQuery,
} from "./Slices/ApiSlice";
// import axios from "axios";
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
};
// ... (Your imports and other code)

export default function Main() {
  const [inputValue, setInputValue] = useState({
    type: "Expenses",
    ammount: "",
    category: "Expenses",
    description: "",
    date: getCurrentDate(),
  });

  const [createIncome] = useCreateIncomeMutation();
  const [createExpense] = useCreateExpenseMutation();

  const { data: IncomeData } = useGetIncomeQuery();

  const { data: ExpenseData } = useGetExpenseQuery();

  const totalIncome = IncomeData?.reduce(
    (fullBalance, ele) => fullBalance + +ele.ammount,
    0
  );

  const totalExpense = ExpenseData?.reduce(
    (fullBalance, ele) => fullBalance + +ele.ammount,
    0
  );

  const currentBalance = totalIncome - totalExpense;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.type === "Expenses") {
      createExpense(inputValue);
    } else if (inputValue.type === "Income") {
      createIncome(inputValue);
    }
  };

  return (
    <div className="lg:flex gap-y-5 items-center lg:gap-1 xl:gap-x-2  justify-between    py-5 px-2 min-h-screen  w-[100vw] ">
      <div>
        <Expanse />
      </div>

      <div className="bg-[#ffffffeb]  p-7 mt-3 mb-3 lg:mt-0 lg:mb-0  rounded-lg shadow-lg glassmorphic-container backdrop-blur-xl backdrop-filter bg-opacity-10  lg:w-[33vw]">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          Expense Tracker
        </h1>
        <h1 className="text-xl font-bold text-purple-700 mb-6">
          Balance: {currentBalance !== 0 ? currentBalance : "0000"}
        </h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="flex justify-between  lg:gap-4 items-center">
            <label className="block text-sm text-gray-600 mb-2">Type:</label>
            <select
              className="glassmorphic-input px-2 py-1 mb-2 "
              name="type"
              id="type"
              value={inputValue.type}
              onChange={inputChange}
            >
              <option value="Expenses">Expenses</option>
              <option value="Income">Income</option>
            </select>
            {inputValue.type === "Income" && (
              <>
                <label className="block text-sm text-gray-600 mb-2">
                  Category:
                </label>
                <select
                  className="glassmorphic-input px-2 py-1 mb-2 "
                  name="category"
                  value={inputValue.category}
                  onChange={inputChange}
                >
                  <option value="Business">Business</option>
                  <option value="Extra income">Extra income</option>
                  <option value="Deposits">Deposits</option>
                  <option value="Lottery">Lottery</option>
                  <option value="Gifts">Gifts</option>
                  <option value="Salary">Salary</option>
                  <option value="Savings">Savings</option>
                  <option value="Rental income">Rental income</option>
                </select>
              </>
            )}

            {inputValue.type === "Expenses" && (
              <>
                <label className="block text-sm text-gray-600 mb-2">
                  Category:
                </label>
                <select
                  className="glassmorphic-input px-2 py-1 mb-2 w-[10vw] lg:w-[7vw] "
                  name="category"
                  value={inputValue.category}
                  onChange={inputChange}
                >
                  <option value="Bills">Bills</option>
                  <option value="Cars">Cars</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Shopping">Shopping</option>
                  <option value="House">House</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Phone">Phone</option>
                  <option value="Pets">Pets</option>
                  <option value="Others">Others</option>
                </select>
              </>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 ">Amount:</label>
            <input
              type="number"
              name="ammount"
              placeholder="Enter amount..."
              className="glassmorphic-input px-2 py-1 w-full mb-2"
              value={inputValue.ammount}
              onChange={inputChange}
            />
            <label className="block text-sm text-gray-600 ">date:</label>

            <input
              type="date"
              placeholder="Enter date..."
              name="date"
              className="glassmorphic-input px-2 py-1 w-full"
              value={inputValue.date}
              onChange={inputChange}
            />
          </div>
        </form>

        <div className="flex justify-end">
          <button
            className="glassmorphic-button  bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Add Expense
          </button>
        </div>
      </div>
      <div>
        <Income />
      </div>
    </div>
  );
}
