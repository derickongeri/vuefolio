import agristatsPic from "src/assets/agristats.png";
import mislandNorthAfrica from "src/assets/mislandNorthAfrica.png";
import forestMask from "src/assets/forestmask.png";
import sarImg from "src/assets/sar.png";
import greenpulse from "src/assets/greenpulse.png";

export default function setUpProfile() {
  // ABOUT DATA
  const aboutData = {
    paragraphOne: "",
    paragraphTwo: "",
    paragraphThree: "",
  };

  const workExperienceData = [
    {
      year: "2023",
      company: "LocateIT Kenya",
      position: "Technical Lead GIT",
      summary:
        "Design and develop cutting-edge applications, leveraging my expertise in geospatial analysis, and data visualization tools. With a strong focus on frontend development and UI/UX design, I guide the technical team to craft highly interactive web platforms for spatial data analysis. Additionally, I contribute to capacity building through technical documentation, user guides, trainings, and coordinating research and development efforts for the tech team.",
      gainedSkills: [
        "Geospatial",
        "Web Development",
        "UI/UX",
        "Documentation",
        "Training",
      ],
    },
    {
      year: "2019",
      company: "Dalberg Research - Location Analytics (LOCAN)",
      position: "Database Developer",
      summary:
        "Contracted to oversee the transfer of database files between cloud and on-premise servers, curate, document, and archive data for the Location Analytics team, and establish standard operating procedures (SOP) for data curation and archiving.",
      gainedSkills: [
        "Database management",
        "Data curation","documentation",
      ],
    },
    {
      year: "2019",
      company: "Regional Center for Mapping of Resources For Development - RCMRD",
      position: "GIS/Remote Sensing Analyst",
      summary:
        "Obtaining satellite imagery and relevant data, process it for analysis, and utilize statistical methods, machine learning algorithms, and geospatial analysis techniques to identify patterns and trends in land degradation. Developed land degradation models using process-based models and remote sensing algorithms. Additionally, I provided cartographic maps, statistics, and summary reports of land degradation trends in Kenya",
      gainedSkills: [
        "Database management and administration",
        "Data curation and documentation",
        "Database development",
      ],
    },
  ];

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
    // {
    //   id: 0,
    //   skill: "HTML5",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    // },
    // {
    //   id: 0,
    //   skill: "CSS3",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    // },
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
      skill: "Qgis",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/QGIS_logo_minimal.svg",
    },
    {
      id: 0,
      skill: "ArcGIS",
      img: "https://www.kindpng.com/picc/m/437-4376373_transparent-arcgis-logo-png-arcgis-pro-logo-png.png",
    },
    // {
    //   id: 0,
    //   skill: "Supabase",
    //   img: "https://res.cloudinary.com/practicaldev/image/fetch/s---1zZlXx3--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1968/c0dbe341-1d94-4192-a93b-921519678894.png",
    // },
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
    // {
    //   id: 0,
    //   skill: "GrassGIS",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Grass_GIS.svg/1200px-Grass_GIS.svg.png",
    // },
  ];

  // PROJECTS DATA
  const projectsData = [
    {
      id: 0,
      // img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1654254851/portfolio/2022-06-03_14-12_htfoh1.png",
      img: greenpulse,
      title: "EarthPulse",
      info: "Earth Observation Dashboard",
      info2:
        "Use Earth Observation data to monitor and track environmental changes, helping you stay informed about our planet's health",
      url: "http://derickongeri.com/greenpulse",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "EarthEngine"],
    },
    {
      id: 1,
      // img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1654254851/portfolio/2022-06-03_14-12_htfoh1.png",
      img: agristatsPic,
      title: "AgristatsKE",
      info: "",
      info2:
        "Agricultural statistics dashboard. Provides the statistical breakdown of crop types at National, county and subcounty level in Kenya.",
      url: "http://derickongeri.com/agristats",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "NodeJS", "Python", "Django", "EarthEngine"],
    },
    {
      id: 3,
      img: mislandNorthAfrica,
      title: "Misland",
      info: "",
      info2:
        "Decision Support System(DSS) utilizing earth observation data to deliver information on Land Degradation Neutrality (LDN) in North Africa",
      url: "http://misland.oss-online.org/",
      repo: "", //if no repo, the button should not show
      stack: ["VueJS", "Python", "Django", "EarthEngine"],
    },
    {
      id: 4,
      img: forestMask,
      title: "ForestMapper",
      info: "",
      info2:
        "Generate forest areas based on the NDVI CV method. Users can set thresholds for the tree cover percentage and to generate forest cover maps",
      url: "https://derickongeri.users.earthengine.app/view/forestmaskapp",
      repo: "", //if no repo, the button should not show
      stack: ["Javascript", "EarthEngine"],
    },
    {
      id: 4,
      img: sarImg,
      title: "ForestSAR",
      info: "",
      info2:
        "Monitor forest changes on selected tropical Forests Using SENTINEL-1 GRD data. Users can set the area of interest, the date ranges for the before and afeter SENTINEL-1 images.",
      url: "https://derickongeri.users.earthengine.app/view/sar-forest-monitoring-tool",
      repo: "", //if no repo, the button should not show
      stack: ["JavaScript", "EarthEngine"],
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dv3id0zrx/image/upload/v1655826199/portfolio/geonode_kc0sna.png",
      title: "GeoNode",
      info: "",
      info2:
        "A web-based application and platform for developing geospatial information systems (GIS) and for deploying spatial data infrastructures (SDI).",
      url: "",
      repo: "", //if no repo, the button should not show
      stack: ["GeoNode", "Python", "Django"],
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
    workExperienceData
  };
}
