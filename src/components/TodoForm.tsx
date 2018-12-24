import React, { Component, FormEvent } from 'react';

interface ITodoFormProps {
    onAdd: (title: string) => void;
}

interface ITodoFormState {
    title: string;
}

/**
 * title 을 입력 받고, <App/> 에서 전달 된 onAdd 함수를 호출하는 Form 입니다.
 * state, ref 를 사용해야 할 것입니다.
 */
class TodoForm extends Component<ITodoFormProps, ITodoFormState> {
    state: ITodoFormState = {
        title: '',
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: input 에 입력된 내용이 없으면 아무런 동작을 취하지 않는다.
        // TODO: 입력받은 텍스트를 props 의 onAdd 함수로 전달한다.
        // TODO: onAdd 함수로 전달한 뒤, 현재 입력된 내용을 초기화한다.
        // TODO: onAdd 함수로 전달한 뒤, input 에 포커스를 맞춘다.
    };

    render(): React.ReactNode {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text" data-testid="text"/>
                <button type="submit" data-testid="button">Add</button>
            </form>
        );
    }
}

export default TodoForm;
