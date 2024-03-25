const express = require("express");
const database = require("../models/db");
const routerCarta = express.Router();

routerCarta.get("/menu", async (req, res) => {
  try {
    const conection = await database.getConnection();
    const result = await conection.query("SELECT * FROM menu; ");
    res.status(200).json(result);
  } catch (error) {
    console.log(`error en la consulta`, error);
    await conection.end();
    res.status(500).json({ error: error });
  }
});
routerCarta.post("/menu", async (req, res) => {
  const conection = await database.getConnection();
  let { title, price, url_imagen } = req.body;

  try {
    await conection.query(
      `INSERT INTO menu (  title, price, url_imagen ) VALUES (?,?,?);`,
      [title, price, url_imagen]
    );
    res.status(200).json({ message: "salio bien" });
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error en la consulta" });
  }
});

routerCarta.put("/menu/:id", async (req, res) => {
  const conection = await database.getConnection();
  const id = req.params.id;
  let { title, price, url_imagen } = req.body;
  console.log(id);
  try {
    await conection.query(
      `UPDATE menu
      SET title = ?, price = ?,url_imagen = ?
      WHERE id = ?`,
      [title, price, url_imagen, id]
    );
    res.status(200).json({ message: "salio bien" });
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error en la consulta" });
  }
});

routerCarta.delete("/menu/:id", async (req, res) => {
  const conection = await database.getConnection();
  const id = req.params.id;
  let { title, price, url_imagen } = req.body;
  console.log(id);
  try {
    await conection.query(
      `DELETE FROM menu
        WHERE id = ?;`,
      [id]
    );
    res.status(200).json({ message: "salio bien" });
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error en la consulta" });
  }
});
module.exports = routerCarta;
