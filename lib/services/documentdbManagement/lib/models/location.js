/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Location class.
 * @constructor
 * A region in which the Azure DocumentDB database account is deployed.
 *
 * @member {string} [id] The unique identifier of the region within the
 * database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
 *
 * @member {string} [locationName] The name of the region.
 *
 * @member {string} [documentEndpoint] The connection endpoint for the specific
 * region. Example:
 * https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
 *
 * @member {string} [provisioningState]
 *
 * @member {number} [failoverPriority] The failover priority of the region. A
 * failover priority of 0 indicates a write region. The maximum value for a
 * failover priority = (total number of regions - 1). Failover priority values
 * must be unique for each of the regions in which the database account exists.
 *
 */
class Location {
  constructor() {
  }

  /**
   * Defines the metadata of Location
   *
   * @returns {object} metadata of Location
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Location',
      type: {
        name: 'Composite',
        className: 'Location',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          locationName: {
            required: false,
            serializedName: 'locationName',
            type: {
              name: 'String'
            }
          },
          documentEndpoint: {
            required: false,
            readOnly: true,
            serializedName: 'documentEndpoint',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          failoverPriority: {
            required: false,
            serializedName: 'failoverPriority',
            constraints: {
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Location;
