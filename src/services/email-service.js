const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const emailHtml = require('../utils/emailHtml');

exports.send = async (to, token) => {
    sgMail.send({
        to: to,
        from: 'noreply@iapar.com',
        subject: 'Confirmação de cadastro IAPAR',
        text: 'and easy to do anywhere, even with Node.js',
        html: emailHtml.emailHtml(token),
    });
}
