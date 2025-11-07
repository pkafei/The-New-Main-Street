import Image from 'next/image';
import { Avatar } from '@/components/avatar';
import { YouTubeIcon, TwitterIcon, FacebookIcon } from '@/components/social-icons';

// User data with Cloudinary image URLs
const user = {
  avatarUrl: 'https://res.cloudinary.com/dncb2k7md/image/upload/v1757469522/portia_pic_jutzkl.jpg',
};

const logoUrl = 'https://res.cloudinary.com/dncb2k7md/image/upload/v1762528486/NMS_Logo_nsgnep.png';

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left column (40%) - Fixed, centered content like stan.store */}
      <div className="w-[40%] bg-white border-r border-gray-100 flex flex-col">
        {/* Logo at top */}
        <div className="p-6">
          <Image
            src={logoUrl}
            alt="NMS Logo"
            width={120}
            height={120}
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 space-y-6">
          {/* Large Avatar */}
          <Avatar className="size-32" src={user.avatarUrl} />
          
          {/* Name */}
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Portia Burton
          </h1>
          
          {/* Tagline */}
          <p className="text-lg text-gray-600 text-center">
            Real World Automation
          </p>
          
          {/* Social Media Circles */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.youtube.com/@thenewmainstreet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/thenewmainstr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Right column (60%) */}
      <div className="flex-1 bg-gray-50">
        {/* Add content here */}
      </div>
    </div>
  );
}
