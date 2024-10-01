import { React, useState } from 'react';
import './App.css';
import Header from './Components/header';
import ItemDetails from './Components/ItemDetails';
import SupplierDetails from './Components/SupplierDetails';
import SubmittedData from './Components/SubmittedData';
import GetDataTable from './Components/getDataTable';


function App() {
  const [item, setItem] = useState(true);
  const [supplier, setSupplier] = useState(false);


  const [itemName, setInemName] = useState("");
  console.log("itemName---- ", itemName)
  const [itemQuantity, setItemQuantity] = useState("");

  const [unitPrice, setUnitPrice] = useState("");
  const [dateSubmit, setDateSubmit] = useState("");


  console.log(item)
  console.log(supplier)
  return (
    <div className="App">
      <Header
        item={item}
        setItem={setItem}
        supplier={supplier}
        setSupplier={setSupplier}></Header>
      {item && <ItemDetails
      itemName={itemName}
      setInemName={setInemName}
      unitPrice={unitPrice}
      setUnitPrice={setUnitPrice}
      itemQuantity={itemQuantity}
      setItemQuantity={setItemQuantity}
      dateSubmit={dateSubmit}
      setDateSubmit={setDateSubmit}

      ></ItemDetails>}
      {supplier && <SupplierDetails></SupplierDetails>}
      <SubmittedData></SubmittedData>
      <GetDataTable></GetDataTable>
    </div>
  );
}

export default App;
