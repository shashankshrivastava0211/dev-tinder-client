const connectionRequestSlice = createSlice({
  name: "connectionRequest",
  initialState: null,
  reducers: {
    addConnectionRequest: (state, action) => {
      return action.payload;
    },
  },
});

export const { addConnectionRequest } = connectionRequestSlice.actions;

export default connectionRequestSlice;
