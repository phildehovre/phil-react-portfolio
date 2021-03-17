import React, { useState } from 'react'
import WrappedLink from './WrappedLink'

export default function ProjectsHeader () {

const [linkId, setLinkId] = useState("")

const handleLinkSelect = (id) => {
  setLinkId(id)
}

const destinations = {
  metronome: "/projects/metronome",
  home: "/projects"
}

  return (
        <div className="ui vertical fluid tabular menu">
          <WrappedLink 
            destination={destinations.metronome} 
            id="1" 
            linkId={linkId} 
            projectName="Metronome"
            handleLinkSelect={handleLinkSelect}/>
          <WrappedLink
            destination={destinations.home}
            id="2"
            linkId={linkId}
            projectName="Project 2"
            handleLinkSelect={handleLinkSelect}/>
          <WrappedLink
            destination={destinations.home}
            id="3"
            linkId={linkId}
            projectName="Project 3"
            handleLinkSelect={handleLinkSelect}/>
        </div>
  )
}
