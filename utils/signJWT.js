import jwt from 'jsonwebtoken';
import { INTERNAL_SERVICES } from './constants';

const signJWT = ({jwtSecret, service}) => {
  const jwtParams = {
    service: INTERNAL_SERVICES[service].name
  };

  const jwtToken = jwt.sign(jwtParams, jwtSecret);
  return jwtToken;
};

export default signJWT;
