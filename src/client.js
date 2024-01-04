import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "kvi0t5zn",
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: "sk4X2DmgOMI9dwofygue77cPXOfBbvK1EwOABiLGhdAGYEcA1imsPiMYa0FN9KE9GR3d3ecUU3WFpg09lepki1fBR5VuPDDCq2cWTKnL7IhPfmmx8PolhCpzhttjCoSsCymcMT3SkVQ3CzGJefZtdH9GbZlZ5r9qg6yns0mbBrrXz2oI8d6f",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
