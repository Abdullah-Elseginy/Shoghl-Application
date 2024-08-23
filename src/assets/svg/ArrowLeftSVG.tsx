import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const ArrowLeftSVG = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Rect width={36} height={36} fill="#fff" rx={2} />
        <Path
            fill="#4D6182"
            d="m20.787 25 1.713-1.645L16.937 18l5.563-5.355L20.787 11 13.5 18l7.287 7Z"
        />
    </Svg>
);
export default ArrowLeftSVG;
