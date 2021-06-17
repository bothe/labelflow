/* eslint-disable @typescript-eslint/no-unused-vars */
import { chakra, useToken, HTMLChakraProps } from "@chakra-ui/react";
import * as React from "react";

export const EmptyStateMessage = React.forwardRef<
  SVGSVGElement,
  HTMLChakraProps<"svg"> & { colorScheme?: string }
>(({ colorScheme, ...rest }: { colorScheme?: string }, ref) => {
  const [brand50, brand100, brand300, brand500] = useToken(
    "colors",
    ["brand.50", "brand.100", "brand.300", "brand.500"],
    "#ff00ff"
  );
  return (
    <chakra.svg
      width="250"
      height="200"
      fill="none"
      viewBox="0 0 250 200"
      {...rest}
      ref={ref}
    >
      <path
        fill={brand50}
        fillRule="evenodd"
        d="M63 134h91c.515 0 1.017-.056 1.5-.161.483.105.985.161 1.5.161h52a7 7 0 100-14h-6a7 7 0 110-14h19a7 7 0 100-14h-22a7 7 0 100-14h-64a7 7 0 100-14H79a7 7 0 100 14H39a7 7 0 100 14h25a7 7 0 110 14H24a7 7 0 100 14h39a7 7 0 100 14zm163 0a7 7 0 100-14 7 7 0 000 14z"
        clipRule="evenodd"
      />
      <path
        fill="white"
        fillRule="evenodd"
        d="M168.577 126.075a54.644 54.644 0 01-7.933 5.299l.165 14.083a2 2 0 01-3.22 1.609l-12.663-9.743A66.52 66.52 0 01130 139c-30.376 0-55-20.147-55-45s24.624-45 55-45 55 20.147 55 45c0 6.879-1.886 13.397-5.259 19.227a42.661 42.661 0 01-2.015 3.154m-2.533 3.273a47.61 47.61 0 01-2.906 3.122l2.906-3.122z"
        clipRule="evenodd"
      />
      <path
        fill={brand500}
        d="M169.361 127.048a1.25 1.25 0 00-1.568-1.947l1.568 1.947zm-8.717 4.326l-.602-1.096-.657.361.009.749 1.25-.014zm.165 14.083l-1.25.015 1.25-.015zm-1.977 2.023l-.014-1.25.014 1.25zm-1.243-.414l.762-.991-.762.991zm-12.663-9.743l.763-.991-.468-.359-.575.132.28 1.218zm34.815-24.096l1.082.626-1.082-.626zm-3.038 2.436a1.25 1.25 0 102.046 1.436l-2.046-1.436zm-.557 4.8a1.249 1.249 0 10-1.906-1.618l1.906 1.618zm-4.735 1.421a1.25 1.25 0 001.752 1.783l-1.752-1.783zm-3.618 3.217a53.332 53.332 0 01-7.751 5.177l1.204 2.191a55.792 55.792 0 008.115-5.421l-1.568-1.947zm-8.399 6.287l.165 14.084 2.5-.03-.165-14.083-2.5.029zm.165 14.084a.749.749 0 01-.741.758l.029 2.5a3.25 3.25 0 003.212-3.288l-2.5.03zm-.741.758a.75.75 0 01-.467-.155l-1.524 1.981c.578.445 1.29.683 2.02.674l-.029-2.5zm-.467-.155l-12.662-9.743-1.525 1.982 12.663 9.742 1.524-1.981zm-13.705-9.97A65.32 65.32 0 01130 137.75v2.5c5.267 0 10.368-.595 15.207-1.709l-.561-2.436zM130 137.75c-29.932 0-53.75-19.81-53.75-43.75h-2.5c0 25.766 25.43 46.25 56.25 46.25v-2.5zM76.25 94c0-23.94 23.818-43.75 53.75-43.75v-2.5c-30.82 0-56.25 20.484-56.25 46.25h2.5zM130 50.25c29.932 0 53.75 19.81 53.75 43.75h2.5c0-25.766-25.43-46.25-56.25-46.25v2.5zM183.75 94c0 6.645-1.821 12.948-5.091 18.601l2.164 1.252c3.475-6.007 5.427-12.74 5.427-19.853h-2.5zm-5.091 18.601a41.129 41.129 0 01-1.956 3.062l2.046 1.436a44.077 44.077 0 002.074-3.246l-2.164-1.252zm-4.419 6.244a46.375 46.375 0 01-2.829 3.039l1.752 1.783a48.56 48.56 0 002.983-3.204l-1.906-1.618z"
      />
      <path
        fill={brand100}
        fillRule="evenodd"
        d="M116 94a6 6 0 11-12 0 6 6 0 0112 0zm19 0a6 6 0 11-12 0 6 6 0 0112 0zm13 6a6 6 0 100-12 6 6 0 000 12z"
        clipRule="evenodd"
      />
      <path
        fill={brand500}
        d="M110 101.25a7.25 7.25 0 007.25-7.25h-2.5a4.75 4.75 0 01-4.75 4.75v2.5zM102.75 94a7.25 7.25 0 007.25 7.25v-2.5a4.75 4.75 0 01-4.75-4.75h-2.5zm7.25-7.25a7.25 7.25 0 00-7.25 7.25h2.5a4.75 4.75 0 014.75-4.75v-2.5zm7.25 7.25a7.25 7.25 0 00-7.25-7.25v2.5a4.75 4.75 0 014.75 4.75h2.5zm11.75 7.25a7.25 7.25 0 007.25-7.25h-2.5a4.75 4.75 0 01-4.75 4.75v2.5zM121.75 94a7.25 7.25 0 007.25 7.25v-2.5a4.75 4.75 0 01-4.75-4.75h-2.5zm7.25-7.25a7.25 7.25 0 00-7.25 7.25h2.5a4.75 4.75 0 014.75-4.75v-2.5zm7.25 7.25a7.25 7.25 0 00-7.25-7.25v2.5a4.75 4.75 0 014.75 4.75h2.5zm16.5 0a4.75 4.75 0 01-4.75 4.75v2.5a7.25 7.25 0 007.25-7.25h-2.5zM148 89.25a4.75 4.75 0 014.75 4.75h2.5a7.25 7.25 0 00-7.25-7.25v2.5zM143.25 94a4.75 4.75 0 014.75-4.75v-2.5a7.25 7.25 0 00-7.25 7.25h2.5zm4.75 4.75a4.75 4.75 0 01-4.75-4.75h-2.5a7.25 7.25 0 007.25 7.25v-2.5z"
      />
      <ellipse
        cx="88.487"
        cy="81.692"
        stroke={brand300}
        strokeLinecap="round"
        strokeWidth="2.5"
        rx="1.175"
        ry="2.381"
      />
      <ellipse
        cx="99.981"
        cy="69.497"
        stroke={brand300}
        strokeLinecap="round"
        strokeWidth="2.5"
        rx="8.041"
        ry="6.424"
      />
    </chakra.svg>
  );
});
