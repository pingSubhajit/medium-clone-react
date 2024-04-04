import HeroSection from "./components/hero/HeroSection"
import CuriousMindsSection from "./components/curiousMinds/CuriousMindsSection"
import CreateYourSpaceSection from "./components/CreateYourSpaceSection"
import FeaturesSection from "./components/FeaturesSection"
import CTASection from "./components/CTASection"
import FaqSection from "./components/FaqSection"
import { Helmet } from "react-helmet"


function App() {
	return (
		<main>
			<Helmet>
				<title>Medium Clone React</title>
				<meta name="description" content="Welcome to Aeonaxy Technologies' React-Tailwind developer intern's medium homepage clone! Explore insightful articles, engaging stories, and thought-provoking content curated with precision. Immerse yourself in a world of knowledge and inspiration as you navigate through our beautifully crafted platform. Join us in shaping the future of digital storytelling. Start your journey today!" />
			</Helmet>

			<section>
				<HeroSection />
			</section>

			<section>
				<CuriousMindsSection />
			</section>

			<section>
				<CreateYourSpaceSection />
			</section>

			<section>
				<FeaturesSection />
			</section>

			<section>
				<CTASection />
			</section>

			<section>
				<FaqSection />
			</section>
		</main>
	);
}

export default App;
