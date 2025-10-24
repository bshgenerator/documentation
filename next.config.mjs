import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: true,
  readingTime: true,
  codeHighlight: true
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
})