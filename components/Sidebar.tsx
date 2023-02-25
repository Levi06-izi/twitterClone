import React from 'react'
import {
    BellIcon, 
    HashtagIcon,
    BookmarkIcon,
    UserIcon,
    HomeIcon,
    EnvelopeIcon,
    FolderOpenIcon,
    EllipsisHorizontalCircleIcon,

} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 
    md:items-start'>
      <img className='m-3 h-10 w-10' src='/twitter.png' alt='twitter'/>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmark" />
      <SidebarRow Icon={FolderOpenIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  )
}

export default Sidebar
