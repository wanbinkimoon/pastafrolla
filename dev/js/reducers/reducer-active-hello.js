export default function (state = null, action) {
    switch (action.type) {
        case 'HELLO_SELECTED':
          return action.payload;
    		break;
    }
    return state;
}
