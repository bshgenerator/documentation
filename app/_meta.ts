import type { MetaRecord } from 'nextra'

export default {
  '*': {
    type: 'page',
    theme: {
      timestamp: false ,
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
  'bsh-engine': {
    title: 'BSH Engine',
  },
  'bsh-libs': {
    title: 'Bsh Libraries',
  },
} satisfies MetaRecord
 