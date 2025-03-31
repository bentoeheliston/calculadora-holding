import React from 'react';

const ResultsSection = ({ title, data }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>{title}</h2>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ width: '100%' }}>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td><strong>{key}</strong></td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr style={{ border: '2px solid #142437', margin: '30px 0' }} />
    </div>
  );
};

export default ResultsSection;
