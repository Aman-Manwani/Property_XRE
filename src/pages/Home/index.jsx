import AppBreadCrumb from '../../components/AppBreadCrumb'
import AppHeader from '../../components/AppHeader'
import PropertyHeader from './PropertyHeader'
import React from 'react'
import AppliedFiltersBar from './AppliedFiltersBar'
import PropertyListing from './PropertiesListing'
import PropertiesPagination from './PropertiesPagination'



const Home = () => {

  return (
    <div>
      <AppHeader />
      <AppBreadCrumb /> 
      <PropertyHeader />
      <AppliedFiltersBar />
      <PropertyListing />
      <PropertiesPagination />
    </div>
  )
}

export default Home;
