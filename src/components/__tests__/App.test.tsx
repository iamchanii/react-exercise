import { shallow } from 'enzyme';
import React from 'react';
import App, { IAppState } from '../../App';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { createDummyList, TodoDummy } from './_dummies';

describe('<App/>', () => {
    it('TodoForm 을 통해 title 을 추가할 수 있다.', () => {
        const wrapper = shallow<any, IAppState>(<App/>);

        wrapper.find(TodoForm).props().onAdd('One And Only');

        const items = wrapper.state().items;
        expect(items.length).toEqual(1);
        expect(items[0].title).toEqual('One And Only');
        expect(items[0].completed).toBeFalsy();
    });

    it('TodoItem 에서 Complete 버튼을 누르면 해당 항목은 완료 처리가 된다.', () => {
        const items = createDummyList(new TodoDummy(), 3).map((todo) => {
            todo.completed = false;
            return todo;
        });
        const wrapper = shallow<any, IAppState>(<App/>);
        wrapper.setState({ items });
        const item = items[0];

        wrapper.find(TodoList).props().onComplete(item.id);
        expect(wrapper.state().items[0].completed).toBeTruthy();

        wrapper.find(TodoList).props().onComplete(item.id);
        expect(wrapper.state().items[0].completed).toBeFalsy();
    });

    it('TodoItem 에서 Delete 버튼을 누르면 해당 항목은 삭제 처리가 된다.', () => {
        const items = createDummyList(new TodoDummy(), 3);
        const wrapper = shallow<any, IAppState>(<App/>);
        wrapper.setState({ items });
        const item = items[0];

        wrapper.find(TodoList).props().onDelete(item.id);
        expect(wrapper.state().items.length).toEqual(2);
    });
});
