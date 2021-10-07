import React from "react";
import "../styles/Products.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table"
import ToolBar from "./common/ToolBar";

const Productos = () => {
  const products = [
    {
      id: 1,
      name: "Juice - V8, Tomato",
      descripcion: "LDR Brachytherapy of Sinuses using Palladium 103",
      stock: 54,
      price: 78.66,
      img: "http://dummyimage.com/107x100.png/ff4444/ffffff",
    },
    {
      id: 2,
      name: "Appetizer - Cheese Bites",
      descripcion: "Bypass Sup Vena Cava to L Pulm Vn w Nonaut Sub, Open",
      stock: 344,
      price: 16.58,
      img: "http://dummyimage.com/105x100.png/cc0000/ffffff",
    },
    {
      id: 3,
      name: "Plasticspoonblack",
      descripcion: "Dilate Hepatic Art w 2 Intralum Dev, Perc Endo",
      stock: 500,
      price: 81.67,
      img: "http://dummyimage.com/250x100.png/ff4444/ffffff",
    },
    {
      id: 4,
      name: "Anchovy Fillets",
      descripcion: "Reposition Left Fibula with Ext Fix, Perc Approach",
      stock: 411,
      price: 39.31,
      img: "http://dummyimage.com/178x100.png/dddddd/000000",
    },
    {
      id: 5,
      name: "Gin - Gilbeys London, Dry",
      descripcion: "Replace R Ankle Tendon w Nonaut Sub, Perc Endo",
      stock: 331,
      price: 10.24,
      img: "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
    },
    {
      id: 6,
      name: "Lamb - Leg, Boneless",
      descripcion: "Extirpation of Matter from Common Bile Duct, Perc Approach",
      stock: 147,
      price: 6.92,
      img: "http://dummyimage.com/190x100.png/cc0000/ffffff",
    },
    {
      id: 7,
      name: "Milkettes - 2%",
      descripcion: "Fusion of 2-6 C Jt, Post Appr P Col, Perc Endo Approach",
      stock: 322,
      price: 90.46,
      img: "http://dummyimage.com/122x100.png/ff4444/ffffff",
    },
    {
      id: 8,
      name: "Veal Inside - Provimi",
      descripcion: "Removal of Infusion Device from Stomach, Perc Approach",
      stock: 290,
      price: 35.57,
      img: "http://dummyimage.com/115x100.png/cc0000/ffffff",
    },
    {
      id: 9,
      name: "Muffin Hinge Container 6",
      descripcion: "Replace R Ear Skin w Synth Sub, Part Thick, Extern",
      stock: 479,
      price: 59.99,
      img: "http://dummyimage.com/137x100.png/dddddd/000000",
    },
    {
      id: 10,
      name: "Wine - Sawmill Creek Autumn",
      descripcion: "Drainage of Occip Jt with Drain Dev, Open Approach",
      stock: 363,
      price: 81.49,
      img: "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
    },
    {
      id: 11,
      name: "Lumpfish Black",
      descripcion: "Removal of Nonaut Sub from Sacrum, Open Approach",
      stock: 40,
      price: 13.55,
      img: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
    {
      id: 12,
      name: "Plate Pie Foil",
      descripcion: "Excision of C-thor Jt, Open Approach, Diagn",
      stock: 165,
      price: 96.17,
      img: "http://dummyimage.com/118x100.png/cc0000/ffffff",
    },
  ];
  const headers = ["nombre", "descripcion", "stock", "precio"];


  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial >Nuevo Producto</BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={products}></Table>
    </div>
  );
};

export default Productos;
