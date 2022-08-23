import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import SignInForm from "../../components/sign-in/SignInForm.component";
import SignUpForm from "../../components/sign-up/SignUpForm.component";

import './Authentication.styles.scss';

const Authentication = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
