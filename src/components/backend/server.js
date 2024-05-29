const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/sendEmail', async (req, res) => {
  const { name, email, whatsapp, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'slidetechnologys@gmail.com',
      pass: 'marketing@digital@777', 
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
    res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao enviar mensagem.', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});