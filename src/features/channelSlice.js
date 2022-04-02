import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channelId: null,

};


export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
        }
    }
});


export const { setChannelInfo } = channelSlice.actions;
export const selectChannelId = (state) => state.channel.channelId;

export default channelSlice.reducer;