import * as React from "react"
import Button from "../components/Atoms/button"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found"
         description="404: Not found"
    />
    <div className="404-p">
    <h1>404: Not Found</h1>
      <p>How'd you even get here???</p><p>That page doesn't even exist lol</p>
          <a href="/">
            <Button
                title="Return Home"
                colorClass="text-white bg-gradient-to-r from-seccolor to-maincolor"
                marginClass="mt-5"
            ></Button>
          </a>
      </div>
  </Layout>
)

export default NotFoundPage
