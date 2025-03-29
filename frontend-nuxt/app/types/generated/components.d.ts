import type { Schema, Struct } from "@strapi/strapi";

export interface ComponentsGridItem extends Struct.ComponentSchema {
  collectionName: "components_components_grid_items";
  info: {
    description: "";
    displayName: "gridItem";
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<"title">;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: "components_components_links";
  info: {
    description: "";
    displayName: "Link";
    icon: "link";
  };
  attributes: {
    isTargetBlank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

export interface ComponentsSosialLink extends Struct.ComponentSchema {
  collectionName: "components_components_sosial_links";
  info: {
    displayName: "Sosial Link";
    icon: "link";
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<["linkedin", "github"]> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Schema.Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "Rich text";
    icon: "align-justify";
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "seo";
    icon: "search";
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<"images">;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: "components_shared_sliders";
  info: {
    description: "";
    displayName: "Slider";
    icon: "address-book";
  };
  attributes: {
    files: Schema.Attribute.Media<"images", true>;
  };
}

export interface WidgetsCallToAction extends Struct.ComponentSchema {
  collectionName: "components_widgets_call_to_actions";
  info: {
    description: "";
    displayName: "callToAction";
    icon: "cursor";
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<"title">;
  };
}

export interface WidgetsGrid extends Struct.ComponentSchema {
  collectionName: "components_widgets_grids";
  info: {
    description: "";
    displayName: "grid";
    icon: "dashboard";
  };
  attributes: {
    desktopColumnCount: Schema.Attribute.Enumeration<
      ["six", "four", "three", "two", "one"]
    > &
      Schema.Attribute.DefaultTo<"three">;
    item: Schema.Attribute.Component<"components.grid-item", true>;
    mobileColumnCount: Schema.Attribute.Enumeration<
      ["six", "four", "three", "two", "one"]
    > &
      Schema.Attribute.DefaultTo<"one">;
    tabletColumnCount: Schema.Attribute.Enumeration<
      ["six", "four", "three", "two", "one"]
    > &
      Schema.Attribute.DefaultTo<"two">;
    title: Schema.Attribute.String;
  };
}

export interface WidgetsHero extends Struct.ComponentSchema {
  collectionName: "components_widgets_heroes";
  info: {
    description: "";
    displayName: "hero";
    icon: "house";
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface WidgetsRecentPosts extends Struct.ComponentSchema {
  collectionName: "components_widgets_recent_posts";
  info: {
    displayName: "recentPosts";
    icon: "clock";
  };
  attributes: {
    articles: Schema.Attribute.Relation<"oneToMany", "api::article.article">;
    postCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetsTextWithImage extends Struct.ComponentSchema {
  collectionName: "components_widgets_text_with_images";
  info: {
    displayName: "textWithImage";
  };
  attributes: {
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    isImageOnLeftSide: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<"Title">;
  };
}

declare module "@strapi/strapi" {
  export namespace Public {
    export interface ComponentSchemas {
      "components.grid-item": ComponentsGridItem;
      "components.link": ComponentsLink;
      "components.sosial-link": ComponentsSosialLink;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
      "widgets.call-to-action": WidgetsCallToAction;
      "widgets.grid": WidgetsGrid;
      "widgets.hero": WidgetsHero;
      "widgets.recent-posts": WidgetsRecentPosts;
      "widgets.text-with-image": WidgetsTextWithImage;
    }
  }
}
