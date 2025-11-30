import type { MetaRecord } from 'nextra';
import { Title } from '../../../../components/Title';

export default {
  'typescript': {
    title: <Title title='Typescript' badge='new' />
  },
  'java': {
    title: 'Java',
    display: 'hidden',
  },
  'python': {
    title: 'Python',
    display: 'hidden',
  },
} satisfies MetaRecord;
