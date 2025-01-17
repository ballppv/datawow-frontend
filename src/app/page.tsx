'use client'

import Post from '@/components/Post'
import SearchFilterBar from '@/components/SearchFilterBar'
import MainLayout from '@/layouts/MainLayout'
import Sidebar from '@/layouts/Sidebar'
import tw from '@/utilities/tw'

const classes = {
  container: tw(`relative w-full flex`),
  contentSection: tw(
    `relative w-full px-4 py-12 md:px-10 md:py-9 flex flex-col gap-5 md:gap-6 bg-grey-100`,
  ),
  postContainer: tw(`flex flex-col`),
}

export default function Home() {
  return (
    <MainLayout>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.contentSection}>
          <SearchFilterBar />

          <div className={classes.postContainer}>
            <Post
              name="Pornpavee"
              community="History"
              title="I Worked This at Night"
              content={`Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow`}
              commentCount={0}
            />
            <Post
              name="Pornpavee"
              community="History"
              title="I Worked This at Night"
              content={`Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow`}
              commentCount={0}
            />
            <Post
              name="Pornpavee"
              community="History"
              title="I Worked This at Night"
              content={`Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow`}
              commentCount={0}
            />
            <Post
              name="Pornpavee"
              community="History"
              title="I Worked This at Night"
              content={`Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow`}
              commentCount={0}
            />
            <Post
              name="Pornpavee"
              community="History"
              title="I Worked This at Night"
              content={`Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow`}
              commentCount={0}
            />
            <Post
              name="Pornpavee"
              community="History"
              title="I Worked This at Night"
              content={`Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
                Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow`}
              commentCount={0}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
