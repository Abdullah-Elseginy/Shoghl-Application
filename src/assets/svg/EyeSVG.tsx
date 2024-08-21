import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EyeSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#B4B9CA"
      fillRule="evenodd"
      d="M.76 7.933C2.214 3.469 6.541.23 11.653.23c5.112 0 9.44 3.238 10.894 7.702-1.455 4.463-5.782 7.7-10.894 7.7S2.214 12.397.76 7.934Zm15.46 0a4.321 4.321 0 0 1-1.338 3.111 4.655 4.655 0 0 1-3.229 1.29 4.655 4.655 0 0 1-3.229-1.29 4.321 4.321 0 0 1-1.337-3.111c0-1.167.481-2.287 1.337-3.112a4.655 4.655 0 0 1 3.23-1.289c1.21 0 2.372.464 3.228 1.289a4.321 4.321 0 0 1 1.338 3.112Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default EyeSVG
