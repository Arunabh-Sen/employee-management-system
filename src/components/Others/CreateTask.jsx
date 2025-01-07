import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const handleTaskCreation = (newTask) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === targetEmployeeId) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
        };
      }
      return employee;
    });
  
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    console.log('Task created and saved:', updatedEmployees);
  };  

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active:false, newTask:true, failed:false, completed:false})
    const data = userData
    
    data.forEach(function(elem) {
      if(assignTo == elem.firstname) {
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
      }
    })

    setUserData(data)
    console.log(data)
    
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded-xl">
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="flex w-full flex-wrap items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Design, Dev, etc."
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-600 py-3 text-sm font-semibold hover:bg-emerald-700 px-5 rounded mt-5  w-full">
              CREATE TASK
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask