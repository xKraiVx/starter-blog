import CallToActionWidget from "@/features/page-builder/components/call-to-action-widget/CallToActionWidget";
import GridWidget from "@/features/page-builder/components/grid-widget/GridWidget";
import HeroWidget from "@/features/page-builder/components/hero-widget/HeroWidget";
import RecentPostsWidget from "@/features/page-builder/components/recent-posts-widget/RecentPostsWidget";
import TextWithImageWidget from "@/features/page-builder/components/text-with-image-widget/TextWithImageWidget";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { ComponentType } from "react";

export const PAGE_BUILDER_WIDGET: Record<
  EPageBuilderWidget,
  ComponentType<{ data: any; recentArticles?: any }>
> = {
  [EPageBuilderWidget.CallToAction]: CallToActionWidget,
  [EPageBuilderWidget.Hero]: HeroWidget,
  [EPageBuilderWidget.Grid]: GridWidget,
  [EPageBuilderWidget.TextWithImage]: TextWithImageWidget,
  [EPageBuilderWidget.ResentPosts]: RecentPostsWidget,
};
