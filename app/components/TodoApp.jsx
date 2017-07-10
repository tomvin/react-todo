var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos:updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <h1>A Task Board</h1>
                    <TodoSearch onSearch={this.handleSearch}></TodoSearch>
                    <TodoList todos={todos} onToggle={this.handleToggle}></TodoList>
                    <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;