import client from "./sanity";

let sanityQuery = (query,params) => client.fetch(query,params);

export const tags = ()=>{
    return sanityQuery(
        `
        *[_type == 'tag']
        `
    )
}