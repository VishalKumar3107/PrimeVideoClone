import React from 'react'
import Rows from '../Components/Rows'
import endPoints from '../Api/request'
import Banner from '../Components/Banner'
function Homepage() {
  return (
    <div>
        <Banner/>
        <Rows title="Discover" fetchUrl={endPoints.Discover}/>
        <Rows title="Comedy" fetchUrl={endPoints.Comedy}/>
        <Rows title="Action" fetchUrl={endPoints.Action}/>
        <Rows title="Adventure" fetchUrl={endPoints.Adventure}/>
        <Rows title="ScienceFiction" fetchUrl={endPoints.ScienceFiction}/>
        <Rows title="Horror" fetchUrl={endPoints.Horror}/>
        <Rows title="Drama" fetchUrl={endPoints.Drama}/>
        <Rows title="PopularinRegion" fetchUrl={endPoints.PopularinRegion} isLargeRow/>
        <Rows title="Thriller" fetchUrl={endPoints.Thriller}/>
        <Rows title="Crime" fetchUrl={endPoints.Crime}/>
        <Rows title="Shortfilms" fetchUrl={endPoints.Shortfilms}/>

    </div>
  )
}

export default Homepage