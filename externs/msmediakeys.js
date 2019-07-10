/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for prefixed EME v20140218 as supported by IE11/Edge
 * (http://www.w3.org/TR/2014/WD-encrypted-media-20140218).
 * @externs
 */


/**
 * @constructor
 * @param {string} keySystem
 */
function MSMediaKeys(keySystem) {}


/**
 * @param {string} keySystem
 * @param {string} contentType
 * @return {boolean}
 */
MSMediaKeys.isTypeSupported = function(keySystem, contentType) {};


/**
 * @param {string} contentType
 * @param {Uint8Array} initData
 * @param {Uint8Array=} cdmData
 * @return {!MSMediaKeySession}
 */
MSMediaKeys.prototype.createSession =
    function(contentType, initData, cdmData) {};


/**
 * @interface
 * @extends {EventTarget}
 */
class MSMediaKeySession {
  constructor() {
    /** @type {MSMediaKeyError} */
    this.error;
  }

  /** @param {Uint8Array} message */
  update(message) {}

  close() {}

  /** @override */
  addEventListener(type, listener, useCapture) {}

  /** @override */
  removeEventListener(type, listener, useCapture) {}

  /** @override */
  dispatchEvent(evt) {}
}


/**
 * @param {MSMediaKeys} mediaKeys
 */
HTMLMediaElement.prototype.msSetMediaKeys = function(mediaKeys) {};


class MSMediaKeyError {
  constructor() {
    /** @type {number} */
    this.code;

    /** @type {number} */
    this.systemCode;
  }
}


/** @type {number} */
MSMediaKeyError.MS_MEDIA_KEYERR_UNKNOWN;


/** @type {number} */
MSMediaKeyError.MS_MEDIA_KEYERR_CLIENT;


/** @type {number} */
MSMediaKeyError.MS_MEDIA_KEYERR_SERVICE;


/** @type {number} */
MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT;


/** @type {number} */
MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE;


/** @type {number} */
MSMediaKeyError.MS_MEDIA_KEYERR_DOMAIN;
