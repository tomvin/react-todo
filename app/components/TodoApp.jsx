var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
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
            <div>
                <TodoList todos={todos}></TodoList>
                <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
            </div>
        )
    }
});

module.exports = TodoApp;