# get-aha-sensitive-settings

Package for internal services are able to get sensitive settings

# Install

```bash
npm i get-aha-sensitive-settings
```
or 
```bash
yarn add get-aha-sensitive-settings
```

# Usage

```javascript
import { getSensitiveSettings, SERVICES } from 'get-aha-sensitive-settings';

const sensitiveSettings = await getSensitiveSettings({
  graphUrl: ${AHA_GRAPH_BASE_URL},
  jwtSecret: ${JWT_SECRET},
  service: ${SERVICES_NAME},
});
```

## Options

| Property               | Type     | Required? | Description                                                                         |
| :--------------------- | :------- | :-------- | :---------------------------------------------------------------------------------- |
| graphUrl               | string   | yes       | graph server URL                                                                    |
| jwtSecret              | string   | yes       | secret key to sign JWT token                                                        |
| service                | string   | yes       | service name, e.g: SERVICES.AHA_SEARCH                                                     |

## sensitiveFrontendSettingResponse

| Property        | Type    | Description                                                                                                            |
| :---------      | :------ | :--------------------------------------------------------------------------------------------------------------------- |
| id              | string  | frontend setting id                                                                                  |
| decrypt_value   | string  | frontend setting value after decrypting                                                                                       |                                                  |

