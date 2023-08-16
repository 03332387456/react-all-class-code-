import './App.css';
import {useState} from 'react'

function App() {


  
  const[text , SetText ] = useState("")
  const[list , setList ] = useState([])

  let add = () => {
    list.push(text)
    setList([...list])
  }





  // // const [count , Setcount ] = useState(0)
  // // const [text , SetText ] = useState("")


  // let updatdeCount = () =>{
  //   Setcount = (10)
  // }

  // let arr = [
  //   {id : 1,
  //     name : "ahsan",
    
  //     id : 9,
  //   },
  //   {id : 1,
  //     name : "b",
  //   },
  //   {id : 2,
  //     name : "c",
  //   },
  //   {id : 3,
  //     name : "d",
  //   },
  // ]

  // let a = 10
  // let pass = "kzxlhvfdhs"

  return (
    <div className="App">


{/* {
    arr.map((x,i) => {
      return(
        <div >
          <p>{x.name}</p>
          <p>{x.id}</p>
        </div>
      )
    })
  }

<p>the square root of {a} is {a*a}</p> 
<p>this is a password{"*".repeat(pass.length)}</p> */}


{/* <p>{count}</p>
<button onClick = {updatdeCount}>updatdeCount</button> */}



<input 
onChange={(e) => {
  SetText(e.target.value)
}} />
<button onClick={add}>Add Text in List</button>
{list.map((x,i) => {
  <p key={i}>{x}</p>
})
}




    </div>
  );
}

export default App;
