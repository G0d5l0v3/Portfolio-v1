import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Project from './Content/Project'
import Footer from './Footer/Footer'


const LandingPage = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Content></Content>
      <Project></Project>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default LandingPage