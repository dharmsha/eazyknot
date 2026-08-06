// pages/internship/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface Internship {
  title: string;
  slug: string;
  image: string;
  alt: string;
  badge: string;
  duration: string;
  category: string;
  description: string;
  tags: string[];
  includes: string;
  validity: string;
  features: string[];
  certificate: boolean;
  linkedin: boolean;
}

const internships: Internship[] = [
  {
    title: 'Full-Stack Developer',
    slug: 'full-stack-developer',
    image: '/image/fullstack.webp',
    alt: 'Full-Stack Developer internship',
    badge: '⭐ live projects',
    duration: '2 months',
    category: 'EzyKnot Careers · Full-Stack Internship',
    description: 'Learn both Front End (HTML, CSS, JavaScript, React) & Back End (server, database, APIs) fundamentals. Build complete, real-world web applications.',
    tags: ['Frontend + Backend', 'React', 'APIs', 'Database'],
    includes: 'Notes, Videos, Tests, Workshop, Real Life Project',
    validity: '2 Months',
    features: ['FAQ', 'Testimonials', 'Coupon Code'],
    certificate: true,
    linkedin: true,
  },
  {
    title: 'HR / Operations',
    slug: 'hr-operations',
    image: '/image/hrint.webp',
    alt: 'HR Operations internship',
    badge: '🧑‍💼 operations',
    duration: '2 months',
    category: 'EzyKnot Careers · HR Operations',
    description: 'Learn HR fundamentals: recruitment, onboarding & coordination. Understand core operations tasks — scheduling, documentation & process management.',
    tags: ['Recruitment', 'Onboarding', 'MIS'],
    includes: 'Notes, Videos, Tests, Workshop, Real Life Project',
    validity: '2 Months',
    features: ['FAQ', 'Testimonials', 'Coupon Code'],
    certificate: true,
    linkedin: true,
  },
  {
    title: 'Video Editor',
    slug: 'video-editor',
    image: '/image/videoed.webp',
    alt: 'Video Editor internship',
    badge: '🎬 reels & content',
    duration: '2 months',
    category: 'EzyKnot Careers · Video Editing',
    description: 'Learn professional video editing — cutting, transitions, color grading & audio syncing. Create engaging content for YouTube, Instagram & marketing.',
    tags: ['Premiere Pro', 'CapCut', 'Color Grading'],
    includes: 'Notes, Videos, Tests, Workshop, Real Life Project',
    validity: '2 Months',
    features: ['FAQ', 'Testimonials', 'Coupon Code'],
    certificate: true,
    linkedin: true,
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    image: '/image/webdev.webp',
    alt: 'Web Development internship',
    badge: '🌐 full-stack',
    duration: '2 months',
    category: 'EzyKnot Careers · Web Dev',
    description: 'Learn both Front End (HTML, CSS, JavaScript) & Back End fundamentals. Understand how websites are built, connected & deployed end-to-end.',
    tags: ['HTML/CSS', 'JavaScript', 'Backend', 'Database'],
    includes: 'Notes, Videos, Tests, Workshop, Project',
    validity: '2 Months',
    features: ['FAQ', 'Testimonials', 'Coupon Code'],
    certificate: true,
    linkedin: true,
  },
];

const InternshipPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>EzyKnot Careers · Internships</title>
        <meta name="description" content="Launch your career with EzyKnot Careers internships. Full-stack, HR, Video Editor, Web Development — government approved certificates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-10 md:pb-16 bg-slate-50/60 min-h-screen">
        {/* Header - Clean without navbar spacing */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              EzyKnot
            </span>{' '}
            Careers
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto px-4 leading-relaxed">
            Launch your career with industry-aligned internships — build real skills, earn a
            government-approved certificate.
          </p>
        </div>

        {/* Internship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {internships.map((internship) => (
            <div
              key={internship.slug}
              className="bg-white rounded-3xl shadow-[0_20px_35px_-8px_rgba(0,0,0,0.08),0_10px_15px_-6px_rgba(0,0,0,0.02)] overflow-hidden border border-gray-100/80 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 flex flex-col"
            >
              {/* Image Section - Full fill with object-cover */}
              <div className="relative h-90 sm:h-98 md:h-90 lg:h-90 w-full bg-gradient-to-br from-indigo-500 to-sky-40 overflow-hidden">
                <Image
                  src={internship.image}
                  alt={internship.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 150vw, (max-width: 500px) 50vw, (max-width: 1024px) 90vw, 33vw"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-blue-700 shadow-md border border-white/50 z-10">
                  {internship.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 pb-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">{internship.title}</h2>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 rounded-full whitespace-nowrap shrink-0">
                    {internship.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{internship.category}</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">
                  {internship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#f0f4ff] text-[#1e3a8a] text-[10px] sm:text-[11px] font-medium px-2.5 py-1 sm:px-3 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Includes, Validity, Features, and Enroll Button */}
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-3 border-t border-[#e9eef4] bg-slate-50/40 rounded-b-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px] sm:text-xs">
                  <div>
                    <span className="font-semibold text-gray-700">Includes:</span>{' '}
                    <span className="text-gray-600">{internship.includes}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Validity:</span>{' '}
                    <span className="text-gray-600">{internship.validity}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                  {internship.certificate && (
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 sm:px-3 rounded-full text-[10px] sm:text-[11px] font-medium">
                      📜 Govt. Certificate
                    </span>
                  )}
                  {internship.linkedin && (
                    <span className="bg-purple-50 text-purple-700 px-2.5 py-0.5 sm:px-3 rounded-full text-[10px] sm:text-[11px] font-medium">
                      🔗 LinkedIn shareable
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-[10px] sm:text-[11px] text-gray-500">
                  {internship.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-1">
                      <span className="text-green-600">●</span> {feature}
                    </span>
                  ))}
                </div>
                
                {/* Enroll Now Button */}
                <div className="mt-3 sm:mt-4">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Enroll Now</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 sm:h-5 sm:w-5 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center text-xs text-gray-400 border-t border-gray-200/60 pt-6">
          <span className="inline-flex items-center gap-2">
            ✨ EzyKnot Careers — Government Approved Certificate · LinkedIn shareable
          </span>
        </div>
      </main>
    </>
  );
};

export default InternshipPage;