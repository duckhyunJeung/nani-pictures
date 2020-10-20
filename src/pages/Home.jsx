import React from "react";
import ImageGallery from "react-image-gallery";
import ImageMasonry from "react-image-masonry";
import { Grid } from "@material-ui/core";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/300/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/300/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/300/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Home = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ImageGallery
            items={images}
            showNav={false}
            autoPlay={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            useBrowserFullscreen={false}
          />
        </Grid>
        <Grid item xs={12}>
          <ImageMasonry
            imageUrls={[
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%281%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%2810%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%2811%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%2812%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%2813%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%2814%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%2815%29.jpg",
              "https://kr.object.ncloudstorage.com/nani/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%85%E1%85%B2%E1%86%AB%E1%84%8B%E1%85%B5%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%87%81%29%20%282%29.jpg",

            ]}
            numCols={3}
            containerWidth={"100%"}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
