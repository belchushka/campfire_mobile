import { useDispatch } from "react-redux";
import { AppDispatch } from "box/app/store";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
