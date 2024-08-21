import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CheckboxSVG = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            stroke="#E3EBF2"
            strokeWidth={2}
            d="M1 5a4 4 0 0 1 4-4h12.933a4 4 0 0 1 4 4v12.003a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5Z"
        />
    </Svg>
)
export default CheckboxSVG
