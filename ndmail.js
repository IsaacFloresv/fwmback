
import nodemailer from 'nodemailer'

const Usuario = 'isflores@grupoalegacr.com'
const Pass = 'Gacela2022'

const enviarM = (datos) => {
    const trasmporter = nodemailer.createTransport({
        host: 'mail.grupoalegacr.com',
        port: 26,
        secure: false,
        auth: {
            user: Usuario,
            pass: Pass,
        },
    })
}

const info = await transporter.sendMail({
    from: datos.remit,
    to: datos.destina,
    subject: "Prueba de correo Meic",
    text: "Prueba de correo de solicitud de Asesoria por medio de la Web",
    html: "<p>Aqui va la informacion</p>",
}, (err, info) => {
    if (err) res.status(200).send({ success: false })
})