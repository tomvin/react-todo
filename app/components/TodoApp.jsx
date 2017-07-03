var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Wash dishes',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Check the mail',
                    completed: false
                }
            ]
        };
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