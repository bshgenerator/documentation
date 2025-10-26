import type { MetaRecord } from 'nextra';
import { EndpointTitle } from '../../../../../components';

export default {
  'get-entity-by-id': <EndpointTitle method='GET' title='by Id'/>,
  'insert-entity': <EndpointTitle method='POST' title='Insert'/>,
  'update-entity': <EndpointTitle method='PUT' title='Update'/>,
  'delete-entity': <EndpointTitle method='DELETE' title='Delete'/>,
  'search-entities': <EndpointTitle method='POST' title='Search'/>,
  'batch-insert-entities': <EndpointTitle method='POST' title='Batch Insert'/>,
  'batch-update-entities': <EndpointTitle method='PUT' title='Batch Update'/>,
  'batch-delete-entities': <EndpointTitle method='POST' title='Batch Delete'/>,
  'export-entities': <EndpointTitle method='POST' title='Export'/>,
  'import-entities': <EndpointTitle method='POST' title='Import' badge='planned'/>,
} satisfies MetaRecord;
