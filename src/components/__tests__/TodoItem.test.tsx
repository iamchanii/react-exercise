import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { TodoDummy } from '../../testing/_dummies';
import { blankFn } from '../../testing/_utils';
import TodoItem from '../TodoItem';

describe('<TodoItem/>', () => {
    it('for DEV: props 를 전달하지 않으면 오류가 발생한다.', () => {
        expect(() => {
            // 이 케이스는 props 에 optional 을 해제하지 않으면 오류가 발생하도록 의도하는 케이스입니다.
            // 성공적으로 오류가 발생했을 경우 console.error 를 통해 오류 메세지를 표시하는데, 이를 방지하기 위함입니다.
            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => void 0);

            // @ts-ignore
            render(<TodoItem/>);

            // 이후 이 케이스가 끝나면 다른 케이스에서는 오류 발생 시 정상적으로 받기 위해 spy 를 해제합니다.
            consoleErrorSpy.mockRestore();
        }).toThrowError();
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
