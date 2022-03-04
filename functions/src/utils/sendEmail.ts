import fetch from 'node-fetch';
import SendEmailRequest from 'src/types/sendEmailRequest';

const emailApiRoute = 'https://api.sendgrid.com/v3/mail/send';
const apiKey =
    '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';
const fromEmail = 'Quotes@kmbpropertysolutions.com';

const getEmailContent = ({
    name,
    address,
    custEmail,
    phone,
    quoteType,
    message,
}: SendEmailRequest) =>
    `<b>${name}</b> just requested a ${quoteType} Quote,<br></br> Phone: ${phone} <br></br> Address: ${address}<br></br> Email: ${custEmail} <br></br> Message: ${message}`;

const getPersonalizations = (toEmail: string) => {
    return {
        personalizations: [{ to: [{ toEmail }], subject: 'New Quote Request' }],
    };
};
const getBody = (fromEmail: string, props: SendEmailRequest) => {
    return {
        ...getPersonalizations(props.email),
        from: {
            email: fromEmail,
            name: 'KMB Property Solutions',
        },
        content: [{ type: 'text/html', value: getEmailContent(props) }],
    };
};

const sendEmail = async (props: SendEmailRequest) =>
    await fetch(emailApiRoute, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(getBody(fromEmail, props)),
    });

export { sendEmail };
