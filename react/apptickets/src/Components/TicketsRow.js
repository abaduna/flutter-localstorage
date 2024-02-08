import { Table } from "react-bootstrap";
function TicketsRow({
  id,
  descripcion,
  precio,
  cantidad,
  addTcketQuantity,
  subtrackTicketQuantyti,
}) {
  return (
    <tr>
      <td className="text-center">{descripcion}</td>
      <td className="text-center">${precio}</td>
      <td className="text-center">
        {" "}
        <button
          className="btn btn-primary m-3"
          onClick={subtrackTicketQuantyti}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          className="btn btn-primary m-3"
          onClick={() => addTcketQuantity(id)}
        >
          +
        </button>
      </td>
    </tr>
  );
}

export default TicketsRow;
