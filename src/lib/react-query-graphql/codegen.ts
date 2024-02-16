
const config = {
  //[Todo]: Find a way to replace this env variable from env.mjs file
  schema: 'https://web-production-3ab92.up.railway.app/graphql',
  documents: ['./src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client'
    }
  }
}

export default config

