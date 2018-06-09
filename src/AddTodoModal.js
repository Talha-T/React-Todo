import { TodoItem } from "./TodoList";
import { Button, Header, Modal, Icon, Input } from 'semantic-ui-react'
import React from "react";

class AddTodoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            title: "",
            content: "",
        };
    }

    addClick(e) {
        e.preventDefault();

        this.props.add(new TodoItem(this.state.title, this.state.content));
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    cancelClick(e) {
        e.preventDefault();
        this.closeModal();
    }

    inputChange(e) {
        const elem = e.target;
        
        const state = {...this.state};

        if (elem.id === "header") {
            state.title = elem.value;
        }
        else {
            state.content = elem.value;
        }
        this.setState(state);
    }

    render() {
        const {
            showModal
        } = this.state

        return (
            (
                <Modal onClose={this.closeModal} open={showModal}
                    trigger={<Button onClick={() => this.setState({ showModal: true })} className="right floated primary icon button"> <Icon name="add" />Add New</Button>}>
                    <Modal.Header>Add a new Todo</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Add a new Todo</Header>
                            <Input fluid placeholder='Header' id='header' onChange={this.inputChange.bind(this)}/>
                            <Input fluid placeholder='Content' id='content' onChange={this.inputChange.bind(this)}/>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button className='cancel' basic color='red' onClick={this.cancelClick.bind(this)} >
                            <Icon name='remove' /> Cancel
      </Button>
                        <Button color='green' inverted onClick={this.addClick.bind(this)}>
                            <Icon name='checkmark' /> Add
      </Button>
                    </Modal.Actions>
                </Modal>
            )
        )
    }
}

export default AddTodoModal;