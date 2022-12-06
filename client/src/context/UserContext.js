import React, { createContext, useState, useEffect } from 'react'
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)

    // for provider login
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);

    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // for login 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {

        setLoading(true);
        return signOut(auth);
    }

    // to fetch current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);

            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false)

        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { createUser, logIn, isDarkMode, setIsDarkMode, providerLogin, updateUserProfile, user, loading, logOut, setLoading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext