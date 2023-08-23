import { useDispatch } from "react-redux";
import "../../styles/layouts/mobile-topbar.css";
import { setMenuIsOpen } from "../../store/features/settingsSlice";

export default function MobileTopBar() {
  const dispatch = useDispatch();
  function handleOnClickOptionsButton() {
    dispatch(setMenuIsOpen(true));
  }

  return (
    <div className="mobile-topbar">
      <div></div>
      <div
        className="mo-tb-options-button"
        onClick={handleOnClickOptionsButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
