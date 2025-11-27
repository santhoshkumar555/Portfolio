'use server';

import { Resend } from 'resend';
import ContactFormEmail from '@/emails/ContactFormEmail';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Basic validation
    if (!name || !email || !subject || !message) {
        return { error: 'Please fill in all fields.' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Use onboarding domain for testing if no custom domain
            to: ['santhoshkumar.g9845@gmail.com'],
            subject: `Portfolio Contact: ${subject}`,
            replyTo: email,
            react: React.createElement(ContactFormEmail, {
                name,
                email,
                subject,
                message,
            }),
        });

        if (error) {
            console.error('Resend Error:', error);
            return { error: 'Failed to send message. Please try again.' };
        }

        return { success: 'Message sent successfully!' };
    } catch (error) {
        console.error('Server Error:', error);
        return { error: 'Something went wrong. Please try again.' };
    }
}
