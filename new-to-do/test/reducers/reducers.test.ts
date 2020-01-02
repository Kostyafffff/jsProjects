import { FILTER } from '../../src/redux/store/types';


describe('redux/reducers', () => {

    it('setFilter test', () => {
        //Given
        const store = {
            searchField: 'for test',
            addField: 'for test',
            todoList: [{
                    label: 'asd',
                    important: false,
                    done: false,
                    id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
                }],
            filterBy: FILTER.DONE
        };


        //Then
    });
});