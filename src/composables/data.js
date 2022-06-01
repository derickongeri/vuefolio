export default function setUpProfile() {

  // ABOUT DATA
  const aboutData = {
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
  }

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
      img: "https://cartologic.com/img/Cartoview-product/GeoServer.png",
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
  ]

  // PROJECTS DATA
  const projectsData = [
    {
      id: 0,
      img: '',
      title: 'Agriculture Statistics Dashboard',
      info: 'Web development',
      info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: '',
      repo: '', //if no repo, the button should not show
    },
    {
      id: 1,
      img: '',
      title: 'MISLAND NORTH AFRICA',
      info: 'Remote Sensing',
      info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: '',
      repo: '', //if no repo, the button should not show
    },
    {
      id: 2,
      img: '',
      title: 'Planetary Sceince',
      info: 'Nothing here',
      info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: '',
      repo: '', //if no repo, the button should not show
    },
  ]

  // CONTACT DATA
  const contactData = {
    cta: '', // call to action text for the contact section
    btn: '',
    email: '',
  }

  // Footer Data
  const footerData = {
    networks: [
      {
        id: 0,
        name: 'twitter',
        url: '',
      }
    ]
  }

  return {
    aboutData,
    projectsData,
    contactData,
    footerData,
    skillsData,
  }
}
