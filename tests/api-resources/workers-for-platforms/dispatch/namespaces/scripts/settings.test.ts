// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        errors: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        messages: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        result: {},
        success: true,
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        errors: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        messages: [
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
          { code: 1000, message: 'string' },
        ],
        result: {
          logpush: false,
          tail_consumers: [
            { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
            { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
            { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
          ],
        },
        success: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
      'my-dispatch-namespace',
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
