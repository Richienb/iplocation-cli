# iplocation-cli [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/iplocation-cli/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/iplocation-cli)

Get ip location information.

[![NPM Badge](https://nodei.co/npm/iplocation-cli.png)](https://npmjs.com/package/iplocation-cli)

## Install

```sh
npm install --global iplocation-cli
```

## Usage

```sh
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
│  ├─ Code: OC
│  └─ In eu: false
└─ Map: https://www.google.com/maps/@-33.8591,151.2002,15z

```

## Related

- [iplocation](https://github.com/Richienb/iplocation) - API for this module.
