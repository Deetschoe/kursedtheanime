"use client"

import React, { useState } from 'react';
import { X, Menu, Search, User } from 'lucide-react';
import Link from 'next/link';

interface NavLinkProps {
  text: string;
}

const KursedNewsArticle = () => {
  const [visibleAds, setVisibleAds] = useState(new Set([0,1,2,3,4,5,6,7]));

  const handleCloseAd = (adIndex: number) => {
    const newVisibleAds = new Set(visibleAds);
    newVisibleAds.delete(adIndex);
    setVisibleAds(newVisibleAds);
  };

  const ads = [
    {
      title: "Heavy snow in Japan to persist through Sunday, disrupting travel",
      thumbnail: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/01/06/USAT/77492233007-usatsi-25127509.jpg?crop=4895,2755,x0,y254",
      link: "https://www.japantimes.co.jp/news/2025/02/05/japan/heavy-snow-hokuriku/"
    },
    {
      title: "Hirosaki U. Student Developing Toothbrush Made of Plastic",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2025/02/toothbrush.jpg",
      link: "https://japannews.yomiuri.co.jp/society/general-news/20250205-237167/"
    },
    {
      title: "Japan's Nikkei Stock Sheds over 1,000 Points in Morning (UPDATE 1)",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2023/05/tousho.jpg",
      link: "https://japannews.yomiuri.co.jp/business/market/20250203-236674/"
    },
    {
      title: "Object Found in Pipe at Saitama Sinkhole Site; May be Driver's Seat of Truck that Fell into Pit",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2025/02/20250205-OYT1I50085-1.jpg",
      link: "https://japannews.yomiuri.co.jp/society/general-news/20250205-237219/"
    },
    {
      title: "DDOS attacks get more rampid at certain airports fr fr",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2025/02/DDoS-G1.jpg",
      link: "https://japannews.yomiuri.co.jp/politics/defense-security/20250205-236983/"
    },
    {
      title: "Nissan Intends to Terminate Merger Talks with Honda",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2025/02/Nissan-merger.jpg",
      link: "https://japannews.yomiuri.co.jp/business/companies/20250205-237230/"
    },
    {
      title: "Europe is More Awake than Japan to Fiscal Risks; Govt Debt Has Become a 'Boiling Frog' Situation",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2025/02/Political-Pulse-Okada.jpg",
      link: "https://japannews.yomiuri.co.jp/editorial/political-pulse/20250201-236348/"
    },
    {
      title: "Doctor Yellow Test Train to Be Retired as Shinkansen with New Tech to Take Over Rail Inspections",
      thumbnail: "https://japannews.yomiuri.co.jp/wp-content/uploads/2025/02/Pers-Dr-Yellow-running.jpg",
      link: "https://japannews.yomiuri.co.jp/original/perspectives/20250203-236680/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-purple-900 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">NihongoNews</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink text="Latest" />
            <NavLink text="Investigations" />
            <NavLink text="World" />
            <NavLink text="Science" />
            <NavLink text="Subscribe" />
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <User className="w-5 h-5" />
            <Menu className="md:hidden w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="md:col-span-2 text-black">
            <h1 className="text-4xl font-bold mb-4 text-black">BREAKING NEWS: Joint US-Japanese Expedition to Investigate Mysterious Yorokobi Island</h1>
            
            <div className="text-gray-600 mb-4">
              February 4, 2025 - <span className="text-purple-600">127 Comments</span>
            </div>

            <img 
              src="https://media.istockphoto.com/id/1183302920/photo/aerial-view-of-island-and-sea.jpg?s=612x612&w=0&k=20&c=7zMLEX4HNKws1sydMoFItTm5YfOhSQIpR5J4Rl_Pe5E=" 
              alt="Satellite image showing dense fog bank around suspected location of Yorokobi Island"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-sm text-gray-600 mb-6">Satellite imagery showing the mysterious fog bank surrounding the suspected location of Yorokobi Island | Image: US-Japan Joint Research Committee</p>

            <div className="prose max-w-none text-black">
              <p className="mb-4">In an unprecedented move, the Japanese and American governments have jointly announced the formation of an elite five-person research team to investigate the mysterious Yorokobi Island. This landmark decision comes in the wake of the disappearance of the fishing vessel Akebono Maru on January 24th, 2024, when six experienced fishermen vanished after reportedly discovering an uncharted island in the Pacific Ocean.</p>

              <p className="mb-4">The research team consists of five specialists:</p>
              <ul className="list-disc pl-6 mb-4 text-black">
                <li>Dr. Sakura Tanaka - Lead Anthropologist</li>
                <li>Dr. James Morrison - Marine Biologist</li>
                <li>Sarah Chen - Telecommunications Expert</li>
                <li>Captain Michael Rodriguez - Military Specialist</li>
                <li>Dr. Yuki Yamamoto - Environmental Scientist</li>
              </ul>

              <img 
                src="https://i.ibb.co/nMq2vX6T/Screenshot-2025-02-05-at-1-42-39-PM.png" 
                alt="First clear image of Yorokobi Island through the fog"
                className="w-full rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600 mb-4">First clear image of Yorokobi Island captured through advanced fog-penetrating technology | Image: Soony Camera Technologies Inc.</p>

              <p className="mb-4">One of our camera specialists were able to capture this groundbreaking image using new technology developed by Soony Camera Technologies inc., revealing the first clear view of the island through its perpetual fog cover.</p>

              <p className="mb-4">What makes this investigation particularly concerning are recent revelations about the island&apos;s history. Documents obtained through freedom of information requests have revealed that both governments had designated the area as a deep-sea waste disposal site for the past century, believing it to be uninhabited ocean. The quantity and nature of materials deposited there remain classified.</p>

              <blockquote className="border-l-4 border-purple-600 pl-4 italic my-4 text-black">
  &quot;If there really is an isolated society that has developed alongside our modern waste disposal practices, the implications for both anthropology and environmental science are staggering. We need to approach this with extreme caution and respect.&quot; - Dr. Sakura Tanaka, Lead Anthropologist
</blockquote>

<p className="mb-4">The mysterious island, whose name translates to &quot;Joy Island&quot; in Japanese, has reportedly remained hidden from modern civilization for nearly a millennium.</p>

<p className="mb-4">Most disturbing are reports from the families of the missing Akebono Maru crew, who claim to have received strange phone calls consisting only of static and what sounds like distant singing in an unknown language. The last radio transmission from the vessel described &quot;lights in the mist&quot; before all contact was lost.</p>


              <h2 className="text-2xl font-bold mt-6 mb-4 text-black">Related Stories</h2>
              <ul className="space-y-2 mb-6 text-black">
                <li>• The Disappearance of Akebono Maru: A Timeline</li>
                <li>• Deep-Sea Waste Disposal: A Century of Secrets</li>
                <li>• Strange Signals: Analyzing the Mystery Calls</li>
                <li>• Historic Maritime Legends of the Pacific</li>
              </ul>

              <p className="text-sm text-gray-600">Sources: US-Japan Joint Research Committee, Maritime Safety Agency, Freedom of Information Documents, Soony Camera Technologies Inc.</p>
            </div>
          </div>

          {/* Sidebar with Ads */}
          <div className="space-y-4">
            {ads.map((ad, index) => (
              visibleAds.has(index) && (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
                  <button 
                    onClick={() => handleCloseAd(index)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <a href={ad.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex space-x-4"
                  >
                    <img 
                      src={ad.thumbnail}
                      alt={ad.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-black">{ad.title}</h3>
                      <p className="text-xs text-purple-600 mt-1">Sponsored</p>
                    </div>
                  </a>
                </div>
              )
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const NavLink = ({ text }: NavLinkProps) => (
  <Link href="/" className="hover:text-purple-200 transition-colors">
    {text}
  </Link>
);

export default KursedNewsArticle;
