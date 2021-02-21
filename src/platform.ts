import { API, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig, Service, Characteristic } from 'homebridge';

import { PLATFORM_NAME, PLUGIN_NAME } from './settings';

/**
 * Homebridge Presence platform.
 *
 * Creates a motion sensor accessory for each configured entity.
 */
export class HomebridgePresencePlatform implements DynamicPlatformPlugin {

  public readonly Service: typeof Service = this.api.hap.Service;
  public readonly Characteristic: typeof Characteristic = this.api.hap.Characteristic;

  // Tracks restored cached accessories
  public readonly accessories: PlatformAccessory[] = [];

  constructor(
    public readonly log: Logger,
    public readonly config: PlatformConfig,
    public readonly api: API,
  ) {
    this.log.debug('Initializing...');
    this.api.on('didFinishLaunching', () => {
      log.debug('Finished initializing.');
    });
  }

  /**
   * Handler invoked when Homebridge restores cached accessories from disk on start-up.
   */
  configureAccessory(accessory: PlatformAccessory) {
    this.log.info('Loading accessory from cache:', accessory.displayName);
    this.accessories.push(accessory);
  }
}
