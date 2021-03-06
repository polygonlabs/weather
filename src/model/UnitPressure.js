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
    root.WeatherApiForVizrt.UnitPressure = factory(root.WeatherApiForVizrt.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class UnitPressure.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "inHg"
     * @const
     */
    "inHg": "inHg",
    /**
     * value: "hPa"
     * @const
     */
    "hPa": "hPa",
    /**
     * value: "mb"
     * @const
     */
    "mb": "mb",
    /**
     * value: "Pa"
     * @const
     */
    "Pa": "Pa"  };

  /**
   * Returns a <code>UnitPressure</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/UnitPressure} The enum <code>UnitPressure</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


