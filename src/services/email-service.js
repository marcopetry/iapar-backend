const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.send = async (to, subject, body) => {
    sgMail.send({
        to: to,
        from: 'test@example.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    });
}
