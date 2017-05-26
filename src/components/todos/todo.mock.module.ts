/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import 'angular-mocks';
import * as faker from 'faker';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../../constants/todos.constants";

export module TodoMockModule {
    export const name: string = 'app.todo.mock';

    export const actions = [
        {
            type: ADD_TODO,
            payload: {
                todo: {
                    name: 'Task#1',
                    completed: false,
                    id: 2
                }
            },
            version: '0.1',
            createDate: faker.date.past()
        },
        {
            type: ADD_TODO,
            payload: {
                todo: {
                    name: 'Task#2',
                    completed: false,
                    id: 2
                }
            },
            version: '0.1',
            createDate: faker.date.past()
        },
        {
            type: TOGGLE_TODO,
            payload: {
                todo: {
                    name: 'Task#2',
                    completed: true, // todo: lel
                    id: 2
                }
            },
            version: '0.1',
            createDate: faker.date.past()
        },
        {
            type: REMOVE_TODO,
            payload: {
                id: 2
            },
            version: '0.1',
            createDate: faker.date.past()
        }
    ];

    angular.module(TodoMockModule.name, ['ngMockE2E'])
        .run(($httpBackend: angular.IHttpBackendService) => {


            $httpBackend.when('GET', /.*\/todos\/actions$/)
                .respond(() => [200, actions]);

            $httpBackend.when('GET', /.*\/todos$/)
                .respond(() => [200, {data: 'list of todos'}]);
        });
}