// 'use client'

// import { useEffect, useState } from 'react'
// import { HeaderLogo } from '@/app/ui/header/ui/HeaderLogo'
// import { HeaderNavigation } from '@/app/ui/header/ui/HeaderNavigation'
// import { Hamburger } from '@/app/ui/header/ui/Hamburger'
// import { LanguageSwitcher } from '@/app/ui/header/ui/LanguageSwitcher'

// export const HomeHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header
//       className={`z-50 w-full transition-all duration-300 ${
//         isScrolled ? 'fixed top-0 bg-zinc-900 py-2 shadow-md' : 'absolute top-4 py-6 lg:top-22'
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between px-4">
//         <HeaderLogo />
//         <HeaderNavigation />
//         <div className="flex items-center gap-6 pr-2 lg:hidden">
//           <Hamburger />
//           <LanguageSwitcher />
//         </div>
//       </div>
//     </header>
//   )
// }
