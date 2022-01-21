import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DietitianPage = () => (
  <Layout>
    <Seo title="Registered Dietitian" />
<div class="sections-wrapper">
                        <div class="span12   ">
                                <div class="outer-margin-on first last">
                                    <div class="section article margins-on">
    
    <div class="content">
<p>I can help you lose the extra weight, gain strength, get in better shape, and improve your concentration and mental performance.</p>
<p>Contact me for a free consultation and learn exactly how I will give you the personalised program and ongoing coaching you need.</p>
<p>So are you ready to get in the shape of your life, physically and mentally?</p>
<p>Then I'm ready to coach you all the way!</p>    </div>
</div>

                                </div>
                        </div>
                </div>

    <img
      src="/images/cook.jpg"
      alt="A healthy diet"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/contact/">Go to contact page</Link>
    </p>
  </Layout>
)

export default IndexPage
