import tw from '@/utilities/tw'
import Image from 'next/image'
import React from 'react'
import Icon from './Icon'

interface PostProps {
  name: string
  community: string
  title: string
  content?: string
  commentCount: number
}

const classes = {
  container: tw(
    `w-full max-h-[200px] max-w-[798px] p-5 flex flex-col gap-[5px] border-[0.5px] border-grey-100 bg-white
    first:rounded-t-xl last:rounded-b-xl`,
  ),

  nameAndCommunity: tw(`flex flex-col gap-[15px]`),
  usernameLine: tw(
    `flex gap-[10px] items-center text-[14px] leading-[24px] text-grey-300 font-medium`,
  ),
  userImage: tw(`w-[31px] h-[31px] rounded-[100px]`),
  communityBadge: tw(
    `w-[55px] h-6 px-2 py-1 flex items-center justify-center bg-[#F3F3F3]
    rounded-2xl text-[12px] leading-[16px] text-[#4A4A4A]`,
  ),

  detailSection: tw(`flex flex-col gap-[10px]`),
  titleAndContent: tw(`flex flex-col gap-[2px] text-[#101828]`),
  title: tw(`text-md font-semibold`),
  content: tw(`text-[12px] leading-[14px] line-clamp-2`),
  comments: tw(`flex gap-[5px] items-center text-[12px] leading-[14px] text-grey-300`),
}

const Post: React.FC<PostProps> = ({ name, community, title, content, commentCount }) => {
  return (
    <div className={classes.container}>
      <div className={classes.nameAndCommunity}>
        <div className={classes.usernameLine}>
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={31}
            height={31}
            className={classes.userImage}
          />
          <div>{name}</div>
        </div>

        <div className={classes.communityBadge}>{community}</div>
      </div>

      <div className={classes.detailSection}>
        <div className={classes.titleAndContent}>
          <div className={classes.title}>{title}</div>
          <div className={classes.content}>{content}</div>
        </div>
        <div className={classes.comments}>
          <Icon name="comment" size={16} fill="#FFF" />
          <div>{`${commentCount} ${commentCount > 1 ? 'Comments' : 'Comment'}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Post
