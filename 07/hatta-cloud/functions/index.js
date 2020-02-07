const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });
require('dotenv').config();

exports.sendEmail = functions.https.onRequest((request, response) => {
    sgMail.setApiKey(functions.config().sendgrid.key);
    
    const msg = {
    to: 'beu51835@eveav.com',
    from: request.body.email,
    subject: `New message from ${request.body.name}`,
    text: request.body.message,
    };
    
    cors(request, response, () => {
        sgMail.send(msg, (err, res) => {
            if (err) {
                response.send(500);
            } else {
                response.send(res);
            }
        });    
    })
});
 