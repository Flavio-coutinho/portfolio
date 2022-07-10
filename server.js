const express = require('expres');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express()
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL.PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "*********@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Read to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "*********@gmail.com",
        subject: "Contact Form Submissiom - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>message: ${message}</p>`,
    };
    contactEmail.sendEmail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent"});
        }
    });
});
