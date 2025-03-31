export const calculateResults = (data) => {
  // Implementar as fórmulas de cálculo conforme as planilhas (3 a 9)
  // Aqui, retornamos resultados de exemplo.

  const inventario = {
    "BASE DE CÁLCULO": "1.416.021,53",
    "CARTÓRIO DE NOTAS": "R$ 7.080,11",
    "CERTIDÕES": "R$ 5.000,00",
    "CARTÓRIO DE IMÓVEIS": "R$ 7.080,11",
    "HONORÁRIOS": "70.801,08",
    "IMPOSTO": "113.281,72",
    "TOTAL": "R$ 203.243,01"
  };

  const doacao = {
    "BASE DE CÁLCULO": "1.416.021,53",
    "CARTÓRIO DE NOTAS": "R$ 7.080,11",
    "CERTIDÕES": "R$ 5.000,00",
    "CARTÓRIO DE IMÓVEIS": "R$ 7.080,11",
    "HONORÁRIOS": "0",
    "IMPOSTO": "113.281,72",
    "TOTAL": "R$ 132.441,94",
    "DIFERENÇA DO INVENTÁRIO": "R$ 79.947,01 (38%)"
  };

  const umaCelula = {
    "BASE DE CÁLCULO": "1.708.418,11",
    "CARTÓRIO DE IMÓVEIS": "R$ 8.542,09",
    "JUNTA COMERCIAL": "R$ 1.350,00",
    "CONTADOR ASSISTENTE": "R$ 1.500,00",
    "HONORÁRIOS": "85.200,00",
    "IMPOSTO": "136.673,45",
    "TOTAL": "R$ 233.265,54",
    "DIFERENÇA DO INVENTÁRIO": "-R$ 20.876,59 (-10%)",
    "CUSTO DE CONTABILIDADE MENSAL": "R$ 200,00",
    "CUSTO DE CONTABILIDADE ANUAL": "R$ 2.400,00"
  };

  const duasCelulas = {
    "BASE DE CÁLCULO": "1.708.418,11",
    "CARTÓRIO DE IMÓVEIS": "R$ 8.542,09",
    "JUNTA COMERCIAL": "R$ 1.350,00",
    "CONTADOR ASSISTENTE": "R$ 1.500,00",
    "HONORÁRIOS": "97.200,00",
    "IMPOSTO": "3.416,84",
    "TOTAL": "R$ 112.008,93",
    "DIFERENÇA DO INVENTÁRIO": "R$ 100.380,02 (47%)",
    "CUSTO DE CONTABILIDADE MENSAL": "R$ 300,00",
    "CUSTO DE CONTABILIDADE ANUAL": "R$ 3.600,00"
  };

  const tresCelulas = {
    "BASE DE CÁLCULO": "1.708.418,11",
    "CARTÓRIO DE IMÓVEIS": "R$ 8.542,09",
    "JUNTA COMERCIAL": "R$ 1.350,00",
    "CONTADOR ASSISTENTE": "R$ 1.500,00",
    "HONORÁRIOS": "99.600,00",
    "IMPOSTO": "4.000,00",
    "TOTAL": "R$ 114.992,09",
    "DIFERENÇA DO INVENTÁRIO": "R$ 97.396,86 (46%)",
    "CUSTO DE CONTABILIDADE MENSAL": "R$ 300,00",
    "CUSTO DE CONTABILIDADE ANUAL": "R$ 3.600,00"
  };

  return [
    { title: 'Inventário (Planilha 3)', data: inventario },
    { title: 'Doação (Planilha 4)', data: doacao },
    { title: 'Uma Célula (Planilha 5)', data: umaCelula },
    { title: 'Duas Células (Planilha 6)', data: duasCelulas },
    { title: 'Três Células (Planilha 7)', data: tresCelulas }
    // Adicione mais seções para as planilhas 8 e 9 se necessário
  ];
};
