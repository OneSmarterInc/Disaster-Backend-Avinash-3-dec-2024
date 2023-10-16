import bencarter from "../userImages/bencarter.png";
import kate from "../userImages/kate_sullivan.png";
import sophia from "../userImages/sophia_kim.png";
import mia from "../userImages/Mia Rodriguez.png";
import aisha from "../userImages/Aishapatel.png";
import chloe from "../userImages/ChiocZang.png";
import elena from "../userImages/ElenaLvanova.png";
import jabari from "../userImages/jabarinkosi.png";
import priya from "../userImages/priyanarayana.png";
import tariq from "../userImages/Rarqalhashim.png";
import lucas from "../userImages/lucasoliveria.jpg";
import carlos from "../userImages/carlos.jpg";
import liam from "../userImages/liam.jpeg";

export const ORGDATA = {
    name: "Carlos Mendoza",
    role: "Chief Executive Officer",
    img: carlos,
    child: [
      {
        name: "Aisha Patel",
        role: "Chief Operating Officer",
        img: aisha,
      },
      {
        name: "Ben Carter",
        role: "Chief Information Officer",
        img:
          bencarter,
        child: [
          {
            name: "Chloe Zhang",
            role: "IT Director",
            img:
              chloe,
            child: [
              {
                name: "Kate Sullivan",
                role: "IT Manager",
                img:
                  kate,
                child: [
                  {
                    name: "Liam Turner",
                    role: "Senior Systems Analyst",
                    img:
liam                    // child: []
                  },
                  {
                    name: "Mia Rodriguez",
                    role: "Network Specialist",
                    img:
                      mia,
                    // child: []
                  },
                  {
                    name: "Sophia Kim",
                    role: "Database Administrator",
                    img:
                      sophia,
                    // child: []
                  }
                ]
              },
              {
                name: "Jabari Nkosi ",
                role: "IT Infrastructure Head",
                img:
                  jabari,
                // child: []
              },
              {
                name: "Tariq Al-Hashim",
                role: "IT Security Head",
                img:
                  tariq,
                // child: []
              }
            ]
          }
        ]
      },
      {
        name: "Elena Ivanova",
        role: "Chief Financial Officer",
        img:elena
                  },
      {
        name: "Lucas Oliveira",
        role: "Chief Marketing Officer",
        img: lucas
      },
      {
        name: "Priya Narayanan",
        role: "Chief Human Resources Officer",
        img: priya
                  }
    ]
  };
  