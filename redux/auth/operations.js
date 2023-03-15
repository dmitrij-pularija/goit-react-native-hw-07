import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import authConfig from "../../firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { setUserProfile } from "./slice";

const auth = getAuth(authConfig);



export const signup = createAsyncThunk(
    "auth/signup",
    async({ email, password, login }, {rejectWithValue}) => {
        try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, 
      {
        displayName: login, 
        photoURL: "https://pixabay.com/get/g385545b5e86d65955137bfd5051a98d78c2c3672eef85845c1dc643d4b2ac3190025952025296dc35c5c8bf356ce1d039a197302157d5d21aff07f4c09041cc1_640.jpg"
      });
      const { uid, displayName, photoURL } = auth.currentUser;
      return { uid, displayName, photoURL, email };
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
            return { uid, displayName, photoURL, email };
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const signout = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            await signOut(auth);
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)


// export const signUpUser = ({ email, password, login }) => async ( dispatch, getState) => {
// try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(auth.currentUser, 
//       {
//         displayName: login, 
//         photoURL: "https://pixabay.com/get/g385545b5e86d65955137bfd5051a98d78c2c3672eef85845c1dc643d4b2ac3190025952025296dc35c5c8bf356ce1d039a197302157d5d21aff07f4c09041cc1_640.jpg"
//       });

//     const user = auth.currentUser;
//     console.log(user);
//     const userProfile = {
//         userId: user.uid,
//         nickName: login,
//         email: email,
//         photoURL: user.photoURL,
//     };

//   } catch (error) {
//     console.log("error", error.code);
//     console.log("error.message", error.message);
//   } 
// };


// export const signInUser = ({ email, password }) => async ( dispatch, getState) => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//         const { uid, displayName, photoURL } = auth.currentUser;
//         console.log(uid, displayName, email, photoURL);
//         const userProfile = {
//             userId: uid,
//             nickName: displayName,
//             email: email,
//             photoURL: photoURL,
//         };
//         dispatch(setUserProfile(userProfile));
//     } catch (error) {
//         console.log("error", error.code);
//         console.log("error.message", error.message);
//       } 
//     };

//     export const refrechUser = () => async ( dispatch, getState) => {
//         try {
//             await onAuthStateChanged(auth, (user) => {
//                 if (user) {
//                     const userUpdateProfile = {
//                         nickName: user.displayName,
//                         userId: user.uid,
//                       };
                
//                     }
//                   });
//         } catch (error) {
//             console.log("error", error.code);
//             console.log("error.message", error.message);
//           } 
//         };

//         export const signOutUser = () => async (dispatch, getState) => {
//             await signOut(auth);
//             console.log("signOut");
//           };
    