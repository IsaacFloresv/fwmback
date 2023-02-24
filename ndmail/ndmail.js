
import nodemailer from 'nodemailer'

const Usuario = 'isflores@grupoalegacr.com'
const Pass = 'Gacela2022'

export const sendMail = (req, res) => {

    console.log('Entramos')
    const createTransp = () => {
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "6e1a2a16c86e9e",
              pass: "5038f9d789c3fb"
            }
          })
    
        return transport
    }
    
    const transporter = createTransp()
    transporter
    .verify()
    .then(()=> console.log('Listo para enviar correo'))

    try {
        const info =  transporter.sendMail({
            from: "<prueba@prueba.com>",
            to: "<isaacfloresv@gmail.com>",
            subject: "Prueba de correo Meic",
            text: "Prueba de correo de solicitud de Asesoria por medio de la Web",
            html: "<p>Aqui va la informacion</p>",
        })

        console.log("Message sent: %s", info.messageId)
    } catch (error) {
        res.status(200).send({ success: false })
    }
}