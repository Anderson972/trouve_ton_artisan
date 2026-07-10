
const Artisan = require('../models/artisan');
const nodemailer = require('nodemailer');

const MAIL_PORT = process.env.MAIL_PORT
const MAIL_HOST = process.env.MAIL_HOST
const MAIL_NAME = process.env.MAIL_NAME
const MAIL_PASS = process.env.MAIL_PASSWORD

const transporter = nodemailer.createTransport({host: MAIL_HOST,port: MAIL_PORT, auth: {user: MAIL_NAME, pass: MAIL_PASS}})

exports.sendForm = async (req, res) => {

    const form = ({
        nom     : req.body.nom,
        mail    : req.body.mail,
        objet   : req.body.objet,
        message : req.body.message
    })

    const mailReceiver = req.body.id_artisan

    try {
        for (const [field, valeur] of Object.entries(form)) {
            if (!valeur) {
                return res.status(400).json({message : `le champ ${field} est vide.`})
            }
        };
        const artisan = await Artisan.findByPk(mailReceiver)
        if (!artisan) {
            return res.status(404).json({message: 'Cet artisan n\'existe pas'})
        }
        await transporter.sendMail({from: form.mail, to: artisan.mail, subject: form.objet, text: form.message})
        return res.status(200).json({message: 'Message envoyé'})

    } catch (error) {
        console.error("erreur lors de l\'envoie du mail", error)
        return res.status(500).json({message : "erreur serveur mail"})
    }

};