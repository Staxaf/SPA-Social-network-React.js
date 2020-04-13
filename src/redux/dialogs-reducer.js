const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT ='UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Patrick Jane', image: 'https://wallpaperaccess.com/full/240623.jpg'},
        {
            id: 2,
            name: 'Sasha Serebryanikov',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 3,
            name: 'Sveta Sharapova',
            image: 'data:image/jpeg;base64,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'
        },
        {id: 4, name: 'Vlad Ostapuk', image: 'https://live.staticflickr.com/7444/16594315945_d3b8da14fc_b.jpg'},
        {
            id: 5,
            name: 'Katya Leonova',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 6,
            name: 'Anatoliy Kovalenko',
            image: 'https://live.staticflickr.com/7444/16594315945_d3b8da14fc_b.jpg'
        },
    ],

    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How your english is going?'},
        {id: 3, message: 'ahaha, LOL'},
        {id: 4, message: 'My name is Anton'},
        {id: 5, message: 'Oh,nice! Goodbye'},
    ],
    newMessageText: '' //набранное сообщение, которое еще не отправилось
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            if (state.newMessageText.length > 0) {
                state.messagesData.push({
                    id: 6,
                    message: state.newMessageText //state.dialogsPage.newMessageText
                })
                state.newMessageText = ''
            }
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}