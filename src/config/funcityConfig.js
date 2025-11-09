const rentalItems = [
  { 
    id: 1, 
    name: "Mickey Mouse Costume", 
    category: "Character Costumes", 
   
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762698624/Gemini_Generated_Image_3vnt2y3vnt2y3vnt_e11krm.png", alt: "Mickey Mouse Costume" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072880/481295115_614839798372615_106114414234888305_n_agckyp.jpg", alt: "Mickey Mouse Costume 2" }
    ], 
    shortDescription: "Premium Mickey Mouse costume for magical birthday celebrations.", 
    fullDescription: "Bring Disney magic to your event with our high-quality Mickey Mouse costume. This professionally crafted costume includes full character head, body suit, gloves, and shoes. Perfect for birthday parties, themed events, and special occasions.", 
    specifications: { size: "One size fits most adults (5'4\" - 6'0\")", material: "Premium plush fabric", weight: "Lightweight and breathable", visibility: "Good vision through mesh inserts" }, 
    features: ["Authentic Disney-style design", "Professional quality construction", "Comfortable padding", "Easy to wear and remove", "Cleaned and sanitized", "Character guide included"], 
    includes: ["Costume maintenance kit", "Character interaction tips", "Backup accessories", "Storage bag"] 
  },
  { 
    id: 2, 
    name: "Snow Man Costume", 
    category: "Character Costumes", 
   
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762697949/Gemini_Generated_Image_cy7bdicy7bdicy7b_wnqp4v.png", alt: "Snow Man Costume" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072841/481235570_614840135039248_8378457060104562252_n_qelcbo.jpg", alt: "Snow Man Costume 2" }
    ], 
    shortDescription: "Premium Snow Man costume for Christmas celebrations.", 
    fullDescription: "Step into the magic of winter with our Premium Snowman Costume, a luxurious and realistic outfit designed to capture the festive spirit of the holidays. Perfect for Christmas parties, winter parades, promotional events, stage performances, or themed photo shoots, this costume transforms you into everyone’s favorite frosty friend with unmatched comfort and quality.", 
    specifications: { size: "One size fits most adults (5'4\" - 6'0\")", material: "Premium plush fabric", weight: "Lightweight and breathable", visibility: "Good vision through mesh inserts" }, 
    features: ["Authentic Disney-style design", "Professional quality construction", "Comfortable padding", "Easy to wear and remove", "Cleaned and sanitized", "Character guide included"], 
    includes: ["Costume maintenance kit", "Character interaction tips", "Backup accessories", "Storage bag"] 
  },
  { 
    id: 3, 
    name: "Pluto Dog Costume", 
    category: "Character Costumes", 
   
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762697946/Gemini_Generated_Image_o2uegdo2uegdo2ue_l0mxun.png", alt: "Pluto Dog Costume" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072860/480709205_614840121705916_7574726900818803633_n_esgk4q.jpg", alt: "Pluto Dog Costume 2" }
    ], 
    shortDescription: "Premium Pluto Dog costume for Children’s events.", 
    fullDescription: "Bring the playful charm of Mickey Mouse’s loyal companion to life with our Premium Pluto Dog Costume. Designed for comfort, authenticity, and fun, this deluxe outfit lets you embody one of Disney’s most beloved characters in true style. Whether it’s for a themed party, parade, cosplay event, or children’s entertainment, this costume delivers high-quality craftsmanship and an instantly recognizable look.", 
    specifications: { size: "One size fits most adults (5'4\" - 6'0\")", material: "Premium plush fabric", weight: "Lightweight and breathable", visibility: "Good vision through mesh inserts" }, 
    features: ["Authentic Disney-style design", "Professional quality construction", "Comfortable padding", "Easy to wear and remove", "Cleaned and sanitized", "Character guide included"], 
    includes: ["Costume maintenance kit", "Character interaction tips", "Backup accessories", "Storage bag"] 
  },
  { 
    id: 4, 
    name: "Sylvester Cat Costume", 
    category: "Character Costumes", 
   
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762697948/Gemini_Generated_Image_iu6341iu6341iu63_jkax5k.png", alt: "Sylvester Cat Costume" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072837/482026848_614839795039282_8890466491571082167_n_n3dryr.jpg", alt: "Sylvester Cat Costume 2" }
    ], 
    shortDescription: "Premium Sylvester Cat costume for Children’s events.", 
    fullDescription: "Step straight into the world of Looney Tunes with our Premium Sylvester Cat Costume, a high-quality, full-body character outfit inspired by the iconic, mischievous feline known for his famous “Sufferin’ succotash!” catchphrase. Designed for maximum comfort, durability, and authenticity, this costume is perfect for stage performances, cosplay events, cartoon-themed parties, mascot appearances, and promotional entertainment.", 
    specifications: { size: "One size fits most adults (5'4\" - 6'0\")", material: "Premium plush fabric", weight: "Lightweight and breathable", visibility: "Good vision through mesh inserts" }, 
    features: ["Authentic Disney-style design", "Professional quality construction", "Comfortable padding", "Easy to wear and remove", "Cleaned and sanitized", "Character guide included"], 
    includes: ["Costume maintenance kit", "Character interaction tips", "Backup accessories", "Storage bag"] 
  },
  { 
    id: 5, 
    name: "Castle Bouncer  Bouncer", 
    category: "Jumping Bouncers", 
     
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072824/474546308_578798398643422_9180716851181885263_n_onsspg.jpg", alt: "Castle Bouncer" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762078616/474476238_578798408643421_3520783128161989183_n_xrf7bx.jpg", alt: "Castle Bouncer 2" },
    ], 
    shortDescription: "Classic inflatable castle perfect for kids' parties and events.", 
    fullDescription: "Our Castle Bouncer is a magical inflatable castle that brings joy to any children's event. Featuring vibrant colors, high walls, and a spacious jumping area, this bouncer can accommodate multiple children safely. Perfect for birthday parties, school events, and community gatherings.", 
    specifications: { dimensions: "15ft x 15ft x 12ft (H)", capacity: "6-8 children", ageRange: "3-12 years", setup: "Requires 20ft x 20ft space" }, 
    features: ["Safety netting on all sides", "Reinforced stitching for durability", "Easy entrance and exit", "Weather-resistant material", "Includes air blower", "Professional setup included"], 
    includes: ["Free delivery within 10km", "Setup and takedown service", "Safety instructions", "Cleaning after event"] 
  },
  { 
    id: 6, 
    name: "Obstacle Course Bouncer", 
    category: "Jumping Bouncers", 
    
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072887/486572845_641176502405611_4456261769862657963_n_urhedr.jpg", alt: "Obstacle Course" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072817/544842142_824952397361353_6296441077019034033_n_pshcxs.jpg", alt: "Obstacle Course 2" }
    ], 
    shortDescription: "Exciting inflatable obstacle course with slides and challenges.", 
    fullDescription: "Transform your event into an adventure zone with our Obstacle Course Bouncer. This impressive inflatable features multiple challenge zones including climbing walls, tunnels, obstacles, and a thrilling slide.", 
    specifications: { dimensions: "35ft x 12ft x 12ft (H)", capacity: "10-12 children", ageRange: "5-14 years", setup: "Requires 40ft x 15ft space" }, 
    features: ["Multiple challenge sections", "Built-in slide", "Climbing wall section", "Tunnel crawl area", "Safety anchors included", "Heavy-duty construction"], 
    includes: ["Premium delivery service", "Professional installation", "Safety briefing", "Emergency repair kit"] 
  },
  { 
    id: 7, 
    name: "kids Paddle Boat", 
    category: "Boat Rides", 
    
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072815/544945644_824952774027982_494915670885764776_n_wqfuyj.jpg", alt: "kids Paddle Boat" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072815/544945644_824952774027982_494915670885764776_n_wqfuyj.jpg", alt: "kids Paddle Boat 2" }
    ], 
    shortDescription: "A kids paddle boat is a compact for safe and fun outdoor water play.", 
    fullDescription: "A kids paddle boat is a small, stable, buoyant craft made for children to enjoy paddling on lakes, calm ponds, or pools. Typically manufactured from durable plastic or high-density polyethylene (HDPE), the hull is sized for children (for example a load capacity of ~ 60 kg in one model) and often includes a pair of hand-paddles or foot pedals so the child can steer and move the boat independently.", 
    specifications: { dimensions: "~ 117 cm × 76 cm × 33 cm (for a single-child model)", capacity: "1-2 children", ageRange: "5-14 years", setup: "Requires 40ft x 15ft space" }, 
    features: ["Multiple challenge sections", "Built-in slide", "Climbing wall section", "Tunnel crawl area", "Safety anchors included", "Heavy-duty construction"], 
    includes: ["Premium delivery service", "Professional installation", "Safety briefing", "Emergency repair kit"] 
  },
  { 
    id: 8, 
    name: "Pool And Pool Slide Bouncer", 
    category: "Jumping Bouncers", 
  
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072904/545160233_824953044027955_3402991048015793932_n_epmq5p.jpg", alt: "Water Slide" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072882/486605019_640960722427189_7114261560232620544_n_mi7o3r.jpg", alt: "Water Slide 2" }
    ], 
    shortDescription: "Refreshing water slide bouncer for summer parties and events.", 
    fullDescription: "Beat the heat with our exciting Water Slide Bouncer! This inflatable combines the fun of a bouncer with a thrilling water slide. Features a large jumping area, climbing section, and a long water slide.", 
    specifications: { dimensions: "25ft x 12ft x 14ft (H)", capacity: "8-10 children", ageRange: "4-14 years", waterConnection: "Standard garden hose" }, 
    features: ["Dual function: bounce and slide", "Built-in water spray system", "Splash pool at bottom", "Non-slip climbing steps", "UV-resistant material", "Safety netting included"], 
    includes: ["Water hose attachment", "Setup and breakdown", "Safety guidelines", "Waterproof ground sheet"] 
  },
  { 
    id: 9, 
    name: "Combo Bouncer & Ball Pit", 
    category: "Jumping Bouncers", 
  
    images: [
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072834/544800041_824953287361264_5911752881741036642_n_ys2phr.jpg", alt: "Combo Bouncer" },
      { url: "https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072818/544899290_824952200694706_8975219707983373325_n_iigfng.jpg", alt: "Combo Bouncer 2" }
    ], 
    shortDescription: "Fun combination of bouncer and colorful ball pit area.", 
    fullDescription: "Double the fun with our Combo Bouncer featuring both a jumping area and a ball pit section! This versatile inflatable keeps children entertained for hours with different play zones.", 
    specifications: { dimensions: "20ft x 15ft x 10ft (H)", capacity: "8-10 children", ageRange: "2-10 years", ballsIncluded: "500 colorful play balls" }, 
    features: ["Dual play zones", "500 soft play balls included", "Divider between sections", "Basketball hoop included", "Easy entry ramp", "Vibrant colors"], 
    includes: ["Colorful play balls", "Air blower", "Installation service", "Sanitization certificate"] 
  },
];

const infoItems = [
  { title: "Flexible Rental", description: "Daily & Weekend Packages", icon: "Clock" },
  { title: "Service Area", description: "Delivery Throughout Region", icon: "MapPin" },
  { title: "Quality Items", description: "Cleaned & Sanitized", icon: "Star" },
  { title: "Free Setup", description: "Professional Installation", icon: "Star" }
];

export { rentalItems, infoItems };
