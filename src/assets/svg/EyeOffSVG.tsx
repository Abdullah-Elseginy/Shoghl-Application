import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EyeOffSVG = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            stroke="#A0A5BA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.067 10.62c-.2.205-.442.37-.71.483a2.278 2.278 0 0 1-2.44-.43 2.083 2.083 0 0 1-.481-.694 2.002 2.002 0 0 1 .03-1.632c.12-.256.292-.486.507-.677m5.881 5.607a7.58 7.58 0 0 1-4.334 1.434c-5.108 0-8.027-5.566-8.027-5.566a13.02 13.02 0 0 1 3.693-4.133l8.668 8.265Zm-5.866-9.53a6.966 6.966 0 0 1 1.532-.168c5.108 0 8.027 5.566 8.027 5.566-.443.79-.971 1.534-1.576 2.22L7.988 3.745ZM1.493 1.492l16.054 15.306"
        />
    </Svg>
)
export default EyeOffSVG
