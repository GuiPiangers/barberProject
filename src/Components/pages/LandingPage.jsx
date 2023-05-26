import React from 'react'
import { useEffect, useState } from 'react'

import Hero from '../LandingPage/sectionHero/Index'
import About from '../LandingPage/sectionAbout/Index'
import Team from '../LandingPage/sectionTeam/Index'
import Services from '../LandingPage/sectionServices/Index'
import Photos from '../LandingPage/sectionPhotos/Index'
import Header from '../LandingPage/Header/Index'
import Localization from '../LandingPage/sectionLocalization/Index'

function LandingPage() {

  const [headerTransparence, setHeaderTransparence] = useState(true)

  function handleTransparenceHeader(entries){
    if(entries.some((entry)=> entry.isIntersecting)){
      setHeaderTransparence(true)
    }
    else{
      setHeaderTransparence(false)
    }
  }

  function handleAnimate(entries){
    Array.from(entries).forEach(entry =>{
      if(entry.isIntersecting && entry.intersectionRatio){
        entry.target.classList.remove('animateOut')
        entry.target.classList.add('animateIn')
      }
      else{
        entry.target.classList.remove('animateIn')
        entry.target.classList.add('animateOut')
      }
    })
  }

  function handleSetCurrentSection(entries){
    Array.from(entries).forEach(entry =>{
      if(entry.isIntersecting && entry.intersectionRatio >= 0.5){
        const href = entry.target.getAttribute('id')
        const navMenuItems = document.querySelectorAll(`.nav-menu a[href^="#"]`)
        const navMenuItemActive = document.querySelector(`.nav-menu a[href^="#${href}"]`)
        
        navMenuItems?.forEach(item => {
          item.classList.remove('active')
        })
        navMenuItemActive?.classList.add('active')
      }
    })
  }
  
  useEffect(()=>{
    const headerObserver = new IntersectionObserver(handleTransparenceHeader)

    headerObserver.observe(document.querySelector('.set-header-transparence'))

    const sectionObserver = new IntersectionObserver(entries =>{
      handleAnimate(entries)
      handleSetCurrentSection(entries)
    }, {
      threshold: [0.3, 0.5]
    })

    Array.from(document.querySelectorAll('section')).forEach( section =>{
      sectionObserver.observe(section)
    })
    return()=> {
      headerObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <>
    <div className="set-header-transparence"></div>
      <Header isTransparent={headerTransparence}/>
      <main>
        <Hero/>
        <About/>
        <Team/>
        <Photos/>
        <Services/>
        <Localization/>
      </main>
    </>
  )
}

export default LandingPage
