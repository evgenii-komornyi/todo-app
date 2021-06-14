import { GlobalStyle } from './globalStyle.styles';
import { AppContainer } from './App.styles';

import TodoList from './components/todolist/todolist.component';
import AddTodoItem from './components/add-todo-item/add-todo-item.component';

import { motion } from 'framer-motion';
function App() {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <motion.h1
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Todo List
                </motion.h1>
                <motion.div
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', duration: 1 }}
                >
                    <AddTodoItem />
                    <TodoList />
                </motion.div>
            </AppContainer>
        </>
    );
}

export default App;
