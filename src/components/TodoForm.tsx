import React, { ChangeEvent, Component, createRef, FormEvent, RefObject } from 'react';

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
    inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

    state: ITodoFormState = {
        title: '',
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { title } = this.state;
        // input 에 입력된 내용이 없으면 아무런 동작을 취하지 않는다.
        if (!title) {
            return;
        }

        // 입력받은 텍스트를 props 의 onAdd 함수로 전달한다.
        const { onAdd } = this.props;
        onAdd(title);

        // onAdd 함수로 전달한 뒤, 현재 입력된 내용을 초기화한다.
        this.setState({
            title: '',
        });

        // onAdd 함수로 전달한 뒤, input 에 포커스를 맞춘다.
        this.inputRef.current.focus();
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: event.target.value,
        });
    };


    render(): React.ReactNode {
        const { title } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <input ref={ this.inputRef } type="text" data-testid="text" value={ title }
                       onChange={ this.handleChange }/>
                <button type="submit" data-testid="button">Add</button>
            </form>
        );
    }
}

export default TodoForm;
