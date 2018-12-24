import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import TodoForm from '../TodoForm';

describe('<TodoForm/>', () => {
    it('input 에 입력된 내용이 없으면 아무런 동작을 취하지 않는다.', () => {
        const onAddFake = jest.fn(() => void 0);
        const { getByTestId } = render(<TodoForm onAdd={ onAddFake }/>);
        const submitButton = getByTestId('button');

        fireEvent.click(submitButton);

        expect(onAddFake).not.toHaveBeenCalled();
    });

    it('input 에 내용을 입력하면 onAdd 에 값이 전달된다. ' +
        '이후 input 내용은 초기화 되고 포커스가 맞춰진다.', () => {
        const onAddFake = jest.fn(() => void 0);
        const { getByTestId } = render(<TodoForm onAdd={ onAddFake }/>);
        const inputText = getByTestId('text');
        const submitButton = getByTestId('button');

        fireEvent.change(inputText, {
            target: { value: 'Work Hard, Play Hard!' },
        });
        fireEvent.click(submitButton);

        expect(onAddFake).toHaveBeenCalledWith('Work Hard, Play Hard!');
        expect(inputText).toHaveAttribute('value', '');
        expect(inputText).toHaveFocus();
    });
});
