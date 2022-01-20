import React,{useState} from 'react';

function Manager() {
const [tableData, settableData] = useState(
    [{
        "task":"First Task",
        "date":"10/12/2022",
        "user":"ram",
    },
    {
        "task":"Second Task",
        "date":"10/12/2022",
        "user":"Ravi",
    },
    {
        "task":"Third Task",
        "date":"10/12/2022",
        "user":"Tshar",
    }
])
  return <div>
       <div style={{margin:"auto", width:"50%", display:"flex", alignitem:"center", flexDirection:"column"}}>
          <strong style={{margin:"20px 0px", fontSize:"30px", fontWeight:"700"}}>Add a task</strong>
          <input style={{minHeight:"100px"}} type="textarea" placeholder="Wright a task......."></input>
          <input style={{marginTop:"20px"}} type="text" placeholder="User to assign"></input>
          <input style={{marginTop:"20px"}} type="date" placeholder="Date"></input>
          <button onClick={()=>alert("Data added")} style={{background:"pink",curser:"pointer", marginTop:"20px", padding:"10px 10px"}}>Add a task</button>
        </div>
          
      <div style={{margin:"auto", width:"50%", display:"flex", alignitem:"center", flexDirection:"column"}}>
          <strong style={{margin:"20px 0px", fontSize:"30px", fontWeight:"700"}}>List of all task</strong>
      <table>
  <tr>
    <th align='left'>Task</th>
    <th align='left'>Date</th>
    <th align='left'>User</th>
    <th align='left'>Delete</th>
    <th align='left'>User Status</th>
    
  </tr>
  {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}
  {
      tableData.map((ele)=>{
          return(
            <tr>
            <td>{ele.task}</td>
            <td> {ele.date}</td>
            <td>{ele.user}</td>
            <td><button onClick={()=>{alert("Are you sure?  Task is ready to delete")}}>Delete</button></td>
            <td>
                <select>
                    <option value="active">
                        Active
                    </option>
                    <option value="in active">
                        In Active
                    </option>
                </select>
            </td>
          </tr>
          )
      }

      )
  }
  
</table> 
        </div>
  </div>;
}

export default Manager

