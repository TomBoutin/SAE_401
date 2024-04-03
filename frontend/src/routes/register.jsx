import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/components/Button.jsx";
import Input from "../ui/components/Input.jsx";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setMessage("Inscription réussie. Vous pouvez maintenant vous connecter.");

      // navigate("/login");
      
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <section className="mx-5 mt-40 font-openSans sm:mx-20">
        <h2 className="text-4xl font-bold">S'inscrire</h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-10 flex max-w-md flex-col gap-4 ">
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Mot de passe"
              type="password"
              placeholder="Mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {message && <p>{message}</p>}

          <Button intent={`primary`} className={`mt-8`} type="submit"  >
            S'inscrire
          </Button>
        </form>

        <p className="mt-10 text-lg">
          Vous avez déjà un compte ?{" "}
          <span className="text-main">
            <Link to={`/login`}>Se connecter</Link>
          </span>
        </p>
      </section>
    </>
  );
}