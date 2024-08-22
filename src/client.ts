import createClient, { type ClientOptions } from 'openapi-fetch';
import type { paths } from './generated/vapiOpenApi.js';

export const vapiClient = (options: ClientOptions) =>
  createClient<paths>({
    baseUrl: 'https://api.vapi.ai/',
    ...options,
  });
