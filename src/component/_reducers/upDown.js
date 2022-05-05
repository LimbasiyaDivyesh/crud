const currentValue = 0;
const changeNumber = (state = currentValue, action) => {
    switch (action.type) {
        case "INC": return state + 1;
        case "DEC": return state - 1;
        default: return state;
    }
}
export default changeNumber;
