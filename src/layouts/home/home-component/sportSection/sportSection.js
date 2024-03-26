import React from 'react'
import "./sportSection.css"

function SportSection() {
    return (
        <div className='sport-section-container' >
            <div className='sport-section-header' >
                <h2>Sports</h2>
                <h3>Physical Activities</h3>
            </div>
            <div className='sport-card-container' >
                <div className='sport-card' style={{background:"#FF0000"}} >
                    <h2>Volleyball</h2>
                    <div>
                        <img src='../../../image/volleyball.png' />
                    </div>
                </div>
                <div className='sport-card' style={{background:"#FFF500"}} >
                <h2>Cricket</h2>
                    <div>
                        <img src='../../../image/cricket.png' />
                    </div>
                </div>
                <div className='sport-card' style={{background:"#0094FF"}} >
                <h2>Karate</h2>
                    <div>
                        <img src='../../../image/karate.png' />
                    </div>
                </div>
                <div className='sport-card' style={{background:"#00FF1A"}} >
                <h2>Football</h2>
                    <div>
                        <img src='../../../image/football.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportSection