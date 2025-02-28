import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Handle POST request (Fetch metadata & save bookmark)
export async function POST(req: NextRequest) {
  try {

    // get the url from the request body
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // ✅ Fetch metadata using linkpreview API
    let data = {q: url}
    const api_key = process.env.LIVE_PREVIEW_API
    if (!api_key) {
      console.error("API key not found");
      return NextResponse.json({ error: "API key not found" }, { status: 500 });
    }
    const metaRes = await fetch('https://api.linkpreview.net', {
      method: "POST",
      headers: { 'X-Linkpreview-Api-Key': api_key, 'Content-Type': 'application/json' },
      mode: "cors",
      body: JSON.stringify(data),
    });

    if (metaRes.status != 200) {
      console.error("Failed to fetch metadata. Status:", metaRes.status);
      return NextResponse.json({ error: "Failed to fetch metadata" }, { status: 500 });
    }

    const metadata = await metaRes.json();

    if (!metadata.title) {
      console.error("Invalid metadata response:", metadata);
      return NextResponse.json({ error: "Invalid metadata received" }, { status: 500 });
    }

    const { title, description, image } = metadata;

    // ✅ Save bookmark with metadata
    const bookmark = await prisma.bookmark.create({
      data: { url, title: title || "Untitled", description, image},
    });

    return NextResponse.json(bookmark, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/bookmarks:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// ✅ Handle GET request (Fetch all bookmarks)
export async function GET() {
  try {
    const bookmarks = await prisma.bookmark.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bookmarks);
  } catch (error) {
    console.error("Error in GET /api/bookmarks:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// ✅ Handle DELETE request (Delete a bookmark)
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (typeof id !== "string") {
      return NextResponse.json({ error: "Invalid bookmark ID" }, { status: 400 });
    }

    const bookmark = await prisma.bookmark.delete({ where: { id } });

    return NextResponse.json(bookmark);
  } catch (error) {
    console.error("Error in DELETE /api/bookmarks:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
