import React from "react"
import Projects from "../components/projects-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPage = () => {
  return (
    <Layout>
      <Seo
        title="Holo - Projects"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <Projects></Projects>
    </Layout>
  )
}

export default ProjectPage
