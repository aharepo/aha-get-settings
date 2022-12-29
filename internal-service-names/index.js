import { INTERNAL_SERVICES } from '../utils/constants';

const SERVICES = Object.keys(INTERNAL_SERVICES).reduce((result, service) => {
  return result = {
    ...result,
    [service]: service
  }
}, {});

export default SERVICES;