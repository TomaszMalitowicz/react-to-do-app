import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 10;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Lern React',
        date: '2020-03-05',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Lern NodeJs',
        date: '2020-04-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Lern Css',
        date: '2019-10-30',
        important: true,
        active: false,
        finishDate: null
      },
      {
        id: 3,
        text: 'Lern html',
        date: '2019-11-30',
        important: true,
        active: false,
        finishDate: null
      },
      {
        id: 4,
        text: 'Lern Javascript',
        date: '2019-12-30',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'Rock For People 2020 Hradec-Kralove',
        date: '2020-06-19',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'Lose 10kg',
        date: '2020-08-30',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: 'Look for JOB',
        date: '2020-04-30',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: 'Find a JOB',
        date: '2020-05-30',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 9,
        text: 'Go for a beer with budies',
        date: '2020-03-03',
        important: false,
        active: true,
        finishDate: null
      },

    ]
  }

  deleteTask = (id) => {
    //Delete przy użyciu finxIndex i splice
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks: tasks
    // })


    //delete przy użyciu filter
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks: tasks
    })
  }
  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks: tasks
    })
  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, //input text
      date: date, //input text
      important: important, // input value
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter)
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
