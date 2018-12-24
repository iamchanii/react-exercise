import React, { Component } from 'react';
import { Todo } from '../_models';
import TodoItem from './TodoItem';

interface ITodoListProps {
    items: Todo[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoList extends Component<ITodoListProps> {
    render(): React.ReactNode {
        const { items, onDelete, onComplete } = this.props;

        const itemComps = items.map(item => (
            <TodoItem key={ item.id } item={ item } onComplete={ onComplete } onDelete={ onDelete }/>
        ));

        return (
            <ul>
                { itemComps }
            </ul>
        );
    }
}

export default TodoList;
