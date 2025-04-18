'use server';

import {Resend} from 'resend';

export const sendContactEmail = async (
  fromEmail: string,
  fromName: string,
  message: string,
  subject: string
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: `${fromName} <no-reply@rhettharrison.com>`,
      to: ['rhettharrison.dev@gmail.com'],
      replyTo: `${fromEmail}`,
      subject: `New Contact Inquiry from ${fromName}! ${subject}`,
      text: `${message}`,
    });
    await resend.emails.send({
      from: `${fromName} <no-reply@rhettharrison.com>`,
      to: fromEmail,
      subject: `Contact Confirmation from Rhett Harrison`,
      text: `Hey thanks for reaching out ${fromName}! I got your message saying "${message}". I'll reply as soon as I can.`,
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error('Internal Error');
  }
};
