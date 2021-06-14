import React from 'react';

import ModalFun from '../modal/modal-component';

const EditTodoItemModal = ({ item, isOpen, editTodo, updateTodo }) => {
    return (
        <>
            <ModalFun
                isOpen={isOpen}
                toggle={editTodo}
                type="edit"
                todo={item}
                action={updateTodo}
            />
        </>
    );
};

export default EditTodoItemModal;
