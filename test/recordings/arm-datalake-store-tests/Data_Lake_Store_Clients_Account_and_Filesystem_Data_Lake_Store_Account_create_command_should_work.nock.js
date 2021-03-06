// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '04319d6d-4a66-4701-bb2f-e7dbbd9ae4db';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"b9451d7c-eb00-4e6d-a1e0-fbae405d972b\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269\",\"name\":\"xplattestadls9269\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269/operationresults/0?api-version=2016-11-01',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b9451d7c-eb00-4e6d-a1e0-fbae405d972b0?api-version=2016-11-01&expanded=true',
  'x-ms-request-id': '97dfeb6a-d73b-4c20-9ee0-cb37efad869c',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '28b26c2b-0d78-4394-b6c2-fbe2e8dd56fd',
  'x-ms-routing-request-id': 'WESTUS2:20170725T173911Z:28b26c2b-0d78-4394-b6c2-fbe2e8dd56fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:39:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"b9451d7c-eb00-4e6d-a1e0-fbae405d972b\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269\",\"name\":\"xplattestadls9269\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269/operationresults/0?api-version=2016-11-01',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b9451d7c-eb00-4e6d-a1e0-fbae405d972b0?api-version=2016-11-01&expanded=true',
  'x-ms-request-id': '97dfeb6a-d73b-4c20-9ee0-cb37efad869c',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '28b26c2b-0d78-4394-b6c2-fbe2e8dd56fd',
  'x-ms-routing-request-id': 'WESTUS2:20170725T173911Z:28b26c2b-0d78-4394-b6c2-fbe2e8dd56fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:39:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b9451d7c-eb00-4e6d-a1e0-fbae405d972b0?api-version=2016-11-01&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd83092a4-1a32-4521-89c4-bd40281bc9f5',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '2cc8ce39-e745-4628-bbf8-5cd06f55134a',
  'x-ms-routing-request-id': 'WESTUS2:20170725T173941Z:2cc8ce39-e745-4628-bbf8-5cd06f55134a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:39:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b9451d7c-eb00-4e6d-a1e0-fbae405d972b0?api-version=2016-11-01&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd83092a4-1a32-4521-89c4-bd40281bc9f5',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '2cc8ce39-e745-4628-bbf8-5cd06f55134a',
  'x-ms-routing-request-id': 'WESTUS2:20170725T173941Z:2cc8ce39-e745-4628-bbf8-5cd06f55134a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:39:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9269.azuredatalakestore.net\",\"accountId\":\"b9451d7c-eb00-4e6d-a1e0-fbae405d972b\",\"creationTime\":\"2017-07-25T17:39:11.1146928Z\",\"lastModifiedTime\":\"2017-07-25T17:39:11.1146928Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269\",\"name\":\"xplattestadls9269\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '832',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '70a9f4fd-106e-46f9-945e-cc9858a334be',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e8803864-c3c4-4deb-a74f-203ff7871a30',
  'x-ms-routing-request-id': 'WESTUS2:20170725T173942Z:e8803864-c3c4-4deb-a74f-203ff7871a30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:39:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9269.azuredatalakestore.net\",\"accountId\":\"b9451d7c-eb00-4e6d-a1e0-fbae405d972b\",\"creationTime\":\"2017-07-25T17:39:11.1146928Z\",\"lastModifiedTime\":\"2017-07-25T17:39:11.1146928Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9269\",\"name\":\"xplattestadls9269\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '832',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '70a9f4fd-106e-46f9-945e-cc9858a334be',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e8803864-c3c4-4deb-a74f-203ff7871a30',
  'x-ms-routing-request-id': 'WESTUS2:20170725T173942Z:e8803864-c3c4-4deb-a74f-203ff7871a30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:39:42 GMT',
  connection: 'close' });
 return result; }]];