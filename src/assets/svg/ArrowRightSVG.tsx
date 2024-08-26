import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const ArrowRightSVG = (props: SvgProps) => (
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
            d="M15.213 11 13.5 12.645 19.063 18 13.5 23.355 15.213 25l7.287-7-7.287-7Z"
        />
    </Svg>
);
export default ArrowRightSVG;
