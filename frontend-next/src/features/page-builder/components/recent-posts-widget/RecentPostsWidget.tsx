"use client";

import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import { RecentPostsWidgetFragment } from "@/ssr-features/graphql/fragments/recentPostsWidget.generated";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import UiPostPreview from "@/common/components/ui/ui-post-preview/UiPostPreview";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import UiSectionTitle from "@/common/components/ui/ui-section-title/UiSectionTitle";
import AnimatedSection from "@/common/components/animated/animated-section/AnimatedSection";

interface IRecentPostsWidgetProps {
  data: RecentPostsWidgetFragment;
  recentArticles?: GetRecentArticlesQuery;
}

export default function RecentPostsWidget({
  data,
  recentArticles,
}: IRecentPostsWidgetProps): JSX.Element {
  const { title } = data;

  return (
    <AnimatedSection>
      <Box
        component="section"
        sx={{
          " .swiper-pagination-bullet": {
            bgcolor: "primary.main",
          },
        }}
      >
        <UiSectionContainer>
          <UiSectionTitle>{title}</UiSectionTitle>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {recentArticles?.articles?.map((article) => {
              const { slug, title, description, updatedAt, cover } =
                article || {};

              return (
                <SwiperSlide key={slug}>
                  <UiPostPreview
                    sx={{
                      flex: 1,
                    }}
                    title={title}
                    slug={slug}
                    description={description}
                    image={cover}
                    updatedAt={updatedAt}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </UiSectionContainer>
      </Box>
    </AnimatedSection>
  );
}
