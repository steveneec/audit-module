import { useSelector } from "react-redux";
import { navigationOption } from "../types";
import { selectTheme, selectUserAgent } from "../store/features/settingsSlice";
import MobileTopBar from "./components/MobileTopBar";
import MobileNavigation from "./components/MobileNavigation";
import Navigation from "./components/Navigation";
import "../styles/layouts/dashboard.css";
import { PropsWithChildren, useEffect, useState } from "react";
import Toolbar from "../components/Toolbar";
import { navigationOptions } from "../router";
import { selectUser } from "../store/features/userSlice";

export default function Dashboard(props: PropsWithChildren) {
  const userAgent = useSelector(selectUserAgent);
  const theme = useSelector(selectTheme);
  const [navOptions, setNavOptions] = useState<navigationOption[]>([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    //get options
    const _options = navigationOptions.filter((opt) =>
      opt.allowedRoles.some((role: string) => user.role.includes(role))
    );

    setNavOptions(_options);
  }, []);

  return (
    <div className="dashboard" style={{ backgroundColor: theme.accentColor }}>
      {userAgent === "desktop" ? (
        <Navigation options={navOptions} />
      ) : (
        <>
          <MobileTopBar />
          <MobileNavigation options={navOptions} />
        </>
      )}
      <div className="db-content-container">
        <Toolbar />
        <div className="db-content">{props.children}</div>
      </div>
    </div>
  );
}
