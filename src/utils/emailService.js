import emailjs from '@emailjs/browser';
import { env } from '../consts/env';

export const sendEmailService = async (data) => {
  try {
    const result = await emailjs.send(
      env.emailServiceId,
      env.emailTemplateId,
      data,
      env.emailPublicKey
    );

    console.log('✅ Email sent successfully:', result.text);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('❌ Email send failed:', error);
    return { success: false, message: 'Failed to send email.' };
  }
};
