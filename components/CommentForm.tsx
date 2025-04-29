'use client';

import { useState } from 'react';

export default function CommentForm({ postId }: { postId: string }) {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/create-comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, postId }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', comment: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Your Comment"
          required
          className="w-full p-2 border border-gray-300 rounded h-28"
        ></textarea>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-cyan-600 text-white py-2 px-6 rounded hover:bg-cyan-700 disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting...' : 'Post Comment'}
        </button>

        {status === 'success' && <p className="text-green-600">Thanks! Your comment is submitted for review.</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
