const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const options = {
  auth: {
    api_key: process.env.API_KEY_SENDGRID,
  },
};
const mailer = nodemailer.createTransport(sendgridTransport(options));

const sendEmail = function (type, object) {
  switch (type) {
    case "refund-request":
      try {
        mailer.sendMail({
          to: object.acquierEmail,
          from: "wallet.team16.test@gmail.com",
          subject: "Solicitud de reembolso, Wallet",
          html: `<h1>El usuario ${object.issuerName} te ha solicitado que le reembolses la cantidad de ${object.amount} por la transferencia de id ${object.id}</h1>`,
        });
      } catch (err) {
        console.log(err);
      }
      break;

    case "accept-request":
      try {
        mailer.sendMail({
          to: object.issuerEmail,
          from: "wallet.team16.test@gmail.com",
          subject: "Aceptación de reembolso, Wallet",
          html: `<h1>El usuario ${object.acquierName} ha aceptado la solicitud de reembolso por la transferencia ${object.id}</h1>`,
        });
      } catch (err) {
        console.log(err);
      }
      break;

    case "reject-request":
      try {
        mailer.sendMail({
          to: object.issuerEmail,
          from: "wallet.team16.test@gmail.com",
          subject: "Rechazo de reembolso, Wallet",
          html: `<h1>El usuario ${object.acquierName} ha rechazado la solicitud de reembolso por la transferencia de id ${object.id}</h1>`,
        });
      } catch (err) {
        console.log(err);
      }
      break;

    case "cancel-reject":
      try {
        mailer.sendMail({
          to: object.acquierEmail,
          from: "wallet.team16.test@gmail.com",
          subject: "Cancelación de reembolso, Wallet",
          html: `<h1>El usuario ${object.issuerName} ha cancelado su solicitud de reembolso por la transferencia de id ${object.id}</h1>`,
        });
      } catch (err) {
        console.log(err);
      }
      break;
  }
};

module.exports = {
  sendEmail,
};
