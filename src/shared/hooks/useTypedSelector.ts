import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "box/app/store";

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
