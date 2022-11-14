import { useTypedSelector } from "box/shared";

export const useAuth = () => {
  const auth = useTypedSelector((state) => state.auth);
  return auth;
};
