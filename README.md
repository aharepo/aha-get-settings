# aha-get-settings

Package for internal services are able to get sensitive settings

# Install
add below line to package.json
```bash
  "aha-get-settings": "https://github.com/aharepo/aha-get-settings.git#v1.0.1",
```

# Usage

```javascript
import { getSensitiveSettings, SERVICES } from 'aha-get-settings';

const sensitiveSettings = await getSensitiveSettings({
  settingServerUrl: ${AHA_SETTING_SERVER_URL},
  service: SERVICES[${SERVICES_NAME}],
});
```

## Options

| Property               | Type     | Required? | Description                                                                         |
| :--------------------- | :------- | :-------- | :---------------------------------------------------------------------------------- |
| settingServerUrl       | string   | yes       | setting server URL                                                                    |
| service                | string   | yes       | service name, e.g: SERVICES.AHA_SEARCH                                                     |

## sensitiveFrontendSettingResponse

| Property        | Type    | Description                                                                                                            |
| :---------      | :------ | :--------------------------------------------------------------------------------------------------------------------- |
| id              | string  | frontend setting id                                                                                  |
| value           | string  | frontend setting value after decrypting                                                                                       |                                                  |


