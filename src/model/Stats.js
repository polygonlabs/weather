/**
 * Weather API for Vizrt
 * This is a Weather API to provide Weather Data to a Vizrt Graphics System
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.Stats = factory(root.WeatherApiForVizrt.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Stats model module.
   * @module model/Stats
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>Stats</code>.
   * @alias module:model/Stats
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Stats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stats} obj Optional instance to populate.
   * @return {module:model/Stats} The populated <code>Stats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('min24hrTemp')) {
        obj['min24hrTemp'] = ApiClient.convertToType(data['min24hrTemp'], 'Number');
      }
      if (data.hasOwnProperty('max24hrTemp')) {
        obj['max24hrTemp'] = ApiClient.convertToType(data['max24hrTemp'], 'Number');
      }
      if (data.hasOwnProperty('normalTempMin')) {
        obj['normalTempMin'] = ApiClient.convertToType(data['normalTempMin'], 'Number');
      }
      if (data.hasOwnProperty('normalTempMax')) {
        obj['normalTempMax'] = ApiClient.convertToType(data['normalTempMax'], 'Number');
      }
      if (data.hasOwnProperty('recordTempMin')) {
        obj['recordTempMin'] = ApiClient.convertToType(data['recordTempMin'], 'Number');
      }
      if (data.hasOwnProperty('recordTempMax')) {
        obj['recordTempMax'] = ApiClient.convertToType(data['recordTempMax'], 'Number');
      }
      if (data.hasOwnProperty('recordTempMinYear')) {
        obj['recordTempMinYear'] = ApiClient.convertToType(data['recordTempMinYear'], 'Number');
      }
      if (data.hasOwnProperty('recordTempMaxYear')) {
        obj['recordTempMaxYear'] = ApiClient.convertToType(data['recordTempMaxYear'], 'Number');
      }
      if (data.hasOwnProperty('normalRain')) {
        obj['normalRain'] = ApiClient.convertToType(data['normalRain'], 'Number');
      }
      if (data.hasOwnProperty('recordRainMin')) {
        obj['recordRainMin'] = ApiClient.convertToType(data['recordRainMin'], 'Number');
      }
      if (data.hasOwnProperty('recordRainMax')) {
        obj['recordRainMax'] = ApiClient.convertToType(data['recordRainMax'], 'Number');
      }
      if (data.hasOwnProperty('normalSnow')) {
        obj['normalSnow'] = ApiClient.convertToType(data['normalSnow'], 'Number');
      }
      if (data.hasOwnProperty('recordSnowMin')) {
        obj['recordSnowMin'] = ApiClient.convertToType(data['recordSnowMin'], 'Number');
      }
      if (data.hasOwnProperty('recordSnowMax')) {
        obj['recordSnowMax'] = ApiClient.convertToType(data['recordSnowMax'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} min24hrTemp
   */
  exports.prototype['min24hrTemp'] = undefined;
  /**
   * @member {Number} max24hrTemp
   */
  exports.prototype['max24hrTemp'] = undefined;
  /**
   * @member {Number} normalTempMin
   */
  exports.prototype['normalTempMin'] = undefined;
  /**
   * @member {Number} normalTempMax
   */
  exports.prototype['normalTempMax'] = undefined;
  /**
   * @member {Number} recordTempMin
   */
  exports.prototype['recordTempMin'] = undefined;
  /**
   * @member {Number} recordTempMax
   */
  exports.prototype['recordTempMax'] = undefined;
  /**
   * @member {Number} recordTempMinYear
   */
  exports.prototype['recordTempMinYear'] = undefined;
  /**
   * @member {Number} recordTempMaxYear
   */
  exports.prototype['recordTempMaxYear'] = undefined;
  /**
   * @member {Number} normalRain
   */
  exports.prototype['normalRain'] = undefined;
  /**
   * @member {Number} recordRainMin
   */
  exports.prototype['recordRainMin'] = undefined;
  /**
   * @member {Number} recordRainMax
   */
  exports.prototype['recordRainMax'] = undefined;
  /**
   * @member {Number} normalSnow
   */
  exports.prototype['normalSnow'] = undefined;
  /**
   * @member {Number} recordSnowMin
   */
  exports.prototype['recordSnowMin'] = undefined;
  /**
   * @member {Number} recordSnowMax
   */
  exports.prototype['recordSnowMax'] = undefined;



  return exports;
}));


