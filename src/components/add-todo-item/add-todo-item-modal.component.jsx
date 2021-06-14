import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';

import ModalFun from '../modal/modal-component';

import { connect } from 'react-redux';
import { addTodos } from '../../redux/reducer';

import { AddMotionButton } from './add-todo-item.styles';

const AddTodoItemModal = ({ addTodo }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <>
            <AddMotionButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggle}
            >
                <GoPlus />
            </AddMotionButton>
            <ModalFun
                isOpen={modal}
                toggle={toggle}
                type="add"
                action={addTodo}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoItemModal);
