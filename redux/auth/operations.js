import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth }  from "../../firebase/config";

export const signup = createAsyncThunk(
    "auth/signup",
    async({ email, password, login }, {rejectWithValue}) => {
        try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, 
      {
        displayName: login, 
        photoURL: "",
      });
      const { uid, displayName, photoURL } = auth.currentUser;
      return { uid, displayName, email, photoURL};
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

export const signin = createAsyncThunk(
    "auth/login",
    async({ email, password }, {rejectWithValue}) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const { uid, displayName, photoURL } = auth.currentUser;
            return { uid, displayName, email, photoURL };
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

export const signout = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            await signOut(auth);
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

export const refresh = createAsyncThunk(
    "auth/update",
    async  (_, {rejectWithValue}) => {
        try {
            return await new Promise((resolve, reject) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                    const { uid, displayName, email, photoURL } = user;
                    resolve({ uid, displayName, email, photoURL });
                    } else {
                        return rejectWithValue('Unable to fetch user');
                    }
                });
            });
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)