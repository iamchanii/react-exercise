import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import TodoList from '../TodoList';
import { createDummyList, NumberDummy, TodoDummy } from './_dummies';
import { blankFn } from './_utils';

describe('<TodoList/>', () => {
    it('props 로 전달받은 items 를 정상적으로 렌더링 한다.', () => {
        const count = new NumberDummy().create(4, 10);
        const items = createDummyList(new TodoDummy(), count);
        const { container } = render(
            <TodoList items={ items } onComplete={ blankFn } onDelete={ blankFn }/>,
        );

        const itemElmList = container.querySelectorAll('li');
        expect(itemElmList.length).toEqual(count);
        expect(itemElmList[0].querySelector('span')).toHaveTextContent(items[0].title);
    });

    it('item 에서 onComplete 를 호출하면(완료 버튼을 클릭하면) 정상적으로 id 값을 받을 수 있다.', () => {
        const items = createDummyList(new TodoDummy(), 1);
        const onCompleteSpy = jest.fn(() => void 0);
        const { getAllByTestId } = render(
            <TodoList items={ items } onComplete={ onCompleteSpy } onDelete={ blankFn }/>,
        );
        const itemCompleteButton = getAllByTestId('itemCompleteButton')[0];

        fireEvent.click(itemCompleteButton);

        expect(onCompleteSpy).toHaveBeenCalledTimes(1);
        expect(onCompleteSpy).toHaveBeenCalledWith(items[0].id);
    });

    it('item 에서 onDelete 를 호출하면(삭제 버튼을 클릭하면) 정상적으로 id 값을 받을 수 있다.', () => {
        const items = createDummyList(new TodoDummy(), 1);
        const onDeleteSpy = jest.fn(() => void 0);
        const { getAllByTestId } = render(
            <TodoList items={ items } onComplete={ blankFn } onDelete={ onDeleteSpy }/>,
        );
        const itemDeleteButton = getAllByTestId('itemDeleteButton')[0];

        fireEvent.click(itemDeleteButton);

        expect(onDeleteSpy).toHaveBeenCalledTimes(1);
        expect(onDeleteSpy).toHaveBeenCalledWith(items[0].id);
    });
});
