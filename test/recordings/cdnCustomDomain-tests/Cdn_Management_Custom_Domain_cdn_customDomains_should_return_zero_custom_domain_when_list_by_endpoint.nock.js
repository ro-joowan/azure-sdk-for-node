// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile7643\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '480d3cb2-868d-44a2-a619-bbb8f2dca624',
  'x-ms-client-request-id': '702fad9e-dd83-4eb6-8e13-3bea738e22d1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/5253f5a3-f3a6-4aa3-90c1-2f96ed1d254d?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '963333a2-d675-4f51-8008-93c3ccda2b6c',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014839Z:963333a2-d675-4f51-8008-93c3ccda2b6c',
  date: 'Wed, 22 Feb 2017 01:48:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile7643\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '480d3cb2-868d-44a2-a619-bbb8f2dca624',
  'x-ms-client-request-id': '702fad9e-dd83-4eb6-8e13-3bea738e22d1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/5253f5a3-f3a6-4aa3-90c1-2f96ed1d254d?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '963333a2-d675-4f51-8008-93c3ccda2b6c',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014839Z:963333a2-d675-4f51-8008-93c3ccda2b6c',
  date: 'Wed, 22 Feb 2017 01:48:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/5253f5a3-f3a6-4aa3-90c1-2f96ed1d254d?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '15bacbe4-2c39-44d8-8518-53a4bbb2a6bf',
  'x-ms-client-request-id': '0823212f-9bb3-4132-b137-84b4ac7ae16e',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8ed5a954-8dc0-4bf0-9339-f26a7671c5eb',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014910Z:8ed5a954-8dc0-4bf0-9339-f26a7671c5eb',
  date: 'Wed, 22 Feb 2017 01:49:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/5253f5a3-f3a6-4aa3-90c1-2f96ed1d254d?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '15bacbe4-2c39-44d8-8518-53a4bbb2a6bf',
  'x-ms-client-request-id': '0823212f-9bb3-4132-b137-84b4ac7ae16e',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8ed5a954-8dc0-4bf0-9339-f26a7671c5eb',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014910Z:8ed5a954-8dc0-4bf0-9339-f26a7671c5eb',
  date: 'Wed, 22 Feb 2017 01:49:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile7643\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9ff6cd15-4e46-4fce-bd2c-a3ff1588d66b',
  'x-ms-client-request-id': '31b8f207-bfb3-4d86-b4f4-cfbc245762f6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'bd9ff647-9ebd-4874-b150-ef110ffcff7e',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014911Z:bd9ff647-9ebd-4874-b150-ef110ffcff7e',
  date: 'Wed, 22 Feb 2017 01:49:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile7643\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9ff6cd15-4e46-4fce-bd2c-a3ff1588d66b',
  'x-ms-client-request-id': '31b8f207-bfb3-4d86-b4f4-cfbc245762f6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'bd9ff647-9ebd-4874-b150-ef110ffcff7e',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014911Z:bd9ff647-9ebd-4874-b150-ef110ffcff7e',
  date: 'Wed, 22 Feb 2017 01:49:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '984',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '36200da2-114a-45b4-8cda-ecb763769649',
  'x-ms-client-request-id': 'cbaf5ef9-1c77-4566-ac01-1ee22bf91b6c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/090442eb-2d1e-4fe0-bd55-1f36207db67d?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd2d5c01d-c93e-4ff4-8401-1c78a18e78aa',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014913Z:d2d5c01d-c93e-4ff4-8401-1c78a18e78aa',
  date: 'Wed, 22 Feb 2017 01:49:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '984',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '36200da2-114a-45b4-8cda-ecb763769649',
  'x-ms-client-request-id': 'cbaf5ef9-1c77-4566-ac01-1ee22bf91b6c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/090442eb-2d1e-4fe0-bd55-1f36207db67d?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd2d5c01d-c93e-4ff4-8401-1c78a18e78aa',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014913Z:d2d5c01d-c93e-4ff4-8401-1c78a18e78aa',
  date: 'Wed, 22 Feb 2017 01:49:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/090442eb-2d1e-4fe0-bd55-1f36207db67d?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd717fcc4-74d9-4f6f-b974-49acd892845a',
  'x-ms-client-request-id': '235dfcf2-df63-4926-8b62-4f87de1e2b8c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd0bf9229-f952-47f3-9d5e-5153d201e1c0',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014944Z:d0bf9229-f952-47f3-9d5e-5153d201e1c0',
  date: 'Wed, 22 Feb 2017 01:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/090442eb-2d1e-4fe0-bd55-1f36207db67d?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd717fcc4-74d9-4f6f-b974-49acd892845a',
  'x-ms-client-request-id': '235dfcf2-df63-4926-8b62-4f87de1e2b8c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd0bf9229-f952-47f3-9d5e-5153d201e1c0',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014944Z:d0bf9229-f952-47f3-9d5e-5153d201e1c0',
  date: 'Wed, 22 Feb 2017 01:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '984',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '41b6e509-9f17-4bf1-8dd9-59b0c69e92d1',
  'x-ms-client-request-id': 'e50dade9-a84e-4ca9-8303-525b5b6e6eb2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ef752e40-7844-4ae3-95f6-a64959e3311f',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014945Z:ef752e40-7844-4ae3-95f6-a64959e3311f',
  date: 'Wed, 22 Feb 2017 01:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '984',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '41b6e509-9f17-4bf1-8dd9-59b0c69e92d1',
  'x-ms-client-request-id': 'e50dade9-a84e-4ca9-8303-525b5b6e6eb2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ef752e40-7844-4ae3-95f6-a64959e3311f',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014945Z:ef752e40-7844-4ae3-95f6-a64959e3311f',
  date: 'Wed, 22 Feb 2017 01:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains?api-version=2016-10-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd9b89b30-d0e5-45dd-b051-76b18017b1bf',
  'x-ms-client-request-id': 'be0e508a-5124-493e-83bf-1768725e51f7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ff4143f3-c5d3-46be-996f-b8bb17095387',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014945Z:ff4143f3-c5d3-46be-996f-b8bb17095387',
  date: 'Wed, 22 Feb 2017 01:49:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains?api-version=2016-10-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd9b89b30-d0e5-45dd-b051-76b18017b1bf',
  'x-ms-client-request-id': 'be0e508a-5124-493e-83bf-1768725e51f7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ff4143f3-c5d3-46be-996f-b8bb17095387',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014945Z:ff4143f3-c5d3-46be-996f-b8bb17095387',
  date: 'Wed, 22 Feb 2017 01:49:45 GMT',
  connection: 'close' });
 return result; }]];