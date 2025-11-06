import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyCard from "../components/card"

const SecondPage = () => (
  <Layout>
    <Seo title="About Lena Gabinskaya" />
	<h1>Welcome! I'm Lena Gabinskaya, RDN, LDN, CLC</h1>
	<p>I'm a mother, Registered Dietitian Nutritionist, and Certified Lactation Consultant licensed in Georgia and Florida, 
	with a deep passion for supporting young children and their families. 
	I earned my degree from <b>Georgia Southern University</b> and completed a supervised dietetic internship, 
	which led me to over 20 years of work with WIC, helping families improve children’s health, growth, and nutrition.</p>
	<p>When my child was diagnosed with autism at age three, it profoundly changed the way I view health, nutrition, and child development. This personal experience inspired me to expand my approach, integrating functional and evidence-based strategies tailored to each child's unique needs.</p>
	<p>I specialize in uncovering the <b>root causes</b> of health and developmental challenges and creating personalized nutrition and wellness plans. My clinical license allows me to collaborate with leading U.S. laboratories to ensure families receive accurate testing and expert guidance. Whether it’s optimizing early nutrition, supporting breastfeeding, or addressing developmental concerns, my mission is to empower families with the knowledge and tools they need to help their children thrive.</p>
	<MyCard />
		<img
      src="/images/lena.jpg"
      alt="Lena Gabinskaya"
      style={{ marginBottom: `1.45rem` }}
    />

<h1>Добро пожаловать! Я — Лена Габинская, RDN, LDN, CLC
</h1>
<p>Я мама, дипломированный диетолог (Registered Dietitian Nutritionist) и сертифицированный консультант по лактации (Certified Lactation Consultant), лицензированная в Джорджии и Флориде, с глубокой страстью к поддержке маленьких детей и их семей. Я получила степень в Georgia Southern University и прошла стажировку по диетологии, после чего более 20 лет работала в программе WIC, помогая семьям улучшать здоровье, рост и питание детей.
</p>
<p>Когда моему ребенку поставили диагноз аутизма в возрасте трех лет, это кардинально изменило мое восприятие здоровья, питания и развития детей. Этот личный опыт вдохновил меня расширить свой подход, интегрируя функциональные и доказательные стратегии, адаптированные под уникальные потребности каждого ребенка.
</p>
<p>Я специализируюсь на выявлении <b>коренных причин</b> проблем со здоровьем и развитием и создании персонализированных планов питания и оздоровления. Моя клиническая лицензия позволяет мне сотрудничать с ведущими лабораториями США, чтобы семьи получали точные анализы и экспертные рекомендации. Независимо от того, идет ли речь об оптимизации раннего питания, поддержке грудного вскармливания или решении вопросов развития, моя миссия — помочь семьям получить знания и инструменты, необходимые для того, 
	чтобы их дети росли здоровыми и развивались гармонично.</p>
<MyCard />

    <h3>Take the first step toward a healthier you</h3>
<p>E-Mail - lenagabinskayardn@gmail.com</p>

<p>Phone - (404) 884-2886</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
