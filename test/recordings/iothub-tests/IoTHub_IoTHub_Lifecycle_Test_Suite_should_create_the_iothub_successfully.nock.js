// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"}],\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=Y3+b9IxpXJmi6B6jbSZ4kkhFiOcJ2MBNtudIAfuI9NQ=;EntityPath=nodetestTopic1\",\"name\":\"Topic1\",\"id\":\"6a7c6e5c-8da0-479c-8dce-5a62c52cfe28\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=/zvH3XrqbsPbW8pMoewvKlV4yTa2Tl2IaLoQlnEkQA4=;EntityPath=nodetestEH1\",\"name\":\"EH1\",\"id\":\"1f0a20bb-4232-44de-8e74-20a89cdc96b9\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route1\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH1\"],\"isEnabled\":true},{\"name\":\"Route2\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Topic1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'd4412942-4be9-4d8d-830d-441124b860cb',
  'x-ms-correlation-request-id': 'd4412942-4be9-4d8d-830d-441124b860cb',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194640Z:d4412942-4be9-4d8d-830d-441124b860cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:46:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"}],\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=Y3+b9IxpXJmi6B6jbSZ4kkhFiOcJ2MBNtudIAfuI9NQ=;EntityPath=nodetestTopic1\",\"name\":\"Topic1\",\"id\":\"6a7c6e5c-8da0-479c-8dce-5a62c52cfe28\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=/zvH3XrqbsPbW8pMoewvKlV4yTa2Tl2IaLoQlnEkQA4=;EntityPath=nodetestEH1\",\"name\":\"EH1\",\"id\":\"1f0a20bb-4232-44de-8e74-20a89cdc96b9\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route1\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH1\"],\"isEnabled\":true},{\"name\":\"Route2\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Topic1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'd4412942-4be9-4d8d-830d-441124b860cb',
  'x-ms-correlation-request-id': 'd4412942-4be9-4d8d-830d-441124b860cb',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194640Z:d4412942-4be9-4d8d-830d-441124b860cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:46:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': 'a98e2452-e696-471b-a160-6b26fce81ad9',
  'x-ms-correlation-request-id': 'a98e2452-e696-471b-a160-6b26fce81ad9',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194711Z:a98e2452-e696-471b-a160-6b26fce81ad9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': 'a98e2452-e696-471b-a160-6b26fce81ad9',
  'x-ms-correlation-request-id': 'a98e2452-e696-471b-a160-6b26fce81ad9',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194711Z:a98e2452-e696-471b-a160-6b26fce81ad9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-request-id': '1fd5eac4-df60-4eec-996a-ee6d51271f77',
  'x-ms-correlation-request-id': '1fd5eac4-df60-4eec-996a-ee6d51271f77',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194741Z:1fd5eac4-df60-4eec-996a-ee6d51271f77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:47:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-request-id': '1fd5eac4-df60-4eec-996a-ee6d51271f77',
  'x-ms-correlation-request-id': '1fd5eac4-df60-4eec-996a-ee6d51271f77',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194741Z:1fd5eac4-df60-4eec-996a-ee6d51271f77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:47:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-request-id': 'a0ca3632-5c13-4647-929c-d9cbfe37e3db',
  'x-ms-correlation-request-id': 'a0ca3632-5c13-4647-929c-d9cbfe37e3db',
  'x-ms-routing-request-id': 'WESTUS:20170502T194811Z:a0ca3632-5c13-4647-929c-d9cbfe37e3db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:48:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-request-id': 'a0ca3632-5c13-4647-929c-d9cbfe37e3db',
  'x-ms-correlation-request-id': 'a0ca3632-5c13-4647-929c-d9cbfe37e3db',
  'x-ms-routing-request-id': 'WESTUS:20170502T194811Z:a0ca3632-5c13-4647-929c-d9cbfe37e3db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:48:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': '7421b6b7-2ab7-443c-a3f8-ce8ba1264930',
  'x-ms-correlation-request-id': '7421b6b7-2ab7-443c-a3f8-ce8ba1264930',
  'x-ms-routing-request-id': 'WESTUS:20170502T194842Z:7421b6b7-2ab7-443c-a3f8-ce8ba1264930',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': '7421b6b7-2ab7-443c-a3f8-ce8ba1264930',
  'x-ms-correlation-request-id': '7421b6b7-2ab7-443c-a3f8-ce8ba1264930',
  'x-ms-routing-request-id': 'WESTUS:20170502T194842Z:7421b6b7-2ab7-443c-a3f8-ce8ba1264930',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'ba80f812-30ec-4372-8d18-0429c11de50a',
  'x-ms-correlation-request-id': 'ba80f812-30ec-4372-8d18-0429c11de50a',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194912Z:ba80f812-30ec-4372-8d18-0429c11de50a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:49:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'ba80f812-30ec-4372-8d18-0429c11de50a',
  'x-ms-correlation-request-id': 'ba80f812-30ec-4372-8d18-0429c11de50a',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194912Z:ba80f812-30ec-4372-8d18-0429c11de50a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:49:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'c3fd5770-b73a-417c-a35c-503a1ba4b9c7',
  'x-ms-correlation-request-id': 'c3fd5770-b73a-417c-a35c-503a1ba4b9c7',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194942Z:c3fd5770-b73a-417c-a35c-503a1ba4b9c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:49:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'c3fd5770-b73a-417c-a35c-503a1ba4b9c7',
  'x-ms-correlation-request-id': 'c3fd5770-b73a-417c-a35c-503a1ba4b9c7',
  'x-ms-routing-request-id': 'WESTUS2:20170502T194942Z:c3fd5770-b73a-417c-a35c-503a1ba4b9c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:49:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '1043cb15-9d19-4265-91b1-bfd4cb68c81f',
  'x-ms-correlation-request-id': '1043cb15-9d19-4265-91b1-bfd4cb68c81f',
  'x-ms-routing-request-id': 'WESTUS:20170502T195013Z:1043cb15-9d19-4265-91b1-bfd4cb68c81f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:50:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '1043cb15-9d19-4265-91b1-bfd4cb68c81f',
  'x-ms-correlation-request-id': '1043cb15-9d19-4265-91b1-bfd4cb68c81f',
  'x-ms-routing-request-id': 'WESTUS:20170502T195013Z:1043cb15-9d19-4265-91b1-bfd4cb68c81f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:50:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': 'a64873a6-16ee-44f4-ad8d-e03632d06173',
  'x-ms-correlation-request-id': 'a64873a6-16ee-44f4-ad8d-e03632d06173',
  'x-ms-routing-request-id': 'WESTUS:20170502T195043Z:a64873a6-16ee-44f4-ad8d-e03632d06173',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': 'a64873a6-16ee-44f4-ad8d-e03632d06173',
  'x-ms-correlation-request-id': 'a64873a6-16ee-44f4-ad8d-e03632d06173',
  'x-ms-routing-request-id': 'WESTUS:20170502T195043Z:a64873a6-16ee-44f4-ad8d-e03632d06173',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '7c146c34-269c-4e03-9528-b9be70045f15',
  'x-ms-correlation-request-id': '7c146c34-269c-4e03-9528-b9be70045f15',
  'x-ms-routing-request-id': 'WESTUS:20170502T195114Z:7c146c34-269c-4e03-9528-b9be70045f15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/MDQ3N2I0N2EtN2IwMS00ZmYxLTlmNjItZGI4ZmY1NTE0YThl?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '7c146c34-269c-4e03-9528-b9be70045f15',
  'x-ms-correlation-request-id': '7c146c34-269c-4e03-9528-b9be70045f15',
  'x-ms-routing-request-id': 'WESTUS:20170502T195114Z:7c146c34-269c-4e03-9528-b9be70045f15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAADqV+4=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestTopic1\",\"name\":\"Topic1\",\"id\":\"6a7c6e5c-8da0-479c-8dce-5a62c52cfe28\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestEH1\",\"name\":\"EH1\",\"id\":\"1f0a20bb-4232-44de-8e74-20a89cdc96b9\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route1\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH1\"],\"isEnabled\":true},{\"name\":\"Route2\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Topic1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2714',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'cdf6d1c9-3131-4742-a10c-0c8f31cb3fc0',
  'x-ms-correlation-request-id': 'cdf6d1c9-3131-4742-a10c-0c8f31cb3fc0',
  'x-ms-routing-request-id': 'WESTUS:20170502T195116Z:cdf6d1c9-3131-4742-a10c-0c8f31cb3fc0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAADqV+4=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestTopic1\",\"name\":\"Topic1\",\"id\":\"6a7c6e5c-8da0-479c-8dce-5a62c52cfe28\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestEH1\",\"name\":\"EH1\",\"id\":\"1f0a20bb-4232-44de-8e74-20a89cdc96b9\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route1\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH1\"],\"isEnabled\":true},{\"name\":\"Route2\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Topic1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2714',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'cdf6d1c9-3131-4742-a10c-0c8f31cb3fc0',
  'x-ms-correlation-request-id': 'cdf6d1c9-3131-4742-a10c-0c8f31cb3fc0',
  'x-ms-routing-request-id': 'WESTUS:20170502T195116Z:cdf6d1c9-3131-4742-a10c-0c8f31cb3fc0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:15 GMT',
  connection: 'close' });
 return result; }]];