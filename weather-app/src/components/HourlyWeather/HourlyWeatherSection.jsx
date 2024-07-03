import H2 from "../UI/H2";
import Section from "../UI/Section";
import HourlyList from "./HourlyList";

export default function HourlyWeatherSection() {
  return (
    <Section>
      <H2 className="mb-5 sm:mb-4">Hourly</H2>
      <HourlyList />
    </Section>
  );
}
