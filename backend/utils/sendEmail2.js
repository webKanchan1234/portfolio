const nodeMailer = require("nodemailer");

const sendEmail2 = async (options) => {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        type: "SMTP",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: "kanchankr15153795@gmail.com",
            pass: "quzhxcqfdoxrlagr",
        },
    });
    console.log(options.email)
    const emailOptions = {
        to: "kanchn1551@gmail.com",
        from: `${options.email}`,
        subject: options.subject,
        text: options.stringMessage,
    };
    console.log(emailOptions.from)
    await transporter.sendMail(emailOptions);
};

module.exports = sendEmail2;