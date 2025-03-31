import React from 'react';

const ChildInput = ({ index, register }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <h3>Filho(a) {index + 1}</h3>
      <div>
        <label>Nome:</label>
        <input type="text" {...register(`filhos.${index}.nome`, { required: true })} />
      </div>
      <div>
        <label>Idade:</label>
        <input type="number" {...register(`filhos.${index}.idade`, { required: true })} />
      </div>
      <div>
        <label>Estado Civil:</label>
        <input type="text" {...register(`filhos.${index}.estadoCivil`, { required: true })} />
      </div>
      <div>
        <label>Regime de Bens:</label>
        <input type="text" {...register(`filhos.${index}.regime`)} />
      </div>
    </div>
  );
};

export default ChildInput;
