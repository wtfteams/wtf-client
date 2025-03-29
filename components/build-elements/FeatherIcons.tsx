import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface Props {
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconFillColor?: string;
  iconStrokeColor?: string;
  iconStrokeWidth?: number;
}

export default function FeatherIcons({
  icon,
  iconWidth = 24,
  iconHeight = 24,
  iconFillColor = "none",
  iconStrokeColor = "#000",
  iconStrokeWidth = 2,
}: Props) {
  const renderIcon = () => {
    switch (icon) {
      case "back-arrow":
        return (
          <Svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 24 24"
            fill={iconFillColor}
            stroke={iconStrokeColor}
            strokeWidth={iconStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M19 12H5" />
            <Path d="M12 19l-7-7 7-7" />
          </Svg>
        );

      case "wave":
        return (
          <svg
            width="393"
            height="359"
            viewBox="0 0 393 359"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="66.632"
              cy="126.854"
              rx="78.08"
              ry="80.13"
              transform="rotate(2.577 66.632 126.854)"
              fill="#fff"
            />
            <ellipse
              cx="163.482"
              cy="81.437"
              rx="80.964"
              ry="73.741"
              transform="rotate(2.577 163.482 81.437)"
              fill="#fff"
            />
            <ellipse
              cx="291.569"
              cy="115.613"
              rx="84.294"
              ry="89.302"
              transform="rotate(2.577 291.569 115.613)"
              fill="#fff"
            />
            <ellipse
              cx="373.075"
              cy="204.952"
              rx="90.749"
              ry="97.419"
              transform="rotate(2.577 373.075 204.952)"
              fill="#fff"
            />
            <path
              fill="#fff"
              d="m-5.389 116.637 428.387 19.28-10.941 243.107-428.388-19.281z"
            />
          </svg>
        );

      case "home":
        return (
          <Svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 24 24"
            fill={iconFillColor}
            stroke={iconStrokeColor}
            strokeWidth={iconStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <Path d="M9 22V12h6v10" />
          </Svg>
        );

      case "settings":
        return (
          <Svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 24 24"
            fill={iconFillColor}
            stroke={iconStrokeColor}
            strokeWidth={iconStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </Svg>
        );

      default:
        // Default icon (question mark)
        return (
          <Svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 24 24"
            fill={iconFillColor}
            stroke={iconStrokeColor}
            strokeWidth={iconStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <Path d="M12 17h.01" />
          </Svg>
        );
    }
  };

  return <View>{renderIcon()}</View>;
}
