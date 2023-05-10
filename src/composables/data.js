import agristatsPic from "src/assets/agristats.png"
import mislandNorthAfrica from "src/assets/mislandNorthAfrica.png"
import forestMask from "src/assets/forestmask.png"
import sarImg from "src/assets/sar.png"
import greenpulse from "src/assets/greenpulse.png"


export default function setUpProfile() {
  // ABOUT DATA
  const aboutData = {
    paragraphOne: "",
    paragraphTwo: "",
    paragraphThree: "",
  };

  // PROGRAMMING SKILLS
  const codingSkills = [
    {
      language: "HTML5",
      level: 0.95,
    },
    {
      language: "CSS3",
      level: 0.87,
    },
    {
      language: "JavaScript",
      level: 0.91,
    },
    {
      language: "NodeJS",
      level: 0.81,
    },
    {
      language: "Python",
      level: 0.75,
    },
  ];

  // PROGRAMMING SKILLS
  const codingSkillsmobile = [
    {
      language: "HTML5",
      level: 95,
    },
    {
      language: "CSS3",
      level: 87,
    },
    {
      language: "JavaScript",
      level: 81,
    },
    {
      language: "Python",
      level: 75,
    },
    {
      language: "NodeJS",
      level: 80,
    },
  ];

  // SKILLS DATA

  const skillsData = [
    {
      id: 0,
      skill: "javaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    },
    {
      id: 0,
      skill: "Python",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      id: 0,
      skill: "NodeJs",
      img: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png",
    },
    {
      id: 0,
      skill: "vueJS",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
      id: 0,
      skill: "LeafletJs",
      img: "https://w7.pngwing.com/pngs/347/210/png-transparent-leaflet-javascript-library-web-browser-plug-in-software-framework-others-leaf-rss-map.png",
    },
    {
      id: 0,
      skill: "Geoserver",
      img: "https://avatars.githubusercontent.com/u/186522?s=280&v=4",
    },
    {
      id: 0,
      skill: "Qgis",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/QGIS_logo_minimal.svg",
    },
    {
      id: 0,
      skill: "ArcGIS",
      img: "https://www.kindpng.com/picc/m/437-4376373_transparent-arcgis-logo-png-arcgis-pro-logo-png.png",
    },
    {
      id: 0,
      skill: "Supabase",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s---1zZlXx3--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1968/c0dbe341-1d94-4192-a93b-921519678894.png",
    },
    {
      id: 0,
      skill: "google earth Engine",
      img: "https://earthengine.google.com/static/images/earth-engine-logo.png",
    },
    {
      id: 0,
      skill: "figma",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      id: 0,
      skill: "AdobeXD",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    },
    {
      id: 0,
      skill: "HTML5",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      id: 0,
      skill: "CSS3",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      id: 0,
      skill: "PostgreSQL/Postgis",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      id: 0,
      skill: "Openlayers",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/67/OpenLayers_logo.svg",
    },
    {
      id: 0,
      skill: "GrassGIS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Grass_GIS.svg/1200px-Grass_GIS.svg.png",
    },
  ];

  // PROJECTS DATA
  const projectsData = [
    {
      id: 0,
      // img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1654254851/portfolio/2022-06-03_14-12_htfoh1.png",
      img: greenpulse,
      title: "EarthPulse",
      info: "",
      info2:
        "Agricultural statistics dashboard that provides the statistical breakdown of crop types at National, county and subcounty level in Kenya. The seasonal croptype maps are based on data produced by the Copernicus4GEOGLAM service of Copernicus Global Land in various countries: ",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"]

    },
    {
      id: 0,
      // img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1654254851/portfolio/2022-06-03_14-12_htfoh1.png",
      img: agristatsPic,
      title: "AgristatsKE",
      info: "",
      info2:
        "Agricultural statistics dashboard that provides the statistical breakdown of crop types at National, county and subcounty level in Kenya. The seasonal croptype maps are based on data produced by the Copernicus4GEOGLAM service of Copernicus Global Land in various countries: ",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"]
    },
    {
      id: 1,
      img: mislandNorthAfrica,
      title: "MISLAND",
      info: "",
      info2:
        "Decision Support System(DSS) utilizing earth observation data to deliver information, promote awareness and, aid in decision making toward realizing Land Degradation Neutrality (LDN) in six OSS North Africa action zone Algeria, Egypt, Libya, Tunisia, Morocco, and Mauritania",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"]
    },
    {
      id: 2,
      img: forestMask,
      title: "Forest Mask Generotor",
      info: "",
      info2:
        "This application allows you to generate forest areas based on the NDVI CV method. Users can set thresholds for the tree cover percentage and to rapidly forest cover maps for differet years form 1990 to 2020",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"]
    },
    {
      id: 0,
      img: sarImg,
      title: "SAR ForestMonitor",
      info: "",
      info2:
        "This app allows you to perform change detection on Selected Tropical Forests Using SENTINEL-1 GRD data. Users can set the area of interest, the date ranges for the before and afeter SENTINEL-1 images. The application is designed for advanced users with knowledge in SAR data processing ",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"]
    },
    {
      id: 0,
      img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1655826199/portfolio/geonode_kc0sna.png",
      title: "Opendata Geoportal",
      info: "",
      info2:
        "GeoNode is a web-based application and platform for developing geospatial information systems (GIS) and for deploying spatial data infrastructures (SDI). It is designed to be extended and modified, and can be integrated into existing platforms.",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"]
    },
  ];

  //BLOGS AND POSTS
  const blogsData = [
    {
      img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1655828263/portfolio/shiptraffic_xr3zsp.jpg",
      title: "Ship detection using Sentinel 1",
      text: "",
      url: "https://geodexter.hashnode.dev/after-the-ever-given",
    },
    {
      img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1655827385/portfolio/tutorials_httdn1.jpg",
      title: "Google Earth Engine Course",
      text: "",
      url: "http://steaearthenginetutorials.readthedocs.io/en/latest/",
    },
    {
      img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1654421760/portfolio/2022-06-05_12-19_hurd5o.png",
      title: "Sample Title",
      text: "",
      url: "",
    },
    {
      img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1654421760/portfolio/2022-06-05_12-19_hurd5o.png",
      title: "Sample Title",
      text: "",
      url: "",
    },
  ];

  // CONTACT DATA
  const contactData = {
    cta: "", // call to action text for the contact section
    btn: "",
    email: "",
  };

  // Footer Data
  const footerData = {
    networks: [
      {
        id: 0,
        name: "twitter",
        url: "",
      },
    ],
  };

  return {
    aboutData,
    projectsData,
    contactData,
    footerData,
    skillsData,
    blogsData,
    codingSkills,
    codingSkillsmobile,
  };
}
