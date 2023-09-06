import './App.css';
import React, { useState } from 'react';
import MedicineForm from './MedicineForm';
import MedicineList from './MedicineList';

function App() {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (medicine) => {
    // Add the new medicine to the list
    setMedicines([...medicines, medicine]);
  };

  return (
    <div className="App">
      <h1>Medicine Store</h1>
      <MedicineForm addMedicine={addMedicine} />
      <MedicineList medicines={medicines} />
    </div>
  );
}

export default App;
