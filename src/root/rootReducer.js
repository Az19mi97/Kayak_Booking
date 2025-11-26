export default (state,action) => {
    switch(action.type) {
        case "progressChange":
            return {
                ...state,
                ongoing: action.payload
            };
        case "location":
            return {
                ...state,
                location: action.payload
            };
        case "Kayak":
            return {
                ...state,
                Kayak: action.payload
            }
        default:
            return state;
    }
}
