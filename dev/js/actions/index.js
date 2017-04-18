export const selectHello = (hello) => {
    console.log("You clicked on hello: ", hello.text, ", ", hello.id);
    return {
        type: 'HELLO_SELECTED',
        payload: hello
    }
};
