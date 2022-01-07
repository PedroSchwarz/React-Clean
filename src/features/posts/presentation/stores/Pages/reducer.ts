import * as Types from "./types";

export type PAGES_STATE = {
  totalPages: number;
  currentPage: number;
}

const INTIAL_STATE: PAGES_STATE = {
  totalPages: 0,
  currentPage: 1
};

export default function (state = INTIAL_STATE, action: any): PAGES_STATE {
  const { type, payload } = action;

  switch (type) {
    /**
     * SET_TOTAL_PAGES
     *
     * handle SET_TOTAL_PAGES action
     *
     */
    case Types.SET_TOTAL_PAGES:
      return { ...state, totalPages: payload.totalPages };

    /**
     * NEXT_PAGE
     *
     * handle NEXT_PAGE action
     *
     */
    case Types.NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };

    /**
     * PREVIOUS_PAGE
     *
     * handle PREVIOUS_PAGE action
     *
     */
    case Types.PREVIOUS_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };

    /**
     * DEFAULT
     *
     * handle default action
     *
     */
    default:
      return { ...state };
  }
}
