declare module "index" {
    /**
     * Represents a `robots.txt` file generator.
     * Provides methods to define user-agent rules and sitemaps.
     */
    export class RobotsTxt {
        /** @type {Map<string, RobotsTxtUserAgent>} Holds user-agent rules */
        userAgents: Map<string, RobotsTxtUserAgent>;
        /** @type {Set<string>} Holds sitemap URLs */
        sitemaps: Set<string>;
        /**
         * Adds a sitemap URL entry.
         * @param {string} url - The URL of the sitemap.
         * @returns {this} Returns the current instance for method chaining.
         */
        sitemap(url: string): this;
        /**
         * Retrieves or creates a user-agent entry.
         * @param {string} name - The user-agent name (e.g., `Googlebot`, `*`).
         * @returns {RobotsTxtUserAgent} Returns an instance of `RobotsTxtUserAgent` for chaining.
         */
        agent(name: string): RobotsTxtUserAgent;
        /**
         * Generates the `robots.txt` content.
         * @param {Object} [options] - Options for generating the output.
         * @param {boolean} [options.force=false] - If `true`, generates output even if no agents are defined.
         * @returns {string} The generated `robots.txt` content.
         * @throws {Error} If no user-agent is defined and `force` is not `true`.
         */
        toRobotsTxt(options?: {
            force?: boolean;
        }): string;
    }
    /**
     * Represents rules for a specific user-agent in `robots.txt`.
     */
    export class RobotsTxtUserAgent {
        /**
         * Creates a new user-agent entry.
         * @param {string} name - The name of the user-agent (e.g., `Googlebot`, `*`).
         */
        constructor(name: string);
        /** @type {string} The name of the user-agent. */
        name: string;
        /** @type {string[]} Stores allow/disallow rules and directives. */
        rules: string[];
        /**
         * Allows access to a path.
         * @param {string} path - The path to allow.
         * @returns {this} Returns the current instance for method chaining.
         */
        allow(path: string): this;
        /**
         * Disallows access to a path.
         * @param {string} path - The path to disallow.
         * @returns {this} Returns the current instance for method chaining.
         */
        disallow(path: string): this;
        /**
         * Sets a crawl delay for the user-agent.
         * @param {number} seconds - The delay time in seconds.
         * @returns {this} Returns the current instance for method chaining.
         */
        delay(seconds: number): this;
        /**
         * Generates the `robots.txt` rules for this user-agent.
         * @returns {string} The formatted `robots.txt` user-agent block.
         */
        toRobotsTxt(): string;
    }
}
