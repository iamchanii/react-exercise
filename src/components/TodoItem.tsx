import React, { Component, CSSProperties } from 'react';
import { Todo } from '../_models';

interface ITodoItemProps {
    item: Todo;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoItem extends Component<ITodoItemProps> {
    handleClickComplete = (): void => {
        const { onComplete, item } = this.props;
        onComplete(item.id);
    };

    handleClickDelete = (): void => {
        const { onDelete, item } = this.props;
        onDelete(item.id);
    };

    render(): React.ReactNode {
        const { item } = this.props;
        const style: CSSProperties = item.completed ? { textDecoration: 'line-through' } : {};

        return (
            <li>
                <span style={ style } data-testid="itemTitle">{ item.title }</span>
                <button type="button" onClick={ this.handleClickComplete } data-testid="itemCompleteButton">
                    Complete
                </button>
                <button type="button" onClick={ this.handleClickDelete } data-testid="itemDeleteButton">
                    Delete
                </button>
            </li>
        );
    }
}

export default TodoItem;
