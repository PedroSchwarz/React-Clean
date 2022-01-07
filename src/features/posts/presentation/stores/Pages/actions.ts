import * as Types from "./types";

/**
 * setTotalPages
 *
 * handle SET_TOTAL_PAGES actions
 *
 * @param payload
 */
export function setTotalPages(payload: any) {
  return {
    type: Types.SET_TOTAL_PAGES,
    payload,
  };
}

/**
 * nextPage
 *
 * handle NEXT_PAGE actions
 *
 * @param payload
 */
export function nextPage() {
  return {
    type: Types.NEXT_PAGE,
  };
}

/**
 * previousPage
 *
 * handle PREVIOUS_PAGE actions
 *
 * @param payload
 */
export function previousPage() {
  return {
    type: Types.PREVIOUS_PAGE,
  };
}