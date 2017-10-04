// @flow

import type { IndexName } from 'algoliasearch';
import type { RequestMethod, RequestOptions } from 'algoliasearch-requester';

export default function clearIndex({
  requester,
  indexName,
  requestOptions,
}: {
  requester: RequestMethod,
  indexName: IndexName,
  requestOptions?: RequestOptions,
}) {
  return requester({
    method: 'POST',
    path: `/1/indexes/${indexName}/clear`,
    requestOptions,
    requestType: 'write',
  });
}
