import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );

  return slugs.map(slug => ({
    slug: slug.slug,
  }));
}