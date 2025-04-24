import React, { useState } from 'react';

function App() {

  const [titre, setTitre] = useState('');
  const [montant, setMontant] = useState('');
  const [depenses, setDepenses] = useState([]);

  const ajouterDepense = () => {
    if (!titre || !montant) return alert("remlir tous les champs !");

    const nouvelleDepense = {
      id: Date.now(), 
      titre,
      montant: parseFloat(montant)
    };

    setDepenses([...depenses, nouvelleDepense]); 
    setTitre(''); 
    setMontant('');
  };

  function Supprimer(id){
   const nouvellList =  depenses.filter(dep)

  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>BudgetBuddy</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Titre de la dépense"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Montant"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
        />
        <button onClick={ajouterDepense}>Ajouter Dépense</button>
      </div>

      <h2>Liste des dépenses :</h2>
      {depenses.map((dep) => (
        <div key={dep.id} style={{ marginBottom: '10px' }}>
           {dep.titre} — {dep.montant} MAD — <button onClick={Supprimer(dep.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}

export default App;
