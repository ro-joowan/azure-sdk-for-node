// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'd466671a-79ad-4ca5-878f-599df8bcd17e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup505/providers/Microsoft.DBforMySQL/servers/testserver3888?api-version=2017-04-30-preview')
  .reply(202, "{\"operation\":\"DropElasticServer\",\"startTime\":\"2017-05-25T00:49:03.47Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '71',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/operationResults/c9ffef40-7e94-4fcc-beea-2b4f691936f8?api-version=2017-04-30-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/c9ffef40-7e94-4fcc-beea-2b4f691936f8?api-version=2017-04-30-preview',
  'x-ms-request-id': 'c9ffef40-7e94-4fcc-beea-2b4f691936f8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '51ef4b46-adf9-4c78-99b8-eea77703ae94',
  'x-ms-routing-request-id': 'EASTUS:20170525T004903Z:51ef4b46-adf9-4c78-99b8-eea77703ae94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:49:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup505/providers/Microsoft.DBforMySQL/servers/testserver3888?api-version=2017-04-30-preview')
  .reply(202, "{\"operation\":\"DropElasticServer\",\"startTime\":\"2017-05-25T00:49:03.47Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '71',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/operationResults/c9ffef40-7e94-4fcc-beea-2b4f691936f8?api-version=2017-04-30-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/c9ffef40-7e94-4fcc-beea-2b4f691936f8?api-version=2017-04-30-preview',
  'x-ms-request-id': 'c9ffef40-7e94-4fcc-beea-2b4f691936f8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '51ef4b46-adf9-4c78-99b8-eea77703ae94',
  'x-ms-routing-request-id': 'EASTUS:20170525T004903Z:51ef4b46-adf9-4c78-99b8-eea77703ae94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:49:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/c9ffef40-7e94-4fcc-beea-2b4f691936f8?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c9ffef40-7e94-4fcc-beea-2b4f691936f8\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:49:03.47Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '106',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '40739bd0-c8f0-449f-9fdf-b464813a9ce6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14898',
  'x-ms-correlation-request-id': '71b23e57-dec6-4cb1-ac27-a690417e60d4',
  'x-ms-routing-request-id': 'EASTUS:20170525T004934Z:71b23e57-dec6-4cb1-ac27-a690417e60d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:49:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforMySQL/locations/westus/azureAsyncOperation/c9ffef40-7e94-4fcc-beea-2b4f691936f8?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c9ffef40-7e94-4fcc-beea-2b4f691936f8\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:49:03.47Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '106',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '40739bd0-c8f0-449f-9fdf-b464813a9ce6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14898',
  'x-ms-correlation-request-id': '71b23e57-dec6-4cb1-ac27-a690417e60d4',
  'x-ms-routing-request-id': 'EASTUS:20170525T004934Z:71b23e57-dec6-4cb1-ac27-a690417e60d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:49:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup505/providers/Microsoft.DBforMySQL/servers/testserver3888?api-version=2017-04-30-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The requested resource of type 'MySQL.Server.PAL' with name 'testserver3888' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '671a328d-4ea7-49d3-997d-057e19e96b0c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14840',
  'x-ms-correlation-request-id': '27bdea86-fe85-401f-8c4f-93f339cf4ad9',
  'x-ms-routing-request-id': 'EASTUS:20170525T004935Z:27bdea86-fe85-401f-8c4f-93f339cf4ad9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:49:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup505/providers/Microsoft.DBforMySQL/servers/testserver3888?api-version=2017-04-30-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The requested resource of type 'MySQL.Server.PAL' with name 'testserver3888' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '671a328d-4ea7-49d3-997d-057e19e96b0c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14840',
  'x-ms-correlation-request-id': '27bdea86-fe85-401f-8c4f-93f339cf4ad9',
  'x-ms-routing-request-id': 'EASTUS:20170525T004935Z:27bdea86-fe85-401f-8c4f-93f339cf4ad9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:49:35 GMT',
  connection: 'close' });
 return result; }]];