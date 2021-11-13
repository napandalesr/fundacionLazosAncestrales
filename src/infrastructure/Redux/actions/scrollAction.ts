import { types } from "../types";

export const _scroll = (options:any) => ({
	type: types.scroll,
	payload: options
});