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
  'Bsh Engine': {
    title: 'Bsh Engine',
    href: '/docs/bsh-engine',
  },
  'Bsh Engine SDK': {
    title: 'Bsh Engine SDK',
    href: '/docs/bsh-engine/sdk',
  },
  'Librairies': {
    title: 'Librairies',
    type: 'menu',
    items: {
      'Ts Validation': {
        title: 'Ts Validation',
        href: '/docs/ts-validation',
      },
      'Engine SDK - Typescript': {
        title: 'Engine SDK - Typescript',
        href: '/docs/bsh-engine/sdk/typescript',
      }
    }
  },
  'docs': {
    type: 'doc',
    display: 'children',
  }
} satisfies MetaRecord
