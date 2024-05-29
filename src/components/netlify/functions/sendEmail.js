const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Método inválido.' }),
    };
  }

  const { name, email, whatsapp, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'slidetechnologys@gmail.com',
      pass: process.env.EMAIL_PASSWORD, // Use variáveis de ambiente para segurança
    },
  });

  const mailOptions = {
    from: email,
    to: 'slidetechnologys@gmail.com',
    subject: 'Nova mensagem do formulário de contato',
    text: `Nome: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nMensagem:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Mensagem enviada com sucesso.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Erro ao enviar mensagem.', error: error.message }),
    };
  }
};