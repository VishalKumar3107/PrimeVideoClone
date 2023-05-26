import React from 'react'
import endPoints from '../Api/request'
import Banner from '../Components/Banner'
import Rows from '../Components/Rows'

function Store() {
  return (
    <div>
        <Banner title="Rent" fetchUrl={endPoints.Rent}/>
        <Rows type="Rent" title="Shortfilms" fetchUrl={endPoints.Shortfilms}/>
        <Rows type="Rent" title="ScienceFiction" fetchUrl={endPoints.ScienceFiction} isLargeRow/>
        <Rows type="Rent" title="Drama" fetchUrl={endPoints.Drama}/>
    </div>
  )
}

export default Store