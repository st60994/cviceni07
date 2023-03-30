import Tasks from "../page/Tasks";
import {Task} from "../data/init-data";
import React from "react";
import "../assets/TaskCard.css"

import {
    Alert,
    Avatar,
    Card,
    CardActions,
    CardContent, CardHeader,
    Checkbox,
    Divider,
    ToggleButton,
    Typography
} from "@mui/material";
import {deepOrange, lightBlue} from "@mui/material/colors";

interface Props {
    task: Task

    onTaskDone: (task: Task) => void
}

const TaskCard = ({task, onTaskDone}: Props) => {
    const doneClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {

        task.done = e.target.checked;
        onTaskDone(task);
        console.table(task);
    }


    return <div><Card variant={"outlined"} sx={{maxWidth: 500, minWidth: 500}}>
        <CardContent>
            <CardHeader avatar={<Avatar sx={{bgcolor: lightBlue[500]}}>HV</Avatar>} title={task.title}
                        titleTypographyProps={{variant: "h5", textAlign: "center", fontFamily: "Roboto"}}>
            </CardHeader>

            <Divider></Divider>
            <p>{task.description}</p>
            <p>Created at: {task.creationDate.toISOString()}</p>
            <p>Updated at: {task.updateDate?.toISOString()}</p>

            <br/>
            <CardActions>
                <label>Finished</label>
                <Checkbox checked={task.done} name="done" onChange={doneClickHandle}/>
            </CardActions>
        </CardContent>
    </Card>
    </div>
}

export default TaskCard;