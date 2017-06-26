var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var text = this.refs.todoText.value;
        if(typeof text === "string" && text.length > 0) {
            this.props.handleAddTodo(text);
            this.refs.todoText.value = "";
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What do you need to do?" ref="todoText"></input>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;