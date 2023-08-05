"use client"
// https://www.youtube.com/watch?v=Tmkr2kKUEgU
import Nav from './component/nav/page'
import MainContent from './maincontent/page'
import Footer from './component/footer/page'

export default function Home() {
  return (
    <main className="flex scroll-smooth min-h-screen overflow-y-hidden flex-col bg-gradient-to-r from-[#b6dbfc] to-[#e2f2fe]">
      <Nav />
      <MainContent />
      <Footer />
    </main>
  )
}