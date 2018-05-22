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
    define(['ApiClient', 'model/Conditions', 'model/Cumulative'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Conditions'), require('./Cumulative'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.SeriesData = factory(root.WeatherApiForVizrt.ApiClient, root.WeatherApiForVizrt.Conditions, root.WeatherApiForVizrt.Cumulative);
  }
}(this, function(ApiClient, Conditions, Cumulative) {
  'use strict';




  /**
   * The SeriesData model module.
   * @module model/SeriesData
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>SeriesData</code>.
   * @alias module:model/SeriesData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SeriesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SeriesData} obj Optional instance to populate.
   * @return {module:model/SeriesData} The populated <code>SeriesData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = Conditions.constructFromObject(data['conditions']);
      }
      if (data.hasOwnProperty('cumulative')) {
        obj['cumulative'] = Cumulative.constructFromObject(data['cumulative']);
      }
    }
    return obj;
  }

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {module:model/Conditions} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * @member {module:model/Cumulative} cumulative
   */
  exports.prototype['cumulative'] = undefined;



  return exports;
}));

