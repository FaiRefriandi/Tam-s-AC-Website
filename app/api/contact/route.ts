import { NextResponse } from "next/server";

interface ContactSubmission {
  name: string;
  phone: string;
  service: string;
  timestamp: string;
}

const submissions: ContactSubmission[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      name,
      phone,
      service,
      timestamp: new Date().toISOString(),
    };

    submissions.push(submission);

    return NextResponse.json(
      { message: "Submission received successfully", data: submission },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { submissions, count: submissions.length },
    { status: 200 }
  );
}
