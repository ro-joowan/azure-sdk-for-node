// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobschedules/NodeSDKTestSchedule?api-version=2017-05-01.5.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"NodeSDKTestSchedule\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D4A458E0D8EE04\",\"lastModified\":\"2017-05-26T17:01:40.2472964Z\",\"creationTime\":\"2017-05-26T17:01:40.2472964Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-05-26T17:01:40.2472964Z\",\"schedule\":{\r\n    \"doNotRunUntil\":\"2017-12-25T00:00:00Z\",\"startWindow\":\"PT6M\"\r\n  },\"jobSpecification\":{\r\n    \"priority\":0,\"usesTaskDependencies\":false,\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\",\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n    },\"poolInfo\":{\r\n      \"poolId\":\"nodesdktestpool1\"\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2017-12-25T00:00:00Z\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 26 May 2017 17:01:40 GMT',
  etag: '0x8D4A458E0D8EE04',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8b4e0494-6619-4e4e-9289-4658dbcc8de2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 17:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobschedules/NodeSDKTestSchedule?api-version=2017-05-01.5.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"NodeSDKTestSchedule\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D4A458E0D8EE04\",\"lastModified\":\"2017-05-26T17:01:40.2472964Z\",\"creationTime\":\"2017-05-26T17:01:40.2472964Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-05-26T17:01:40.2472964Z\",\"schedule\":{\r\n    \"doNotRunUntil\":\"2017-12-25T00:00:00Z\",\"startWindow\":\"PT6M\"\r\n  },\"jobSpecification\":{\r\n    \"priority\":0,\"usesTaskDependencies\":false,\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\",\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n    },\"poolInfo\":{\r\n      \"poolId\":\"nodesdktestpool1\"\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2017-12-25T00:00:00Z\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 26 May 2017 17:01:40 GMT',
  etag: '0x8D4A458E0D8EE04',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8b4e0494-6619-4e4e-9289-4658dbcc8de2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 17:01:41 GMT',
  connection: 'close' });
 return result; }]];