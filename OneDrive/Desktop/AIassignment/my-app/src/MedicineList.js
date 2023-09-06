import React from 'react';

function MedicineList({ medicines }) {
  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            {medicine.name} - Quantity: {medicine.quantity}, Price: ${medicine.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
