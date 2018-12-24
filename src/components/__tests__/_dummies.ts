import faker from 'faker/locale/en';
import lodashRandom from 'lodash.random';
import { Todo } from '../../_models';

interface Dummy<T> {
    create(): T;
}

export class IdDummy implements Dummy<number> {
    id = 0;

    create(): number {
        return this.id++;
    }
}

export class BooleanDummy implements Dummy<boolean> {
    create(): boolean {
        return Math.random() >= 0.5;
    }
}

export class NumberDummy implements Dummy<number> {
    create(min = 0, max = 10) {
        return lodashRandom(min, max);
    }
}

export class LoremSentenceDummy implements Dummy<string> {
    create(): string {
        return faker.lorem.sentence(new NumberDummy().create(3, 5));
    }
}

export function createDummyList<T>(dummy: Dummy<T>, count = 3): T[] {
    const result: T[] = [];

    for (let i = 0; i < count; i++) {
        result.push(dummy.create());
    }

    return result;
}

export class TodoDummy implements Dummy<Todo> {
    id = new IdDummy();
    title = new LoremSentenceDummy();
    completed = new BooleanDummy();

    create(): Todo {
        return {
            id: this.id.create(),
            title: this.title.create(),
            completed: this.completed.create(),
        };
    }
}
