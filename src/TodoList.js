import React from "react";
import AddTodoModal from './AddTodoModal';
import { Confirm } from "semantic-ui-react";

let counter = 0;

class TodoItem {
    constructor(header, content) {
        this.header = header;
        this.date = new Date().getTime();
        this.content = content;
        this.id = ++counter;
    }
}


class TodoList extends React.Component {
    constructor() {
        super();
        const todoList = [
            new TodoItem("Example Todo!", "React is awesome!")
        ];
        this.state = {
            list: todoList,
            open: false,
            id: ""
        };
    }

    show = (id) => this.setState({ open: true, id: id })
    handleConfirm = () => {
        const state = { ...this.state };
        state.open = false;

        const list = [...this.state.list];

        const id = this.state.id;
        const filtered = list.filter(x => x.id !== id);
        state.list = filtered;

        this.setState(state);
    }
    handleCancel = () => {
        const state = { ...this.state };
        state.open = false;

        this.setState(state);
    }

    deleteClick(s) {
        const idString = s.target.getAttribute("data-id");
        const id = Number(idString);
        
        this.show(id);
    }

    addTodo(todoItem) {

        const state = { ...this.state };
        state.list.push(todoItem);
        this.setState(state);
    }

    render() {
        const cards = this.state.list.map((todo, index) => {
            return (
                <div className="card" key={todo.id}>
                    <div className="content">
                        <i className="right floated delete icon" onClick={this.deleteClick.bind(this)} data-id={todo.id}></i>
                        <div className="header">{todo.header}</div>
                        <div className="meta">{new Date(todo.date).toString()}</div>
                        <div className="description">
                            {todo.content}</div>
                    </div>
                </div>
            );
        });

        const { open } = this.state

        return (
            <div>
                <AddTodoModal add={this.addTodo.bind(this)} />
                <Confirm open={open} onCancel={this.handleCancel} onConfirm={this.handleConfirm} />
                <div className="ui cards">
                    {cards}
                </div>
            </div>
        );
    }
}

export default TodoList;
export { TodoItem };