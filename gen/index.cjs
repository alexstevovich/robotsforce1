var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  RobotsTxt: () => RobotsTxt,
  RobotsTxtUserAgent: () => RobotsTxtUserAgent
});
module.exports = __toCommonJS(index_exports);
/* *******************************************************
 * robotsforce1
 *
 * ~ Define the crawl zones. Control the AO.
 *
 * @license
 *
 * Apache-2.0
 *
 * Copyright 2015-2025 Alex Stevovich
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
 *
 * @meta
 *
 * package_name: robotsforce1
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-08T20:15:28.362Z
 * certified_version: 1.0.0
 * file_uuid: da8a97c3-1689-4334-af19-d65b3cdcde66
 * file_size: 4951 bytes
 * file_hash: 8849fca134ddad84e5abfe7c174b9d8d536f82f6f1cf45fe0bbab6b6ea93359a
 * mast_hash: e3f3854b635232cf073ad5ab2d0d16467b979f945dfd33e243628d957aa872b9
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ******************************************************* */
class RobotsTxt {
  /**
   * Creates a new `RobotsTxt` instance.
   */
  constructor() {
    this.userAgents = /* @__PURE__ */ new Map();
    this.sitemaps = /* @__PURE__ */ new Set();
  }
  /**
   * Adds a sitemap URL entry.
   * @param {string} url - The URL of the sitemap.
   * @returns {this} Returns the current instance for method chaining.
   */
  sitemap(url) {
    this.sitemaps.add(`Sitemap: ${url}`);
    return this;
  }
  /**
   * Retrieves or creates a user-agent entry.
   * @param {string} name - The user-agent name (e.g., `Googlebot`, `*`).
   * @returns {RobotsTxtUserAgent} Returns an instance of `RobotsTxtUserAgent` for chaining.
   */
  agent(name) {
    if (!this.userAgents.has(name)) {
      this.userAgents.set(name, new RobotsTxtUserAgent(name));
    }
    return this.userAgents.get(name);
  }
  /**
   * Generates the `robots.txt` content.
   * @param {Object} [options] - Options for generating the output.
   * @param {boolean} [options.force=false] - If `true`, generates output even if no agents are defined.
   * @returns {string} The generated `robots.txt` content.
   * @throws {Error} If no user-agent is defined and `force` is not `true`.
   */
  toRobotsTxt(options = { force: false }) {
    if (this.userAgents.size === 0 && !options.force) {
      throw new Error(
        `No User-agent defined in robots.txt. Add one with:

    robots.agent('*').allow('/');

Or use { force: true } to suppress this error.`
      );
    }
    let output = "";
    for (const agent of this.userAgents.values()) {
      output += agent.toRobotsTxt() + "\n\n";
    }
    output += [...this.sitemaps].join("\n");
    return output.trim();
  }
}
class RobotsTxtUserAgent {
  /**
   * Creates a new user-agent entry.
   * @param {string} name - The name of the user-agent (e.g., `Googlebot`, `*`).
   */
  constructor(name) {
    this.name = name;
    this.rules = [];
  }
  /**
   * Allows access to a path.
   * @param {string} path - The path to allow.
   * @returns {this} Returns the current instance for method chaining.
   */
  allow(path) {
    this.rules.push(`Allow: ${path}`);
    return this;
  }
  /**
   * Disallows access to a path.
   * @param {string} path - The path to disallow.
   * @returns {this} Returns the current instance for method chaining.
   */
  disallow(path) {
    this.rules.push(`Disallow: ${path}`);
    return this;
  }
  /**
   * Sets a crawl delay for the user-agent.
   * @param {number} seconds - The delay time in seconds.
   * @returns {this} Returns the current instance for method chaining.
   */
  delay(seconds) {
    this.rules.push(`Crawl-delay: ${seconds}`);
    return this;
  }
  /**
   * Generates the `robots.txt` rules for this user-agent.
   * @returns {string} The formatted `robots.txt` user-agent block.
   */
  toRobotsTxt() {
    return `User-agent: ${this.name}
` + this.rules.join("\n");
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RobotsTxt,
  RobotsTxtUserAgent
});
