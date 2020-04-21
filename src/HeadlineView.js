import React, { useContext, createRef } from "react";
import { Text, Platform, findNodeHandle } from "react-native";
import { NativeAdContext, nativeAdView } from "./context";

const headlineRef = createRef();

const HeadlineView = (props) => {
  const { nativeAd, setNativeAd } = useContext(NativeAdContext);

  const _onLayout = () => {
    
    let handle = findNodeHandle(headlineRef.current);
    nativeAdView.current?.setNativeProps({
      headline: handle,
    });
  };

  return (
    <Text
      {...props}
      nativeID="adHeadlineView"
      ref={headlineRef}
      onLayout={_onLayout}
    >
      {nativeAd ? nativeAd.headline : null}
    </Text>
  );
};

export default HeadlineView;