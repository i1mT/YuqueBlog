import React from "react";

/*
 * @Author: i1mT
 * @Date: 2022-10-22 21:22:25
 * @LastEditors: i1mT
 * @LastEditTime: 2022-10-27 09:57:40
 * @Description:
 * @FilePath: \YuqueBlog\src\types\blog.ts
 */
export interface FriendLink {
  name: string;
  link: string;
}
export interface SocialLink {
  img: string;
  link: string;
}
export interface BlogSettings {
  title: string;
  sub_title: string;
  cover: string;
  public_repos: string;
  social_links: SocialLink[];
  friend_link: FriendLink[];
}
export interface User {
  name: string;
  avatar_url: string;
}
export interface BlogInfo {
  user: User;
  settings: BlogSettings;
}

export interface Book {
  id: number;
  type: string;
  slug: string;
  name: string;
  description: string;
  content_updated_at: string;
  updated_at: string;
  created_at: string;
  namespace: string;
  user: User;
}

enum PostStatus {
  notPublic = 0,
  public = 1,
}
export interface Post {
  id: number;
  slug: string;
  title: string;
  description: string;
  user_id: number;
  book_id: number;
  format: string;
  public: number;
  status: PostStatus;
  likes_count: number;
  comments_count: number;
  content_updated_at: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  first_published_at: string;
  draft_version: number;
  last_editor_id: number;
  word_count: number;
  cover: string;
  custom_description: string;
  last_editor: User;
  repo: string;
}
export enum Lang {
  cn = "cn",
  en = "en",
}
export interface GlobalState {
  title?: string;
  subtitle?: string;
  cover: string;
  slot?: React.ReactNode;
  lang: Lang;
  mainWidth: number;
  coverHeight: number;
}

export interface PostDetail {
  id: number;
  body: string;
  slug: string;
  title: string;
  book: Book;
  description: string;
  body_html: string;
  body_lake: string;
  body_draft: string;
  likes_count: number;
  comments_count: number;
  content_updated_at: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  draft_version: number;
  last_editor_id: number;
  word_count: number;
  cover: string;
}
