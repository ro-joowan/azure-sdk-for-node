// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'd466671a-79ad-4ca5-878f-599df8bcd17e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-04-30-preview', '*')
  .reply(202, "{\"operation\":\"UpsertElasticServer\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '74',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview',
  'x-ms-request-id': 'c6fd9226-1065-4812-a375-3ae755f08dbd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '450106d3-18fa-409e-b988-eb0609c65b47',
  'x-ms-routing-request-id': 'EASTUS:20170525T000040Z:450106d3-18fa-409e-b988-eb0609c65b47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:00:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-04-30-preview', '*')
  .reply(202, "{\"operation\":\"UpsertElasticServer\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '74',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview',
  'x-ms-request-id': 'c6fd9226-1065-4812-a375-3ae755f08dbd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '450106d3-18fa-409e-b988-eb0609c65b47',
  'x-ms-routing-request-id': 'EASTUS:20170525T000040Z:450106d3-18fa-409e-b988-eb0609c65b47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:00:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5e8408ef-ad15-4501-b86e-07873e4545ba',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'ebcb5351-83c3-4a6a-bc18-a730302b659a',
  'x-ms-routing-request-id': 'EASTUS:20170525T000110Z:ebcb5351-83c3-4a6a-bc18-a730302b659a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:01:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5e8408ef-ad15-4501-b86e-07873e4545ba',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'ebcb5351-83c3-4a6a-bc18-a730302b659a',
  'x-ms-routing-request-id': 'EASTUS:20170525T000110Z:ebcb5351-83c3-4a6a-bc18-a730302b659a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:01:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6d007e49-349c-44b2-a162-d3da3f485295',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9ac4fa3b-455d-4d40-aacc-882498f53e70',
  'x-ms-routing-request-id': 'EASTUS:20170525T000141Z:9ac4fa3b-455d-4d40-aacc-882498f53e70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6d007e49-349c-44b2-a162-d3da3f485295',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9ac4fa3b-455d-4d40-aacc-882498f53e70',
  'x-ms-routing-request-id': 'EASTUS:20170525T000141Z:9ac4fa3b-455d-4d40-aacc-882498f53e70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e828657-57f5-42b9-a126-b6544df7966b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '34057e9a-912c-4e24-88f5-ce65818625b8',
  'x-ms-routing-request-id': 'EASTUS:20170525T000212Z:34057e9a-912c-4e24-88f5-ce65818625b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:02:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e828657-57f5-42b9-a126-b6544df7966b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '34057e9a-912c-4e24-88f5-ce65818625b8',
  'x-ms-routing-request-id': 'EASTUS:20170525T000212Z:34057e9a-912c-4e24-88f5-ce65818625b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:02:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9f597ca2-8698-4c64-b296-b3cd03acc698',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9b55511f-2a44-4578-9442-28b3c12ca3cc',
  'x-ms-routing-request-id': 'EASTUS:20170525T000243Z:9b55511f-2a44-4578-9442-28b3c12ca3cc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:02:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9f597ca2-8698-4c64-b296-b3cd03acc698',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9b55511f-2a44-4578-9442-28b3c12ca3cc',
  'x-ms-routing-request-id': 'EASTUS:20170525T000243Z:9b55511f-2a44-4578-9442-28b3c12ca3cc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:02:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ef7e1ab4-eade-4ad7-b473-8f5f4bb69d2d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '43a6f531-93ca-4aad-a924-66a3f05c29e3',
  'x-ms-routing-request-id': 'EASTUS:20170525T000314Z:43a6f531-93ca-4aad-a924-66a3f05c29e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:03:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ef7e1ab4-eade-4ad7-b473-8f5f4bb69d2d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '43a6f531-93ca-4aad-a924-66a3f05c29e3',
  'x-ms-routing-request-id': 'EASTUS:20170525T000314Z:43a6f531-93ca-4aad-a924-66a3f05c29e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:03:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b2251045-992b-4b49-a12a-2333b1a05acf',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c1494106-bd2d-424c-b9cb-1c13beb73832',
  'x-ms-routing-request-id': 'EASTUS:20170525T000344Z:c1494106-bd2d-424c-b9cb-1c13beb73832',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:03:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b2251045-992b-4b49-a12a-2333b1a05acf',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c1494106-bd2d-424c-b9cb-1c13beb73832',
  'x-ms-routing-request-id': 'EASTUS:20170525T000344Z:c1494106-bd2d-424c-b9cb-1c13beb73832',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:03:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa620dd6-ca82-4f87-b053-9f761c715ed9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14817',
  'x-ms-correlation-request-id': 'f6fc7582-1721-4a85-9438-c1be45c9c543',
  'x-ms-routing-request-id': 'EASTUS:20170525T000415Z:f6fc7582-1721-4a85-9438-c1be45c9c543',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"InProgress\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '108',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa620dd6-ca82-4f87-b053-9f761c715ed9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14817',
  'x-ms-correlation-request-id': 'f6fc7582-1721-4a85-9438-c1be45c9c543',
  'x-ms-routing-request-id': 'EASTUS:20170525T000415Z:f6fc7582-1721-4a85-9438-c1be45c9c543',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f60151e8-b9d6-4284-8221-6934899a8cb9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd6e2ad3c-e73b-4027-9173-34a233ff45ea',
  'x-ms-routing-request-id': 'EASTUS:20170525T000446Z:d6e2ad3c-e73b-4027-9173-34a233ff45ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/c6fd9226-1065-4812-a375-3ae755f08dbd?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"c6fd9226-1065-4812-a375-3ae755f08dbd\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:00:41.193Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f60151e8-b9d6-4284-8221-6934899a8cb9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd6e2ad3c-e73b-4027-9173-34a233ff45ea',
  'x-ms-routing-request-id': 'EASTUS:20170525T000446Z:d6e2ad3c-e73b-4027-9173-34a233ff45ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-04-30-preview')
  .reply(200, "{\"id\":\"/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149\",\"name\":\"testserver1149\",\"type\":\"Microsoft.DBforPostgreSQL/servers\",\"location\":\"westus\",\"sku\":{\"name\":\"PGSQLB100\",\"tier\":\"Basic\",\"capacity\":100},\"properties\":{\"administratorLogin\":\"postgres\",\"storageMB\":51200,\"version\":\"9.5\",\"sslEnforcement\":\"Enabled\",\"userVisibleState\":\"Ready\",\"fullyQualifiedDomainName\":\"testserver1149.postgres.database.azure.com\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '503',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7266e056-2275-4bec-ae13-846063e58ca7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '41499497-6db8-43b2-9400-5daca6cc0706',
  'x-ms-routing-request-id': 'EASTUS:20170525T000447Z:41499497-6db8-43b2-9400-5daca6cc0706',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-04-30-preview')
  .reply(200, "{\"id\":\"/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149\",\"name\":\"testserver1149\",\"type\":\"Microsoft.DBforPostgreSQL/servers\",\"location\":\"westus\",\"sku\":{\"name\":\"PGSQLB100\",\"tier\":\"Basic\",\"capacity\":100},\"properties\":{\"administratorLogin\":\"postgres\",\"storageMB\":51200,\"version\":\"9.5\",\"sslEnforcement\":\"Enabled\",\"userVisibleState\":\"Ready\",\"fullyQualifiedDomainName\":\"testserver1149.postgres.database.azure.com\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '503',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7266e056-2275-4bec-ae13-846063e58ca7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '41499497-6db8-43b2-9400-5daca6cc0706',
  'x-ms-routing-request-id': 'EASTUS:20170525T000447Z:41499497-6db8-43b2-9400-5daca6cc0706',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:47 GMT',
  connection: 'close' });
 return result; }]];