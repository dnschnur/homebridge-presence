import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { HomebridgePresencePlatform } from './platform'; 

export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, HomebridgePresencePlatform);
};
