import emailjs from 'emailjs-com';

export const sendEmailNotification = (data) => {
  const serviceID = 'service_24pw6lm';
  const templateID = 'template_awt9o98';
  const userID = 'RORh3wwHumDQ_kS7T';

  const templateParams = {
    nome: data.nome,
    mensagem: 'O PDF da calculadora de custos de holding foi baixado.'
  };

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then(response => {
      console.log('Email enviado com sucesso!', response.status, response.text);
    })
    .catch(err => {
      console.error('Erro ao enviar email:', err);
    });
};
