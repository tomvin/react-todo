var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Wash dishes'
                },
                {
                    id: 4,
                    text: 'Check the mail'
                }
            ]
        };
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleAddTodo: function (text) {
        var currentTodosList = this.state.todos;
        var newTodoId = currentTodosList.length + 1;

        currentTodosList.push({
            id: newTodoId,
            text: text
        });

        this.setState({
            todos: currentTodosList
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <h1>A Task Board</h1>
                    <TodoSearch onSearch={this.handleSearch}></TodoSearch>
                    <TodoList todos={todos}></TodoList>
                    <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;