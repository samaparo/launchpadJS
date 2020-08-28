import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [
        {
          title: "Ask crush out to prom",
          isDone: false,
        },
        {
          title: "Learn to skateboard",
          isDone: true,
        },
      ],
    };
  }
  addTodo(newTodo) {
    const updatedTodos = this.state.todos.concat(newTodo);
    this.setState({
      todos: updatedTodos,
      inputValue: "",
    });
  }
  toggleTodo(todoToUpdate, isDone) {
    const matchingTodo = this.state.todos.find(
      (todo) => todoToUpdate.title === todo.title
    );
    matchingTodo.isDone = isDone;
    this.setState({
      todos: this.state.todos,
    });
  }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <div>
          {this.state.todos.map((todo) => {
            return (
              <div key={todo.title}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(e) => {
                    this.toggleTodo(todo, e.target.checked);
                  }}
                />
                <span>{todo.title}</span>
              </div>
            );
          })}
        </div>
        <h2>Add a Todo</h2>
        <form
          id="todoForm"
          onSubmit={(e) => {
            e.preventDefault();
            this.addTodo({
              title: this.state.inputValue,
              isDone: false,
            });
          }}
        >
          <input
            placeholder="What do you need to do?"
            type="text"
            value={this.state.inputValue}
            onChange={(e) => {
              this.setState({ inputValue: e.target.value });
            }}
          />
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
