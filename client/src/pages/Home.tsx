import { AiApps } from "@/sections/AiApps";
import { AiNative } from "@/sections/AiNative";
import { AppBoox } from "@/sections/AppBoox";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Industries } from "@/sections/Industries";
import { Nav } from "@/sections/Nav";
import { NotiboxOverview } from "@/sections/NotiboxOverview";
import { Operators } from "@/sections/Operators";
import { TrustStrip } from "@/sections/TrustStrip";
import { TwinGallery } from "@/sections/TwinGallery";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <NotiboxOverview />
        <TwinGallery />
        <Operators />
        <AiNative />
        <Industries />
        <AiApps />
        <AppBoox />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
