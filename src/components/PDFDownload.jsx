import React from 'react';
import jsPDF from 'jspdf';
import { sendEmailNotification } from '../services/emailService';

const PDFDownload = ({ userData }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    const content = document.getElementById('resultado-content');
    doc.html(content, {
      callback: function (doc) {
        doc.save('resultado_holding.pdf');
        // Envia o e-mail após salvar o PDF
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
