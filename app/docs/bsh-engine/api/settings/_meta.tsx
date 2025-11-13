import type { MetaRecord } from 'nextra';
import { EndpointTitle } from '../../../../../components';

export default {
  'get-configs': <EndpointTitle method='GET' title='Get Configs'/>,
  'update-configs': <EndpointTitle method='PUT' title='Update Configs'/>,
} satisfies MetaRecord

