export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you can add your email sending logic
    // For now, we'll just log it and return success
    console.log("Contact form submission:", body);

    // You can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer
    // - Your own backend service

    return Response.json(
      { message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
