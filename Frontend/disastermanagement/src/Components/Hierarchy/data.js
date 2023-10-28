import bencarter from "../userImages/bencarter.jpg";
import kate from "../userImages/kate_sullivan.jpg";
import sophia from "../userImages/sophia_kim.jpg";
import mia from "../userImages/Mia Rodriguez.jpg";
import aisha from "../userImages/Aishapatel.jpg";
import chloe from "../userImages/ChiocZang.jpg";
import elena from "../userImages/ElenaLvanova.jpg";
import jabari from "../userImages/jabarinkosi.jpg";
import priya from "../userImages/priyanarayana.jpg";
import tariq from "../userImages/Rarqalhashim.jpg";
import lucas from "../userImages/lucasoliveria.jpg";
import carlos from "../userImages/carlos.jpg";
import liam from "../userImages/liam.jpg";
import raj from "../userImages/rajpatel.jpg";
import gajji from "../userImages/gaji.jpg";
import tom from "../userImages/tom.jpg";
import julia from "../userImages/juliaharper.jpg";

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
      img: bencarter,
      child: [
        {
          name: "Kate Sullivan",
          role: "IT Director",
          img: kate,
          child: [
            {
              name: "Chloe Zhang",
              role: "IT Manager",
              img: chloe,
              child: [
                {
                  name: "Liam Turner",
                  role: "Senior Systems Analyst",
                  img: liam, // child: []
                },
                {
                  name: "Mia Rodriguez",
                  role: "Network Specialist",
                  img: mia,
                  // child: []
                },
                {
                  name: "Sophia Kim",
                  role: "Database Administrator",
                  img: sophia,
                  // child: []
                },
              ],
            },
            {
              name: "Jabari Nkosi ",
              role: "IT Infrastructure Head",
              img: jabari,
              // child: []
            },
            {
              name: "Tariq Al-Hashim",
              role: "IT Security Head",
              img: tariq,
              // child: []
            },
          ],
        },
      ],
    },
    {
      name: "Raj Patel",
      role: "Chief Financial Officer",
      img: raj,
    },
    {
      name: "Lucas Oliveira",
      role: "Chief Marketing Officer",
      img: lucas,
    },
    {
      name: "Priya Narayanan",
      role: "Chief Human Resources Officer",
      img: priya,
    },
  ],
};


export const externalData = [
  {
    name: "Tom Mitchell",
    designation: "Apllication Vendor",
    url: tom
  },
  {
    name: "Julia Harper",
    designation: "Storage Vendor",
    url: julia
  },
  {
    name: "Gajji",
    designation: "ERP Vendor",
    url: gajji
  }
]