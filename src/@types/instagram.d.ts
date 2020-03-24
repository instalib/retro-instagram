declare module 'retro-instagram' {
  export interface MediaItem {
    mediaUrl: string
    pixelizedMediaUrl?: string
  }

  export interface CommentItem {
    username: string
    text: string
  }

  export interface PostItem extends MediaItem {
    mediaType: string // 'Photo' | 'Video' | 'Carousel'
    commentCount: number
    hasMoreComments: boolean
    previewComments: CommentItem[]
    likeCount: number
  }

  export interface PostWithCaptionItem extends PostItem {
    id: string
    caption: CommentItem
    hasLiked: boolean
    createdAt: number
  }

  export interface TimelineItem {
    user: UserInfo
    post: PostWithCaptionItem
  }

  export interface TimelineInfo {
    moreAvailable: boolean
    posts: TimelineItem[]
  }

  export interface UserPostInfo {
    moreAvailable: boolean
    posts: PostItem[]
  }

  export interface UserInfo {
    username: string
    profilePicture: MediaItem
  }

  export interface DetailUserInfo extends UserInfo {
    fullName?: string
    mediaCount: number
    followerCount: number
    followingCount: number
    biography?: string
    externalUrl?: string
  }
}
