import React from 'react';
import Task from './Task'


const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (done.length >= 2) {
        done.sort((a, b) => {
            if (a.finishDate < b.finishDate) {
                return 1
            }
            if (a.finishDate > b.finishDate) {
                return -1
            }
            return 0
        })
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    }



    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active">
                <h1>Task list todo</h1>
                {activeTasks.length > 0 ? activeTasks : <p>No tasks to do, you are happy human being</p>}
            </div>
            <hr />
            <div className="done">
                <h1>Task Done <em>({done.length})</em></h1>
                {doneTasks.length > 5 ? <span style={{ fontSize: 10 }}>Displayd only 5 latest tasks</span> : null}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;