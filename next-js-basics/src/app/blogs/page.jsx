import Link from 'next/link';
import React from 'react';

const blogData = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    description:
      "Exploring the potential and challenges of artificial intelligence in the healthcare industry.",
    category: "Technology",
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations for 2024",
    description:
      "A guide to the most popular and exciting travel destinations for the upcoming year.",
    category: "Travel",
  },
  {
    id: 3,
    title: "Healthy Eating on a Budget",
    description:
      "Tips and tricks for maintaining a healthy diet without breaking the bank.",
    category: "Health",
  },
  {
    id: 4,
    title: "Mastering the Art of Minimalism",
    description: "How to declutter your life and live more with less.",
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Investing 101: A Beginner's Guide",
    description:
      "An introduction to the basics of investing and building a strong financial future.",
    category: "Finance",
  },
  {
    id: 6,
    title: "The Ultimate Guide to Home Gardening",
    description:
      "Everything you need to know to start and maintain a thriving home garden.",
    category: "Home & Garden",
  },
  {
    id: 7,
    title: "The History and Evolution of Video Games",
    description:
      "A journey through the history of video games, from their origins to the present day.",
    category: "Entertainment",
  },
  {
    id: 8,
    title: "Effective Communication Skills for Leaders",
    description:
      "Strategies and techniques for improving communication skills in leadership roles.",
    category: "Business",
  },
  {
    id: 9,
    title: "Sustainable Fashion: Making Eco-Friendly Choices",
    description:
      "A look at the growing trend of sustainable fashion and how to make eco-friendly clothing choices.",
    category: "Fashion",
  },
  {
    id: 10,
    title: "The Benefits of Yoga for Mental Health",
    description:
      "Exploring the positive impact of yoga on mental well-being and stress relief.",
    category: "Health",
  },
];




const page = () => {
    return (
      <div className="p-10">
        <div className="flex flex-col gap-5 ">
          {blogData?.map((data) => (
            <div
              className="flex border-2 border-gray-500 p-5 text-left items-start rounded-xl flex-col gap-1"
              key={data.id}
            >
              <h1 className="text-blue-500 text-2xl font-bold ">
                {data.title}
              </h1>
              <h2>{data.category}</h2>
              <button className="bg-gray-200 text-black p-2 font-semibold mt-4 rounded-full">
                <Link href={`/blogs/${data.id}`}>View Details</Link>
              </button>
              {/* // to create a dynamic route use third bracket to name the folder
              []. The folder should be within the parent folder from where the
              route call is made */}
            </div>
          ))}
        </div>
      </div>
    );
};

export default page;