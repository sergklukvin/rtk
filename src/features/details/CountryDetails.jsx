import { Info } from "../../components/Info";
import { useCountryDetails } from "./use-country-details";

const CountryDetails = ({ name, navigate }) => {
  const { currentCountry, error, status } = useCountryDetails(name);
  return (
    <>
      {error && <h3>Something went wrong</h3>}
      {status === "loading" && <h3>Loading...</h3>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export { CountryDetails };
