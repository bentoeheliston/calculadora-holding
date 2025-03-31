import React from 'react';
import dynamic from 'next/dynamic';
import { sendEmailNotification } from '../services/emailService';

// Remova o import estático de jsPDF
// Em vez disso, use importação dinâmica somente no cliente
const PDFDownload = ({ userData }) => {

  const generatePDF = async () => {
    // Carrega o jsPDF dinamicamente somente no lado do cliente
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();

    const content = document.getElementById('resultado-content');
    doc.html(content, {
      callback: function (doc) {
        doc.save('resultado_holding.pdf');
        sendEmailNotification({ nome: userData.nome });
      },
      x: 10,
      y: 10
    });
  };

  return (
    <button onClick={generatePDF}>Baixar PDF</button>
  );
};

export default PDFDownload;
