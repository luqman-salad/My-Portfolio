// app/api/create-comment/route.ts
import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { nanoid } from 'nanoid';

const config = {
  projectId: 'expzpmba',
  dataset: 'production',
  apiVersion: '2023-03-25',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
};

const client = createClient(config);

export async function POST(req: Request) {
  try {
    const { name, email, comment, postId } = await req.json();

    // 1. Create the comment document
    const newComment = await client.create({
      _type: 'comment',
      name,
      email,
      comment,
      post: {
        _type: 'reference',
        _ref: postId,
      },
    });

    // 2. Append the comment reference to the post, with a unique _key
    await client
      .patch(postId)
      .setIfMissing({ comments: [] })
      .append('comments', [
        {
          _type: 'reference',
          _ref: newComment._id,
          _key: nanoid(), // ✅ use nanoid for unique _key
        },
      ])
      .commit();

    return NextResponse.json({ message: 'Comment submitted successfully!' });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to submit comment' }, { status: 500 });
  }
}
