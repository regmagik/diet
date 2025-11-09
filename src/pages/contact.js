import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyCard from "../components/card"

const SecondPage = () => (
  <Layout>
    <Seo title="Get in touch" />
    <h2>Get in touch with me now</h2>
    <p>Get in touch with me to book your free consultation or ask me any question you might have.</p>
	<p>If you need more information, have questions, or would like to offer a suggestion, please be in touch. You can contact me via phone, email or by filling out the form. I’ll get back to you as soon as possible.</p>
    <h3>Take the first step toward a healthier you</h3>

<p>E-Mail - lenagabinskayardn@gmail.com</p>
<p>Phone - (404) 884-2886</p>

<h2>Связаться со мной</h2>
<p>Если вам нужна дополнительная информация, есть вопросы или вы хотите оставить предложение, пожалуйста, свяжитесь со мной. Вы можете написать по электронной почте, позвонить.. Я отвечу вам как можно скорее.</p>
<p>Сделайте первый шаг к более здоровой жизни для себя и вашего ребенка.</p>
<MyCard/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
