import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie z Jasiem w grę",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zrobić porządek u Rysia",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "pomalować pokój Jasia",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "schudnąć 20 kilogramów",
        date: "2019-05-20",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "pojechać z Rafałkiem na rekolekcje",
        date: "2020-11-12",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "jeszcze raz pobawić się z Rysiem w samochodziki",
        date: "2019-09-11",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "wąsik!",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "usg",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "kalendarz adwentowy dla Oli",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // opcja pierwsza z wykorzystaniem funkcji splice usuwajacego z tablicy element o kliknietym indeksie

      const tasks = [...this.state.tasks];
      const index = tasks.findIndex(task => task.id === id);
      tasks.splice(index, 1)
      this.setState({ tasks });

    // opcja druga z wykorzystaniem funckcji filter, która tworzy tablice bez elementu kliknietego.
    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter((task) => task.id !== id);
    // this.setState({ tasks });
  };
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({ tasks});
  };

  addTask = (text, date, important, id) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
     this.setState( prevState => ({
        tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <AddTask add={this.addTask}/>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
