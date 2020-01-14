import { GET_VENDOR_LIST } from "../constants";

// send filters
export const getVendorList = (sorting, filter, service) => {
  return {
    type: GET_VENDOR_LIST,
    sorting, filter, service
  };
};
