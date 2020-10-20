const initialState = {
    items: JSON.parse(localStorage.getItem('grocery-list')) || [
        {
            id: 6,
            priority: '1',
            name: 'eggs',
            status: true,
            date: '2020.09.30'
        },
        {
            id: 5,
            priority: '3',
            name: 'bread',
            status: true,
            date: '2020.08.15'
        },
        {
            id: 4,
            priority: '1',
            name: 'chips',
            status: false,
            date: '2020.09.15'
        },
        {
            id: 3,
            priority: '2',
            name: 'milk',
            status: true,
            date: '2020.09.11'
        },
        {
            id: 2,
            priority: '5',
            name: 'beer',
            status: false,
            date: '2020.09.01'
        },
        {
            id: 1,
            priority: '4',
            name: 'chocolate bars',
            status: true,
            date: '2020.08.19'
        },
    ]
}



export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== +action.payload)
        case 'CHANGE_STATUS':
            return state.map(item => {
                if (item.id === +action.payload) {
                    item.status = !item.status
                    item.date = new Date().toLocaleDateString('lv-LV')
                }
                return item
            })
        case 'ADD_ITEM':
            return [action.payload, ...state]
        default: return state.items
    }
}