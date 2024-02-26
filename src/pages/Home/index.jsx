import AppBreadCrumb from '../../components/AppBreadCrumb'
import AppHeader from '../../components/AppHeader'
import PropertyHome from './PropertyHeader'
import React from 'react'

const propertydummy =[
  {
    id: "#00001",
    type: "Commercial",
    name: "Metropolicis Mall",
    location: "MG Road, GuruGram",
    area: "1200 (Sq. Ft.)",
    occupied: "685 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00002",
    type: "IT",
    name: "DLF Building",
    location: "Millenium City , Gurugram",
    area: "2568(Sq. Ft.)",
    occupied: "1985 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00003",
    type: "Commercial",
    name: "Ambani's Building",
    location: "BeachSide , Mumbai",
    area: "1456 (Sq. Ft.)",
    occupied: "985 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00004",
    type: "Commercial",
    name: "Swastik Universal Building",
    location: "Magdalla Road, Surat",
    area: "2456 (Sq. Ft.)",
    occupied: "1985 (Sq. Ft.)",
    status: "Drafts",
  },
  {
    id: "#00005",
    type: "IT",
    name: "Paras Quartier",
    location: "Bandhwari, Gurugram",
    area: "1087 (Sq. Ft.)",
    occupied: "185 (Sq. Ft.)",
    status: "Rejected",
  },
  {
    id: "#00006",
    type: "Commercial",
    name: "Raheja Raventa",
    location: "Sector-78 , Gurugram",
    area: "4728 (Sq. Ft.)",
    occupied: "2985 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00007",
    type: "Commercial",
    name: "DLF Camellias",
    location: "Sector 42 , Gurugram",
    area: "5642 (Sq. Ft.)",
    occupied: "1859 (Sq. Ft.)",
    status: "Approved",
  },
];

const Home = () => {

  return (
    <div>
      <AppHeader />
      <AppBreadCrumb /> 
      <PropertyHome />
    </div>
  )
}

export default Home;
