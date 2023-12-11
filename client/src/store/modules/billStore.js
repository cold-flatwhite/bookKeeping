import { createSlice } from "@reduxjs/toolkit";
import axois from "axios";

const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = billStore.actions;
const getBillList = () => {
  return async (dispatch) => {
    try {
      const res =await axois.get(`${process.env.REACT_APP_API_URL}/bill`);
      dispatch(setBillList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const reducer = billStore.reducer;
export { getBillList };
export default reducer;
