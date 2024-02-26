import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectControls } from "../controls/controls-slice";
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-slice";
import { useEffect } from "react";

export const useCountries = () => {
  const navigate = useNavigate();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls),
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return { status, error, countries, navigate };
};
