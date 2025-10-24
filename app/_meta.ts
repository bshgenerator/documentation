import type { MetaRecord } from 'nextra'

export default {
  '*': {
    type: 'page'
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
 