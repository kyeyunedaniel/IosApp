import { Stack } from 'expo-router';
import React from 'react';
import { useSelector } from 'react-redux';

function AuthGate({ children }) {
  const access_token = useSelector(state => state.auth.access_token);

  if (!access_token) {
    // Not authenticated, show login/register stack only
    return (
      <Stack>
        <Stack.Screen name="LoginScreen" options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="RegisterScreen" options={{ title: 'Register', headerShown: false }} />
      </Stack>
    );
  }
  // Authenticated, show main app
  return children;
}

export default AuthGate;
