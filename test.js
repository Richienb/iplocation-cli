const test = require("ava")
const execa = require("execa")

test("main", async t => {
	const { stdout } = await execa("./cli.js", ["172.217.167.78"])
	t.is(stdout, `172.217.167.78
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
`)
})
