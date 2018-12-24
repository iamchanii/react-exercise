import React, { Component } from 'react';
import { Todo } from './_models';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export interface IAppState {
    items: Todo[];
}

class App extends Component<any, IAppState> {
    state: IAppState = {
        items: [],
    };

    handleOnAdd = (title: string): void => {
        // TODO: 입력받은 title 을 state.items 배열에 추가해야 한다.
        //       새로 추가된 item 은 completed: false 가 되어야 한다.
        //       id 는 <TodoList/> 에서 key 값으로 사용되어야 하기 때문에 할 때마다 값이 증가해야 한다.
        // NOTE: 절대로 state 를 직접 변형하지 마세요. setState 를 활용하세요.
    };

    handleOnComplete = (id: number): void => {
        // TODO: state.items 에서 id 가 입력받은 id 와 일치하는 항목의 completed 를 토글한다.
        //       (Array.prototype.map 이나 reduce 를 사용하세요)
        //       (true 상태에서 다시 누르면 false 로 전환되어야 합니다.)
    };

    handleOnDelete = (id: number): void => {
        // TODO: state.items 에서 입력받은 id 와 일치하는 항목은 제거한다.
        //       (Array.prototype.filter 나 splice 를 사용하세요)
    };

    render(): React.ReactNode {
        const { items } = this.state;

        return (
            <>
                <TodoForm onAdd={ this.handleOnAdd }/>
                <TodoList items={ items } onComplete={ this.handleOnComplete } onDelete={ this.handleOnDelete }/>
            </>
        );
    }
}

export default App;
