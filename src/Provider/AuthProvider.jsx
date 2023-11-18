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
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { axiosPublic } from "../Hooks/useAxiosPublic";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const axiosSecure = useAxiosSecure();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
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
        return signOut(auth)
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
            setUser(currentUser)
            setLoading(true);
            if (currentUser) {
                setLoading(true);
                axiosSecure.get(`/api/v1/user?email=${currentUser?.email}`)
                    .then(res => {
                        if (res?.data?.role === "Admin") {
                            console.log("Checking permissions");
                            setLoading(true);
                            setIsAdmin(true);
                        } 
                    })
                    .catch(err => console.log(err.message))
                    console.log(currentUser);
                axiosPublic.post('/api/v1/jwt', {email: currentUser?.email})
                    .then(res => {
                        console.log(res);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
                    .catch(err => console.log(err.message));
            }
            setIsAdmin(false);
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
        isAdmin
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