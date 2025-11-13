import type { MetaRecord } from 'nextra';
import { EndpointTitle } from '../../../../../components';

export default {
  'generate': <EndpointTitle method='POST' title='Generate'/>,
  'revoke': <EndpointTitle method='DELETE' title='Revoke'/>,
} satisfies MetaRecord;
