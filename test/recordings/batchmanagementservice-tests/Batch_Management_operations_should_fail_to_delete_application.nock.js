// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-05-01')
  .reply(409, "{\"error\":{\"code\":\"ApplicationPackagesNotEmpty\",\"message\":\"The list of application packages for the specified application is not empty.\\nRequestId:2f72f383-6cd0-461d-8b29-ed3dc294fe7f\\nTime:2017-05-26T16:02:53.2981770Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '244',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'request-id': '2f72f383-6cd0-461d-8b29-ed3dc294fe7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9cc46024-67a9-4254-9a5a-cde4dc0c5d79',
  'x-ms-correlation-request-id': '9cc46024-67a9-4254-9a5a-cde4dc0c5d79',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160254Z:9cc46024-67a9-4254-9a5a-cde4dc0c5d79',
  date: 'Fri, 26 May 2017 16:02:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-05-01')
  .reply(409, "{\"error\":{\"code\":\"ApplicationPackagesNotEmpty\",\"message\":\"The list of application packages for the specified application is not empty.\\nRequestId:2f72f383-6cd0-461d-8b29-ed3dc294fe7f\\nTime:2017-05-26T16:02:53.2981770Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '244',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'request-id': '2f72f383-6cd0-461d-8b29-ed3dc294fe7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9cc46024-67a9-4254-9a5a-cde4dc0c5d79',
  'x-ms-correlation-request-id': '9cc46024-67a9-4254-9a5a-cde4dc0c5d79',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160254Z:9cc46024-67a9-4254-9a5a-cde4dc0c5d79',
  date: 'Fri, 26 May 2017 16:02:54 GMT',
  connection: 'close' });
 return result; }]];