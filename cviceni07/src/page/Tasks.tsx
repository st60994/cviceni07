import TaskCard from "../component/TaskCard";
import {Task, tasks} from "../data/init-data";
import {useState} from "react";
import {Grid} from "@mui/material";
import {alignProperty} from "@mui/material/styles/cssUtils";

const Tasks = () => {

    const [taskList, setTaskList] = useState<Array<Task>>(tasks);

    const taskDoneHandle = (task: Task) => {
        console.log("Changing state of reactive variable")


        setTaskList([...taskList]);
    }

    return <div>
        <h1>Active tasks</h1>
        <Grid container spacing={0} direction="column" alignItems="center" justifySelf="center">
            {taskList.filter(t => !t.done)
                .map(t =>
                    <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
                )}
        </Grid>
        <h1>Completed tasks</h1>
        <Grid container spacing={0} direction="column" alignItems="center" justifySelf="center">
            {taskList.filter(t => t.done)
                .map(t =>
                    <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
                )}
        </Grid>
    </div>
}

export default Tasks;