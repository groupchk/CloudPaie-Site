// import nodemailer from 'nodemailer';
// import type { DemoRequestFormData } from '../lib/DemoRequestFormData';


// const RECEIVER_EMAIL = 'e.ahoua@chkgroupe.com';

// export async function sendFormMail(formData: DemoRequestFormData): Promise<void> {
//     // Configure your SMTP transporter (replace with your SMTP details)
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.cloudpaie.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'notifications@cloudpaie.com',
//             pass: 'MariamJoue225@',
//         },
//     });

//     const mailOptions = {
//        from: `"${formData.name}" <${formData.email}>`,
//        to: RECEIVER_EMAIL,
//         subject: `Nouvelle demande de démo - ${formData.company}`,
//         html: `
//         <h2>Vous avez reçu une nouvelle demande via le formulaire de démo :</h2>
//         <ul>
//             <li><strong>Nom :</strong> ${formData.name}</li>
//             <li><strong>Email :</strong> ${formData.email}</li>
//             <li><strong>Société :</strong> ${formData.company}</li>
//             <li><strong>Pays :</strong> ${formData.country}</li>
//             <li><strong>Taille de l’effectif :</strong> ${formData.size}</li>
//             <li><strong>Intérêt principal :</strong> ${formData.interest}</li>
//         </ul>
//         <p><strong>Message :</strong></p>
//         <p>${formData.message || "—"}</p>
//         `,
//     };

//     await transporter.sendMail(mailOptions);
// }