// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'd466671a-79ad-4ca5-878f-599df8bcd17e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup505/providers/Microsoft.DBforMySQL/servers/testserver1466/databases/testdb5259?api-version=2017-04-30-preview')
  .reply(202, "{\"operation\":\"DropElasticServerDatabase\",\"startTime\":\"2017-05-25T00:52:16.383Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '80',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/operationResults/dc19b44c-6ad4-431b-8ddf-b56073a427cd?api-version=2017-04-30-preview',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/dc19b44c-6ad4-431b-8ddf-b56073a427cd?api-version=2017-04-30-preview',
  'x-ms-request-id': 'dc19b44c-6ad4-431b-8ddf-b56073a427cd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'bf24e5e6-e35b-4e47-8c0e-f954157dffe0',
  'x-ms-routing-request-id': 'EASTUS:20170525T005217Z:bf24e5e6-e35b-4e47-8c0e-f954157dffe0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:52:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup505/providers/Microsoft.DBforMySQL/servers/testserver1466/databases/testdb5259?api-version=2017-04-30-preview')
  .reply(202, "{\"operation\":\"DropElasticServerDatabase\",\"startTime\":\"2017-05-25T00:52:16.383Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '80',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/operationResults/dc19b44c-6ad4-431b-8ddf-b56073a427cd?api-version=2017-04-30-preview',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/dc19b44c-6ad4-431b-8ddf-b56073a427cd?api-version=2017-04-30-preview',
  'x-ms-request-id': 'dc19b44c-6ad4-431b-8ddf-b56073a427cd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'bf24e5e6-e35b-4e47-8c0e-f954157dffe0',
  'x-ms-routing-request-id': 'EASTUS:20170525T005217Z:bf24e5e6-e35b-4e47-8c0e-f954157dffe0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:52:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/dc19b44c-6ad4-431b-8ddf-b56073a427cd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"dc19b44c-6ad4-431b-8ddf-b56073a427cd\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:52:16.383Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0532eba1-d142-466b-a1fe-77371e1090b7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': '647c5712-3e09-4928-b582-9c50f5ed43a5',
  'x-ms-routing-request-id': 'EASTUS:20170525T005247Z:647c5712-3e09-4928-b582-9c50f5ed43a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:52:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/dc19b44c-6ad4-431b-8ddf-b56073a427cd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"dc19b44c-6ad4-431b-8ddf-b56073a427cd\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:52:16.383Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0532eba1-d142-466b-a1fe-77371e1090b7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': '647c5712-3e09-4928-b582-9c50f5ed43a5',
  'x-ms-routing-request-id': 'EASTUS:20170525T005247Z:647c5712-3e09-4928-b582-9c50f5ed43a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:52:47 GMT',
  connection: 'close' });
 return result; }]];