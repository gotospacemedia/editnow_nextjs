export const editnow_frontpage_shorts_videos =
  "/users/232053563/projects/23971900/items";

export type VimeoFolderKey =
  | "shorts_videos"
  | "long_videos"
  | "product_videos"
  | "fashion"
  | "documentaries";

export const vimeoFolderPath: Record<VimeoFolderKey, string> = {
  shorts_videos: "/users/232053563/projects/23274712/items",
  long_videos: "/users/232053563/projects/23381603/items",
  product_videos: "/users/232053563/projects/23922215/items",
  fashion: "/users/232053563/projects/23922213/items",
  documentaries: "/users/232053563/projects/23922747/items",
};

export type JsVimeoFolderKey =
  | "long_videos"
  | "corporate_videos"
  | "shorts"
  | "fashion"
  | "product_videos";

export const jsVimeoFolderPath: Record<JsVimeoFolderKey, string> = {
  long_videos: "/users/232053563/projects/25184630/items",
  corporate_videos: "/users/232053563/projects/25182886/items",
  shorts: "/users/232053563/projects/25182891/items",
  fashion: "/users/232053563/projects/23922213/items",
  product_videos: "/users/232053563/projects/23922215/items",
};
