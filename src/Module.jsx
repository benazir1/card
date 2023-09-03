import React, { useState } from 'react'

import './Module1.css'



function Module(){
  
  const [TodoName, setTodoName] = useState('');
  const [Tododescription, setTododescription] = useState('');
  const [value, setValue] = useState('');
  
  const[allData,setData]=useState([{TodoName:"benazir",Tododescription:"Module3",Value:"incompleted"},
                                   {TodoName:"sanaa",Tododescription:"Module2",Value:"completed"},
                                   {TodoName:"Reema",Tododescription:"Module5",Value:"incompleted"}]);

 
   
 
  const postData=(event)=>{
    event.preventDefault();
   
   if(TodoName&&Tododescription.length!==0){
    
    setData([...allData,{TodoName:TodoName,Tododescription:Tododescription}]);
   
    setTodoName("");
   setTododescription("");
   }
  }
  console.log(allData);

  //delete

  const Deletehandle=(i)=>{
    allData.splice(i,1);
  setData([...allData]);
  }

  const [checked, setChecked] = React.useState(false); 
    function handleChange(e) {
       setChecked(e.target.checked);
    }
  //Edit
  const Edithandle=(i)=>{
        
  console.log(i);
  const record=allData[i];
  console.log(record);
  setTodoName(record.TodoName);
  setTododescription(record.Tododescription);
  allData.splice(i,1);
  setData([...allData]);
  }


   
 
  return (
    <>
    <div>
        <h1 className="head">My Todo</h1>
       
        </div>
        <br></br>
    <div>
      <form  className="create-form" onSubmit={postData} >
       

      <input type="text" placeholder='Todo Name'value={TodoName} onChange={(e)=>setTodoName(e.target.value)} id="t1"></input> 
      
        <input type="text" placeholder='Todo Description' value={Tododescription} onChange={(e)=>setTododescription(e.target.value)} id="t2"></input>
      

        
        <button  type="submit"  className="btn btn-primary">AddTodo</button>
        </form>
        </div><br></br>

        <div className="title"><h4>ToDo</h4></div>
          <div>

          </div>
  <br></br>
  <div className="row">
 { allData.map((val,i)=>
  <div className="card">
    
 <div className="card-body">
   <h5 className="card-title">Name:{val.TodoName}</h5>
  
   <h5 className="card-title">Description:{val.Tododescription}</h5>
  
   <label className="label">
 
<h5>Status</h5>;
<input value = "test" type = "checkbox" onChange = {handleChange} />
<br></br>
        
</label>

<div class="btn1">
  <button className="btn btn-primary" onClick={()=>{Edithandle(i)}}>Edit</button>
  <button className="btn btn-danger" onClick={()=>{Deletehandle(i)}}>Delete</button></div>
  </div>
  </div>
    )}
       
      </div> 
            
    </>
   
  )
  }
export default Module