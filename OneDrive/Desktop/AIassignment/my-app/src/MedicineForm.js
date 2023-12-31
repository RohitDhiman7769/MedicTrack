import React, { useState } from 'react';

function MedicineForm({ addMedicine }) {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const medicine = {
      name: medicineName,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    addMedicine(medicine);

    setMedicineName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Medicine Name:
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default MedicineForm;
