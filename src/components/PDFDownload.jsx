import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { sendEmailNotification } from '../services/emailService';

const PDFDownloadComponent = ({ userData }) => {
  const generatePDF = useCallback(async () => {
    if (typeof window === 'undefined') return; // Só executa no cliente
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();

    // Substituição: em vez de doc.html, usa doc.text para escrever "Teste PDF"
    doc.text("Teste PDF", 10, 10);
    doc.save('resultado_holding.pdf');

    // Envia o e-mail após salvar o PDF
    sendEmailNotification({ nome: userData.nome });
  }, [userData]);

  return (
    <button onClick={generatePDF}>Baixar PDF</button>
  );
};

// Exporta o componente dinamicamente com SSR desabilitado:
export default dynamic(() => Promise.resolve(PDFDownloadComponent), { ssr: false });

