#!/usr/bin/env node

"use strict";

const meow = require("meow");
const publicIp = require("public-ip");
const isIp = require("is-ip");
const chalk = require("chalk");
const pMap = require("p-map");
const treeify = require("treeify");
const sentencecaseKeys = require("sentencecase-keys");
const ipLocation = require("iplocation");

const cli = meow(`
    Usage
      $ iplocation <ipv4 addresses>

    Examples
      $ iplocation 172.217.167.78
      172.217.167.78
      ├─ Latitude: -33.8591
      ├─ Longitude: 151.2002
      ├─ Region
      │  ├─ Name: New South Wales
      │  └─ Code: NSW
      ├─ Country
      │  ├─ Name: Australia
      │  ├─ Code: AU
      │  ├─ Iso3: AUS
      │  ├─ Capital: Canberra
      │  ├─ Tld: .au
      │  ├─ Population: 21515754
      │  ├─ Area: 7686850
      │  ├─ Calling code: +61
      │  ├─ Postal code: 2000
      │  ├─ Timezone
      │  │  ├─ Code: Australia/Sydney
      │  │  └─ Offset: +1100
      │  ├─ Currency
      │  │  ├─ Name: Dollar
      │  │  └─ Code: AUD
      │  └─ Languages
      │     └─ 0: en-AU
      └─ Continent
         ├─ Code: OC
         └─ In eu: false
`);

module.exports = (async () => {
	const ipAddresses =
		cli.input.length === 0 ? [await publicIp.v4()] : cli.input;

	for (const ip of ipAddresses) {
		if (!isIp.v4(ip)) {
			console.log(chalk.red(`${ip} is not a valid ipv4 address!`));
			return;
		}
	}

	const ipData = await pMap(ipAddresses, async ip => [
		ip,
		await ipLocation(ip)
	]);

	for (const [ip, data] of ipData) {
		console.log(chalk.bold(ip));

		// Map zoom is determined by the precision of the coordinations
		var zoom = (data.latitude + ":" + data.longitude).length;
		zoom = zoom > 19 ? 19 : zoom;
		zoom = zoom < 12 ? 12 : zoom;

		data.map = `https://www.google.com/maps/@${data.latitude},${data.longitude},${zoom}z`;

		console.log(treeify.asTree(sentencecaseKeys(data, { deep: true }), true));
	}
})();
