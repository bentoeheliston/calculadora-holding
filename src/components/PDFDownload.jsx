import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { sendEmailNotification } from '../services/emailService';

const PDFDownloadComponent = ({ userData }) => {
  const generatePDF = useCallback(async () => {
    if (typeof window === 'undefined') return; // Garante que seja executado no cliente
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
  }, [userData]);

  return (
    <button onClick={generatePDF}>Baixar PDF</button>
  );
};

// Exporta o componente de forma dinâmica, desabilitando o SSR:
export default dynamic(() => Promise.resolve(PDFDownloadComponent), { ssr: false });
