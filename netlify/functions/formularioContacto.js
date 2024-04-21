const nodemailer = require("nodemailer");
const { config } = require("dotenv");
const { Subject } = require("rxjs");
config();

const trasnport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWROD,
  }
});

function enviarMail(){
  return new Promise((resolve, reject) => {
    trasnport.sendMail(mail, (error,_ ) => {
      error
        ? reject({
          statusCode: 500,
          body: error
        })
        : resolve({
          statusCode: 200,
          body: "Email enviado con exito a: " + mail.to
        })
    })
  })
}

function generarCuerpoMensaje(params) {
return `Formulario de contacto enviado por ${params.name} - ${params.email}.
El mensaje es el siguiente:
${params.message}
`;
}

exports.handler = async (event, context) => {
  switch(event.httpMethod){
    case "POST":
      const params = JSON.parse(event.body);
      console.log("Recibi una solicitud con estos parametros: ", params);
      console.log(process.env.EMAIL_USER);
      console.log(process.env.EMAIL_HOST);
      // return{
      //   statusCode: 200,
      //   message: "Mensaje enviado: " + params
      // };
      return await enviarMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "CONTACTO - FRONTEND PORTAFOLIO",
        html: generarCuerpoMensaje(params)
      });
    default:
      return{
        statusCode: 405,
        message: "Metodo no soportado"
      }
  }
}
