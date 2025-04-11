// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBz1BnDetvvGl1Y7T9BrjcptKy8y9AfJXY",
  authDomain: "pushnotification-d136d.firebaseapp.com",
  projectId: "pushnotification-d136d",
  storageBucket: "pushnotification-d136d.firebasestorage.app",
  messagingSenderId: "1086606763322",
  appId: "1:1086606763322:web:3f34877c04998f96e3dc03",
  measurementId: "G-PLZPEZFRTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BFRLdPN7O43URMTZnqX1_c8dbo4z2SD4s9goFGSFEI1pG0n6oWFL51uKE5oYPCst_m5YP3LiK3wKNYiSj8o2jUk",
    });
    console.log(token);
  }
};

// file 
// import "./styles.css";
// import { generateToken, messaging } from "./notification/firebase";
// import { useEffect } from "react";
// import { onMessage } from "firebase/messaging";
// import toast, { Toaster } from "react-hot-toast";

// export default function App() {
//   useEffect(() => {
//     generateToken();
//     onMessage(messaging, (payload) => {
//       console.log(payload);
//       toast(payload.notification.body);
//     });
//   }, []);
//   return (
//     <div className="App">
//       <Toaster />
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
