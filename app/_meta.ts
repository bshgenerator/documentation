import type { MetaRecord } from 'nextra'

export default {
  '*': {
    type: 'page',
    theme: {
      timestamp: false,
      pagination: true,
      copyPage: false
    }
  },
  'index': {
    title: 'Home',
    display: 'hidden',
    theme: {
      layout: 'full',
      typesetting: 'default',
    }
  },
  'docs': {
    title: 'Docs',
  },
  'api': {
    title: 'API',
    href: '/docs/bsh-engine/api',
  }
} satisfies MetaRecord