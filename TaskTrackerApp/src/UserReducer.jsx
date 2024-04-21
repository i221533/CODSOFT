import { createSlice } from '@reduxjs/toolkit';
import { TasksList } from './data';

const TaskSlice = createSlice({
  name: "users",
  initialState: TasksList,
  reducers: {
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const taskToUpdate = state.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.Status = status;
      }
    },
    updateTask: (state, action) => {
      const { id,Title,DueDate,Priorty,Status,DetailNote } = action.payload; // Destructure directly here
      const taskToUpdate = state.find(user => user.id === id);
      if (taskToUpdate) {
        taskToUpdate.Title = Title;
        taskToUpdate.Priorty = Priorty;
        taskToUpdate.DueDate =DueDate;
        taskToUpdate.DetailNote=DetailNote;
        taskToUpdate.Status=Status;
      }
  },
    addTask2:(state,action)=>{
        state.push(action.payload);
    },
    deleteTask:(state,action)=>{
  const {id}=action.payload;
  const TaskExist = state.find(user => user.id == id);
  if(TaskExist)
  {
      return state.filter(f=>f.id !==id);
  }
    }
  }
});

export const { updateStatus,addTask2,deleteTask,  updateTask } = TaskSlice.actions;
export default TaskSlice.reducer;
