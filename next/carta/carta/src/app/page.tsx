import styles from "./page.module.css";
import sanMartin from "../../public/sanmartin.png";
import ComponetFood from "../../src/app/componets/ComponetFood";
export interface Menu {
  title: string;
  price: number;
  url_imagen: string;
}
async function getUser() {
  let response = await fetch("http://192.168.0.95:3001/api/menu", {
    method: "GET",
  });

  let data = await response.json();
  console.log(data);
}
export default async function Home() {
  const data= await getUser();

  return (
    <div>
      <img src="/sanmartin.png" />
      {data?.map((food, index) => (
        <ComponetFood key={index} {...food}></ComponetFood>
      ))}
    </div>
  );
}
