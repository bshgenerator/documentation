import type { MetaRecord } from 'nextra';
import { EndpointTitle } from '../../../../../components';

export default {
  'login': <EndpointTitle method='POST' title='Login'/>,
  'refresh-token': <EndpointTitle method='POST' title='Refresh Token'/>,
  'forgot-password': <EndpointTitle method='POST' title='Forgot Password'/>,
  'reset-password': <EndpointTitle method='POST' title='Reset Password'/>,
  'activate-account': <EndpointTitle method='POST' title='Activate Account'/>,
} satisfies MetaRecord;
