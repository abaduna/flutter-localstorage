import styles from "./page.module.css";
import sanMartin from "../../public/sanmartin.png";
import ComponetFood from "../../src/app/componets/ComponetFood";
export interface Menu {
  title: string;
  price: number;
  url_imagen: string;
}
async function getUser() {
  try {
    const res = await fetch("http://192.168.0.95:3001/Api/menu");
    if (!res.ok) {
      console.log("ok");

      throw new Error("Network response was not ok");
    }
    console.log(res);

    const { data } = await res.json();
    console.log(`data ${data}`);
    return data;
  } catch (error) {
    console.log(`catch`);

    console.error("There was a problem with the fetch operation:", error);
    return null; // Opcional: puedes manejar el error de otra manera según tus necesidades
  }
}
export default async function Home() {
  const data: Menu[] = await getUser();

  return (
    <div>
      <img src="/sanmartin.png" />
      {data?.map((food, index) => (
        <ComponetFood key={index} {...food}></ComponetFood>
      ))}
    </div>
  );
}
