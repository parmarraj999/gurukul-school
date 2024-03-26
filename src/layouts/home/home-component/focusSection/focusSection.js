import React from 'react'
import "./focusSection.css"
import Tag from './tag'


function FocusSection() {
  return (
    <div className='focus-section-container' >
       <div className='section-header'>
        <h1>Our</h1>
        <h2>Focus</h2>
       </div>
       <div className='tags-slider-container' >
         <div className='slider' >
            <Tag text="education" color="#B4F300"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="skills" color="#FF00D6"/>
         </div>
         <div className='slider' >
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="skills" color="#FF00D6"/>
         </div>
         <div className='slider' >
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="sports" color="#0075FF"/>
            <Tag text="skills" color="#FF00D6"/>
            <Tag text="education" color="#B4F300"/>
            <Tag text="events" color="#FF0000"/>
            <Tag text="sports" color="#0075FF"/>
         </div>
       </div>
    </div>
  )
}

export default FocusSection