import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import ChildInput from './ChildInput';
import AssetInput from './AssetInput';
import { useRouter } from 'next/router';

const InputForm = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      nome: '',
      conjuge: '',
      regime: '',
      filhos: [],
      bens: []
    }
  });

  const { fields: filhoFields, append: appendFilho } = useFieldArray({
    control,
    name: 'filhos'
  });

  const { fields: bemFields, append: appendBem } = useFieldArray({
    control,
    name: 'bens'
  });

  const router = useRouter();

  const onSubmit = data => {
    // Armazena os dados para uso na página de resultados
    localStorage.setItem('formData', JSON.stringify(data));
    router.push('/resultados');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Calculadora de Custos de Holding</h1>
      <div>
        <label>Nome:</label>
        <input type="text" {...register('nome', { required: true })} />
      </div>
      <div>
        <label>Cônjuge:</label>
        <input type="text" {...register('conjuge')} />
      </div>
      <div>
        <label>Regime de Bens:</label>
        <input type="text" {...register('regime')} />
      </div>

      <h2>Filhos</h2>
      {filhoFields.map((field, index) => (
        <ChildInput key={field.id} index={index} register={register} />
      ))}
      <button type="button" onClick={() => appendFilho({ nome: '', idade: '', estadoCivil: '', regime: '' })}>
        Adicionar Filho
      </button>

      <h2>Bens</h2>
      {bemFields.map((field, index) => (
        <AssetInput key={field.id} index={index} register={register} />
      ))}
      <button type="button" onClick={() => appendBem({ descricao: '', valorIRPF: '', valorMercado: '', estado: '' })}>
        Adicionar Bem
      </button>

      <button type="submit">Calcular</button>
    </form>
  );
};

export default InputForm;
