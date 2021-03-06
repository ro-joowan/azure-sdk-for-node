// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '04319d6d-4a66-4701-bb2f-e7dbbd9ae4db';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4847?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls6239\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls6239\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4847.azuredatalakeanalytics.net\",\"accountId\":\"a736aeb1-09ac-4635-a54f-b57a12939283\",\"creationTime\":\"2017-07-25T17:54:52.827837Z\",\"lastModifiedTime\":\"2017-07-25T17:54:52.827837Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4847\",\"name\":\"xplattestadla4847\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd4b40659-dcfc-4e4f-a882-8350d70e1570',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'a13f2f76-f6fc-41b2-bbab-d0a34ed0b630',
  'x-ms-routing-request-id': 'WESTUS2:20170725T175600Z:a13f2f76-f6fc-41b2-bbab-d0a34ed0b630',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:55:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4847?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls6239\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls6239\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4847.azuredatalakeanalytics.net\",\"accountId\":\"a736aeb1-09ac-4635-a54f-b57a12939283\",\"creationTime\":\"2017-07-25T17:54:52.827837Z\",\"lastModifiedTime\":\"2017-07-25T17:54:52.827837Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/04319d6d-4a66-4701-bb2f-e7dbbd9ae4db/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4847\",\"name\":\"xplattestadla4847\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd4b40659-dcfc-4e4f-a882-8350d70e1570',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'a13f2f76-f6fc-41b2-bbab-d0a34ed0b630',
  'x-ms-routing-request-id': 'WESTUS2:20170725T175600Z:a13f2f76-f6fc-41b2-bbab-d0a34ed0b630',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:55:59 GMT',
  connection: 'close' });
 return result; }]];