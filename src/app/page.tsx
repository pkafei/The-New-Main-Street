import { Avatar } from '@/components/avatar';
import { YouTubeIcon, TwitterIcon, FacebookIcon } from '@/components/social-icons';

// Placeholder for user data - replace with actual data source
const user = {
  avatarUrl: '/portia-avatar.jpg', // Update with actual image path
};

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left column (40%) - Fixed, centered content like stan.store */}
      <div className="w-[40%] bg-white border-r border-gray-100 flex flex-col">
        {/* Logo at top */}
        <div className="p-6 border-b border-gray-100">
          <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-xs">Logo</span>
          </div>
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
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
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
