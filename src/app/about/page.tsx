import AboutBottom from "./components/bottom";
import AboutBoxes from "./components/boxes";
import AboutHeader from "./components/header";

export default function AboutPage() {
  return (
    <div className="font-binaria about-bg">
        <AboutHeader />
        <AboutBoxes />
        <AboutBottom />
    </div>
  );
}