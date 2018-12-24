import React, { Component } from 'react';
import { Todo } from '../_models';
import TodoItem from './TodoItem';

interface ITodoListProps {
    items: Todo[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoList extends Component<ITodoListProps> {
    // TODO: props 로 전달받은 items 를 <TodoItem/> 컴포넌트로 렌더링해야 한다.
    //       (Array.prototype.map 을 이용하여 만들어보세요.)
    // TODO: <App/> 에서 받은 onDelete, onComplete 함수를 각각 item 컴포넌트에 전달해야 한다.
    render(): React.ReactNode {
        return (
            <ul>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ul>
        );
    }
}

export default TodoList;
