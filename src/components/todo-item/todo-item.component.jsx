import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';

import EditTodoItemModal from '../edit-todo-item/edit-todo-item-modal.component';

import {
    CardMotionLiContainer,
    ItemTitleContainer,
    ItemDateTimeContainer,
    ItemDateContainer,
    ItemTimeContainer,
    ActionsContainer,
    EditMotionButton,
    CompleteMotionButton,
    RemoveMotionButton,
    CompletedItemContainer,
    CreatedDateContainer,
    CompletedDateContainer,
} from './todo-item.styles';

import { getMonthName } from '../../helpers/dateHelper';

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
    const [modal, setModal] = useState(false);

    const editTodo = () => {
        setModal(!modal);
    };

    return (
        <>
            <CardMotionLiContainer
                initial={{
                    x: '150vw',
                    transition: { type: 'spring', duration: 2 },
                }}
                animate={{ x: 0, transition: { type: 'spring', duration: 2 } }}
                whileHover={{
                    scale: 0.9,
                    transition: { type: 'spring', duration: 0.1 },
                }}
                exit={{
                    x: '-60vw',
                    scale: [1, 0],
                    transition: { duration: 0.5 },
                    backgroundColor: 'rgba(255,0,0,1)',
                }}
                key={item.id}
            >
                <>
                    <ItemTitleContainer>{item.item}</ItemTitleContainer>
                    <ItemDateTimeContainer item={item}>
                        {item.eventDate && (
                            <ItemDateContainer>
                                {item.eventDate.day}{' '}
                                {getMonthName(item.eventDate.month)}{' '}
                                {item.eventDate.year}
                            </ItemDateContainer>
                        )}
                        {item.eventTime && (
                            <ItemTimeContainer>
                                {item.eventTime.hours}:{item.eventTime.minutes}
                            </ItemTimeContainer>
                        )}
                    </ItemDateTimeContainer>
                </>
                <CreatedDateContainer>
                    created: {item.created}
                </CreatedDateContainer>
                {item.completed && item.completedDate && (
                    <CompletedDateContainer>
                        completed in: {item.completedDate}
                    </CompletedDateContainer>
                )}
                <ActionsContainer>
                    <EditMotionButton
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={editTodo}
                    >
                        {' '}
                        <AiFillEdit />{' '}
                    </EditMotionButton>
                    {item.completed === false && (
                        <CompleteMotionButton
                            whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => completeTodo(item.id)}
                        >
                            <IoCheckmarkDoneSharp />
                        </CompleteMotionButton>
                    )}
                    <RemoveMotionButton
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeTodo(item.id)}
                    >
                        {' '}
                        <IoClose />
                    </RemoveMotionButton>{' '}
                </ActionsContainer>
                {item.completed && (
                    <CompletedItemContainer>done</CompletedItemContainer>
                )}
            </CardMotionLiContainer>
            <EditTodoItemModal
                isOpen={modal}
                editTodo={editTodo}
                item={item}
                updateTodo={updateTodo}
            />
        </>
    );
};

export default TodoItem;
