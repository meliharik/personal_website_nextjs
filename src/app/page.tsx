import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import AnimatedBackground from '@/components/AnimatedBackground'

const prisma = new PrismaClient()

async function getBentoItems() {
  const items = await prisma.bentoItem.findMany({
    orderBy: { order: 'asc' },
  })
  return items
}

// İkon bileşeni
const SocialIcon = ({ name }: { name: string | null }) => {
  if (!name) return null;
  
  const icons = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 0z" />
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    spotify: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    medium: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  }
  return icons[name as keyof typeof icons] || null
}

export default async function Home() {
  const items = await getBentoItems()

  return (
    <main className="min-h-screen p-6 bg-black/50 relative flex flex-col">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[350px_1fr] gap-12 flex-grow">
        {/* Sol Profil Bölümü */}
        <div className="flex flex-col items-start md:sticky md:top-24 self-start z-10 py-6 md:py-0">
          <div className="w-[120px] h-[120px] relative rounded-full mb-6 opacity-0 animate-fade-in overflow-hidden">
            <Image
              src="/profile.jpg?v=2"
              alt="Melih Arik"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 opacity-0 animate-slide-up">Melih Arik</h1>
          <p className="text-gray-400 text-lg opacity-0 animate-slide-up-delay-1">
            I've been developing mobile applications for approximately 6 years, and these days, I'm focusing on building products in diverse fields to enhance my software culture. It would be more accurate to say that my most knowledgeable friend, artificial intelligence, and I are developing together.
          </p>
        </div>

        {/* Sağ Grid Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
          {/* App Store ve Google Play Kartları */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* App Store Kartı */}
            <a 
              href="https://apps.apple.com/tr/developer/melih-arik/id1664743894"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl aspect-[2/1] relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] opacity-0 animate-slide-up-delay-1 hover:shadow-2xl hover:shadow-zinc-900/50"
            >
              {/* Arka plan resmi */}
              <Image
                src="/app-store-bg.png"
                alt="App Store Background"
                fill
                className="object-cover object-center"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📱</span>
                  <h3 className="text-2xl font-semibold text-white">App Store</h3>
                </div>
                <p className="text-gray-300 text-base">Discover my iOS applications</p>
              </div>
            </a>

            {/* Google Play Kartı */}
            <a 
              href="https://play.google.com/store/apps/dev?id=4640663689263928767"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl aspect-[2/1] relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] opacity-0 animate-slide-up-delay-1 hover:shadow-2xl hover:shadow-zinc-900/50"
            >
              {/* Arka plan resmi */}
              <Image
                src="/play-store-bg.png"
                alt="Google Play Background"
                fill
                className="object-cover object-center"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🤖</span>
                  <h3 className="text-2xl font-semibold text-white">Google Play</h3>
                </div>
                <p className="text-gray-300 text-base">Discover my Android applications</p>
              </div>
            </a>
          </div>

          {/* Sosyal Medya Kartları */}
          {items.map((item, index) => (
            <a
              key={item.id}
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: `linear-gradient(135deg, ${item.bgcolor}, ${item.bgcolor}ee, ${item.bgcolor}dd)`,
                animationDelay: `${0.2 + index * 0.1}s`
              }}
              className="p-6 rounded-2xl transition-all duration-500 min-h-[140px] hover:scale-[1.04] relative group opacity-0 animate-slide-up hover:shadow-xl"
            >
              {/* Siyah overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl transition-all duration-500 group-hover:bg-black/10" />
              
              {/* İçerik */}
              <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-2px]">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon && (
                    <div className="text-white w-6 h-6">
                      <SocialIcon name={item.icon} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                {item.description && (
                  <p className="text-white/70 text-sm transition-colors duration-500 group-hover:text-white/90">{item.description}</p>
                )}
              </div>
            </a>
          ))}

          {/* Mail Kartı */}
          <a 
            href="mailto:hi@meliharik.dev"
            className="group md:col-span-2 bg-white/5 p-6 rounded-2xl relative overflow-hidden border border-white/20 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-slide-up-delay-3 hover:bg-white/10 hover:border-white/40 hover:shadow-lg"
          >
            <div className="flex items-center justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Contact Me</h3>
                  <p className="text-white/60 text-sm">hi@meliharik.dev</p>
                </div>
              </div>
              <span className="text-white/40 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 max-w-7xl mx-auto w-full border-t border-white/10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span>·</span>
            <span>Built with</span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Next.js
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/meliharik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Source
            </a>
            <span>·</span>
            <a 
              href="https://meliharik.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              meliharik.dev
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
} 