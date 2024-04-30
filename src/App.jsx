import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List0 from "./components/list/List0"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"


const App = () => {
  const user = true
  return (
    <div className='container'>
      {
        user ? (
          <>
            <List0 />
            <Chat />
            <Detail />
          </>
        ) : (<Login />
        )
      }
      <Notification />

      {/* <List0 />
      <Chat />
      <Detail /> */}
    </div >
  )
}

export default App