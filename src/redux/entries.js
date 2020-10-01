const initialState = {
    entries: [
        {
            id: 1,
            priority: '1',
            name: 'eggs',
            status: 'have',
            date: '29.09.2020'
        },
        {
            id: 2,
            priority: '3',
            name: 'bread',
            status: 'have',
            date: '30.09.2020'
        },
        {
            id: 3,
            priority: '1',
            name: 'chips',
            status: 'ran out',
            date: '28.09.2020'
        },
        {
            id: 4,
            priority: '2',
            name: 'milk',
            status: 'have',
            date: '14.09.2020'
        },
        {
            id: 5,
            priority: '5',
            name: 'beer',
            status: 'have',
            date: '28.09.2020'
        },
    ]
}

export function createEntry(entry) {
    return {
        type: 'CREATE_ENTRY',
        payload: entry
    }
}

export function deleteEntry(entry) {
    return {
        type: 'DELETE_ENTRY',
        payload: entry
    }
}

export function changeStatus(entry) {
    return {
        type: 'CHANGE_STATUS',
        payload: entry
    }
}

export const entriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_ENTRY':
            return { 
                ...state,
                entries: [action.payload, ...state.entries]
            }
        case 'DELETE_ENTRY':
            return {
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload.id)
            }
        case 'CHANGE_STATUS':
            return {
                ...state,
                entries: state.entries.forEach(entry => {
                    if (entry.id === action.payload.id) {
                        if (entry.status = 'have') entry.status = 'ran out'
                        else if (entry.status = 'ran out') entry.status = 'have'
                    }
                })
            }
        default: return state
    }
}