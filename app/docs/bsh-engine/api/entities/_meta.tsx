import type { MetaRecord } from 'nextra';
import { EndpointTitle } from '../../../../../components';

export default {
  'get-entity-by-id': <EndpointTitle method='GET' title='by Id'/>,
  'insert-entity': <EndpointTitle method='POST' title='Insert'/>,
  'update-entity': <EndpointTitle method='PUT' title='Update'/>,
  'delete-entity': <EndpointTitle method='DELETE' title='Delete'/>,
  'search-entities': <EndpointTitle method='POST' title='Search'/>,
  'search-entities-by-query': <EndpointTitle method='GET' title='Search by Query' badge='new'/>,
  'insert-entities-batch': <EndpointTitle method='POST' title='Batch Insert'/>,
  'update-entities-batch': <EndpointTitle method='PUT' title='Batch Update'/>,
  'delete-entities-batch': <EndpointTitle method='POST' title='Batch Delete'/>,
  'export-entities': <EndpointTitle method='POST' title='Export'/>,
  'import-entities': <EndpointTitle method='POST' title='Import' badge='planned'/>,
} satisfies MetaRecord;
