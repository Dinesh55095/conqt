import { React, useState } from 'react';
import './App.css';
import Header from './Components/header';
import ItemDetails from './Components/ItemDetails';
import SupplierDetails from './Components/SupplierDetails';
import SubmittedData from './Components/SubmittedData';




function App() {
  const [item, setItem] = useState(true);
  const [supplier, setSupplier] = useState(false);

  console.log(item)
  console.log(supplier)
  return (
    <div className="App">
    <Header  item={item} setItem={setItem} supplier={supplier} setSupplier={setSupplier}></Header>
    {item && <ItemDetails></ItemDetails>}
    {supplier && <SupplierDetails></SupplierDetails>}
    <SubmittedData></SubmittedData>
    </div>
  );
}

export default App;
