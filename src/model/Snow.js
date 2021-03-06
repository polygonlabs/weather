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
    define(['ApiClient', 'model/Total'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Total'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.Snow = factory(root.WeatherApiForVizrt.ApiClient, root.WeatherApiForVizrt.Total);
  }
}(this, function(ApiClient, Total) {
  'use strict';




  /**
   * The Snow model module.
   * @module model/Snow
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>Snow</code>.
   * @alias module:model/Snow
   * @class
   * @extends module:model/Total
   */
  var exports = function() {
    var _this = this;
    Total.call(_this);



  };

  /**
   * Constructs a <code>Snow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Snow} obj Optional instance to populate.
   * @return {module:model/Snow} The populated <code>Snow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Total.constructFromObject(data, obj);
      if (data.hasOwnProperty('chance')) {
        obj['chance'] = ApiClient.convertToType(data['chance'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('depth')) {
        obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Total.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Number} chance
   */
  exports.prototype['chance'] = undefined;
  /**
   * @member {module:model/Snow.UnitEnum} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * @member {Number} depth
   */
  exports.prototype['depth'] = undefined;


  /**
   * Allowed values for the <code>unit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnitEnum = {
    /**
     * value: "cm"
     * @const
     */
    "cm": "cm",
    /**
     * value: "in"
     * @const
     */
    "in": "in"  };


  return exports;
}));


