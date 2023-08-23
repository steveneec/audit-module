import { useEffect, useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { signin } from "../../services/auth.service";
import "../../styles/screens/signin.css";
import { IoAt } from "react-icons/io5";
import { MdPassword } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserAgent } from "../../store/features/settingsSlice";
import HeroImage from "../../assets/hero.svg";
import { selectUser, setUser } from "../../store/features/userSlice";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _us = useSelector(selectUser);

  const userAgent = useSelector(selectUserAgent);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleOnSubmitForm(event: any) {
    event.preventDefault();

    const user = await signin({ email, password });

    console.log(user);
    if (user) {
      dispatch(setUser(user));
      //redirect to home
      navigate("/");
    } else {
      //todo show notification
    }
  }

  useEffect(() => {
    console.log(_us);
  }, [_us]);

  return (
    <div className="signin-layout center-content fill">
      {userAgent === "desktop" && (
        <div className="si-hero">
          <div className="si-hero-content">
            <img src={HeroImage} className="si-hero-img" />
            <h2 className="an-in-left">
              A few more clicks to sign in to your account.
            </h2>
            <p className="an-in-left">
              Manage all your e-commerce accounts in one place
            </p>
          </div>
        </div>
      )}
      <div className="si-content center-content">
        <div className="si-form-card">
          <h3 className="an-in-right">Iniciar sesion</h3>
          <p id="" className="text-secondary an-in-right">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </p>
          <form onSubmit={handleOnSubmitForm}>
            <div className="si-inputs">
              <TextInput
                placeholder="e-mail"
                icon={<IoAt />}
                required
                value={email}
                onTextChange={setEmail}
                className="an-in-right"
              />
              <TextInput
                placeholder="contrasena"
                password
                icon={<MdPassword />}
                required
                value={password}
                onTextChange={setPassword}
                className="an-in-right"
              />
            </div>
            <Button
              title="Inciar sesion"
              variant="primary"
              className="an-in-right"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
