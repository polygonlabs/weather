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
    root.WeatherApiForVizrt.SunMoon = factory(root.WeatherApiForVizrt.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SunMoon model module.
   * @module model/SunMoon
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>SunMoon</code>.
   * @alias module:model/SunMoon
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SunMoon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SunMoon} obj Optional instance to populate.
   * @return {module:model/SunMoon} The populated <code>SunMoon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sunrise')) {
        obj['sunrise'] = ApiClient.convertToType(data['sunrise'], 'Date');
      }
      if (data.hasOwnProperty('sunset')) {
        obj['sunset'] = ApiClient.convertToType(data['sunset'], 'Date');
      }
      if (data.hasOwnProperty('moonrise')) {
        obj['moonrise'] = ApiClient.convertToType(data['moonrise'], 'Date');
      }
      if (data.hasOwnProperty('moonset')) {
        obj['moonset'] = ApiClient.convertToType(data['moonset'], 'Date');
      }
      if (data.hasOwnProperty('moonPhase')) {
        obj['moonPhase'] = ApiClient.convertToType(data['moonPhase'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} sunrise
   */
  exports.prototype['sunrise'] = undefined;
  /**
   * @member {Date} sunset
   */
  exports.prototype['sunset'] = undefined;
  /**
   * @member {Date} moonrise
   */
  exports.prototype['moonrise'] = undefined;
  /**
   * @member {Date} moonset
   */
  exports.prototype['moonset'] = undefined;
  /**
   * @member {module:model/SunMoon.MoonPhaseEnum} moonPhase
   */
  exports.prototype['moonPhase'] = undefined;


  /**
   * Allowed values for the <code>moonPhase</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MoonPhaseEnum = {
    /**
     * value: "new"
     * @const
     */
    "new": "new",
    /**
     * value: "waxing_crescent"
     * @const
     */
    "waxing_crescent": "waxing_crescent",
    /**
     * value: "first_quarter"
     * @const
     */
    "first_quarter": "first_quarter",
    /**
     * value: "waxing_gibbous"
     * @const
     */
    "waxing_gibbous": "waxing_gibbous",
    /**
     * value: "full"
     * @const
     */
    "full": "full",
    /**
     * value: "waning_gibbous"
     * @const
     */
    "waning_gibbous": "waning_gibbous",
    /**
     * value: "last_quarter"
     * @const
     */
    "last_quarter": "last_quarter",
    /**
     * value: "waning_crescent"
     * @const
     */
    "waning_crescent": "waning_crescent"  };


  return exports;
}));


