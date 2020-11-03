import { createSlice } from '@reduxjs/toolkit';

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: [{id: 1, name: 'First ticket'}, {id: 2, name: 'Second ticket'}],
  reducers: {
    addTicket: (state, ticket) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(ticket);
    },
    removeTicket: (state, ticket) => {
      const index = state.findIndex(el => el.id === ticket.id);
      if(~index){
        state.splice(index, 1);
      }
    },
    updateTicket: (state, ticket) => {
      const index = state.findIndex(el => el.id === ticket.id);
      if(~index){
        state.splice(index, 1, ticket);
      }
    },
  },
});

export const { addTicket, removeTicket, updateTicket } = ticketSlice.actions;
export const tickets = state => state.tickets;

export default ticketSlice.reducer;
