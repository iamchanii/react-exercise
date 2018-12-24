import React, { Component } from 'react';
import { Todo } from './_models';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export interface IAppState {
    items: Todo[];
}

let id = 0;

class App extends Component<any, IAppState> {
    state: IAppState = {
        items: [],
    };

    constructor(props: any) {
        super(props);

        const data = localStorage.getItem('items');
        if (data) {
            const items: Todo[] = JSON.parse(data);
            this.state = { items };
        }
    }

    handleOnAdd = (title: string): void => {
        const { items } = this.state;
        items.push({
            id: id++,
            title,
            completed: false,
        });

        this.setState({
            items,
        }, () => {
            localStorage.setItem('items', JSON.stringify(this.state.items));
        });
    };

    handleOnComplete = (id: number): void => {
        const { items } = this.state;

        this.setState({
            items: items.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }

                return item;
            }),
        });
    };

    handleOnDelete = (id: number): void => {
        const { items } = this.state;

        this.setState({
            items: items.filter(item => item.id !== id),
        });
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
