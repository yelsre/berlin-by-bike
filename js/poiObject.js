let poiObject = {
  type: "FeatureCollection",
  name: "poi",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        name: "Brandenburger Tor",
        wiki: "https://en.wikipedia.org/wiki/Brandenburg_Gate",
        wiki_img:
          "https://en.wikipedia.org/wiki/Brandenburg_Gate#/media/File:Brandenburger_Tor_abends.jpg",
      },
      geometry: { type: "Point", coordinates: [13.3777055, 52.5162781] },
    },
    {
      type: "Feature",
      properties: {
        name: "Berlin Victory Column",
        wiki: "https://en.wikipedia.org/wiki/Berlin_Victory_Column",
        wiki_img:
          "https://en.wikipedia.org/wiki/Berlin_Victory_Column#/media/File:Berliner_Siegess%C3%A4ule_2012-04.jpg",
      },
      geometry: { type: "Point", coordinates: [13.35011, 52.5145076] },
    },
  ],
};
