import React,{useState} from 'react';


function User() {
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
          <strong style={{margin:"20px 0px", fontSize:"30px", fontWeight:"700"}}>Your Task</strong>
          <table>
  <tr>
    <th align='left'>Task</th>
    <th align='left'>Date</th>
    
    
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
          </tr>
          )
      }

      )
  }
  
</table>
          </div>
  </div>;
}

export default User;
