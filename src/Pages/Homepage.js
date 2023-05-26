import React from 'react'
import Rows from '../Components/Rows'
import endPoints from '../Api/request'
import Banner from '../Components/Banner'
function Homepage() {
  return (
    <div>
        <Banner title="PopularinRegion" fetchUrl={endPoints.PopularinRegion}/>
        <Rows type="Prime" title="Comedy" fetchUrl={endPoints.Comedy}/>
        <Rows type="Prime" title="Action" fetchUrl={endPoints.Action}/>
        <Rows type="Prime" title="Adventure" fetchUrl={endPoints.Adventure}/>
        <Rows type="Prime" title="ScienceFiction" fetchUrl={endPoints.ScienceFiction}/>
        <Rows type="Prime" title="Discover" fetchUrl={endPoints.Discover}/>
        <Rows type="Prime" title="Horror" fetchUrl={endPoints.Horror}/>
        <Rows type="Prime" title="Drama" fetchUrl={endPoints.Drama}/>
        <Rows type="Prime" title="PopularinRegion" fetchUrl={endPoints.PopularinRegion} isLargeRow/>
        <Rows type="Prime" title="Thriller" fetchUrl={endPoints.Thriller}/>
        <Rows type="Prime" title="Crime" fetchUrl={endPoints.Crime}/>
        <Rows type="Prime" title="Shortfilms" fetchUrl={endPoints.Shortfilms}/>

    </div>
  )
}

export default Homepage