/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as operations from "./operations";

/**
 * DataLakeStoreFileSystemManagementClientOptions for DataLakeStoreFileSystemManagementClient.
 */
declare interface DataLakeStoreFileSystemManagementClientOptions extends ServiceClientOptions {
        /**
        * @property {string} [apiVersion] - Client Api Version.
        */
        apiVersion?: String;
        /**
        * @property {string} [adlsFileSystemDnsSuffix] - Gets the URI used as the base for all cloud service requests.
        */
        adlsFileSystemDnsSuffix?: String;
        /**
        * @property {string} [acceptLanguage] - Gets or sets the preferred language for the response.
        */
        acceptLanguage?: String;
        /**
        * @property {number} [longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
        */
        longRunningOperationRetryTimeout?: Number;
        /**
        * @property {boolean} [generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
        */
        generateClientRequestId?: Boolean;
    }

declare class DataLakeStoreFileSystemManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the DataLakeStoreFileSystemManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.apiVersion] - Client Api Version.
   *
   * @param {string} [options.adlsFileSystemDnsSuffix] - Gets the URI used as the base for all cloud service requests.
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, options?: DataLakeStoreFileSystemManagementClientOptions);

  credentials: ServiceClientCredentials;

  apiVersion: string;

  adlsFileSystemDnsSuffix: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  fileSystem: operations.FileSystem;
}

export = DataLakeStoreFileSystemManagementClient;
