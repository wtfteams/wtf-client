import { Stack } from "expo-router"
import { SplashScreen } from "expo-router";
import * as React from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //       setIsLoggedIn(isAuthenticated);
  //     } finally {
  //       setIsLoading(false);
  //       SplashScreen.hideAsync();
  //     }
  //   };

  //   checkAuth();
  // }, []);

  // if (isLoading) {
  //   return null;
  // }

  // // Handle initial route
  // if (isLoggedIn) {
  //   return <Redirect href="/(main-tabs)" />;
  // }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main-tabs)" />
    </Stack>
  );
}