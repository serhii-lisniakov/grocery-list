export const deleteAction = (itemId) => ({
    type: 'DELETE_ITEM',
    payload: itemId
})

export const changeStatusAction = (itemId) => ({
    type: 'CHANGE_STATUS',
    payload: itemId
})

export const addItemAction = (item) => ({
    type: 'ADD_ITEM',
    payload: item
})