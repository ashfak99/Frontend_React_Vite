// src/data/gymData.js
export const gymInfo = {
  name: "Ultimate Fitness Centre",
  nameSuffix: "Newtown",
  tagline: "Best Gym in Newtown",
  rating: 4.2,
  reviewCount: 317,
  phone: "098361 57157",
  phoneRaw: "919836157157",
  whatsapp: "919836157157",
  email: "gym@example.com", // user se confirm karna
  address:
    "CA-49, Street No.248, CA Block(Newtown), Action Area I, 1 C, Newtown, West Bengal 700107",
  hours: "Open · Closes 10 pm",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Ultimate+Fitness+Centre+Newtown+Kolkata",
  googleReviewLink: "https://g.page/r/", // user se actual link lena
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      title: "Cycling",
      desc: "High-energy indoor cycling sessions to boost stamina and burn calories.",
      icon: "🚴",
    },
    {
      title: "Nutrition Consulting",
      desc: "Personalised diet plans crafted by experts to match your fitness goals.",
      icon: "🥗",
    },
    {
      title: "Personal Training",
      desc: "One-on-one coaching with certified trainers for faster, safer results.",
      icon: "💪",
    },
    {
      title: "Weight Training",
      desc: "Modern equipment and structured programs for strength and muscle gain.",
      icon: "🏋️",
    },
  ],
  aiSummary:
    "People say this gym features quality, well-maintained equipment and a clean space, with many highlighting the knowledgeable and supportive trainers. They also mention the positive environment and reasonable membership costs.",
  reviews: [
    {
      name: "Verified Member",
      rating: 5,
      text: "All in all a great place to workout in the neighbourhood !!",
    },
    {
      name: "Verified Member",
      rating: 5,
      text: "Rest gym environment is good. Nitish also did perfectly his work.",
    },
  ],
  ratingBreakdown: [
    { stars: 5, percent: 62 },
    { stars: 4, percent: 20 },
    { stars: 3, percent: 9 },
    { stars: 2, percent: 5 },
    { stars: 1, percent: 4 },
  ],
};