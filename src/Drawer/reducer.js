const NAME = 'AUTH';

const UPDATE_CURRENT_USER = `${NAME}/UPDATE_CURRENT_USER`;

export const updateCurrentUser = user => ({
    type: UPDATE_CURRENT_USER,
    user,
});

export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return action.user;
        default:
            return state;
    }
};

