// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsesAPI from 'cloudflare/resources/radar/http/ases/ases';
import * as BotClassAPI from 'cloudflare/resources/radar/http/ases/bot-class';
import * as DeviceTypeAPI from 'cloudflare/resources/radar/http/ases/device-type';
import * as HTTPMethodAPI from 'cloudflare/resources/radar/http/ases/http-method';
import * as HTTPProtocolAPI from 'cloudflare/resources/radar/http/ases/http-protocol';
import * as IPVersionAPI from 'cloudflare/resources/radar/http/ases/ip-version';
import * as OSAPI from 'cloudflare/resources/radar/http/ases/os';
import * as TLSVersionAPI from 'cloudflare/resources/radar/http/ases/tls-version';

export class Ases extends APIResource {
  botClass: BotClassAPI.BotClass = new BotClassAPI.BotClass(this._client);
  deviceType: DeviceTypeAPI.DeviceType = new DeviceTypeAPI.DeviceType(this._client);
  httpProtocol: HTTPProtocolAPI.HTTPProtocol = new HTTPProtocolAPI.HTTPProtocol(this._client);
  httpMethod: HTTPMethodAPI.HTTPMethod = new HTTPMethodAPI.HTTPMethod(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  os: OSAPI.OS = new OSAPI.OS(this._client);
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);

  /**
   * Get the top autonomous systems by HTTP traffic. Values are a percentage out of
   * the total traffic.
   */
  get(query?: AseGetParams, options?: Core.RequestOptions): Core.APIPromise<AseGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<AseGetResponse>;
  get(
    query: AseGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AseGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/http/top/ases', { query, ...options }) as Core.APIPromise<{
        result: AseGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AseGetResponse {
  meta: AseGetResponse.Meta;

  top_0: Array<AseGetResponse.Top0>;
}

export namespace AseGetResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: unknown;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    clientASN: number;

    clientASName: string;

    value: string;
  }
}

export interface AseGetParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export namespace Ases {
  export import AseGetResponse = AsesAPI.AseGetResponse;
  export import AseGetParams = AsesAPI.AseGetParams;
  export import BotClass = BotClassAPI.BotClass;
  export import BotClassGetResponse = BotClassAPI.BotClassGetResponse;
  export import BotClassGetParams = BotClassAPI.BotClassGetParams;
  export import DeviceType = DeviceTypeAPI.DeviceType;
  export import DeviceTypeGetResponse = DeviceTypeAPI.DeviceTypeGetResponse;
  export import DeviceTypeGetParams = DeviceTypeAPI.DeviceTypeGetParams;
  export import HTTPProtocol = HTTPProtocolAPI.HTTPProtocol;
  export import HTTPProtocolGetResponse = HTTPProtocolAPI.HTTPProtocolGetResponse;
  export import HTTPProtocolGetParams = HTTPProtocolAPI.HTTPProtocolGetParams;
  export import HTTPMethod = HTTPMethodAPI.HTTPMethod;
  export import HTTPMethodGetResponse = HTTPMethodAPI.HTTPMethodGetResponse;
  export import HTTPMethodGetParams = HTTPMethodAPI.HTTPMethodGetParams;
  export import IPVersion = IPVersionAPI.IPVersion;
  export import IPVersionGetResponse = IPVersionAPI.IPVersionGetResponse;
  export import IPVersionGetParams = IPVersionAPI.IPVersionGetParams;
  export import OS = OSAPI.OS;
  export import OSGetResponse = OSAPI.OSGetResponse;
  export import OSGetParams = OSAPI.OSGetParams;
  export import TLSVersion = TLSVersionAPI.TLSVersion;
  export import TLSVersionGetResponse = TLSVersionAPI.TLSVersionGetResponse;
  export import TLSVersionGetParams = TLSVersionAPI.TLSVersionGetParams;
}
