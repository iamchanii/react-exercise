import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { TodoDummy } from './_dummies';
import TodoItem from '../TodoItem';
import { blankFn } from './_utils';

describe('<TodoItem/>', () => {
    it('for DEV: props 를 전달하지 않으면 오류가 발생한다.', () => {
        expect(() => <TodoItem/>).toThrowError();
    });

    it('전달된 item 을 정상적으로 표시할 수 있다.', () => {
        const item = new TodoDummy().create();
        item.completed = false;
        const { getByTestId } = render(<TodoItem onDelete={ blankFn } onComplete={ blankFn } item={ item }/>);
        const title = getByTestId('itemTitle');

        expect(title).toHaveTextContent(item.title);
        expect(title).not.toHaveStyle('text-decoration: line-through');
    });

    it('완료된 item 은 line-through 스타일이 추가된다.', () => {
        const item = new TodoDummy().create();
        item.completed = true;
        const { getByTestId } = render(<TodoItem onDelete={ blankFn } onComplete={ blankFn } item={ item }/>);
        const title = getByTestId('itemTitle');

        expect(title).toHaveTextContent(item.title);
        expect(title).toHaveStyle('text-decoration: line-through');
    });

    it('완료 버튼을 누르면 전달된 onComplete 를 호출한다.', () => {
        const item = new TodoDummy().create();
        const onCompleteSpy = jest.fn(() => void 0);
        const { getByTestId } = render(<TodoItem onDelete={ blankFn } onComplete={ onCompleteSpy } item={ item }/>);
        const itemCompleteButton = getByTestId('itemCompleteButton');

        fireEvent.click(itemCompleteButton);

        expect(onCompleteSpy).toHaveBeenCalledWith(item.id);
    });

    it('삭제 버튼을 누르면 전달된 onDelete 를 호출한다.', () => {
        const item = new TodoDummy().create();
        const onDeleteSpy = jest.fn(() => void 0);
        const { getByTestId } = render(<TodoItem onDelete={ onDeleteSpy } onComplete={ blankFn } item={ item }/>);
        const itemDeleteButton = getByTestId('itemDeleteButton');

        fireEvent.click(itemDeleteButton);

        expect(onDeleteSpy).toHaveBeenCalledWith(item.id);
    });
});
