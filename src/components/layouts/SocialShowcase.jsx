import React from "react";
import { useEffect } from "react";
import Instagram from "../../assets/socialMedia/Instagram.jpg";
import Youtube from "../../assets/socialMedia/Youtube.jpg";
import TikTok from "../../assets/socialMedia/Tiktok.jpg";
import Twitter from "../../assets/socialMedia/Twitter.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const socialPlatforms = [
    
  {
    title: "YouTube Channel",
    statsImage: Youtube,
    description:
      "Catch my latest videos on tech, tutorials, and lifestyle. Subscribe for regular updates!",
    buttonText: "Visit on YouTube",
    link: "https://www.linkedin.com/in/isiah-tuyisenge/",
    bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
  {
    title: "Instagram",
    statsImage: Instagram,
    description:
      "Follow my Instagram for behind-the-scenes, reels, and snapshots of my creative work.",
    buttonText: "Follow on Instagram",
    link: "https://www.instagram.com/_griffin_techs_",
  },
  {
    title: "TikTok",
    statsImage: TikTok,
    description:
      "Follow my TikTok for tech insights, coding tips, and a glimpse into my journey in the world of innovation.",
    buttonText: "Follow on TikTok",
    link: "https://www.tiktok.com/@_griffin_techs_",
  },
  {
    title: "Twitter",
    statsImage: Twitter,
    description:
      "Join the conversation! I share thoughts, insights, and engage with the community on Twitter.",
    buttonText: "Follow on Twitter",
    link: "https://x.com/griffin_ug_",
  },
];

const SocialShowcase = () => {
      useEffect(() => {
        AOS.init({
          once: true,
        })
      });
  return (
    <section className=" py-14 px-6 md:px-32 m-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Explore My Creativity Universe
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Explore my content creation journey across various platforms. Follow
          me to stay updated on my latest projects!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-18">
        {socialPlatforms.map((platform, index) => (
          <div
            key={index}
            className="bg-gray-50 text-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col justify-around "
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {platform.stats ? (
              <div
                className={`p-8 text-center text-white text-3xl font-bold  ${platform.bg}`}
              >
                <p>{platform.stats}</p>
                <p className="text-sm mt-1 font-medium">
                  people tuned in to you
                </p>
              </div>
            ) : (
              <img
                src={platform.statsImage}
                alt={platform.title}
                className="w-full object-cover h-50 rounded-t-xl "
              />
            )}
            <div className="p-6 flex flex-col justify-between flex-grow  ">
              <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {platform.description}
              </p>
              <a
                href={platform.link}
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-center font-semibold transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialShowcase;
