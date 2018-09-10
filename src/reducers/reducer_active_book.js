// State arguement is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {

  //console.log("Action: ", action.type);
  switch(action.type) {
    case 'BOOK_SELECTED':
    //  console.log("Returning book selected");
    // console.log(action.payload);
      return action.payload;
  }

  return state;
}
