// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Batch/locations/japaneast/quotas?api-version=2017-05-01')
  .reply(200, "{\"accountQuota\":1}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '18',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'request-id': '70b68ccd-aef8-417f-a447-8fb661b92dba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '528ba776-0e3f-4e41-bccc-7b30610d6097',
  'x-ms-correlation-request-id': '528ba776-0e3f-4e41-bccc-7b30610d6097',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160207Z:528ba776-0e3f-4e41-bccc-7b30610d6097',
  date: 'Fri, 26 May 2017 16:02:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Batch/locations/japaneast/quotas?api-version=2017-05-01')
  .reply(200, "{\"accountQuota\":1}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '18',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'request-id': '70b68ccd-aef8-417f-a447-8fb661b92dba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '528ba776-0e3f-4e41-bccc-7b30610d6097',
  'x-ms-correlation-request-id': '528ba776-0e3f-4e41-bccc-7b30610d6097',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160207Z:528ba776-0e3f-4e41-bccc-7b30610d6097',
  date: 'Fri, 26 May 2017 16:02:07 GMT',
  connection: 'close' });
 return result; }]];