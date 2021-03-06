// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '04319d6d-4a66-4701-bb2f-e7dbbd9ae4db';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?destination=adlssdkfolder01%2Fmovefile.txt&op=RENAME&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ba6fdaf-3d58-4c95-bbca-88406ecef3d8',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:00 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?destination=adlssdkfolder01%2Fmovefile.txt&op=RENAME&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ba6fdaf-3d58-4c95-bbca-88406ecef3d8',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:00 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004399077,\"modificationTime\":1501004399121,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c7152a2e-abfa-42bd-b1bb-83115aa9b6ca',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:00 GMT',
  connection: 'close',
  'content-length': '305' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004399077,\"modificationTime\":1501004399121,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c7152a2e-abfa-42bd-b1bb-83115aa9b6ca',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:00 GMT',
  connection: 'close',
  'content-length': '305' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/concatfile.txt [5394fe90-7839-4c46-8c35-9313da56cfe5][2017-07-25T10:40:01.2994534-07:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5394fe90-7839-4c46-8c35-9313da56cfe5',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:00 GMT',
  connection: 'close',
  'content-length': '251' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/concatfile.txt [5394fe90-7839-4c46-8c35-9313da56cfe5][2017-07-25T10:40:01.2994534-07:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5394fe90-7839-4c46-8c35-9313da56cfe5',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:00 GMT',
  connection: 'close',
  'content-length': '251' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?destination=adlssdkfolder02&op=RENAME&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ad3fb78f-c053-4734-967a-bb2a153c23cc',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:01 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?destination=adlssdkfolder02&op=RENAME&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ad3fb78f-c053-4734-967a-bb2a153c23cc',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:01 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1501004393923,\"modificationTime\":1501004400391,\"replication\":0,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ade31b10-3e82-467b-a01f-00267584cb4f',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:01 GMT',
  connection: 'close',
  'content-length': '280' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1501004393923,\"modificationTime\":1501004400391,\"replication\":0,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ade31b10-3e82-467b-a01f-00267584cb4f',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:01 GMT',
  connection: 'close',
  'content-length': '280' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01 [5061cc76-1d5d-43aa-aa6c-8bb5ed351f0c][2017-07-25T10:40:02.3810077-07:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5061cc76-1d5d-43aa-aa6c-8bb5ed351f0c',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:01 GMT',
  connection: 'close',
  'content-length': '236' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01 [5061cc76-1d5d-43aa-aa6c-8bb5ed351f0c][2017-07-25T10:40:02.3810077-07:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5061cc76-1d5d-43aa-aa6c-8bb5ed351f0c',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:01 GMT',
  connection: 'close',
  'content-length': '236' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=LISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004399077,\"modificationTime\":1501004399121,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cd2d22c0-0599-4625-919a-237ee7941d02',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:02 GMT',
  connection: 'close',
  'content-length': '336' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=LISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004399077,\"modificationTime\":1501004399121,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cd2d22c0-0599-4625-919a-237ee7941d02',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:02 GMT',
  connection: 'close',
  'content-length': '336' });
 return result; }]];