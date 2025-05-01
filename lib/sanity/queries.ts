// lib/sanity/queries.ts
import { client } from './client'

export const getPostsByCategory = async (category: string) => {
  const query = category === 'All'
    ? `*[_type == "post"] | order(publishedAt desc)`
    : `*[_type == "post" && "${category}" in categories[]->title] | order(publishedAt desc)`
  
  return await client.fetch(query)
}
