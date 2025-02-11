/* This file is a part of @mdn/browser-compat-data
 * See LICENSE file for more information. */

import {
  CompatStatement,
  BrowserName,
  SimpleSupportStatement,
} from '../types/types.js';

/**
 *
 * @param {CompatStatement} compat
 * @param {BrowserName} browser
 * @returns {SimpleSupportStatement[]}
 */
export default (
  compat: CompatStatement,
  browser: BrowserName,
): SimpleSupportStatement[] => {
  if (browser in compat.support) {
    const data = compat.support[browser];
    if (data) {
      return Array.isArray(data) ? data : [data];
    }
  }

  return [{ version_added: null }];
};
