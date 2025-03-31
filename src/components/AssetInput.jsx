import React from 'react';

const AssetInput = ({ index, register }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <h3>Bem {index + 1}</h3>
      <div>
        <label>Descrição do Bem:</label>
        <input type="text" {...register(`bens.${index}.descricao`, { required: true })} />
      </div>
      <div>
        <label>Valor IRPF:</label>
        <input type="number" step="0.01" {...register(`bens.${index}.valorIRPF`, { required: true })} />
      </div>
      <div>
        <label>Valor de Mercado:</label>
        <input type="number" step="0.01" {...register(`bens.${index}.valorMercado`, { required: true })} />
      </div>
      <div>
        <label>Estado:</label>
        <select {...register(`bens.${index}.estado`, { required: true })}>
          <option value="">Selecione</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
      </div>
    </div>
  );
};

export default AssetInput;
