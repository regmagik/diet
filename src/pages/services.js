import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const items = [ {
		title: "🧬 Hair Tissue Mineral Analysis (HTMA)", 
		lab: "TRACE ELEMENTS LABORATORY",
		benefits: ["Measures up to 60 minerals and toxic metals", 
			"Detects nutrient deficiencies and toxic exposure", 
			"Guides personalized nutrition and supplements", 
			"Recommended for children with autism and women with hormonal imbalances"]
	},  {
		title: "🌱 Comprehensive Stool Analysis (Microbiome Test)", 
		lab: "Diagnostic Solutions Laboratory",
		benefits: ["Detects gut dysbiosis, pathogenic bacteria, yeast, and parasites", 
			"Evaluates beneficial bacteria, gut immunity, and inflammation", 
			"Supports diet to restore healthy gut flora"]
	},  {
		title: "🧪 Organic Acids Test (OAT)", lab: "Great Plains Laboratory",
		benefits: ["74 markers for overall health", 
			"Detects yeast, pathogenic bacteria, nutrient levels, neurotransmitters, and oxalates", 
			"Helps design personalized wellness strategies"]
	},  {
		title: "🍽️ IgG Food Sensitivity Test", lab: "Great Plains Laboratory",
		benefits: ["Identifies food sensitivities causing digestive, neurological, or behavioral issues", 
			"Supports diet adjustments to improve symptoms of autism, IBS, arthritis, and epilepsy"]
	},  {
		title: "💧 Saliva Hormone Testing", lab: "Great Plains Laboratory",
		benefits: ["Measures sex hormones and adrenal function", 
			"Minimally invasive and highly accurate", 
			"Guides personalized diet and hormone-balancing plans"]
	}
];

const itemsru = [ {
		title: "🧬 Минеральный анализ волос (HTMA)", 
		lab: "TRACE ELEMENTS LABORATORY",
		benefits: ["Измеряет до 60 минералов и токсичных металлов", 
			"Выявляет дефицит нутриентов и токсическое воздействие", 
			"Помогает создать индивидуальные программы питания и добавок", 
			"Особенно рекомендован детям с аутизмом и женщинам с гормональными нарушениями"]
	},  {
		title: "🌱 Анализ микробиоты (Comprehensive Stool Analysis)", 
		lab: "Diagnostic Solutions Laboratory",
		benefits: ["Выявляет дисбактериоз, патогенные бактерии, дрожжи и паразиты", 
			"Оценивает полезные бактерии, иммунитет кишечника и воспаление", 
			"Помогает восстановить здоровую микрофлору кишечника"]
	},  {
		title: "🧪 Тест на органические кислоты (OAT)", lab: "Great Plains Laboratory",
		benefits: ["74 маркера для оценки общего состояния здоровья", 
			"Выявляет дрожжи, патогенные бактерии, уровень витаминов и минералов, нейромедиаторов и оксалатов", 
			"Помогает разработать индивидуальную программу оздоровления"]
	},  {
		title: "🍽️ Тест на пищевую чувствительность IgG", lab: "Great Plains Laboratory",
		benefits: ["Определяет продукты, вызывающие непереносимость", 
			"Поддерживает коррекцию диеты для улучшения симптомов аутизма, СРК, артрита и эпилепсии"]
	},  {
		title: "💧 Анализ слюны на гормоны", lab: "Great Plains Laboratory",
		benefits: ["Измеряет половые гормоны и функцию надпочечников", 
			"Минимально инвазивный и точный метод", 
			"Помогает составить индивидуальный план питания и восстановления гормонального баланса"]
	}
];

const Item = ({title, lab, benefits}) => (
	<>
	<b>{title}</b> - <i>{lab}</i>
	<ul>
		{benefits.map(b => <li>{b}</li>)}
	</ul>
	</>
)

const SecondPage = () => (
  <Layout>
    <Seo title="What I can do" />
    <h1>What I can do for you</h1>
	<p>I offer specialized tests to uncover the root causes of health challenges in children and adults (mainly under 5 years old):
	</p>
	{items.map((item) => <Item {...item}/>)}

	<h1>Что я могу для вас сделать</h1>
	<p>Я предлагаю специализированные тесты для выявления коренных причин проблем со здоровьем у детей и взрослых (в основном до 5 лет):</p>
	{itemsru.map((item) => <Item {...item}/>)}

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
