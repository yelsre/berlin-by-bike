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
        wiki_img: `<a title="Thomas Wolf, www.foto-tw.de, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_abends.jpg"><img height="100" alt="Brandenburger Tor abends" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/256px-Brandenburger_Tor_abends.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_abends.jpg">Thomas Wolf, www.foto-tw.de</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: { type: "Point", coordinates: [13.3777055, 52.5162781] },
    },
    {
      type: "Feature",
      properties: {
        name: "Berlin Victory Column",
        wiki: "https://en.wikipedia.org/wiki/Berlin_Victory_Column",
        wiki_img: `<a title="Thomas Wolf, www.foto-tw.de, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berliner_Siegess%C3%A4ule_2012-04.jpg"><img height="100" alt="Berliner Siegessäule 2012-04" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Berliner_Siegess%C3%A4ule_2012-04.jpg/256px-Berliner_Siegess%C3%A4ule_2012-04.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berliner_Siegess%C3%A4ule_2012-04.jpg">Thomas Wolf, www.foto-tw.de</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: { type: "Point", coordinates: [13.35011, 52.5145076] },
    },
    {
      type: "Feature",
      properties: {
        name: "Tempelhofer Feld",
        wiki: "https://en.wikipedia.org/wiki/Tempelhofer_Feld",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), FAL, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berlin_Tempelhofer_Feld_UAV_05-2017.jpg"><img height="100" alt="Berlin Tempelhofer Feld UAV 05-2017" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Berlin_Tempelhofer_Feld_UAV_05-2017.jpg/256px-Berlin_Tempelhofer_Feld_UAV_05-2017.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berlin_Tempelhofer_Feld_UAV_05-2017.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, FAL, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.402335420092568, 52.474009938512054],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Britzer Garten",
        wiki: "https://en.wikipedia.org/wiki/Britzer_Garten",
        wiki_img: `<a title="Denis Apel, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:IBritzer_Garten_denis_apel.JPG"><img height="100" alt="IBritzer Garten denis apel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/IBritzer_Garten_denis_apel.JPG/128px-IBritzer_Garten_denis_apel.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:IBritzer_Garten_denis_apel.JPG">Denis Apel</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.416777656609865, 52.433247871604046],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Soviet War Memorial (Treptower Park)",
        wiki:
          "https://en.wikipedia.org/wiki/Soviet_War_Memorial_(Treptower_Park)",
        wiki_img: `<a title="Drrcs15, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Panorama_of_the_Russian_War_Memorial_at_Treptow.jpg"><img height="100" alt="Panorama of the Russian War Memorial at Treptow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Panorama_of_the_Russian_War_Memorial_at_Treptow.jpg/512px-Panorama_of_the_Russian_War_Memorial_at_Treptow.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Panorama_of_the_Russian_War_Memorial_at_Treptow.jpg">Drrcs15</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.471888930519802, 52.486162902351765],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Erholungspark Marzahn",
        wiki: "https://en.wikipedia.org/wiki/Erholungspark_Marzahn",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Marzahn_Gaerten_der_Welt_08-2015_img11_park_alley.jpg"><img height="100" alt="Marzahn Gaerten der Welt 08-2015 img11 park alley" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Marzahn_Gaerten_der_Welt_08-2015_img11_park_alley.jpg/256px-Marzahn_Gaerten_der_Welt_08-2015_img11_park_alley.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Marzahn_Gaerten_der_Welt_08-2015_img11_park_alley.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.574969093542165, 52.53713010791013],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Müggelsee",
        wiki: "https://en.wikipedia.org/wiki/M%C3%BCggelsee",
        wiki_img: `<a title="Leonhard Lenz, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg"><img height="100" alt="View from Müggelberge viewpoint 2019-06-13 22" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg/256px-View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:View_from_M%C3%BCggelberge_viewpoint_2019-06-13_22.jpg">Leonhard Lenz</a>, CC0, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.646740569022384, 52.436406848153318],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Fernsehturm Berlin",
        wiki: "https://en.wikipedia.org/wiki/Fernsehturm_Berlin",
        wiki_img: `<a title="Taxiarchos228, FAL, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berlin_-_Berliner_Fernsehturm1.jpg"><img height="100" alt="Berlin - Berliner Fernsehturm1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Berlin_-_Berliner_Fernsehturm1.jpg/256px-Berlin_-_Berliner_Fernsehturm1.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berlin_-_Berliner_Fernsehturm1.jpg">Taxiarchos228</a>, FAL, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.409446352401535, 52.520817743577055],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Humboldthain",
        wiki:
          "https://en.wikipedia.org/wiki/Flak_tower#Flakturm_III_%E2%80%93_Humboldthain%2C_Berlin",
        wiki_img: `<a title="de:User:Richardfabi, de:User:Montauk, de:User:Raymond, en:User:Ian Dunster, CC BY-SA 3.0 &lt;http://creativecommons.org/licenses/by-sa/3.0/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Humboldthain.jpg"><img height="100" alt="Humboldthain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Humboldthain.jpg/128px-Humboldthain.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Humboldthain.jpg">de:User:Richardfabi, de:User:Montauk, de:User:Raymond, en:User:Ian Dunster</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.38502327874828, 52.545217159475065],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Teufelsberg",
        wiki: "https://en.wikipedia.org/wiki/Teufelsberg",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Funkturm_Berlin_View_13.jpg"><img height="100" alt="Funkturm Berlin View 13" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Funkturm_Berlin_View_13.jpg/256px-Funkturm_Berlin_View_13.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Funkturm_Berlin_View_13.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.241869212365359, 52.497539519007766],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Spandau Citadel",
        wiki: "https://en.wikipedia.org/wiki/Spandau_Citadel",
        wiki_img: `<a title="Avda / www.avda-foto.de, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Zitadelle_Spandau_-_Berlin_-_2014.jpg"><img height="100" alt="Zitadelle Spandau - Berlin - 2014" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Zitadelle_Spandau_-_Berlin_-_2014.jpg/256px-Zitadelle_Spandau_-_Berlin_-_2014.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Zitadelle_Spandau_-_Berlin_-_2014.jpg">Avda / www.avda-foto.de</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.212469804425053, 52.540937323605768],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Schloss Charlottenburg",
        wiki: "https://en.wikipedia.org/wiki/Schloss_Charlottenburg",
        wiki_img: `<a title="ernstol, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Charlottenburg_Hohenzollern_2.jpg"><img height="100" alt="Charlottenburg Hohenzollern 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Charlottenburg_Hohenzollern_2.jpg/256px-Charlottenburg_Hohenzollern_2.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Charlottenburg_Hohenzollern_2.jpg">ernstol</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.295768660826752, 52.520897643694234],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Dahlem-Dorf (Berlin U-Bahn)",
        wiki: "https://en.wikipedia.org/wiki/Dahlem-Dorf_(Berlin_U-Bahn)",
        wiki_img: `<a title="Fridolin freudenfett (Peter Kuley), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Dahlem_K%C3%B6nigin-Luise-Stra%C3%9Fe_U-Bahn_Dahlem-Dorf-001.JPG"><img height="100" alt="Dahlem Königin-Luise-Straße U-Bahn Dahlem-Dorf-001" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dahlem_K%C3%B6nigin-Luise-Stra%C3%9Fe_U-Bahn_Dahlem-Dorf-001.JPG/256px-Dahlem_K%C3%B6nigin-Luise-Stra%C3%9Fe_U-Bahn_Dahlem-Dorf-001.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Dahlem_K%C3%B6nigin-Luise-Stra%C3%9Fe_U-Bahn_Dahlem-Dorf-001.JPG">Fridolin freudenfett (Peter Kuley)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.289774844312815, 52.457342050895683],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pfaueninsel",
        wiki: "https://en.wikipedia.org/wiki/Pfaueninsel",
        wiki_img: `<a title="RThiele, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Schloss_Pfaueninsel.jpg"><img height="100" alt="Schloss Pfaueninsel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Schloss_Pfaueninsel.jpg/256px-Schloss_Pfaueninsel.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Schloss_Pfaueninsel.jpg">RThiele</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.128959276474179, 52.434198571963726],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Lake Tegel",
        wiki: "https://en.wikipedia.org/wiki/Lake_Tegel",
        wiki_img: `<a title="TILMAN KLUGE at German Wikipedia, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Tegeler_See_1a.jpg"><img height="100" alt="Tegeler See 1a" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tegeler_See_1a.jpg/256px-Tegeler_See_1a.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Tegeler_See_1a.jpg">TILMAN KLUGE at German Wikipedia</a>, Public domain, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.254700157841656, 52.573527163735776],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Teltowkanalbrücke",
        wiki:
          "https://de.wikipedia.org/wiki/Kontrollpunkt_Dreilinden_und_Teltowkanalbr%C3%BCcke",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Teltowkanal_04_Stillgelegte_Bruecke.jpg"><img height="100" alt="Teltowkanal 04 Stillgelegte Bruecke" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Teltowkanal_04_Stillgelegte_Bruecke.jpg/256px-Teltowkanal_04_Stillgelegte_Bruecke.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Teltowkanal_04_Stillgelegte_Bruecke.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.168357165484595, 52.396811234946284],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Viktoriapark",
        wiki: "https://en.wikipedia.org/wiki/Viktoriapark",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), FAL, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Viktoriapark_B-Kreuzberg_06-2017_img1.jpg"><img height="100" alt="Viktoriapark B-Kreuzberg 06-2017 img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Viktoriapark_B-Kreuzberg_06-2017_img1.jpg/256px-Viktoriapark_B-Kreuzberg_06-2017_img1.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Viktoriapark_B-Kreuzberg_06-2017_img1.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, FAL, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.381538843781806, 52.487520865566637],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Potsdamer Platz",
        wiki: "https://en.wikipedia.org/wiki/Potsdamer_Platz",
        wiki_img: `<a title="Avda / www.avda-foto.de, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berlin_-_Potsdamer_Platz_-_2016.jpg"><img height="100" alt="Berlin - Potsdamer Platz - 2016" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_-_Potsdamer_Platz_-_2016.jpg/256px-Berlin_-_Potsdamer_Platz_-_2016.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berlin_-_Potsdamer_Platz_-_2016.jpg">Avda / www.avda-foto.de</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.376798002744739, 52.509335301358718],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Kaiser Wilhelm Memorial Church\n",
        wiki: "https://en.wikipedia.org/wiki/Kaiser_Wilhelm_Memorial_Church",
        wiki_img: `<a title="nl:User:GerardM, CC BY-SA 3.0 &lt;http://creativecommons.org/licenses/by-sa/3.0/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ged%C3%A4chtniskirche1.JPG"><img height="100" alt="Gedächtniskirche1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ged%C3%A4chtniskirche1.JPG/256px-Ged%C3%A4chtniskirche1.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Ged%C3%A4chtniskirche1.JPG">nl:User:GerardM</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.334582343722268, 52.504905025236525],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Berlin-Hohenschönhausen Memorial",
        wiki:
          "https://en.wikipedia.org/wiki/Berlin-Hohensch%C3%B6nhausen_Memorial",
        wiki_img: `<a title="Nstannik, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:HSH_Fence-Stannik.JPG"><img height="100" alt="HSH Fence-Stannik" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/HSH_Fence-Stannik.JPG/256px-HSH_Fence-Stannik.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:HSH_Fence-Stannik.JPG">Nstannik</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.50120564020208, 52.541727394079032],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Weißensee",
        wiki: "https://en.wikipedia.org/wiki/Weissensee_(Berlin)",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), FAL, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Weisser_See_B-Weissensee_06-2017.jpg"><img height="100" alt="Weisser See B-Weissensee 06-2017" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Weisser_See_B-Weissensee_06-2017.jpg/256px-Weisser_See_B-Weissensee_06-2017.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Weisser_See_B-Weissensee_06-2017.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, FAL, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.463249842655443, 52.554270144418851],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Berlin Botanical Garden",
        wiki:
          "https://en.wikipedia.org/wiki/Berlin_Botanical_Garden_and_Botanical_Museum",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Botanischer_Garten_Berlin-Dahlem_10-2014_photo05_footbridge.jpg"><img height="100" alt="Botanischer Garten Berlin-Dahlem 10-2014 photo05 footbridge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Botanischer_Garten_Berlin-Dahlem_10-2014_photo05_footbridge.jpg/256px-Botanischer_Garten_Berlin-Dahlem_10-2014_photo05_footbridge.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Botanischer_Garten_Berlin-Dahlem_10-2014_photo05_footbridge.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.307362632538601, 52.451795687852638],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Gedenkstätte Berliner Mauer",
        wiki: "https://en.wikipedia.org/wiki/Gedenkst%C3%A4tte_Berliner_Mauer",
        wiki_img: `<a title="N-Lange.de at the German-language Wikipedia, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Mauer-Gedenkst%C3%A4tte.jpg"><img height="100" alt="Mauer-Gedenkstätte" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mauer-Gedenkst%C3%A4tte.jpg/256px-Mauer-Gedenkst%C3%A4tte.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Mauer-Gedenkst%C3%A4tte.jpg">N-Lange.de at the German-language Wikipedia</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.390594646472948, 52.535388287397247],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Zeiss Major Planetarium",
        wiki: "https://en.wikipedia.org/wiki/Zeiss_Major_Planetarium",
        wiki_img: `<a title="Mazbln, CC BY-SA 3.0 &lt;http://creativecommons.org/licenses/by-sa/3.0/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berlin_Zeiss_Planetarium.JPG"><img height="100" alt="Berlin Zeiss Planetarium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Berlin_Zeiss_Planetarium.JPG/256px-Berlin_Zeiss_Planetarium.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berlin_Zeiss_Planetarium.JPG">Mazbln</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.428078003852221, 52.542992998880521],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Wasserturm Prenzlauer Berg",
        wiki: "https://en.wikipedia.org/wiki/Wasserturm_Prenzlauer_Berg",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Wasserturm_Prenzlauer_Berg_Berlin_07-2015.jpg"><img height="100" alt="Wasserturm Prenzlauer Berg Berlin 07-2015" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Wasserturm_Prenzlauer_Berg_Berlin_07-2015.jpg/256px-Wasserturm_Prenzlauer_Berg_Berlin_07-2015.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Wasserturm_Prenzlauer_Berg_Berlin_07-2015.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.418595030568358, 52.534180794931281],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Hamburger Bahnhof",
        wiki: "https://en.wikipedia.org/wiki/Hamburger_Bahnhof",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), FAL, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:InvalidenstrBerlin_12-2017_img1.jpg"><img height="100" alt="InvalidenstrBerlin 12-2017 img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/InvalidenstrBerlin_12-2017_img1.jpg/256px-InvalidenstrBerlin_12-2017_img1.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:InvalidenstrBerlin_12-2017_img1.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, FAL, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.372056785641917, 52.528419889777801],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Sportforum Hohenschönhausen",
        wiki: "https://en.wikipedia.org/wiki/Sportforum_Hohensch%C3%B6nhausen",
        wiki_img: `<a title="Lexabot (Axel Schudy), Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Sportforum_Berlin_2.JPG"><img height="100" alt="Sportforum Berlin 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sportforum_Berlin_2.JPG/256px-Sportforum_Berlin_2.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Sportforum_Berlin_2.JPG">Lexabot (Axel Schudy)</a>, Public domain, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.475631154574195, 52.542692915046352],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Mellowpark",
        wiki: "https://en.wikipedia.org/wiki/Mellowpark",
        wiki_img: `<a title="Foto: Lotse" href="https://commons.wikimedia.org/wiki/File:Mellowpark_Rampen_Berlin-Obers-2014_1443-1323-120.jpg"><img height="100" alt="Mellowpark Rampen Berlin-Obers-2014 1443-1323-120" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mellowpark_Rampen_Berlin-Obers-2014_1443-1323-120.jpg/256px-Mellowpark_Rampen_Berlin-Obers-2014_1443-1323-120.jpg"></a>`,
        img_att: `Foto: <a href="https://de.wikipedia.org/wiki/User:Lotse" class="extiw" title="de:User:Lotse">Lotse</a>`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.562555222188886, 52.45556187367599],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Museum Island",
        wiki: "https://en.wikipedia.org/wiki/Museum_Island",
        wiki_img: `<a title="Thomas Wolf, www.foto-tw.de, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berlin_Museumsinsel_Fernsehturm.jpg"><img height="100" alt="Berlin Museumsinsel Fernsehturm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg/256px-Berlin_Museumsinsel_Fernsehturm.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berlin_Museumsinsel_Fernsehturm.jpg">Thomas Wolf, www.foto-tw.de</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.39615890096405, 52.521116126435956],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "East Side Gallery",
        wiki: "https://en.wikipedia.org/wiki/East_Side_Gallery",
        wiki_img: `<a title="Lklundin, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Segment_with_Graffiti_of_the_Berlin_Wall_(3_of_4)_(cropped).jpg"><img height="100" alt="Segment with Graffiti of the Berlin Wall (3 of 4) (cropped)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg/256px-Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Segment_with_Graffiti_of_the_Berlin_Wall_(3_of_4)_(cropped).jpg">Lklundin</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.440924449271872, 52.504438747811648],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Landschaftspark Herzberge",
        wiki: "https://de.wikipedia.org/wiki/Landschaftspark_Herzberge",
        wiki_img: `<a title="Angela M. Arnold, Berlin (=44penguins), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:2010-07-01_KGA_Eisenbahn_Anschlu%C3%9F_Roeder_eV_2_-_Angela_M._Arnold_fec.JPG"><img height="100" alt="2010-07-01 KGA Eisenbahn Anschluß Roeder eV 2 - Angela M. Arnold fec" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2010-07-01_KGA_Eisenbahn_Anschlu%C3%9F_Roeder_eV_2_-_Angela_M._Arnold_fec.JPG/256px-2010-07-01_KGA_Eisenbahn_Anschlu%C3%9F_Roeder_eV_2_-_Angela_M._Arnold_fec.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:2010-07-01_KGA_Eisenbahn_Anschlu%C3%9F_Roeder_eV_2_-_Angela_M._Arnold_fec.JPG">Angela M. Arnold, Berlin (=44penguins)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.509845419000776, 52.523252418193934],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Schmöckwitz",
        wiki: "https://en.wikipedia.org/wiki/Schm%C3%B6ckwitz",
        wiki_img: `<a title="Matthias Renner (Marathoni62), CC BY-SA 3.0 &lt;http://creativecommons.org/licenses/by-sa/3.0/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Luftbild_bln-schmoeckwitz.jpg"><img height="100" alt="Luftbild bln-schmoeckwitz" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Luftbild_bln-schmoeckwitz.jpg/256px-Luftbild_bln-schmoeckwitz.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Luftbild_bln-schmoeckwitz.jpg">Matthias Renner (Marathoni62)</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.65944038036729, 52.372827416152646],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Volkspark Rehberge\n",
        wiki: "https://en.wikipedia.org/wiki/Volkspark_Rehberge",
        wiki_img: `<a title="The Exit at German Wikipedia, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Rehberge2.jpg"><img height="100" alt="Rehberge2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Rehberge2.jpg/256px-Rehberge2.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Rehberge2.jpg">The Exit at German Wikipedia</a>, Public domain, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.327090307558491, 52.551139754502081],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Schönhausen Palace",
        wiki: "https://en.wikipedia.org/wiki/Sch%C3%B6nhausen_Palace",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Berlin_Schloss_Schoenhausen_06-2014.jpg"><img height="100" alt="Berlin Schloss Schoenhausen 06-2014" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Berlin_Schloss_Schoenhausen_06-2014.jpg/512px-Berlin_Schloss_Schoenhausen_06-2014.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Berlin_Schloss_Schoenhausen_06-2014.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.40564412180729, 52.578375655033255],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Botanischer Volkspark Blankenfelde-Pankow",
        wiki:
          "https://de.wikipedia.org/wiki/Botanischer_Volkspark_Blankenfelde-Pankow",
        wiki_img: `<a title="Sebastian Wallroth, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Botanischer_Volkspark_Blankenfelde-Pankow_IV_11.JPG"><img height="100" alt="Botanischer Volkspark Blankenfelde-Pankow IV 11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Botanischer_Volkspark_Blankenfelde-Pankow_IV_11.JPG/256px-Botanischer_Volkspark_Blankenfelde-Pankow_IV_11.JPG"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:Botanischer_Volkspark_Blankenfelde-Pankow_IV_11.JPG">Sebastian Wallroth</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.395520700459112, 52.605436429152448],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Bierpinsel",
        wiki: "https://en.wikipedia.org/wiki/Bierpinsel",
        wiki_img: `<a title="A.Savin (Wikimedia Commons · WikiPhotoSpace), CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:B-Steglitz_Okt12_Bierpinsel.jpg"><img height="100" alt="B-Steglitz Okt12 Bierpinsel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/B-Steglitz_Okt12_Bierpinsel.jpg/256px-B-Steglitz_Okt12_Bierpinsel.jpg"></a>`,
        img_att: `<a href="https://commons.wikimedia.org/wiki/File:B-Steglitz_Okt12_Bierpinsel.jpg">A.Savin (Wikimedia Commons · WikiPhotoSpace)</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`,
      },
      geometry: {
        type: "Point",
        coordinates: [13.324738743518337, 52.46145202185474],
      },
    },
  ],
};
