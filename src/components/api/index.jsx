import { db, vansCollectionRef } from "../firebase";

import { getDocs, doc, getDoc, where, query } from "firebase/firestore/lite";

export const fetchVans = async () => {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
};

export const fetchVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
};

export const fetchVansLists = async () => {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
};

export const loginUser = async (creds) => {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
};

// export const loginUser = async (creds) => {
//   const { email, password } = creds;
//   console.log(password, email);
//   const user = query(usersCollectionRef, where("email", "==", email));
//   const querySnapshot = await getDocs(user);
//   const dataArr = querySnapshot.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));
//   console.log("pass", dataArr);
//   if (dataArr.length != 0) {
//     return dataArr;
//   }
// };
