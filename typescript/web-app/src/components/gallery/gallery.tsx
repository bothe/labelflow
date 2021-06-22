import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Box } from "@chakra-ui/react";
import { useVirtual } from "react-virtual";
import { Image as ImageType } from "../../graphql-types.generated";

import { GalleryItem } from "./gallery-item";
import { itemHeight, itemWidth, scrollbarHeight } from "./constants";

const allImagesQuery = gql`
  query allImages {
    images {
      id
      # name
      url
    }
  }
`;

export const Gallery = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const imageId = router.query.id as string;

  const { data } =
    useQuery<{
      images: Array<ImageType>;
    }>(allImagesQuery);

  const currentImageIndex = data?.images.findIndex(
    (image) => image.id === imageId
  );

  const { virtualItems, totalSize, scrollToIndex } = useVirtual({
    size: data?.images?.length ?? 0,
    parentRef: listRef,
    estimateSize: useCallback(() => itemWidth, []),
    horizontal: true,
    overscan: 10,
  });

  useEffect(() => {
    if (currentImageIndex == null || currentImageIndex === -1) {
      return;
    }

    scrollToIndex(currentImageIndex, { align: "center" });
  }, [currentImageIndex, scrollToIndex]);

  return (
    <Box ref={listRef} as="nav" pt={4} overflow="auto">
      <Box
        height={itemHeight + scrollbarHeight}
        width={totalSize}
        position="relative"
      >
        {virtualItems.map((item) => (
          <GalleryItem
            key={item.index}
            size={item.size}
            id={data?.images?.[item.index]?.id}
            url={data?.images?.[item.index]?.url}
            isSelected={imageId === data?.images?.[item.index]?.id}
            start={item.start}
            index={item.index}
          />
        ))}
      </Box>
    </Box>
  );
};
