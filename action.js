import uuid from uuid;


const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_ACTION = 'REMOVE_ACTION';
const THUMBS_UP = 'THUMBS_UP';
const THUMBS_DOWN = 'THUMBS_DOWN';


// add comment action
 
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}


// edit comment action

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}


// remove comment action

function removeComment(id) {
    return {
        type: REMOVE_ACTION,
        id, 
        text: 'comment removed'
    }
}


// Thumbs up action

function thumbsUp(id){
    return {
        type: THUMBS_UP,
        id
    }
}

// Thumbs down action

function thumbsDown(id){
    return {
        type: THUMBS_DOWN,
        id
    }
}
