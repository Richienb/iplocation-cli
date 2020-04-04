#!/usr/bin/env node

'use strict';

const cconsole = require('cconsole');
const iplocation = require('iplocation').default;
const args = require('minimist')(process.argv.slice(2));
const pkg = require('./package');
const ip = args.ip || args._[0];
const help = args.h || args.help;
const json = args.json;

const usage = `
    {bold(iplocation-cli)} v${pkg.version}

    iplocation --ip [ip4-address]
    iplocation [ip4-address]

    additional options:
    --json        output to STDOUT in JSON
`;

if (!ip || help) {
    cconsole(usage);
    process.exit(1);
}

iplocation(ip, [], (err, result) => {
    if (err) {
        cconsole(`{red(${err.message || err})}`);
    } else {
        if (json) {
            console.log(JSON.stringify(result));
        } else {
            for (const key in result) {
                cconsole(`{green(${key})} ${result[key]}`);
            }
        }
    }
});
