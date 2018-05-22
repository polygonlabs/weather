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
    define(['ApiClient', 'model/Cumulative', 'model/Location', 'model/SeriesData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cumulative'), require('./Location'), require('./SeriesData'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.Series = factory(root.WeatherApiForVizrt.ApiClient, root.WeatherApiForVizrt.Cumulative, root.WeatherApiForVizrt.Location, root.WeatherApiForVizrt.SeriesData);
  }
}(this, function(ApiClient, Cumulative, Location, SeriesData) {
  'use strict';




  /**
   * The Series model module.
   * @module model/Series
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>Series</code>.
   * @alias module:model/Series
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Series</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Series} obj Optional instance to populate.
   * @return {module:model/Series} The populated <code>Series</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'Date');
      }
      if (data.hasOwnProperty('intervalType')) {
        obj['intervalType'] = ApiClient.convertToType(data['intervalType'], 'String');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Location.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('cumultative')) {
        obj['cumultative'] = Cumulative.constructFromObject(data['cumultative']);
      }
      if (data.hasOwnProperty('list')) {
        obj['list'] = ApiClient.convertToType(data['list'], [SeriesData]);
      }
    }
    return obj;
  }

  /**
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Date} end
   */
  exports.prototype['end'] = undefined;
  /**
   * @member {module:model/Series.IntervalTypeEnum} intervalType
   */
  exports.prototype['intervalType'] = undefined;
  /**
   * @member {Number} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * @member {module:model/Location} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/Cumulative} cumultative
   */
  exports.prototype['cumultative'] = undefined;
  /**
   * @member {Array.<module:model/SeriesData>} list
   */
  exports.prototype['list'] = undefined;


  /**
   * Allowed values for the <code>intervalType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IntervalTypeEnum = {
    /**
     * value: "day"
     * @const
     */
    "day": "day",
    /**
     * value: "hour"
     * @const
     */
    "hour": "hour"  };


  return exports;
}));

