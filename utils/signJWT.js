import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_EXPIRED_TIME, INTERNAL_SERVICES } from './constants';

const signJWT = ({jwtSecret, service}) => {
  const jwtParams = {
    service: INTERNAL_SERVICES[service].name
  };

  const jwtToken = jwt.sign(jwtParams, jwtSecret, {
    expiresIn: ACCESS_TOKEN_EXPIRED_TIME,
  });
  return jwtToken;
};

export default signJWT;
