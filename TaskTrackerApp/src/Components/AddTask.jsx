import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask2 } from "../UserReducer";
const AddTask = () => {
  const [taskData, setTaskData] = useState({
    Title: "",
  
    DueDate: "",
    Priority: "",
    DetailNote: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form fields
    const newErrors = {};
    if (!taskData.Title.trim()) {
      newErrors.Title = "!Title is required";
    }
    if (!taskData.DueDate.trim()) {
      newErrors.DueDate = "!Due Date is required";
    }
    if (!taskData.Priority) {
      newErrors.Priority = "!Priority is required";
    }
    if (!taskData.DetailNote.trim()) {
      newErrors.DetailNote = "!Description is required";
    }

    // If there are errors, set the state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log("Submitted Data: ", taskData);
    const id = uuidv4();
    const Status="Uncompleted"; // Generate random ID
    dispatch(
      addTask2({
        id,
        Title: taskData.Title,
        DueDate: taskData.DueDate,
        Priorty: taskData.Priority,
         Status,
        DetailNote: taskData.DetailNote,
      })
    );
    navigate("/");

    setTaskData({
      Title: "",
      DueDate: "",
      Priorty: "",
      DetailNote: "",
    });
  };

  return (
    <div>
      <div className="w-[70%] flex mx-auto">
        <div className="w-[500px] mx-auto mt-10 mb-5 bg-white">
          <h1 className="text-center font-bold p-2 text-[25px]">
            Add New Task
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Title</label>
              <input
                name="Title"
                value={taskData.Title}
                onChange={handleInputChange}
                className="bg-[#E5E7E9] rounded-sm p-2 outline-0 focus:none text-black placeholder-[#CACFD2] font-medium text-[16px]"
                placeholder="Enter Title"
              />
              {errors.Title && (
                <span className="text-red-500">{errors.Title}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Due Date</label>
              <input
                name="DueDate"
                value={taskData.DueDate}
                onChange={handleInputChange}
                className="bg-[#E5E7E9] rounded-sm p-2 outline-0 focus:none placeholder-[#CACFD2] text-black font-medium text-[16px]"
                placeholder="Enter Date"
              />
              {errors.Duedate && (
                <span className="text-red-500">{errors.DueDate}</span>
              )}
            </div>

            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Priorty</label>
              <select
                name="Priority"
                value={taskData.Priority}
                onChange={handleInputChange}
                className="bg-[#E5E7E9] rounded-sm p-2 outline-0 focus:none text-black font-medium text-[18px]"
              >
                <option value="">Select Priority</option>
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              {errors.Priority && (
                <span className="text-red-500">{errors.Priority}</span>
              )}
            </div>

            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Description</label>
              <textarea
                name="DetailNote"
                value={taskData.DetailNote}
                onChange={handleInputChange}
                placeholder="Enter Detail Description"
                className="bg-[#E5E7E9] placeholder-[#CACFD2] rounded-sm p-2 outline-0 focus:none text-black font-medium text-[18px]"
              />
              {errors.DetailNote && (
                <span className="text-red-500">{errors.DetailNote}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 px-5 py-2">
              <button
                type="submit"
                className="bg-blue-600 transition-all duration-300 hover:bg-blue-400 px-4 py-2 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
