// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '04319d6d-4a66-4701-bb2f-e7dbbd9ae4db';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls363.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt.expire?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01',
  'x-ms-request-id': 'cc1104ce-27d1-4bf5-b991-98f23575e8d1',
  contentlength: '0',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls363.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt.expire?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01',
  'x-ms-request-id': 'cc1104ce-27d1-4bf5-b991-98f23575e8d1',
  contentlength: '0',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f42f2482-b04f-4112-aa73-efad4676fadb',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '304' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f42f2482-b04f-4112-aa73-efad4676fadb',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '304' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=Absolute&expireTime=1501004523142&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'edb4060a-5196-44a8-97e8-29f179f9e469',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=Absolute&expireTime=1501004523142&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'edb4060a-5196-44a8-97e8-29f179f9e469',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":1501004523142,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9a044bc8-83cc-49f7-b491-f95a25cd5504',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '316' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":1501004523142,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9a044bc8-83cc-49f7-b491-f95a25cd5504',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '316' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=RelativeToCreationDate&expireTime=120000&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '52289caf-08a6-4e22-a53d-0573b96b4e22',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=RelativeToCreationDate&expireTime=120000&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '52289caf-08a6-4e22-a53d-0573b96b4e22',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":1501004523142,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '74ff2c5f-33ca-4953-b7a2-3370bc856247',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:05 GMT',
  connection: 'close',
  'content-length': '316' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":1501004523142,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '74ff2c5f-33ca-4953-b7a2-3370bc856247',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:05 GMT',
  connection: 'close',
  'content-length': '316' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=RelativeToNow&expireTime=120000&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '17b05bb8-a29e-4f81-a435-397edb8a9333',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=RelativeToNow&expireTime=120000&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '17b05bb8-a29e-4f81-a435-397edb8a9333',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":1501004525571,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '09f0e692-4f1b-48e5-881f-0ac71f5c8dbf',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:05 GMT',
  connection: 'close',
  'content-length': '316' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":1501004525571,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '09f0e692-4f1b-48e5-881f-0ac71f5c8dbf',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:05 GMT',
  connection: 'close',
  'content-length': '316' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=NeverExpire&expireTime=120000&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '3f1aa6be-14f9-427f-8b52-10132eafb8a5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:05 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlssdkfolder01%2Femptyfile.txt.expire?expiryOption=NeverExpire&expireTime=120000&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '3f1aa6be-14f9-427f-8b52-10132eafb8a5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:05 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61f9eb72-0db1-42e7-9727-7bd904ca930f',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:06 GMT',
  connection: 'close',
  'content-length': '304' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls363.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt.expire?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1501004403142,\"modificationTime\":1501004403142,\"replication\":1,\"permission\":\"770\",\"owner\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"group\":\"e994d55d-2464-4c73-b5e1-40e3c9894434\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61f9eb72-0db1-42e7-9727-7bd904ca930f',
  'x-ms-webhdfs-version': '17.04.22.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 25 Jul 2017 17:40:06 GMT',
  connection: 'close',
  'content-length': '304' });
 return result; }]];
 exports.mockVariables = function() { return {"nowPlusOffset":1501004525143}; };