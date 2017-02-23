
export const someReducer = (state = {}, action) => {
	
	switch (action.type) {
		case 'WRITE_CONTENT':
			console.log("Writing content");
			return state;	
		default:
			return state;	
	}
	
}