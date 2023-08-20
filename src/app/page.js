import styles from "./page.module.css";
import Hero from "@/components/hero";
import Artists from "@/components/artists";
import OurEvents from "@/components/our-events";
import Explore from "@/components/explore";
import Shop from "@/components/shop";
import Newsletter from "@/components/newsletter";
import Socials from "@/components/socials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Artists />
      <OurEvents />
      <Explore />
      <Shop />
      <Newsletter />
      <Socials />
      <Footer />
    </main>
  );
}
