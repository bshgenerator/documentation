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
    title: 'Documentations',
  },
} satisfies MetaRecord