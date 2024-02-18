import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchUserById } from './redux/reducer/listpost'
import { useDispatch } from 'react-redux'
import { io } from "socket.io-client";
// const socket = io("ws://example.com/my-namespace", {
//   reconnectionDelayMax: 10000,
//   auth: {
//     token: "123"
//   },
//   query: {
//     "my-key": "my-value"
//   }
// });
const socket = io("http://localhost:8080/", {
  transports: ["websocket"]
});
function App() {
  console.log(socket,"io")
  const [count, setCount] = useState(0)
  const dispatch=useDispatch()
   useEffect(() => {
     dispatch(fetchUserById(1))
   }, [])
   useEffect(() => {
     socket.on('chat_message_event',(e)=>{
      console.log(e,"HITESH")
     })
   }, [])
   
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <button onClick={()=>{
          socket.emit('chat_message_event',count)
        }}>CLICK</button>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
