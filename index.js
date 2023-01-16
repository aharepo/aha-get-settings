import axios from 'axios';
import { INTERNAL_SERVICES } from './utils/constants.js';
import get from './utils/get.js';

export const getSensitiveSettings = async ({ settingServerUrl, service }) => {
  const API = axios.create({
    baseURL: settingServerUrl,
  });

  API.defaults.headers.post['Content-Type'] = 'application/json';

  const result = await API.post('/frontend-settings/sensitive', {
      ids: INTERNAL_SERVICES[service].allowedSettings,
      service: INTERNAL_SERVICES[service].name
    }
  );

  return get(
    result,
    'data',
    [],
  );
};

export const SERVICES = Object.keys(INTERNAL_SERVICES).reduce((result, service) => {
  return result = {
    ...result,
    [service]: service
  }
}, {});