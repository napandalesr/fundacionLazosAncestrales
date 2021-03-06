import { types } from '../types';

export const scrollReducer =(state = {}, action:any) => {
	switch (action.type) {
		case types.scroll: {
        const scroll= action.payload;
				return {
					...state,
					scroll: scroll
				};
      }
		default:
			return state;
	}
};
