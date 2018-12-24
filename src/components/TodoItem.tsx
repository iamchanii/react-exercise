import React, { Component } from 'react';
import { Todo } from '../_models';

interface ITodoItemProps {
    // TODO: 실제 코드 구현 시 아래 프로퍼티들 required 처리되어야 한다.
    item?: Todo;
    onComplete?: (id: number) => void;
    onDelete?: (id: number) => void;
}

class TodoItem extends Component<ITodoItemProps> {
    handleClickComplete = (): void => {
        // TODO: 전달된 props.onComplete 를 호출해야 합니다.
    };

    handleClickDelete = (): void => {
        // TODO: 전달된 props.onDelete 를 호출해야 합니다.
    };

    render(): React.ReactNode {
        const { item, onComplete, onDelete } = this.props;

        // TODO: 전달된 props.item 을 정상적으로 표시할 수 있어야 합니다.
        // TODO: completed 된 항목은 text-decoration: line-through 스타일이 추가된다.
        return (
            <li>
                <span data-testid="itemTitle">Work Hard</span>
                <button type="button" onClick={ this.handleClickComplete } data-testid="itemCompleteButton">Complete</button>
                <button type="button" onClick={ this.handleClickDelete } data-testid="itemDeleteButton">Delete</button>
            </li>
        );
    }
}

export default TodoItem;
