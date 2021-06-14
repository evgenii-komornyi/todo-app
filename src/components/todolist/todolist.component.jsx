import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import {
    addTodos,
    completeTodos,
    removeTodos,
    updateTodos,
} from '../../redux/reducer';
import TodoItem from '../todo-item/todo-item.component';
import { AnimatePresence } from 'framer-motion';

import {
    DisplayTodosContainer,
    ButtonsContainer,
    ButtonMotion,
    LengthContainer,
    ListContainer,
} from './todolist.styles';

const DisplayTodos = ({ todos, completeTodo, updateTodo, removeTodo }) => {
    const [sort, setSort] = useState('active');
    const btnActiveRef = useRef(null);
    const btnCompletedRef = useRef(null);
    const btnAllRef = useRef(null);

    const completedTodos = todos.filter((item) => item.completed === true);
    const activeTodos = todos.filter((item) => item.completed === false);

    const handleSortClick = (e, btn) => {
        setSort(btn);

        if (
            btnActiveRef !== null &&
            btnCompletedRef !== null &&
            btnAllRef !== null
        ) {
            btnActiveRef.current.classList.remove('active');
            btnCompletedRef.current.classList.remove('active');
            btnAllRef.current.classList.remove('active');
        }

        if (e.currentTarget.textContent.includes('Active')) {
            btnActiveRef.current.classList.add('active');
        }

        if (e.currentTarget.textContent.includes('Completed')) {
            btnCompletedRef.current.classList.add('active');
        }

        if (e.currentTarget.textContent.includes('All')) {
            btnAllRef.current.classList.add('active');
        }
    };

    return (
        <DisplayTodosContainer>
            <ButtonsContainer>
                <ButtonMotion
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    ref={btnActiveRef}
                    onClick={(e) => handleSortClick(e, 'active')}
                >
                    Active
                    <LengthContainer>{activeTodos.length}</LengthContainer>
                </ButtonMotion>
                <ButtonMotion
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    ref={btnCompletedRef}
                    onClick={(e) => handleSortClick(e, 'completed')}
                >
                    Completed{' '}
                    <LengthContainer>{completedTodos.length}</LengthContainer>
                </ButtonMotion>
                <ButtonMotion
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    ref={btnAllRef}
                    onClick={(e) => handleSortClick(e, 'all')}
                >
                    All
                    <LengthContainer>{todos.length}</LengthContainer>
                </ButtonMotion>
            </ButtonsContainer>
            <ListContainer>
                <AnimatePresence>
                    {todos.length > 0 && sort === 'active'
                        ? todos.map((item) => {
                              return (
                                  item.completed === false && (
                                      <TodoItem
                                          key={item.id}
                                          item={item}
                                          removeTodo={removeTodo}
                                          updateTodo={updateTodo}
                                          completeTodo={completeTodo}
                                      />
                                  )
                              );
                          })
                        : null}
                    {todos.length > 0 && sort === 'completed'
                        ? todos.map((item) => {
                              return (
                                  item.completed === true && (
                                      <TodoItem
                                          key={item.id}
                                          item={item}
                                          removeTodo={removeTodo}
                                          updateTodo={updateTodo}
                                          completeTodo={completeTodo}
                                      />
                                  )
                              );
                          })
                        : null}
                    {todos.length > 0 && sort === 'all'
                        ? todos.map((item) => {
                              return (
                                  <TodoItem
                                      key={item.id}
                                      item={item}
                                      removeTodo={removeTodo}
                                      updateTodo={updateTodo}
                                      completeTodo={completeTodo}
                                  />
                              );
                          })
                        : null}
                </AnimatePresence>
            </ListContainer>
            {todos.length === 0 && <h1>Add your first todo!</h1>}
            {todos.length !== 0 &&
                activeTodos.length === 0 &&
                sort !== 'all' &&
                sort !== 'completed' && <h1>All todos are completed!</h1>}
        </DisplayTodosContainer>
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
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
