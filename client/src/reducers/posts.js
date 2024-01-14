import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

const postsReducer = (posts = [], action) => {

    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            console.log('Reducer received CREATE action: ', action.payload)
            return [...posts, action.payload];
        case UPDATE:
            console.log('Update recevied from edit button')
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            console.log('Delete received from delete button');
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};

export default postsReducer;