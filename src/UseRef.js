import React,{useRef} from 'react'

const UseRef = () => {
    const countRef = useRef(0)
    const handle= () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`)
    }
    console.log("I rendered")
  return (
    <div>
        <button onClick = {handle}>Click me</button>
    </div>
  )
}

export default UseRef