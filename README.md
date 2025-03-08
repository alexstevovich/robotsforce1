# RobotsForce1

> ### _Define the crawl zones. Control the AO._

**RobotsForce1** –The presidential package of robots.txt generators. A joint task force of elite directives, securing the perimeter against unauthorized bots. Precision, control, and absolute authority over your domain.

<br>
[![npm version](https://img.shields.io/npm/v/robotsforce1.svg)](https://www.npmjs.com/package/robotsforce1)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

## Features

- **Elegant API** - Simple, direct, and fluent.

- **Full Compliance** - Supports the entire standard.

- **Zero dependencies** - atomic, minimal, unopinionated.

    <br><br>

## Installation

```sh

npm  install  robotsforce1

```

<br><br>

## Usage

```js
import { RobotsTxt } from 'robotsforce1';

const robots = new RobotsTxt();
robots.agent('*').allow('/').disallow('/private');
robots.agent('Googlebot').allow('/').disallow('/sensitive').delay(5);
robots.sitemap('https://example.com/sitemap.xml');
console.log(robots.toRobotsTxt());

/**
User-agent: *
Allow: /
Disallow: /private

User-agent: Googlebot
Allow: /
Disallow: /sensitive
Crawl-delay: 5

Sitemap: https://example.com/sitemap.xml
*/
```

<br><br>

## Need sitemap.xml?

I provide a package for `sitemap.xml` as well.
If you use these together your project will be backed by some of the most elite webstandard writers in the world—if not the most elite.

[https://github.com/alexstevovich/sitemapteam6](https://github.com/alexstevovich/sitemapteam6)

<br><br>

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
