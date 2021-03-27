import React, {useState} from 'react'

import './Playground.css'

const Playground = () => {

  const [isHovering, setIsHovering] = useState(undefined)
  const [hoveredId, setHoveredId] = useState()


  const renderUsers = () => {
    setIsHovering(isHovering)
    return users.map(user => {
      let className = `pg-item ${isHovering? `active`: ``}`
      
      return (
        <div className={className} key={user.id} 
        onMouseEnter={() => {setHoveredId(user.id)}}
        onMouseLeave={() => {setHoveredId(null)}}
        >
            <h2>{user.name}</h2>
          {renderHoveredItem(user, className)}
        </div>
      )
    })
  }

  const renderHoveredItem = (user, className) => {
    if (hoveredId === user.id) {
      return (
        <div>
        <img src="https://source.unsplash.com/random/50x65" alt="this is a placeholder" />
        <div className="pg-item-content">
          <p>{user.age}</p>
          </div>
        </div>
        )
    }
    }
  


  return (
    <div className="pg-global">
      <header>
        <h1>Playground</h1>
      </header>
      <div className="pg-list-ctn">
        {renderUsers()}        
      </div>
    </div>
  )
}

const users = [
  {
    name: 'Rob',
    id: 1,
    age: 34,
  },
  {
    name: 'Jeff',
    id: 2,
    age: 45,
  },
  {
    name: 'Steve',
    id: 3,
    age: 56,
  },
  {
    name: 'Emil',
    id: 4,
    age: 33,
  },
  {
    name: 'Effie',
    id: 5,
    age: 29,
  },
  {
    name: 'Jeremy',
    id: 6,
    age: 37,
  },
]

export default Playground