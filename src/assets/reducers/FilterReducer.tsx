export const FilterReducer = (state, action) => {
  const { type, payload } = action;


switch (type) {
  case "PRODUCT_LIST":
    return

  case "SORT_BY":
    return

  case "RATINGS":
    return

  case "BEST_SELLER_ONLY":
    return

  case "ONLY_IN_STOCK":
    return

  case "CLEAR_FILTER":
    return

  default:
     throw new Error("no case found")
}
};