import {useState} from 'react'
import TaskCard from "./component/TaskCard";
import Tasks from "./page/Tasks";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Tasks></Tasks>
        </div>
    )
}

export default App
