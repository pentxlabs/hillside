// Google Reviews API Configuration
const GOOGLE_REVIEWS_CONFIG = {
  // Replace with your actual Google Place ID
  placeId: 'YOUR_GOOGLE_PLACE_ID',
  // Replace with your actual Google API Key
  apiKey: 'YOUR_GOOGLE_API_KEY',
  // API endpoint
  apiUrl: 'https://maps.googleapis.com/maps/api/place/details/json'
};

// Dummy reviews data (will be replaced with actual Google Reviews API data)
const DUMMY_REVIEWS = [
  {
  id: 1,
  author_name: "Sanduni Perera",
  rating: 5,
  text: "Exceptional service and a truly beautiful place! The staff were so polite and welcoming, and every little detail was well taken care of. Highly recommend to anyone visiting Sri Lanka!",
  time: 1704067200,
  profile_photo_url: "https://ui-avatars.com/api/?name=Sanduni+Perera&background=c9a962&color=fff"
},
{
  id: 2,
  author_name: "Nuwan Fernando",
  rating: 5,
  text: "Our wedding at HillSide was absolutely perfect. The team handled everything with great professionalism and made the whole event stress-free and memorable.",
  time: 1703462400,
  profile_photo_url: "https://ui-avatars.com/api/?name=Nuwan+Fernando&background=c9a962&color=fff"
},
{
  id: 3,
  author_name: "Dilini Jayawardena",
  rating: 5,
  text: "Had a wonderful family holiday! The kids really enjoyed the pool and the garden area. The food and hospitality were amazing. Definitely planning to come again!",
  time: 1702857600,
  profile_photo_url: "https://ui-avatars.com/api/?name=Dilini+Jayawardena&background=c9a962&color=fff"
},
{
  id: 4,
  author_name: "Ruwan Silva",
  rating: 5,
  text: "Excellent service station! Fast, reliable, and reasonably priced. The staff were friendly and clearly knew what they were doing. Highly recommend!",
  time: 1702252800,
  profile_photo_url: "https://ui-avatars.com/api/?name=Ruwan+Silva&background=c9a962&color=fff"
},
{
  id: 5,
  author_name: "Tharushi De Alwis",
  rating: 5,
  text: "Beautiful villas with amazing views of the hills. The management team was very responsive and helpful throughout our stay. Totally worth it!",
  time: 1701648000,
  profile_photo_url: "https://ui-avatars.com/api/?name=Tharushi+De+Alwis&background=c9a962&color=fff"
}
];

export { GOOGLE_REVIEWS_CONFIG, DUMMY_REVIEWS };
