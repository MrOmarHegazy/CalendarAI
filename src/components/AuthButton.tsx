import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import GoogleAuthService from '../services/GoogleAuthService';
import { setUser } from '../redux/slices/GoogleAuthSlice';

const AuthButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      const userInfo = await GoogleAuthService.signIn();
      if (userInfo) {
        dispatch(setUser(userInfo));
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Button 
      title="Sign in with Google" 
      onPress={handleGoogleSignIn} 
    />
  );
};

export default AuthButton;