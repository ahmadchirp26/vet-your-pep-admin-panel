
const config = {
  //[Todo]: Find a way to replace this env variable from env.mjs file
  schema: 'https://vet-your-pep-staging-7ffa0a39af72.herokuapp.com/graphql',
  documents: ['./src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client'
    }
  }
}

export default config

