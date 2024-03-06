import client from "./sanity";

let sanityQuery = (query,params) => client.fetch(query,params);

export const tags = ()=>{
    return sanityQuery(
        `
        *[_type == 'tag']
        `
    )
}

export const Post = ()=>{
    return sanityQuery(
        `
        *[_type == 'post'] | order(_createdAt desc){
            title,
            preview,
            tags[]->{title},
            categories[]->{title},
            mainImage
          }
        `
    )
}