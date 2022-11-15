import "./ExpenseForm.css";
import { useState } from "react";
import { RoundedButton } from "../../../../components/button"


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredDate);
    if (enteredTitle && enteredAmount && enteredDate) {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

 

      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };


  const submitNewExpense = () => {
    console.log(enteredDate);
    if (enteredTitle && enteredAmount && enteredDate) {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

 

      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  }
  const date1 = new Date().toISOString().split('T')[0];
  localStorage.setItem('date', date1)

  const date = localStorage.getItem('date');
  const newDate = new Date(date);
  console.log(newDate.getFullYear());

  return (
    <div>
      <div className="form" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <div className="modal-details">Title</div>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <div className="modal-details">Amount</div>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <div className="modal-details">Date</div>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        {/* <div className="new-expense__actions"> */}
          {/* <button type="button" onClick={props.onCancel}>
            Cancel
          </button> */}
        
          {/* <button type="submit">Add Expense</button> */}
        {/* </div> */}
        <div className="flex-row" style={{alignItems:"center", justifyContent:"space-evenly"}}>
          <RoundedButton buttonClick={props.onCancel} displayText="Cancel"/>
          <RoundedButton buttonClick={submitNewExpense} displayText="Add Expense"/>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;