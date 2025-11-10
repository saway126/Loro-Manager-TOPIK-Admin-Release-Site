
import { NextResponse } from 'next/server';
import { contactFormSchema } from '../../support/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ message: 'Invalid input', errors: validation.error.formErrors }, { status: 400 });
    }

    // At this point, the data is validated.
    const { name, email, title, message } = validation.data;

    console.log('New Support Inquiry Received:');
    console.log({ name, email, title, message });

    // --- TODO: Integrate a real email/ticketing service here ---
    // Example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-support-email@example.com',
    //   subject: `[Support] ${title}`,
    //   html: `<p>From: ${name} &lt;${email}&gt;</p><div>${message}</div>`,
    // });
    // -----------------------------------------------------------

    return NextResponse.json({ message: 'Inquiry received successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}