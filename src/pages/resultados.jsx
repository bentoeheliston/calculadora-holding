import React, { useEffect, useState } from 'react';
import ResultsSection from '../components/ResultsSection';
import PDFDownload from '../components/PDFDownload';
import { calculateResults } from '../services/calculations';
import '../styles/global.css';

const Resultados = () => {
  const [results, setResults] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData'));
    setUserData(data);
    const calculatedResults = calculateResults(data);
    setResults(calculatedResults);
  }, []);

  if (!results || !userData) {
    return <div>Carregando...</div>;
  }

  return (
    <div id="resultado-content" className="container">
      <h1>Resultados da Calculadora de Custos de Holding</h1>
      
      {results.map((section, index) => (
        <ResultsSection key={index} title={section.title} data={section.data} />
      ))}

      <PDFDownload userData={userData} />
    </div>
  );
};

export default Resultados;
