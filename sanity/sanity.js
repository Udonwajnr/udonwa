import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: "6b8u9j4q",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false
  });

  const builder = imageUrlBuilder(client)

export const urlFor = source=>builder.image(source);
export default client