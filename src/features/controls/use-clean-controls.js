import { useDispatch } from "react-redux";
import { clearControls } from "./controls-slice";

export const useCleanControls = () => {
  const dispatch = useDispatch();

  const handleClearControls = () => dispatch(clearControls());

  return { handleClearControls };
};
