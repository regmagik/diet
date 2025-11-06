import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About Lena Gabinskaya" />
	<h1>Welcome! I'm Lena Gabinskaya, RDN, LDN, CLC</h1>
    <h2>The brief story of Lena Gabinskaya</h2>
	<p>I'm a mother, Registered Dietitian Nutritionist, and Certified Lactation Consultant licensed in Georgia and Florida, 
	with a deep passion for supporting young children and their families. 
	I earned my degree from <b>Georgia Southern University</b> and completed a supervised dietetic internship, 
	which led me to over 20 years of work with WIC, helping families improve children’s health, growth, and nutrition.</p>
	<p>When my child was diagnosed with autism at age three, it profoundly changed the way I view health, nutrition, and child development. This personal experience inspired me to expand my approach, integrating functional and evidence-based strategies tailored to each child's unique needs.</p>
	<p>I specialize in uncovering the <b>root causes</b> of health and developmental challenges and creating personalized nutrition and wellness plans. My clinical license allows me to collaborate with leading U.S. laboratories to ensure families receive accurate testing and expert guidance. Whether it’s optimizing early nutrition, supporting breastfeeding, or addressing developmental concerns, my mission is to empower families with the knowledge and tools they need to help their children thrive.<p>
<br/>
📧 lenagabinskayardn@gmail.com
<br/>
📞 (404) 884-2886
    <p>Меня зовут Лена Габинская. Я диетолог (Registered Dietitian Nutritionist  RDN, LDN, имеющая лицензию Американской Академии Диетологии на право практиковать в США. Мой клинический лайсенс позволяет мне  работать с пациентами в госпиталях и заниматься частной практикой в штатах Джорджия и Флорида.  Я  окончила университет в штате Джорджия, прошла интернатуру и сдала экзамен на получение лайсенса диетолога. Я работаю 18 лет диетологом в клинике, где помогаю беременным женщинам, кормящим матерям и детям разного возраста с самыми разными проблемами со здоровьем наладить здоровый образ жизни и правильное питание.</p>
		<img
      src="/images/lena.jpg"
      alt="Lena Gabinskaya"
      style={{ marginBottom: `1.45rem` }}
    />

<p>Я специализируюсь на проблемах сбалансированного питания для детей и взрослых. Моя цель помочь Вам и Вашим близким выяснить причины дисбаланса в организме, вызывающего плохое самочувствие, наметить программу оздоровления и улучшить состояние  Вашего здоровья.Ни одна оздоровительная программа не должна быть начата без того, чтобы иметь ясную картину того, что происходит в организме. Я предлагаю Вам различные тесты, которые позволят определить причины проблем с Вашим здоровьем. Мой лайсенс даёт  мне право на сотрудничество с самыми известными лабораториями в США,  которые  работают только с диетологами, у которых есть законченное диетологическое университетское образование, и которые сдали экзамены на получение  клинического лайсенса. </p>

    <h3>Take the first step toward a healthier you</h3>
<p>E-Mail - lenagabinskayardn@gmail.com</p>

<p>Phone - (404) 884-2886</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
