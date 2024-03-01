
const config = {
  //[Todo]: Find a way to replace this env variable from env.mjs file
  schema: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
  documents: ['./src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client'
    }
  }
}

export default config

