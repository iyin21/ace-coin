import { useState } from "react"
import "./App.css"
import PayModal from "./components/PayModal"
import Button from "./components/Button"

function App() {
    const [openModal, setOpenModal] = useState(true)
    return (
        <div className="bg-blue-40 h-screen">
            <PayModal opened={openModal} setOpened={setOpenModal} />
            <div className="flex justify-center pt-20">
              <Button onClick={()=>setOpenModal(true)}>Open Modal</Button>
            </div>
           
        </div>
    )
}

export default App
