import { useLoaderData, defer, Link, Outlet, useNavigate } from "react-router-dom";
// import { fetchProfileData } from "../lib/loaders";
import React, { useLayoutEffect, useEffect } from 'react';
import { Profil, Cadena } from '../ui/Icons/index.jsx'
import Button from "../ui/components/Button.jsx";
import CustomCarousel from "../ui/Carousel/CustomCarousel.jsx";
// import { fetchMoviesFeatured } from "../lib/loaders";
import { fetchWatchList } from "../lib/loaders";
import { getCookie, deleteCookie } from "../lib/utils.js";

import { useState } from "react";
import Input from "../ui/components/Input";




export async function loader() {
    return null
}

async function updatePseudo(emails, pseudos, ids, passwords, navigate, setPseudoError) {
    try {
        console.log('Updating pseudo for:', { emails, pseudos, ids });
        const response = await fetch('http://localhost:8080/api/updatepseudo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emails,
                pseudo: pseudos,
                id: ids,
            }),
        });

        const responseText = await response.text();
        console.log('Response text:', responseText);

        if (!response.ok) {
            const errorData = await response.json();
            console.log('Error data:', errorData);
            throw new Error(errorData.message);

        }
        console.log(emails, passwords, pseudos)

        const response1 = await fetch('http://localhost:8080/api/login_check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emails,
                password: passwords,
            }),
        });

        if (!response1.ok) {
            const errorData = await response1.json();
            throw new Error(errorData.message);
        }

        const data1 = await response1.json();

        deleteCookie('token');
        document.cookie = `token=${data1.token}`;

        if (data1.token) {
            const userResponse = await fetch('http://localhost:8080/api/user', {
                headers: {
                    'Authorization': `Bearer ${data1.token}`,
                },
            });
            const userData = await userResponse.json();

            deleteCookie('user');
            document.cookie = `user=${JSON.stringify(userData)}`;
            navigate('/profil');

        }
    } catch (error) {
        console.error('Error:', error.message);
        setPseudoError("Mot de passe incorrect");

    }
}


async function updatePassword(email, oldPassword, newPassword, id, navigate) {
    console.log('Updating password for:', { email, newPassword, oldPassword, id });
    const response = await fetch('http://localhost:8080/api/login_check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            email: email,
            password: oldPassword,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error('Mot de passe incorrect');
    }
    const data = await response.json();
    console.log(data);

    try {
        const response = await fetch('http://localhost:8080/api/updatepassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: email,
                password: newPassword,
                id: id,
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        const data = await response.json();

        deleteCookie('token');
        document.cookie = `token=${data.token}`;

        if (data.token) {
            const userResponse = await fetch('http://localhost:8080/api/user', {
                headers: {
                    'Authorization': `Bearer ${data.token}`,
                },
            });

            const userData = await userResponse.json();
            deleteCookie('user');
            document.cookie = `user=${JSON.stringify(userData)}`;
            setSuccessMessage('Votre mot de passe a été modifié');
            
        }
        navigate('/profil');
        return data;

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}



export default function ProfilModifierPage() {
    const [user, setUser] = useState(null);
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(null);
    const [pseudo, setPseudo] = useState(user ? user.pseudo : '');
    const [email, setEmail] = useState(user ? user.Email : '');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(user ? user.Id : '');
    const [section, setSection] = useState('infos');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [pseudoError, setPseudoError] = useState(null);
    const navigate = useNavigate();



    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        if (user) {
            setPseudo(user.pseudo);
            setEmail(user.email);
            setId(user.id);
        }
    }, [user]);



    useEffect(() => {
        const userCookie = getCookie('user');
        if (userCookie) {
            setUser(JSON.parse(userCookie));
        }
    }, []);

    return (
        <>
            <div className="font-openSans mt-28">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Modifier mes Informations</h1>

                <section className='flex flex-col items-center justify-center text-white gap-4 rounded-lg'>



                    {section === 'infos' && (

                        <section className='flex flex-col items-center justify-center px-2 md:px-10 py-10 gap-9 '>

                            <div className='flex flex-col sm:flex-row justify-center items-center'>

                                <Button intent="secondary" onClick={() => setSection('infos')} className="border-main">Mes Informations</Button>

                                <Button intent="secondary" onClick={() => setSection('password')} >Modifier mon mot de passe</Button>

                            </div>



                            <Profil />

                            <h1 className="text-2xl font-bold mb-4">Mes Informations</h1>

                            <form onSubmit={(e) => { 
    e.preventDefault(); 
    updatePseudo(email, pseudo, id, password, navigate, setPseudoError)
        .catch(error => setPseudoError(error.message));
}} className='flex flex-col gap-4'>

                                <label className='text'>

                                    Pseudo :

                                    <Input type="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} placeholder="" required className="w-full" />

                                </label>

                                <label className=''>

                                    Email :

                                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" required className="w-full" />

                                </label>

                                <label className=''>

                                    Password :

                                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" required className="w-full" />

                                </label>

                                {pseudoError && <p>{pseudoError}</p>}

                                <Button type="submit" intent="primary" active="true" size="small" text="black" className="mt-8">Modifier mes informations</Button>

                            </form>

                            {isRegistrationSuccessful === null ? null : isRegistrationSuccessful ? <p>Registration successful</p> : <p>Registration failed</p>}

                        </section>

                    )}



                    {section === 'password' && (

                        <section className='flex flex-col items-center justify-center px-2 md:px-20 py-10 gap-9 '>

                            <div className='flex flex-col sm:flex-row justify-center items-center'>

                                <Button intent="secondary" onClick={() => setSection('infos')}>Mes Informations</Button>

                                <Button intent="secondary" onClick={() => setSection('password')} className="border-main">Modifier mon mot de passe</Button>

                            </div>


                            <Cadena />


                            <h1 className="text-2xl font-bold mb-4">Mot de passe</h1>

                            <form onSubmit={(e) => { 
    e.preventDefault(); 
    updatePassword(email, oldPassword, newPassword, id, navigate)
        .catch(error => setPasswordError(error.message));
}} className='flex flex-col gap-4'>

                                <label className=''>

                                    Ancien mot de passe :

                                    <Input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="" className="w-full" />

                                </label>

                                <label className=''>

                                    Nouveau mot de passe :

                                    <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="" className="w-full" />

                                </label>

                                {successMessage && <p>{successMessage}</p>}
    {passwordError && <p>{passwordError}</p>}


                                <Button type="submit" intent="primary" active="true" size="small" text="black" className="mt-8">Modifier mon Mot de passe</Button>

                            </form>

                            {isRegistrationSuccessful === null ? null : isRegistrationSuccessful ? <p>Registration successful</p> : <p>Registration failed</p>}

                        </section>

                    )}

                </section>

            </div>

        </>
    );
}