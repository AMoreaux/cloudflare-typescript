// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routes', () => {
  test('moas', async () => {
    const responsePromise = cloudflare.radar.bgp.routes.moas();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('moas: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.bgp.routes.moas({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('moas: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgp.routes.moas(
        { format: 'JSON', invalid_only: true, origin: 0, prefix: '1.1.1.0/24' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('pfx2as', async () => {
    const responsePromise = cloudflare.radar.bgp.routes.pfx2as();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pfx2as: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.bgp.routes.pfx2as({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('pfx2as: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgp.routes.pfx2as(
        { format: 'JSON', longestPrefixMatch: true, origin: 0, prefix: '1.1.1.0/24', rpkiStatus: 'INVALID' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('stats', async () => {
    const responsePromise = cloudflare.radar.bgp.routes.stats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stats: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.bgp.routes.stats({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('stats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgp.routes.stats(
        { asn: 174, format: 'JSON', location: 'US' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseries', async () => {
    const responsePromise = cloudflare.radar.bgp.routes.timeseries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgp.routes.timeseries({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgp.routes.timeseries(
        {
          asn: 174,
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateRange: '7d',
          dateStart: '2023-09-01T11:41:33.782Z',
          format: 'JSON',
          includeDelay: true,
          location: 'US',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
