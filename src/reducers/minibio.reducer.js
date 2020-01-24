const initState = {
    isDark : false,
}
  
export default (state = initState, action) => {
    switch (action.type){
        case 'CHANGE_DARK_MODE': 
            return { 
                ...state, isDark: !state.isDark
            }
        default:
        return state
    }
}