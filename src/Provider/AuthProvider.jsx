import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import app from "../firebase/firebase.config";
import { axiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [token, setToken] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(true);
            if (currentUser) {
                axiosPublic.get(`/api/v1/user?email=${currentUser?.email}`)
                    .then(res => {
                        if (res?.data?.role === "Admin") {
                            setIsAdmin(res?.data?.role === "Admin");
                            console.log("Checking permissions", res?.data?.role === "Admin");
                        }
                    })
                    .catch(err => console.log(err.message));

                axiosPublic.post('/api/v1/jwt', {email: currentUser?.email})
                    .then(res => {
                        console.log("Token for email ",currentUser?.email);
                        if (res.data.token) {
                            setToken(res.data.token);
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
                    .catch(err => console.log(err.message));
            }

            setLoading(false);    
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
        isAdmin,
        setUser,
        token
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}