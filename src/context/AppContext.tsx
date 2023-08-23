import { PropsWithChildren, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserAgent } from "../store/features/settingsSlice";

const AppContext = createContext({});

export function AppContextProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    window.addEventListener("resize", handleOnResize);
    handleOnResize();
  }, []);

  const dispatch = useDispatch();

  function handleOnResize() {
    if (window.innerWidth > 800) {
      dispatch(setUserAgent("desktop"));
    } else if (window.innerWidth <= 800) {
      dispatch(setUserAgent("mobile"));
    }
  }

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
