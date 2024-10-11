import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Main = () => {
  const [activeMenus, setActiveMenus] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const menus = [
    { id: 1, name: "All" },
    { id: 2, name: "Startups" },
    { id: 3, name: "Security" },
    { id: 4, name: "AI" },
    { id: 5, name: "Apps" },
    { id: 6, name: "Tech" },
  ];

  const blogs = [
    {
      id: 1,
      title: "Top 10 Strategies for Growing Your Startup in 2024",
      img: "https://images.pexels.com/photos/3183177/pexels-photo-3183177.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Jane Smith",
      publishDate: "07/08/2024",
      blogCategory: "Startups",
    },
    {
      id: 2,
      title: "How to Scale a Startup: Lessons from Successful Entrepreneurs",
      img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Mark Johnson",
      publishDate: "18/04/2024",
      blogCategory: "Startups",
    },
    {
      id: 3,
      title: "5 Common Mistakes Startup Founders Make",
      img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily White",
      publishDate: "05/03/2024",
      blogCategory: "Startups",
    },
    {
      id: 4,
      title: "How to Secure Funding for Your Startup in 2024",
      img: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Davis",
      publishDate: "11/05/2024",
      blogCategory: "Startups",
    },
    {
      id: 5,
      title: "Building a Remote-First Startup: Key Insights",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Alex Green",
      publishDate: "25/07/2024",
      blogCategory: "Startups",
    },
    {
      id: 6,
      title: "The Future of Startups: Innovation in a Post-Pandemic World",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Brown",
      publishDate: "15/09/2024",
      blogCategory: "Startups",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with AWS",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily Brown",
      publishDate: "01/09/2024",
      blogCategory: "Tech",
    },
    {
      id: 3,
      title: "Top 10 Tech Innovations to Watch in 2025",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Alex Wilson",
      publishDate: "12/12/2024",
      blogCategory: "Tech",
    },
    {
      id: 4,
      title: "Why Cloud Computing is the Future of Tech",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Chris Lee",
      publishDate: "19/10/2024",
      blogCategory: "Tech",
    },
    {
      id: 5,
      title: "How 5G is Transforming the Technology Landscape",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Amy White",
      publishDate: "22/06/2024",
      blogCategory: "Tech",
    },
    {
      id: 6,
      title: "The Rise of Quantum Computing in 2024",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Michael Brown",
      publishDate: "05/04/2024",
      blogCategory: "Tech",
    },
    {
      id: 1,
      title: "How to Secure Your Data in the Age of Cyber Threats",
      img: "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Michael Lee",
      publishDate: "22/06/2024",
      blogCategory: "Security",
    },
    {
      id: 2,
      title: "The Top Cybersecurity Threats in 2024",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Laura Kim",
      publishDate: "11/08/2024",
      blogCategory: "Security",
    },
    {
      id: 3,
      title: "Best Practices for Securing Cloud Infrastructure",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Chris Parker",
      publishDate: "03/07/2024",
      blogCategory: "Security",
    },
    {
      id: 4,
      title: "How AI is Revolutionizing Cybersecurity",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Kim",
      publishDate: "25/09/2024",
      blogCategory: "Security",
    },
    {
      id: 5,
      title: "The Importance of Encryption in 2024",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Anna Gray",
      publishDate: "14/11/2024",
      blogCategory: "Security",
    },
    {
      id: 6,
      title: "How to Build a Strong Cybersecurity Strategy",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily Scott",
      publishDate: "06/02/2024",
      blogCategory: "Security",
    },
    {
      id: 1,
      title: "How AI is Changing the Healthcare Industry",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Dr. Sarah Miller",
      publishDate: "20/09/2024",
      blogCategory: "AI",
    },
    {
      id: 2,
      title: "Top AI Trends to Watch in 2025",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "John Roberts",
      publishDate: "05/06/2024",
      blogCategory: "AI",
    },
    {
      id: 3,
      title: "AI-Powered Tools for Enhancing Productivity",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Chris Wilson",
      publishDate: "12/12/2024",
      blogCategory: "AI",
    },
    {
      id: 4,
      title: "The Role of AI in Autonomous Vehicles",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Amy Johnson",
      publishDate: "01/10/2024",
      blogCategory: "AI",
    },
    {
      id: 5,
      title: "Exploring the Ethical Implications of AI",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Michael Brown",
      publishDate: "18/02/2024",
      blogCategory: "AI",
    },
    {
      id: 6,
      title: "AI in Education: Personalized Learning Solutions",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily White",
      publishDate: "09/11/2024",
      blogCategory: "AI",
    },
    {
      id: 1,
      title: "Mobile App Development Trends to Watch in 2025",
      img: "https://images.pexels.com/photos/6078128/pexels-photo-6078128.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Connor",
      publishDate: "10/12/2024",
      blogCategory: "Apps",
    },
    {
      id: 2,
      title: "The Best Apps for Entrepreneurs in 2024",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "John Smith",
      publishDate: "07/11/2024",
      blogCategory: "Apps",
    },
    {
      id: 3,
      title: "How to Develop Cross-Platform Apps with React Native",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily Green",
      publishDate: "21/03/2024",
      blogCategory: "Apps",
    },
    {
      id: 4,
      title: "Enhancing User Experience in Mobile Apps",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Chris White",
      publishDate: "11/05/2024",
      blogCategory: "Apps",
    },
    {
      id: 5,
      title: "Top 5 Mobile App Development Tools in 2024",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Laura Kim",
      publishDate: "04/06/2024",
      blogCategory: "Apps",
    },
    {
      id: 6,
      title: "How Augmented Reality is Shaping the Future of Mobile Apps",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Lee",
      publishDate: "16/09/2024",
      blogCategory: "Apps",
    },
  ];

  const news = [
    {
      id: 1,
      title: "The Evolution of Startups: Lessons from Silicon Valley",
      newsCategory: "Startups",
    },
    {
      id: 2,
      title: "Top 5 Security Practices to Safeguard Your Business",
      newsCategory: "Security",
    },
    {
      id: 3,
      title: "How AI is Revolutionizing Healthcare in 2024",
      newsCategory: "AI",
    },
    {
      id: 4,
      title: "The Future of Mobile Apps: Trends to Watch",
      newsCategory: "Apps",
    },
    {
      id: 5,
      title: "Tech Innovations: What to Expect in the Next Decade",
      newsCategory: "Tech",
    },
    {
      id: 6,
      title: "The Rise of AI Startups: Opportunities and Challenges",
      newsCategory: "Startups",
    },
  ];

  const filteredBlogs =
    activeMenus === 1
      ? blogs
      : blogs.filter(
          (blog) => blog.blogCategory === menus[activeMenus - 1].name
        );

  const filteredNews =
    activeMenus === 1
      ? news
      : news.filter(
          (newItem) => newItem.newsCategory === menus[activeMenus - 1].name
        );

  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.ceil(totalBlogs / itemsPerPage);
  const indexLastPageItem = currentPage * itemsPerPage;
  const indexFirstPageItem = indexLastPageItem - itemsPerPage;
  const currentPages = filteredBlogs.slice(
    indexFirstPageItem,
    indexLastPageItem
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="lg:px-40 md:px-20 px-5 bg-white min-h-screen mb-14">
      <div className="flex justify-center items-center pt-5 mb-4">
        <ul className="flex lg:space-x-20 space-x-3">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className={`text-base font-lora cursor-pointer ${
                activeMenus === menu.id ? "text-orange-600" : "text-gray-700"
              }`}
              onClick={() => {
                setActiveMenus(menu.id);
                setCurrentPage(1);
              }}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-b-2 mb-8"></div>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col items-center w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {currentPages.map((blog, id) => (
              <div key={id} className="border p-5 shadow-lg cursor-pointer">
                <img
                  src={blog.img}
                  alt={`Blog${id + 1}`}
                  className="w-full h-40 object-cover mb-2"
                />
                <div className="text-sm w-full mb-2">{blog.title}</div>
                <div className="flex items-center space-x-2 mb-2">
                  <FaUser className="text-base" />
                  <p className="text-base"> {blog.author}</p>
                </div>
                <p className="text-sm text-gray-500">
                  Published {blog.publishDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:w-4/12 w-full lg:pl-10 mt-8 lg:mt-0">
          <h1 className="text-xl font-bold mb-4">Latest News</h1>
          {filteredNews.map((newItem, id) => (
            <div key={id} className="mb-2">
              <p className="text-sm text-gray-600 mb-3">{newItem.title}</p>

              <div className="flex items-center space-x-2 mb-4">
                <p>Read More</p>
                <FaArrowRightLong className="mr-2 text-black" />
              </div>

              <div className="border-b-2 mb-4"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-center space-x-4 items-center pt-14">
        <p
          className={`text-base cursor-pointer ${
            currentPage === 1 ? "text-gray-500 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPage}
        >
          Previous
        </p>
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index + 1}
            className={`border px-3 py-1 cursor-pointer ${
              currentPage === index + 1 ? "bg-orange-600" : ""
            }`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
        <p
          className={`text-base cursor-pointer ${
            currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPage}
        >
          Next
        </p>
      </div>
    </section>
  );
};

export default Main;
