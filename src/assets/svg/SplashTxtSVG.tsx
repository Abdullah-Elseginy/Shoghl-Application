import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SplashTxtSVG = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={372}
        height={39}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M.8 29V.2h16.54v2.94H3.74v10h11.2v2.92H3.74V29H.8ZM19.156 3.3V0h2.94v3.3h-2.94Zm0 25.7V7.4h2.94V29h-2.94Zm22.336 0V17.98c0-1.2-.113-2.3-.34-3.3-.227-1.013-.593-1.893-1.1-2.64a5.028 5.028 0 0 0-1.94-1.76c-.787-.413-1.747-.62-2.88-.62-1.04 0-1.96.18-2.76.54-.787.36-1.453.88-2 1.56-.533.667-.94 1.48-1.22 2.44s-.42 2.053-.42 3.28l-2.08-.46c0-2.213.387-4.073 1.16-5.58.774-1.507 1.84-2.647 3.2-3.42 1.36-.773 2.92-1.16 4.68-1.16 1.294 0 2.42.2 3.38.6.974.4 1.794.94 2.46 1.62.68.68 1.227 1.46 1.64 2.34.413.867.714 1.793.9 2.78.187.973.28 1.947.28 2.92V29h-2.96Zm-15.62 0V7.4h2.66v5.32h.3V29h-2.96Zm29.833.6c-2.013 0-3.733-.5-5.16-1.5-1.427-1.013-2.52-2.38-3.28-4.1-.76-1.72-1.14-3.66-1.14-5.82 0-2.147.373-4.08 1.12-5.8.76-1.72 1.847-3.08 3.26-4.08 1.413-1 3.107-1.5 5.08-1.5 2.027 0 3.733.493 5.12 1.48s2.433 2.34 3.14 4.06c.72 1.707 1.08 3.653 1.08 5.84 0 2.147-.353 4.087-1.06 5.82-.707 1.72-1.747 3.087-3.12 4.1-1.373 1-3.053 1.5-5.04 1.5Zm.3-2.74c1.533 0 2.8-.373 3.8-1.12 1-.747 1.747-1.773 2.24-3.08.493-1.32.74-2.813.74-4.48 0-1.693-.247-3.187-.74-4.48-.493-1.307-1.24-2.327-2.24-3.06-.987-.733-2.233-1.1-3.74-1.1-1.547 0-2.827.38-3.84 1.14-1.013.76-1.767 1.793-2.26 3.1-.48 1.307-.72 2.773-.72 4.4 0 1.64.247 3.12.74 4.44.507 1.307 1.26 2.34 2.26 3.1 1 .76 2.253 1.14 3.76 1.14Zm6.78 2.14V12.74h-.32V.2h2.96V29h-2.64Zm18.719 0V16.94L71.844.2h3.4l7.74 13.38L90.684.2h3.4l-9.62 16.74V29h-2.96Zm18.983.6c-2.146 0-3.98-.487-5.5-1.46s-2.686-2.32-3.5-4.04c-.813-1.72-1.22-3.693-1.22-5.92 0-2.267.413-4.253 1.24-5.96.827-1.707 2-3.033 3.52-3.98 1.534-.96 3.353-1.44 5.46-1.44 2.16 0 4 .487 5.52 1.46 1.534.96 2.7 2.3 3.5 4.02.814 1.707 1.22 3.673 1.22 5.9 0 2.267-.406 4.26-1.22 5.98-.813 1.707-1.986 3.04-3.52 4-1.533.96-3.366 1.44-5.5 1.44Zm0-2.82c2.4 0 4.187-.793 5.36-2.38 1.174-1.6 1.76-3.673 1.76-6.22 0-2.613-.593-4.693-1.78-6.24-1.173-1.547-2.953-2.32-5.34-2.32-1.613 0-2.947.367-4 1.1-1.04.72-1.82 1.727-2.34 3.02-.507 1.28-.76 2.76-.76 4.44 0 2.6.6 4.687 1.8 6.26 1.2 1.56 2.967 2.34 5.3 2.34Zm20.712 2.76c-1.293 0-2.427-.2-3.4-.6-.96-.4-1.78-.94-2.46-1.62a8.528 8.528 0 0 1-1.62-2.32 11.722 11.722 0 0 1-.9-2.78 15.759 15.759 0 0 1-.28-2.94V7.4h2.96v11.02c0 1.187.113 2.287.34 3.3.227 1.013.587 1.9 1.08 2.66a5.284 5.284 0 0 0 1.94 1.74c.8.413 1.767.62 2.9.62 1.04 0 1.953-.18 2.74-.54.8-.36 1.467-.873 2-1.54.547-.68.96-1.5 1.24-2.46.28-.973.42-2.067.42-3.28l2.08.46c0 2.213-.387 4.073-1.16 5.58-.773 1.507-1.84 2.647-3.2 3.42-1.36.773-2.92 1.16-4.68 1.16Zm7.26-.54v-5.32h-.3V7.4h2.94V29h-2.64Zm6.03 0V7.4h2.64v5.2l-.52-.68c.24-.64.553-1.227.94-1.76a6.118 6.118 0 0 1 1.26-1.34 5.696 5.696 0 0 1 1.96-1.12c.747-.267 1.5-.42 2.26-.46.76-.053 1.453 0 2.08.16v2.76c-.787-.2-1.647-.247-2.58-.14-.933.107-1.793.48-2.58 1.12a5.366 5.366 0 0 0-1.62 2.02c-.36.773-.6 1.6-.72 2.48-.12.867-.18 1.727-.18 2.58V29h-2.94Zm18.022 0V.2h16.54v2.94h-13.6v10h11.2v2.92h-11.2V29h-2.94Zm26.216.54c-1.293 0-2.426-.2-3.4-.6-.96-.4-1.78-.94-2.46-1.62a8.572 8.572 0 0 1-1.62-2.32 11.722 11.722 0 0 1-.9-2.78 15.844 15.844 0 0 1-.28-2.94V7.4h2.96v11.02c0 1.187.114 2.287.34 3.3.227 1.013.587 1.9 1.08 2.66a5.292 5.292 0 0 0 1.94 1.74c.8.413 1.767.62 2.9.62 1.04 0 1.954-.18 2.74-.54.8-.36 1.467-.873 2-1.54.547-.68.96-1.5 1.24-2.46.28-.973.42-2.067.42-3.28l2.08.46c0 2.213-.386 4.073-1.16 5.58-.773 1.507-1.84 2.647-3.2 3.42-1.36.773-2.92 1.16-4.68 1.16Zm7.26-.54v-5.32h-.3V7.4h2.94V29h-2.64Zm17.79 0a14.394 14.394 0 0 1-3.6.3c-1.173-.053-2.226-.307-3.16-.76-.92-.453-1.62-1.16-2.1-2.12-.386-.8-.6-1.607-.64-2.42a90.441 90.441 0 0 1-.04-2.82V1.4h2.92v19.66c0 .907.007 1.667.02 2.28.027.6.167 1.133.42 1.6.48.893 1.24 1.427 2.28 1.6 1.054.173 2.354.133 3.9-.12V29Zm-14.16-19.08V7.4h14.16v2.52h-14.16Zm24.476 19.62c-1.294 0-2.427-.2-3.4-.6-.96-.4-1.78-.94-2.46-1.62a8.528 8.528 0 0 1-1.62-2.32 11.632 11.632 0 0 1-.9-2.78 15.759 15.759 0 0 1-.28-2.94V7.4h2.96v11.02c0 1.187.113 2.287.34 3.3.226 1.013.586 1.9 1.08 2.66a5.276 5.276 0 0 0 1.94 1.74c.8.413 1.766.62 2.9.62 1.04 0 1.953-.18 2.74-.54.8-.36 1.466-.873 2-1.54.546-.68.96-1.5 1.24-2.46.28-.973.42-2.067.42-3.28l2.08.46c0 2.213-.387 4.073-1.16 5.58-.774 1.507-1.84 2.647-3.2 3.42-1.36.773-2.92 1.16-4.68 1.16Zm7.26-.54v-5.32h-.3V7.4h2.94V29h-2.64Zm6.03 0V7.4h2.64v5.2l-.52-.68c.24-.64.553-1.227.94-1.76a6.07 6.07 0 0 1 1.26-1.34 5.696 5.696 0 0 1 1.96-1.12c.746-.267 1.5-.42 2.26-.46.76-.053 1.453 0 2.08.16v2.76c-.787-.2-1.647-.247-2.58-.14-.934.107-1.794.48-2.58 1.12a5.366 5.366 0 0 0-1.62 2.02c-.36.773-.6 1.6-.72 2.48-.12.867-.18 1.727-.18 2.58V29h-2.94Zm20.963.6c-2.106 0-3.933-.467-5.48-1.4-1.533-.933-2.726-2.247-3.58-3.94-.853-1.693-1.28-3.68-1.28-5.96 0-2.36.42-4.4 1.26-6.12.84-1.72 2.02-3.047 3.54-3.98 1.534-.933 3.34-1.4 5.42-1.4 2.134 0 3.954.493 5.46 1.48 1.507.973 2.647 2.373 3.42 4.2.774 1.827 1.127 4.007 1.06 6.54h-3v-1.04c-.053-2.8-.66-4.913-1.82-6.34-1.146-1.427-2.826-2.14-5.04-2.14-2.32 0-4.1.753-5.34 2.26-1.226 1.507-1.84 3.653-1.84 6.44 0 2.72.614 4.833 1.84 6.34 1.24 1.493 2.994 2.24 5.26 2.24 1.547 0 2.894-.353 4.04-1.06 1.16-.72 2.074-1.753 2.74-3.1l2.74 1.06c-.853 1.88-2.113 3.34-3.78 4.38-1.653 1.027-3.526 1.54-5.62 1.54Zm-8.26-10.58v-2.46h16.5v2.46h-16.5Zm19.137 14.16.18-1.46c.534.04.92-.067 1.16-.32.24-.253.387-.593.44-1.02a7.67 7.67 0 0 0 .04-1.38h-1.82v-4.22h3.42v5.02c0 1.227-.313 2.147-.94 2.76-.613.613-1.44.82-2.48.62ZM281.516 29V3.02h-10.06V.2h23.06v2.82h-10.06V29h-2.94Zm19.824.6c-2.146 0-3.98-.487-5.5-1.46s-2.686-2.32-3.5-4.04c-.813-1.72-1.22-3.693-1.22-5.92 0-2.267.414-4.253 1.24-5.96.827-1.707 2-3.033 3.52-3.98 1.534-.96 3.354-1.44 5.46-1.44 2.16 0 4 .487 5.52 1.46 1.534.96 2.7 2.3 3.5 4.02.814 1.707 1.22 3.673 1.22 5.9 0 2.267-.406 4.26-1.22 5.98-.813 1.707-1.986 3.04-3.52 4-1.533.96-3.366 1.44-5.5 1.44Zm0-2.82c2.4 0 4.187-.793 5.36-2.38 1.174-1.6 1.76-3.673 1.76-6.22 0-2.613-.593-4.693-1.78-6.24-1.173-1.547-2.953-2.32-5.34-2.32-1.613 0-2.946.367-4 1.1-1.04.72-1.82 1.727-2.34 3.02-.506 1.28-.76 2.76-.76 4.44 0 2.6.6 4.687 1.8 6.26 1.2 1.56 2.967 2.34 5.3 2.34Zm20.832 2.82c-2.013 0-3.733-.5-5.16-1.5-1.426-1.013-2.52-2.38-3.28-4.1-.76-1.72-1.14-3.66-1.14-5.82 0-2.147.374-4.08 1.12-5.8.76-1.72 1.847-3.08 3.26-4.08 1.414-1 3.107-1.5 5.08-1.5 2.027 0 3.734.493 5.12 1.48 1.387.987 2.434 2.34 3.14 4.06.72 1.707 1.08 3.653 1.08 5.84 0 2.147-.353 4.087-1.06 5.82-.706 1.72-1.746 3.087-3.12 4.1-1.373 1-3.053 1.5-5.04 1.5Zm.3-2.74c1.534 0 2.8-.373 3.8-1.12 1-.747 1.747-1.773 2.24-3.08.494-1.32.74-2.813.74-4.48 0-1.693-.246-3.187-.74-4.48-.493-1.307-1.24-2.327-2.24-3.06-.986-.733-2.233-1.1-3.74-1.1-1.546 0-2.826.38-3.84 1.14-1.013.76-1.766 1.793-2.26 3.1-.48 1.307-.72 2.773-.72 4.4 0 1.64.247 3.12.74 4.44.507 1.307 1.26 2.34 2.26 3.1 1 .76 2.254 1.14 3.76 1.14Zm6.78 2.14V12.74h-.32V.2h2.96V29h-2.64Zm12.231.6c-1.627 0-2.993-.293-4.1-.88-1.093-.587-1.913-1.367-2.46-2.34a6.381 6.381 0 0 1-.82-3.18c0-1.173.233-2.173.7-3a5.98 5.98 0 0 1 1.94-2.06c.827-.533 1.78-.94 2.86-1.22 1.093-.267 2.3-.5 3.62-.7a90.775 90.775 0 0 1 3.9-.54c1.28-.16 2.4-.313 3.36-.46l-1.04.64c.04-2.133-.373-3.713-1.24-4.74-.867-1.027-2.373-1.54-4.52-1.54-1.48 0-2.733.333-3.76 1-1.013.667-1.727 1.72-2.14 3.16l-2.86-.84c.493-1.933 1.487-3.433 2.98-4.5 1.493-1.067 3.433-1.6 5.82-1.6 1.973 0 3.647.373 5.02 1.12 1.387.733 2.367 1.8 2.94 3.2a7.23 7.23 0 0 1 .52 2.1c.08.773.12 1.56.12 2.36V29h-2.62v-5.42l.76.32c-.733 1.853-1.873 3.267-3.42 4.24-1.547.973-3.4 1.46-5.56 1.46Zm.34-2.54c1.373 0 2.573-.247 3.6-.74 1.027-.493 1.853-1.167 2.48-2.02a6.929 6.929 0 0 0 1.22-2.92c.16-.693.247-1.453.26-2.28.013-.84.02-1.467.02-1.88l1.12.58c-1 .133-2.087.267-3.26.4-1.16.133-2.307.287-3.44.46-1.12.173-2.133.38-3.04.62a8.24 8.24 0 0 0-1.78.74 4.109 4.109 0 0 0-1.42 1.24c-.36.52-.54 1.167-.54 1.94 0 .627.153 1.233.46 1.82.32.587.827 1.073 1.52 1.46.707.387 1.64.58 2.8.58Zm15.376 11.54 4.18-11.34.06 3.36-9.46-23.22h3.12l7.76 19.42h-1.28l7.16-19.42h3l-11.6 31.2h-2.94Z"
        />
    </Svg>
)
export default SplashTxtSVG
