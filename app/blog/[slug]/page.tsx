import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import { PortableTextComponent } from '@/components/PortableTextComponent';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import CommentForm from '@/components/CommentForm';


interface Post {
  _id: string;
  title: string;
  body: any;
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
  comments?: {
    _id: string;
    name: string;
    comment: string;
    approved: boolean;
    _createdAt: string;
  }[];
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
  },
  comments[]->{
    _id,
    name,
    comment,
    approved,
    _createdAt
  }

}`;

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const post: Post | null = await client.fetch(query, { slug: params.slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="mt-20 p-6">
      {/* <div className='flex h-30 border rounded-lg border-gray-300 mb-5  text-2xl text-gray-600 items-center justify-between'><span>Ads apear here...</span></div> */}
      <p className='mb-5'><Link href='/blog'>Blog</Link> &gt; <span className='text-gray-500'>{post.title}</span></p>
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

      <CommentForm postId={post._id}/>

      {/* Approved comments */}

      {post.comments && post.comments.filter(c => c.approved).length > 0 && (
        <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
        Comments ({post.comments?.filter(c => c.approved).length || 0})
        </h2>
        <ul className="space-y-4">
          {post.comments.filter(c => c.approved).map(comment => (
            <li key={comment._id} className=" p-4">
              <p>{comment.name} <span className="text-sm text-gray-600 font-medium">wrote:</span></p>
              <p className="text-sm text-gray-600 mt-1 ml-5">{comment.comment}</p>
              <p className="text-xs mt-2 ml-5 text-blue-900">{new Date(comment._createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </section>
      )}

      

    </div>
  );
}
