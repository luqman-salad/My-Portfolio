import nodemailer from "nodemailer";

export async function POST(req){
    const {name, email, message} = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Email sent successfully"}),{status: 200,})
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: "Failed to send email"}),{status: 500})
    }
}