import React from 'react';

const Depense = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{props.titre}</h2>
      <p>Montant : {props.montant} MAD</p>
    </div>
  );
};

export default Depense;
