import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: '7428wv5v',
    dataset: 'production',
    apiVersion: '2023-04-21',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);