// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170526t164605z?api-version=2017-05-01.5.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-115883067_1-20170526t164605z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170526t164605z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2017-05-26T16:49:58.524133Z\",\"lastBootTime\":\"2017-05-26T16:49:55.6209658Z\",\"allocationTime\":\"2017-05-26T16:46:05.8782275Z\",\"ipAddress\":\"100.74.76.58\",\"affinityId\":\"TVM:tvm-115883067_1-20170526t164605z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2017-05-26T16:49:58.524133Z\",\"endTime\":\"2017-05-26T16:49:58.8871404Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n  },\"isDedicated\":true\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b46262b9-164d-4f59-b94e-64ec10d658d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170526t164605z?api-version=2017-05-01.5.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-115883067_1-20170526t164605z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170526t164605z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2017-05-26T16:49:58.524133Z\",\"lastBootTime\":\"2017-05-26T16:49:55.6209658Z\",\"allocationTime\":\"2017-05-26T16:46:05.8782275Z\",\"ipAddress\":\"100.74.76.58\",\"affinityId\":\"TVM:tvm-115883067_1-20170526t164605z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2017-05-26T16:49:58.524133Z\",\"endTime\":\"2017-05-26T16:49:58.8871404Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n  },\"isDedicated\":true\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b46262b9-164d-4f59-b94e-64ec10d658d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:19 GMT',
  connection: 'close' });
 return result; }]];