export const getAllPostsQuery = `
*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    readTime,
    body,
    "excerpt" : body[0].children[0].text
}
`