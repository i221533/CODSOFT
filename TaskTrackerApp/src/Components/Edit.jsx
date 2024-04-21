
import {React,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,useNavigate,useParams}  from 'react-router-dom'
import { updateTask } from '../UserReducer'
const Edit=()=>{
const  {id}=useParams();
const Tasks =useSelector(state=>state.users);
const dispatch=useDispatch();
const prevTask=Tasks.filter(f=>f.id===id);
const [Title,setTitle]=useState(prevTask[0].Title);
const [DueDate,setDueDate]=useState(prevTask[0].DueDate);
const [Priority,setPriority]=useState(prevTask[0].Priorty);
const Status=prevTask[0].Status;
const [DetailNote,setDetailNote]=useState(prevTask[0].DetailNote);
const navigate=useNavigate();
    const handleUpdate=(event)=>{
      dispatch(updateTask({id:id,Title:Title,DueDate:DueDate,Priorty:Priority,Status:Status,DetailNote:DetailNote}))
    navigate("/");
    }
return(
<div>
      <div className="w-[70%] flex mx-auto">
        <div className="w-[500px] mx-auto mt-10 mb-5 bg-white">
          <h1 className="text-center font-bold p-2 text-[25px]">
            Edit Task Here
          </h1>
          <form  onSubmit={handleUpdate}>
            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Title</label>
              <input
                name="Title"
                value={Title}
                onChange={(e)=>setTitle(e.target.value)}
                className="bg-[#E5E7E9] rounded-sm p-2 outline-0 focus:none text-black placeholder-[#CACFD2] font-medium text-[16px]"
                placeholder="Enter Title"
              />
             
            </div>
            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Due Date</label>
              <input
                name="DueDate"
                value={DueDate}
                onChange={(e)=>setDueDate(e.target.value)}
                className="bg-[#E5E7E9] rounded-sm p-2 outline-0 focus:none placeholder-[#CACFD2] text-black font-medium text-[16px]"
                placeholder="Enter Date"
              />
           
            </div>

            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Priorty</label>
              <select
                name="Priority"
                value={Priority}
                onChange={(e)=>setPriority(e.target.value)}
                className="bg-[#E5E7E9] rounded-sm p-2 outline-0 focus:none text-black font-medium text-[18px]"
              >
                <option value="">Select Priority</option>
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              
            </div>

            <div className="flex flex-col gap-1 px-5 py-2">
              <label>Description</label>
              <textarea
                name="DetailNote"
                value={DetailNote}
                onChange={(e)=>setDetailNote(e.target.value)}
                placeholder="Enter Detail Description"
                className="bg-[#E5E7E9] placeholder-[#CACFD2] rounded-sm p-2 outline-0 focus:none text-black font-medium text-[18px]"
              />
              
            
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
}


export default Edit;