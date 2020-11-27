export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after debugging
    // token: "BQABPcvttT8iBv9hREMsCe0kfwPyV0SK-qwYgws3FewU6KX8iy-qvfMTGwFj0XHrBM5aFkIgt0pxmSCSidbTldY_RcHyksM2tEXOb2weDAi0B9emmudzpotVv8GR4_jlW-0EG1Q4b2CSGpxhQjDZuI6ZuDGXJ6HW35jND-5N3Sx9qNmP",
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }   
        default: 
            return state;
    }
}

export default reducer