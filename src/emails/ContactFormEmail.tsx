import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

interface ContactFormEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactFormEmail({
    name,
    email,
    subject,
    message,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio: {subject}</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black font-sans">
                    <Container className="bg-white my-10 mx-auto p-10 rounded-lg shadow-lg">
                        <Heading className="text-2xl font-bold text-gray-800 mb-4">
                            New Contact Form Submission
                        </Heading>
                        <Text className="text-gray-600 mb-4">
                            You received a new message from your portfolio website.
                        </Text>
                        <Hr className="border-gray-300 my-6" />
                        <Section className="mb-6">
                            <Text className="font-bold text-gray-700">Name:</Text>
                            <Text className="text-gray-900 mb-4">{name}</Text>

                            <Text className="font-bold text-gray-700">Email:</Text>
                            <Text className="text-gray-900 mb-4">{email}</Text>

                            <Text className="font-bold text-gray-700">Subject:</Text>
                            <Text className="text-gray-900 mb-4">{subject}</Text>

                            <Text className="font-bold text-gray-700">Message:</Text>
                            <Text className="text-gray-900 whitespace-pre-wrap">{message}</Text>
                        </Section>
                        <Hr className="border-gray-300 my-6" />
                        <Text className="text-gray-500 text-sm text-center">
                            Sent from your Portfolio Website
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
