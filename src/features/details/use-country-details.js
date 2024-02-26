import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetails,
  loadCountryByName,
  selectDetails,
} from "./details-slice";
import { useEffect } from "react";

export const useCountryDetails = (name) => {
  const navigate = useNavigate();

  const { currentCountry, error, status } = useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return { navigate, currentCountry, error, status };
};
