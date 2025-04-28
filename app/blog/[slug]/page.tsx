import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import { PortableTextComponent } from '@/components/PortableTextComponent';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface Post {
  _id: string;
  title: string;
  body: any;
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
}


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body[]{
    ...,
    asset->{
      url
    }
  },
  publishedAt,
  author->{
    name,
    image
  }
}`;

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const post: Post | null = await client.fetch(query, { slug: params.slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="mt-25 p-6">
      <p className='mb-5'>Blog &gt; <span className='text-gray-500'>{post.title}</span></p>
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

      {/* AUTHOR and DATE */}
      <div className="flex items-center gap-4 text-gray-600 text-sm mb-8">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(50).height(50).url()}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <p className="font-md">By <span className='text-cyan-600'>{post.author?.name}</span></p>
          <p>Last Updated: {new Date(post.publishedAt).toDateString()}</p>
        </div>
      </div>

      <hr className='text-gray-300'/>
      
      <div className="prose prose-lg">
        <PortableTextComponent value={post.body} />
      </div>
    </div>
  );
}
