import TaskCard from "../component/TaskCard";
import {Task, tasks} from "../data/init-data";
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {alignProperty} from "@mui/material/styles/cssUtils";
import TaskList from "../component/TaskList";

const Tasks = () => {
    const [taskList, setTaskList] = useState<Array<Task>>(tasks);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const baseUrl = import.meta.env.BASE_URL;

        const result = await (fetch(baseUrl));
        const data = await result.json() as Array<Task>;
        const transfered: Task[] = data.map(t => {
            const { creationDate, updateDate, ...rest} = t;
            return {
                creationDate: new Date(creationDate),
                updateDate: new Date(updateDate),
                ...rest
            } as Task
        });
    };


    return <TaskList tasks={taskList}></TaskList>
}

export default Tasks;