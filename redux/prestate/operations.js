import {
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase/config";

export const sendPhoto = createAsyncThunk(
  "prestate/sendPhoto",
  async ({ uri, time }, { rejectWithValue }) => {
    try {
      const response = await fetch(uri);
      const file = await response.blob();
      const storageRef = ref(storage, `images/img${time}.jpg`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(ref(storage, `images/img${time}.jpg`));
      return { url };
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const delPhoto = createAsyncThunk(
  "prestate/delPhoto",
  async ({ timeStamp }, { rejectWithValue }) => {
    try {
      const desertRef = ref(storage, `images/img${timeStamp}.jpg`);
      await deleteObject(desertRef);
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);