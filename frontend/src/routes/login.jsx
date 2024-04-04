import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/components/Button.jsx";
import Input from "../ui/components/Input.jsx";
// import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();


  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login_check", {
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

      const data = await response.json();

      if (data.token) {
        const userResponse = await fetch("http://localhost:8080/api/user", 
         {
          headers: {
            'Authorization': `Bearer ${data.token}`,
          },
          
        });

        const UserData = await userResponse.json();

        console.log(UserData);
        
        document.cookie = `user=${JSON.stringify(UserData)}`;

      }

      document.cookie = `token=${data.token}`;
      setMessage("Vous êtes connecté");

      window.location.href = "/";
      
    } catch (error) {
      console.log(error.message);
      setMessage("Email ou mot de passe incorrect");
    }
  };


  return (
    <>
      <section className="mx-5 mt-40 font-openSans sm:mx-20">
        <h2 className="text-4xl font-bold">Se Connecter</h2>

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
            Se connecter
          </Button>
        </form>

        <p className="mt-10 text-lg">
          Vous n'avez pas de compte ?{" "}
          <span className="text-main">
            <Link to={`http://localhost:8080/register`}>S'inscrire</Link>
          </span>
        </p>
      </section>
    </>
  );
}
