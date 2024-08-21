import createClient from 'openapi-fetch';
import type { paths } from './generated/vapiOpenApi.js';

export const vapiClient = createClient<paths>({
  baseUrl: 'https://api.vapi.ai/',
});
