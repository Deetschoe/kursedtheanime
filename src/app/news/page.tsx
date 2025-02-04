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
      title: "Ad Space 1",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad1"
    },
    {
      title: "Ad Space 2",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad2"
    },
    {
      title: "Ad Space 3",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad3"
    },
    {
      title: "Ad Space 4",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad4"
    },
    {
      title: "Ad Space 5",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad5"
    },
    {
      title: "Ad Space 6",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad6"
    },
    {
      title: "Ad Space 7",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad7"
    },
    {
      title: "Ad Space 8",
      thumbnail: "https://placehold.co/120x80",
      link: "#ad8"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-purple-900 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">KursedNews</Link>
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
              src="https://placehold.co/800x400" 
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

              <p className="mb-4">What makes this investigation particularly concerning are recent revelations about the island's history. Documents obtained through freedom of information requests have revealed that both governments had designated the area as a deep-sea waste disposal site for the past century, believing it to be uninhabited ocean. The quantity and nature of materials deposited there remain classified.</p>

              <blockquote className="border-l-4 border-purple-600 pl-4 italic my-4 text-black">
                "If there really is an isolated society that has developed alongside our modern waste disposal practices, the implications for both anthropology and environmental science are staggering. We need to approach this with extreme caution and respect." - Dr. Sakura Tanaka, Lead Anthropologist
              </blockquote>

              <p className="mb-4">The mysterious island, whose name translates to "Joy Island" in Japanese, has reportedly remained hidden from modern civilization for nearly a millennium. Local legends speak of an autonomous society that developed in complete isolation, creating its own distinct culture and language. The island's apparent resistance to modern detection – surrounded by an unusually dense fog bank that interferes with radio signals, satellite imaging, and GPS systems – has made previous investigations impossible.</p>

              <p className="mb-4">Most disturbing are reports from the families of the missing Akebono Maru crew, who claim to have received strange phone calls consisting only of static and what sounds like distant singing in an unknown language. The last radio transmission from the vessel described "lights in the mist" before all contact was lost.</p>

              <h2 className="text-2xl font-bold mt-6 mb-4 text-black">Related Stories</h2>
              <ul className="space-y-2 mb-6 text-black">
                <li>• The Disappearance of Akebono Maru: A Timeline</li>
                <li>• Deep-Sea Waste Disposal: A Century of Secrets</li>
                <li>• Strange Signals: Analyzing the Mystery Calls</li>
                <li>• Historic Maritime Legends of the Pacific</li>
              </ul>

              <p className="text-sm text-gray-600">Sources: US-Japan Joint Research Committee, Maritime Safety Agency, Freedom of Information Documents</p>
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
                  <a href={ad.link} className="flex space-x-4">
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