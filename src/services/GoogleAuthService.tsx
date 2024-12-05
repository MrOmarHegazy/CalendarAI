import { GoogleSignin } from '@react-native-google-signin/google-signin';

class AuthService {
  static async configure() {
    await GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/calendar'], 
      webClientId: 'YOUR_WEB_CLIENT_ID',
    });
  }

  static async signIn() {
    try {
      const userInfo = await GoogleSignin.signIn();
      return userInfo;
    } catch (error) {
      console.error('Google Sign-In Error', error);
    }
  }

  static async signOut() {
    await GoogleSignin.signOut();
  }
}

export default AuthService;