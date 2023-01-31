import axios from 'axios';
import { INTERNAL_SERVICES } from './utils/constants.js';
import get from './utils/get.js';

export const getSensitiveSettings = async ({ settingServerUrl, service }) => {
  const API = axios.create({
    baseURL: settingServerUrl,
  });

  API.defaults.headers.post['Content-Type'] = 'application/json';
  const result = await API.post('/graphql', {
    variables: {
      filters: {
        ids: INTERNAL_SERVICES[service].allowedSettings,
        service: "AHA_SEARCH"
      },
    },
    query: `
      query Get_sensitive_frontend_settings($filters: GetSensitiveFrontendSettingsInput) {
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
    [],
  );
};

export const SERVICES = Object.keys(INTERNAL_SERVICES).reduce((result, service) => {
  return result = {
    ...result,
    [service]: service
  }
}, {});