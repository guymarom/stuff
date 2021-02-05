const departureDates = ["2021-02-22", "2021-03-01", "2021-03-08"]
const airports = ["SYD", "PER", "MEL", "ADL", "BNE"]

const root = "https://www.kayak.com/flights/TLV-"
const suffix = "1adults/children-11?sort=bestflight_a&fs=airlines=-MULT"
const roundTemplate = `${root}$AIRPORT/$DEPDATE-flexible/2021-03-31-flexible/${suffix}`
const onewayTemplate = `${root}$AIRPORT/$DEPDATE-flexible/${suffix}`

function templateToUrl(template, airport, depDate) {
    return template.replace("$AIRPORT", airport).replace("$DEPDATE", depDate);
}

function act(url) {
    console.log(url);
}

departureDates.forEach(depDate => {
   airports.forEach(airport => {
       let oneWayUrl = onewayTemplate.replace("$AIRPORT", airport).replace("$DEPDATE", depDate);
       act(oneWayUrl);

       let roundUrl = roundTemplate.replace("$AIRPORT", airport).replace("$DEPDATE", depDate);
       act(roundUrl)
   });
});
