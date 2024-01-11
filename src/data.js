import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 1, href: "#about", text: "about" },
  { id: 1, href: "#services", text: "services" },
  { id: 1, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com/Swayam_Patial", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com/Swayam_Patial", icon: "fab fa-twitter" },
  {
    id: 3,
    href: "https://twitter.com/Swayam_Patial",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "january 15th, 2024",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "february 15th, 2024",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "martch 29th, 2024",
    title: "kenya highlight",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: "august 26th, 2024",
    title: "exploring africa",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "africa",
    duration: 7,
    cost: 4500,
  },
  {
    id: 6,
    image: tour6,
    date: "martch 26th, 2024",
    title: "hiden india",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "india",
    duration: 15,
    cost: 4300,
  },
];
