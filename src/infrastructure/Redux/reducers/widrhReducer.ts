import { types } from '../types';

export const widthReducer =(state = {}, action:any) => {
	switch (action.type) {
		case types.width: {
        const width= action.payload;
				return {
					...state,
					width: width
				};
      }
		default:
			return state;
	}
};
