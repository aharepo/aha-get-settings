import axios from 'axios';
import signJWT from './utils/signJWT';
import { INTERNAL_SERVICES } from './utils/constants';
import get from './utils/get';

const getSensitiveSettings = async function({ jwtSecret, service }) {
  const GRAPH_API = axios.create({
    baseURL: process.env.AHA_GRAPH_BASE_URL || 'https://graph.aha.is',
  });

  GRAPH_API.defaults.headers.post['Content-Type'] = 'application/json';
  GRAPH_API.defaults.headers.post['Authorization'] = `Bearer ${signJWT({jwtSecret, service})}`;
  const result = await GRAPH_API.post('/graphql', {
    variables: {
      filters: {
        ids: INTERNAL_SERVICES[service].allowedSettings,
      },
    },
    query: `
      query get_sensitive_frontend_settings($filters: GetFrontendSettingsInput) {
        get_sensitive_frontend_settings(filters: $filters) {
          settings {
            id
            value
          }
        }
      }
    `,
  });

  return get(
    result,
    'data.data.get_sensitive_frontend_settings.settings',
    '',
  );
};

const SERVICES = Object.keys(INTERNAL_SERVICES).reduce((result, service) => {
  return result = {
    ...result,
    [service]: service
  }
}, {});

module.exports = {
  getSensitiveSettings: getSensitiveSettings,
  SERVICES: SERVICES,
};
