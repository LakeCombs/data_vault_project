import {
	SEARCH_INVESTOR_FAIL,
	SEARCH_INVESTOR_REQUEST,
	SEARCH_INVESTOR_SUCCESS
} from "../constants/searchConstant";

export const userSearchReducer = (state = {}, action) => {
	switch (action.type) {
		case SEARCH_INVESTOR_REQUEST:
			return { loading: true };
		case SEARCH_INVESTOR_SUCCESS:
			return { loading: false, searchResult: action.payload };
		case SEARCH_INVESTOR_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
