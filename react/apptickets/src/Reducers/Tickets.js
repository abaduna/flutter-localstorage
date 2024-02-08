import { SET_TICKETS, ADD_QUANTITY } from "../Action/Tickets";

const initialState = {
  tickets: [],
  total: 0,
};
const getTotal = (tickets) =>
  tickets
    .map((ticket) => +ticket.precio * +ticket.cantidad)
    .reduce((prev, current) => prev + current, 0);
export const ticketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        tickets: action.payload.tickets,
        total: getTotal(state.tickets),
      };
    }
    case ADD_QUANTITY: {
      const tickets = state.tickets.map(
        (ticket) =>
          ticket.id === action.payload.id
            ? { ...ticket, cantidad: ticket.cantidad + 1 }
            : ticket // Return the unchanged ticket for other cases
      );
      return {
        tickets,
        total: getTotal(tickets),
      };
    }
    default:
      return state;
  }
};
