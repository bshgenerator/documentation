import type { MetaRecord } from 'nextra';
import { EndpointTitle } from '../../../../../components';

export default {
  'login': <EndpointTitle method='POST' title='Login'/>,
  'refresh-token': <EndpointTitle method='POST' title='Refresh Token'/>,
  'activate-account': <EndpointTitle method='POST' title='Activate Account'/>,
  'forgot-password': <EndpointTitle method='POST' title='Forgot Password'/>,
  'reset-password': <EndpointTitle method='POST' title='Reset Password'/>,
} satisfies MetaRecord;
