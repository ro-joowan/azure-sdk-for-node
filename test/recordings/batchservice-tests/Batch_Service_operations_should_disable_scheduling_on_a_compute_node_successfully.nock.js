// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-115883067_2-20170526t164605z/disablescheduling?api-version=2017-05-01.5.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'dfc1a6b2-7f7d-4acd-b0ca-e67f85151a09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_2-20170526t164605z/disablescheduling',
  date: 'Fri, 26 May 2017 16:53:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-115883067_2-20170526t164605z/disablescheduling?api-version=2017-05-01.5.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'dfc1a6b2-7f7d-4acd-b0ca-e67f85151a09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_2-20170526t164605z/disablescheduling',
  date: 'Fri, 26 May 2017 16:53:23 GMT',
  connection: 'close' });
 return result; }]];