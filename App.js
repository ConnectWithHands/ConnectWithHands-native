import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";

import { LoadingIndicator } from "./src/components/Loading";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepareAppLoad() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepareAppLoad();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      onLayout={onLayoutRootView}
    >
      <WebView
        source={{ uri: "https://connectwithhand.online" }}
        allowsInlineMediaPlayback="true"
        startInLoadingState={true}
        renderLoading={LoadingIndicator}
      />
    </SafeAreaView>
  );
}
