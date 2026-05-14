import { siteData } from "./siteData";

export const workItems = [
  {
    slug: "houspire-interior-design",
    projectName: "Houspire",
    category: "INTERIOR DESIGN PLATFORM",
    client: "Houspire",
    image: siteData.work.projects.houspire.main,
    detailImage: siteData.work.projects.houspire.detail,
    description: "Houspire is a revolutionary interior design platform that combines state-of-the-art 3D visualization with a curated marketplace of trusted professionals. Our goal was to eliminate the ambiguity and stress traditionally associated with home renovation, providing homeowners with a transparent, fast, and high-quality design experience.",
    excerpt: "One of India's fastest-growing interior design platforms offering photorealistic 3D designs and verified vendor connections.",
    images: [siteData.work.projects.houspire.detail],
    liveLink: "https://houspire.ai",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "AWS"],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "The interior design industry in India has long been plagued by a lack of transparency, unpredictable timelines, and a fragmented market of unverified contractors. Homeowners often find it difficult to visualize their future spaces and manage budgets effectively, leading to dissatisfaction and cost overruns.",
          "Houspire approached us to build a digital ecosystem that would bridge the gap between imagination and execution. They needed a platform that could deliver high-fidelity designs rapidly while maintaining a reliable network of execution partners."
        ]
      },
      {
        type: "imageText",
        heading: "The Digital Solution",
        image: siteData.work.projects.houspire.detail,
        imageAlt: "Houspire Interface",
        paragraphs: [
          "We developed a robust web application using Next.js and Node.js that serves as a central hub for homeowners and designers. The platform features an intuitive interface where users can browse design concepts, request customized 3D visualizations, and receive detailed itemized quotes within 48-72 hours.",
          "By integrating a sophisticated budget planning tool, we empowered users to see the real-time financial impact of their design choices, ensuring complete cost transparency from start to finish."
        ]
      },
      {
        heading: "What We Deliver",
        paragraphs: [
          "Our comprehensive design delivery model ensures that every homeowner gets exactly what they need for a successful renovation."
        ],
        bullets: [
          "Photorealistic 3D Interior Designs: High-quality realistic visualizations that help clients experience their future home before implementation.",
          "Transparent Budget Planning: Detailed cost breakdowns for furniture, materials, labor, and décor to maintain complete financial clarity.",
          "Verified Vendor Connections: Access to trusted professionals including interior designers, contractors, carpenters, and modular kitchen experts.",
          "Fast & Efficient Service: Quick turnaround time with customized interior concepts delivered within 48–72 hours."
        ]
      },
      {
        heading: "Technology Powering Houspire",
        paragraphs: [
          "To handle the intensive image processing and real-time budget calculations, we built a scalable cloud infrastructure on AWS.",
          "The frontend utilizes Tailwind CSS for a responsive, modern aesthetic, while the backend is powered by a high-performance PostgreSQL database and Redis for fast data retrieval."
        ],
        bullets: [
          "Frontend: Next.js (React), Tailwind CSS",
          "Backend: Node.js, Express.js",
          "Database: PostgreSQL, Redis",
          "Infrastructure: Docker, Nginx",
          "Cloud: AWS (EC2, S3, RDS)",
          "Payment: Razorpay Integration"
        ]
      }
    ]
  },
  {
    slug: "ask-nani",
    projectName: "Ask Nani",
    category: "MARKETPLACE & MANAGEMENT",
    client: "Ask Nani",
    image: siteData.work.projects.askNani.main,
    detailImage: siteData.work.projects.askNani.detail,
    description: "Ask Nani is a comprehensive childcare ecosystem that redefines how parents find and manage daycare services. The platform serves a dual purpose: a discovery marketplace for parents and a powerful management ERP for daycare providers, ensuring safety, transparency, and operational excellence in early childhood education.",
    excerpt: "A dual-sided platform for automated daycare enrollment, staff scheduling, and seamless parent-provider communication.",
    images: [siteData.work.projects.askNani.detail],
    liveLink: "https://asknani-frontend-omega.vercel.app/",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Vercel", "AWS", "Google Authentication", "JWT Authentication"],
    sections: [
      {
        heading: "Reimagining Childcare Management",
        paragraphs: [
          "In the fast-paced modern world, finding a reliable daycare is a major hurdle for parents. Conversely, daycare centers often struggle with manual attendance, complex scheduling, and maintaining clear communication lines with parents. Ask Nani was conceived to solve these structural inefficiencies through automation and smart design.",
          "We built a platform that handles everything from the initial search to daily operational tracking, providing a secure and organized environment for children to thrive."
        ]
      },
      {
        type: "imageText",
        heading: "Unified Marketplace & ERP",
        image: siteData.work.projects.askNani.detail,
        imageAlt: "Ask Nani Platform",
        paragraphs: [
          "The solution consists of two integrated modules. For parents, it's a mobile-responsive marketplace to discover, compare, and enroll in daycares. For administrators, it's a full-scale ERP that manages staff shifts, child attendance, and capacity in real-time.",
          "Security was our top priority. We implemented rigorous authentication protocols and real-time notification systems to keep parents updated on their child's status throughout the day."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Daycare Marketplace Platform: Parents can search and explore trusted daycare providers based on location, availability, and service offerings.",
          "Automated Registration & Enrollment: The platform automates the complete registration process with digital forms, slot management, and admission tracking.",
          "Smart Slot & Capacity Management: Daycare providers can manage available seats and monitor occupancy levels through a centralized system.",
          "Staff Scheduling & Attendance Tracking: Real-time attendance systems and automated staff scheduling for efficient workforce management.",
          "Parent Communication System: Instant notifications, alerts, and attendance updates delivered directly through the platform.",
          "Secure Authentication: Integrated Google Authentication and JWT-based security systems for safe user management."
        ]
      },
      {
        heading: "Business Impact",
        bullets: [
          "Simplified daycare discovery and booking process",
          "Reduced administrative workload through automation",
          "Improved communication between parents and daycare providers",
          "Better staff coordination and operational management",
          "Increased transparency and customer trust"
        ]
      }
    ]
  },
  {
    slug: "forever-security",
    projectName: "Forever Security",
    category: "ERP SYSTEM",
    client: "Forever Security",
    image: siteData.work.projects.foreverSecurity.main,
    detailImage: siteData.work.projects.foreverSecurity.detail,
    description: "Forever Security is a robust, enterprise-grade ERP system designed specifically for the security services industry. It digitizes the entire operational lifecycle—from guard deployment and shift scheduling to real-time incident reporting and automated payroll processing—eliminating the need for manual logs and fragmented communication.",
    excerpt: "Advanced security management platform that automates shift rosters, incident tracking, and billing for large-scale security firms.",
    images: [siteData.work.projects.foreverSecurity.detail],
    liveLink: "https://app.foreversecurity.in/login",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "AWS EC2", "AWS RDS", "AWS S3", "Twilio", "WhatsApp API", "Docker", "PM2"],
    sections: [
      {
        heading: "Operational Excellence in Security",
        paragraphs: [
          "Security agencies manage large workforces across multiple locations, often leading to accountability gaps and payroll errors. Forever Security needed a system that could scale with their growth while providing micro-level visibility into every guard's performance and every incident reported on the field.",
          "Our team developed a centralized command center that integrates field-level reporting with office-level management, ensuring that nothing goes unmonitored."
        ]
      },
      {
        type: "imageText",
        heading: "Smart Scheduling & Reporting",
        image: siteData.work.projects.foreverSecurity.detail,
        imageAlt: "Forever Security Dashboard",
        paragraphs: [
          "The ERP features a smart rostering engine that automatically assigns guards based on availability and site requirements. Guards can submit incident reports directly through a mobile interface, including photo evidence and timestamps, which are immediately visible to supervisors.",
          "By integrating Twilio and the WhatsApp API, we ensured that critical alerts and shift updates reach the workforce instantly, significantly reducing response times."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Complete Guard Management: Manages guard profiles, availability, assignments, and performance history from a centralized dashboard.",
          "Automated Shift Scheduling: Create automated rosters, assign shifts, manage replacements, and handle swaps without manual coordination.",
          "Real-Time Incident Reporting: Guards can instantly submit reports with timestamps, evidence uploads, and detailed descriptions.",
          "Payroll & Billing Management: Automates payroll tracking, invoice generation, and payment monitoring for clients.",
          "Communication & Notification System: Integrated WhatsApp API, Twilio, and SMTP for automated operational alerts.",
          "Admin Dashboard & Analytics: Complete oversight through analytics dashboards, attendance reports, and workforce monitoring."
        ]
      }
    ]
  },
  {
    slug: "the-gvoice-pos",
    projectName: "The GVoice",
    category: "CLOUD POS SYSTEM",
    client: "The GVoice",
    image: siteData.work.projects.theGvoice.main,
    detailImage: siteData.work.projects.theGvoice.detail,
    description: "The GVoice POS is a high-performance, cloud-native point of sale solution designed for the demands of modern retail. Built to support multi-outlet operations with real-time inventory synchronization, it provides business owners with a unified view of their sales while offering staff a lightning-fast billing interface that works even offline.",
    excerpt: "Modern cloud POS with multi-device sync, offline billing, and real-time inventory tracking for multi-outlet retail businesses.",
    images: [siteData.work.projects.theGvoice.detail],
    liveLink: "https://pos.gvoice.app/",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "AWS", "Vercel", "Service Worker", "Docker"],
    sections: [
      {
        heading: "Next-Gen Retail Operations",
        paragraphs: [
          "Retailers today face the challenge of managing inventory across multiple channels and locations. Traditional POS systems are often slow, tethered to local servers, and prone to data loss during internet outages. The GVoice POS was engineered to eliminate these pain points by leveraging cloud technology and Service Workers for a resilient, 'offline-first' experience.",
          "Our goal was to create a system that is as fast as a desktop app but as accessible as a web page, allowing retailers to scale from a single shop to a national chain with ease."
        ]
      },
      {
        type: "imageText",
        heading: "Cloud Sync & Offline Reliability",
        image: siteData.work.projects.theGvoice.detail,
        imageAlt: "GVoice POS Tablet View",
        paragraphs: [
          "The core of the system is a sophisticated synchronization engine. It allows billing to continue uninterrupted during connectivity drops, automatically syncing transactions once the connection is restored. The inventory module provides real-time updates across all branches, preventing stockouts and over-selling.",
          "The intuitive touch-optimized interface was designed based on extensive feedback from retail staff, focusing on reducing the number of clicks required to complete a transaction."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Smart Billing System: Supports fast checkout with barcode scanning, instant search, and optimized billing workflows.",
          "Real-Time Inventory Management: Monitor stock availability, receive low-stock alerts, and automate updates across locations.",
          "Advanced Sales Reporting: Interactive dashboards providing daily, weekly, and monthly data-driven insights.",
          "Multi-Device Synchronization: Seamless sync across desktops, tablets, and mobiles with offline support.",
          "Cloud-Based Retail Operations: Secure data storage, accessibility, and centralized management for multiple outlets.",
          "Offline Mode Support: Ensures uninterrupted billing and transaction handling even during internet outages."
        ]
      }
    ]
  },
  {
    slug: "akhil-industry",
    projectName: "Akhil Industry",
    category: "BUSINESS WEBSITE",
    client: "Akhil Industry",
    image: siteData.work.projects.akhilIndustry.main,
    detailImage: siteData.work.projects.akhilIndustry.detail,
    description: "Akhil Industry required a digital presence that matched their reputation for industrial excellence. We designed and developed a professional corporate website that showcases their manufacturing capabilities, specialized services, and industrial infrastructure, providing a powerful platform for B2B engagement and global outreach.",
    excerpt: "Professional industrial corporate website showcasing manufacturing expertise and high-capacity service portfolios.",
    images: [siteData.work.projects.akhilIndustry.detail],
    liveLink: "https://akhil.gohilinfotech.com/",
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "Industrial Branding in the Digital Age",
        paragraphs: [
          "For industrial companies, a website is more than just an online brochure; it's a tool for building trust with large-scale clients and partners. Akhil Industry needed a site that looked professional on every device and effectively communicated the scale of their operations.",
          "We focused on a clean, corporate aesthetic that highlights high-resolution industrial photography and technical specifications, ensuring that potential partners can quickly find the information they need."
        ]
      },
      {
        type: "imageText",
        heading: "Service Showcase & Inbound Leads",
        image: siteData.work.projects.akhilIndustry.detail,
        imageAlt: "Akhil Industry Industrial Section",
        paragraphs: [
          "The website features specialized sections for various industrial services, each optimized for search engines to attract qualified B2B leads. We integrated a streamlined inquiry system that allows potential clients to request quotes and technical data sheets directly from the service pages.",
          "The responsive design ensures that engineers and procurement officers can access the site from the factory floor or the office with equal ease."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Professional Corporate Presentation: A clean interface reflecting industrial professionalism and expertise.",
          "Service & Expertise Showcase: Highlights service portfolio, technical capabilities, and business strengths.",
          "Responsive User Experience: Optimized for all platforms to ensure smooth accessibility.",
          "Client Inquiry & Contact System: Integrated forms for direct business connection.",
          "Optimized Website Structure: Designed for easy navigation and fast loading speeds."
        ]
      }
    ]
  },
  {
    slug: "starx-cleaning",
    projectName: "StarX Cleaning",
    category: "SERVICE WEBSITE",
    client: "StarX Cleaning",
    image: siteData.work.projects.starxCleaning.main,
    detailImage: siteData.work.projects.starxCleaning.detail,
    description: "StarX Cleaning is a modern, service-oriented platform that simplifies the process of booking professional cleaning solutions. From residential deep cleaning to large-scale commercial maintenance, the website provides a seamless user journey that emphasizes hygiene, reliability, and eco-friendly practices.",
    excerpt: "Conversion-focused service platform for residential and commercial cleaning with integrated booking and eco-friendly branding.",
    images: [siteData.work.projects.starxCleaning.detail],
    liveLink: "https://starxcleaning.com",
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "A Fresh Approach to Service Booking",
        paragraphs: [
          "The cleaning industry is highly competitive, and first impressions are everything. StarX Cleaning needed a website that felt 'clean' literally and figuratively. They required a platform that could clearly categorize their diverse services and make the booking process as frictionless as possible for busy homeowners and facility managers.",
          "We designed a bright, airy interface that uses vibrant visuals and clear typography to build immediate trust with visitors."
        ]
      },
      {
        type: "imageText",
        heading: "Trust & Accessibility",
        image: siteData.work.projects.starxCleaning.detail,
        imageAlt: "StarX Cleaning Booking Interface",
        paragraphs: [
          "By highlighting their commitment to eco-friendly products and certified professionals, we helped StarX Cleaning differentiate themselves in the market. The integrated inquiry forms are strategically placed to convert visitors into leads at multiple points in the user journey.",
          "The site's performance was optimized for mobile devices, recognizing that many residential users book services while on the go."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Residential & Commercial Cleaning Showcase: Presents wide range of solutions from home to customized commercial packages.",
          "Eco-Friendly Cleaning Approach: Highlights environmentally responsible practices and safe cleaning products.",
          "Service Categories: Organized for easy navigation to help users find matching services quickly.",
          "Easy Booking & Inquiry System: Integrated forms for quotations and appointment scheduling.",
          "Professional Branding: Modern layouts and clean typography to establish industry trust.",
          "Fully Responsive Design: Optimized for seamless experience across all screen sizes."
        ]
      }
    ]
  },
  {
    slug: "giant-asia",
    projectName: "Giant Asia",
    category: "CORPORATE SITE",
    client: "Giant Asia",
    image: siteData.work.projects.giantAsia.main,
    detailImage: siteData.work.projects.giantAsia.detail,
    description: "Giant Asia is a corporate powerhouse that needed a digital platform to reflect its vast operations and international presence. We developed a highly structured, informative website that clearly communicates their mission, diverse product range, and business values, serving as a primary touchpoint for global partners and stakeholders.",
    excerpt: "Professional corporate business website with a structured product showcase and international business-focused navigation.",
    images: [siteData.work.projects.giantAsia.detail],
    liveLink: "https://giantasia.gohilinfotech.com/",
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "Communicating Global Excellence",
        paragraphs: [
          "For a company with the scale of Giant Asia, clarity and professionalism are paramount. Their previous digital presence lacked the depth needed to showcase their multi-faceted business units. We were tasked with creating a comprehensive architecture that could house extensive product information while maintaining an intuitive user experience.",
          "The resulting platform uses a corporate-themed design language that emphasizes stability, growth, and international cooperation."
        ]
      },
      {
        type: "imageText",
        heading: "Product & Mission Showcase",
        image: siteData.work.projects.giantAsia.detail,
        imageAlt: "Giant Asia Corporate View",
        paragraphs: [
          "We developed dedicated modules for their core business areas, allowing stakeholders to easily navigate through their mission statements and product catalogs. The professional UI design uses high-quality imagery and structured layouts to establish immediate credibility with international visitors.",
          "The site is fully optimized for speed and accessibility, ensuring a smooth experience for users regardless of their geographic location."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Corporate Brand Presentation: Communicates vision, mission, and values through professional layouts.",
          "Product & Service Showcase: Organized sections highlighting operational capabilities.",
          "Business-Focused Navigation: Simplified content architecture for easy access to information.",
          "Responsive Website Experience: Fully optimized for mobile, tablet, and desktop browsing.",
          "Client Engagement: Integrated inquiry systems for business opportunities and partnerships.",
          "Professional UI: Modern business aesthetics with clean layouts and consistent typography."
        ]
      }
    ]
  },
  {
    slug: "maati-food",
    projectName: "Maati Food",
    category: "GASTRONOMIC IDENTITY",
    client: "Maati Food",
    image: siteData.work.projects.maatiFood.main,
    detailImage: siteData.work.projects.maatiFood.detail,
    description: "Maati Food is a brand that celebrates the authentic flavors of the earth. We designed a visually immersive, food-centric website that captures the brand's culinary philosophy. By blending rich imagery with engaging storytelling, we created a digital experience that allows users to explore specialties and specialties in an appetizing and intuitive way.",
    excerpt: "Visually rich gastronomic platform featuring specialty menus, brand storytelling, and an immersive culinary experience.",
    images: [siteData.work.projects.maatiFood.detail],
    liveLink: "https://maatifoods.gohilinfotech.com/",
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "Capturing the Essence of Taste",
        paragraphs: [
          "Food is an experience, and a food website must reflect that sensory richness. Maati Food wanted a digital platform that felt as authentic and flavorful as their menu. We moved away from generic restaurant templates to create a custom identity that focuses on 'Maati' (Earth) and its connection to traditional culinary wisdom.",
          "The design uses warm tones, high-resolution food photography, and fluid transitions to keep visitors engaged and hungry for more."
        ]
      },
      {
        type: "imageText",
        heading: "An Appetizing Digital Journey",
        image: siteData.work.projects.maatiFood.detail,
        imageAlt: "Maati Food Specialties",
        paragraphs: [
          "We implemented a dynamic menu showcase that allows users to explore dishes through vivid visuals and detailed descriptions. The storytelling sections highlight the brand's commitment to quality ingredients and traditional cooking methods, building a strong emotional connection with the audience.",
          "The mobile-first approach ensures that customers can easily browse the menu and find contact information while planning their next meal."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Complete Food Menu Showcase: Displays categories and featured dishes in a visually appealing format.",
          "Brand Story & Philosophy: Communicates culinary vision and commitment to authentic flavors.",
          "Visual Food Presentation: High-quality visuals implemented to enhance customer engagement.",
          "Easy Ordering Options: Integrated communication systems for quick contact and inquiries.",
          "Mobile-Responsive Experience: Optimized for all screen sizes to ensure smooth navigation.",
          "User-Friendly Navigation: Simplified menus for exploring dishes and services."
        ]
      }
    ]
  },
  {
    slug: "entcare-medical",
    projectName: "EntCare",
    category: "MEDICAL WEBSITE",
    client: "Dr. Aashima Chopra",
    image: siteData.work.projects.entcare.main,
    detailImage: siteData.work.projects.entcare.detail,
    description: "EntCare, led by Dr. Aashima Chopra, provides specialized medical care for ear, nose, and throat conditions. We developed a professional, patient-centric healthcare website that serves as a reliable source of medical information. The platform is designed to build trust through clarity, professional branding, and easy access to treatment details.",
    excerpt: "Trust-based healthcare platform for specialized ENT services with patient education and streamlined appointments.",
    images: [siteData.work.projects.entcare.detail],
    liveLink: "https://entcare.gohilinfotech.com/",
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "Professional Healthcare Branding",
        paragraphs: [
          "In healthcare, a digital presence must prioritize empathy and expertise. Dr. Aashima Chopra needed a website that could explain complex ENT procedures simply while reassuring patients of the quality of care they would receive. We designed a clean, clinical yet welcoming interface that emphasizes medical professionalism.",
          "The site architecture is focused on accessibility, ensuring that patients of all ages can easily find information about treatments and doctor credentials."
        ]
      },
      {
        type: "imageText",
        heading: "Patient Education & Ease of Access",
        image: siteData.work.projects.entcare.detail,
        imageAlt: "EntCare Medical Information",
        paragraphs: [
          "A major part of the project was developing detailed educational content about various ENT conditions and procedures. This not only positions EntCare as an authority in the field but also helps patients make informed decisions about their health. We also integrated a simple, non-intrusive appointment inquiry system to bridge the gap between information and consultation.",
          "The responsive design ensures that patients can access critical healthcare info on their smartphones, which is often their first point of contact."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "ENT Treatment Information: Detailed sections about conditions, procedures, and healthcare solutions.",
          "Doctor Expertise Showcase: Highlights qualifications, specializations, and professional achievements.",
          "Patient-Centered Design: Focuses on accessibility and easy navigation for a clean medical experience.",
          "Appointment Booking System: Integrated forms to simplify scheduling and communication.",
          "Responsive Medical Website: Fully optimized for mobile, tablet, and desktop accessibility.",
          "Professional Healthcare Branding: Establishes trust through modern layouts and clean typography."
        ]
      }
    ]
  },
  {
    slug: "tech-mora",
    projectName: "Tech Mora",
    category: "TECH SOLUTIONS",
    client: "Tech Mora",
    image: siteData.work.projects.techMora.main,
    detailImage: siteData.work.projects.techMora.detail,
    description: "Tech Mora is a digital-first solutions provider that needed a website to showcase its cutting-edge technological strengths. We built a modern, high-fidelity platform that effectively presents their software products, digital services, and technical expertise, positioning them as a leader in the tech innovation space.",
    excerpt: "Technology-focused business platform with a modern UI, high-fidelity technical showcases, and streamlined service navigation.",
    images: [siteData.work.projects.techMora.detail],
    liveLink: "https://techmora.gohilinfotech.com/",
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "Driving Digital Innovation",
        paragraphs: [
          "In the crowded tech services market, a company's own digital presence is the ultimate proof of its capabilities. Tech Mora required a website that felt futuristic, fast, and technically superior. We avoided generic 'tech' aesthetics in favor of a custom design that reflects their unique approach to solving complex digital challenges.",
          "The platform is designed to guide visitors through a logical journey of their expertise, from initial consultation to final product delivery."
        ]
      },
      {
        type: "imageText",
        heading: "A Technical Showcase",
        image: siteData.work.projects.techMora.detail,
        imageAlt: "Tech Mora Technical Interface",
        paragraphs: [
          "We developed a sophisticated portfolio module that highlights their success stories and technical competencies. By using modern UI elements and interactive layouts, we ensured that even complex technical information is presented in an engaging and accessible manner.",
          "The site's architecture is optimized for lead generation, with multiple points of contact for potential clients to start their digital transformation journey."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Digital Services Showcase: Dedicated sections for technology solutions and software expertise.",
          "Technical Capability Presentation: Highlights innovation approach and technical competencies.",
          "Portfolio & Success Stories: Showcases client projects to build credibility and demonstrate expertise.",
          "Responsive User Experience: Delivers seamless browsing across desktops, tablets, and mobiles.",
          "Professional Corporate Design: Modern layouts and visual consistency for digital presence.",
          "Optimized Navigation: Easy-to-use structure for exploring services and projects."
        ]
      }
    ]
  },
  {
    slug: "rapido-force-security",
    projectName: "Rapido Force",
    category: "SECURITY SERVICES",
    client: "Rapido Force",
    image: siteData.work.projects.rapidoForce.main,
    detailImage: siteData.work.projects.rapidoForce.detail,
    description: "Rapido Force Security Services required a professional digital presence integrated with a powerful management backbone. We developed a professional website paired with a custom PHP-based CMS admin panel, allowing their team to manage content, security personnel profiles, and client inquiries without any technical overhead.",
    excerpt: "Professional security services platform with a custom PHP CMS for independent content and workforce management.",
    images: [siteData.work.projects.rapidoForce.detail],
    liveLink: "https://rfs.gohilinfotech.com/",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Custom CMS Admin Panel"],
    sections: [
      {
        heading: "Empowering Security Personnel",
        paragraphs: [
          "Operational agility is key in the security industry. Rapido Force needed a way to update their service offerings and staff credentials in real-time as they secured new contracts. We built a custom-tailored CMS that provides full control over the website's content through a secure, user-friendly dashboard.",
          "This independence allows their non-technical staff to maintain an up-to-date digital presence without relying on external developers for routine updates."
        ]
      },
      {
        type: "imageText",
        heading: "Integrated Management Backend",
        image: siteData.work.projects.rapidoForce.detail,
        imageAlt: "Rapido Force Admin Panel",
        paragraphs: [
          "The custom PHP-based admin panel is the engine that drives the website. It features modules for managing service pages, tracking client inquiries, and updating company news. We focused on a clean, intuitive layout for the admin area to minimize the learning curve for the staff.",
          "The frontend reflects the same professional and secure aesthetic, building trust with potential clients looking for high-quality security solutions."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Security Services Showcase: Presents workforce capabilities through professional layouts.",
          "Custom CMS Admin Panel: Allows administrators to update content easily without technical knowledge.",
          "Independent Content Management: Staff can manage service pages, contacts, and business info.",
          "Professional Business Presentation: Designed to establish trust and credibility for security firms.",
          "Responsive Website Architecture: Adapts seamlessly across desktops, tablets, and smartphones.",
          "Simplified Operational Workflow: Reduces dependency on developers for routine updates."
        ]
      }
    ]
  },
  {
    slug: "divin-spiritual-healing",
    projectName: "Divin Spiritual Healing",
    category: "E-COMMERCE",
    client: "Divin",
    image: siteData.work.projects.divinSpiritual.main,
    detailImage: siteData.work.projects.divinSpiritual.detail,
    description: "Divin Spiritual Healing is an elegant e-commerce platform designed for the holistic wellness market. We built a high-performance online store that handles complex product variants and categories, providing a serene and seamless shopping experience for users seeking spiritual products and healing services.",
    excerpt: "Luxury e-commerce platform for spiritual wellness with smart categorization, product variants, and custom admin management.",
    images: [siteData.work.projects.divinSpiritual.detail],
    liveLink: "https://www.divinspiritualhealing.com/",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Custom Admin Panel"],
    sections: [
      {
        heading: "Elevating the Wellness E-commerce Experience",
        paragraphs: [
          "The spiritual wellness market requires a specific aesthetic—one that is calming, elegant, and deeply intuitive. Divin needed an e-commerce platform that could manage a diverse range of products (from crystals to digital courses) while maintaining a premium brand identity.",
          "We developed a custom e-commerce engine that supports complex product variants, ensuring that users can easily find exactly what they are looking for."
        ]
      },
      {
        type: "imageText",
        heading: "A Seamless Path to Purchase",
        image: siteData.work.projects.divinSpiritual.detail,
        imageAlt: "Divin Spiritual Shopping Experience",
        paragraphs: [
          "The user journey is designed to be frictionless, from the initial category browsing to the final secure checkout. We also built a dedicated admin panel that provides real-time inventory tracking and order management, allowing the Divin team to run their business efficiently.",
          "The mobile-responsive design ensures that customers can explore the store and make purchases from any device, anywhere."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Complete E-Commerce Functionality: Smooth workflow from product browsing to purchase.",
          "Smart Product Categorization: Supports multiple subcategories and variants for better scalability.",
          "Custom Admin Management: Dedicated panel for efficient inventory and order management.",
          "Mobile-Responsive Shopping: Optimized for smartphones, tablets, and desktops.",
          "Secure Backend Architecture: Includes logic for safe handling of product and customer data.",
          "Scalable Website Structure: Designed to support future product expansion."
        ]
      }
    ]
  },
  {
    slug: "novotion-services",
    projectName: "Novotion Services",
    category: "RECRUITMENT SOLUTIONS",
    client: "Novotionservices",
    image: siteData.work.projects.novotion.main,
    detailImage: siteData.work.projects.novotion.detail,
    description: "Novotion Services is a strategic recruitment partner helping organizations in the USA and UK scale their teams. We developed a professional, data-driven platform that highlights their RPO (Recruitment Process Outsourcing) expertise and ability to reduce hiring costs through innovative, technology-led talent acquisition strategies.",
    excerpt: "Strategic RPO and recruitment platform with a corporate international aesthetic and conversion-focused lead generation.",
    images: [siteData.work.projects.novotion.detail],
    liveLink: "https://novotionservices.com/",
    tech: ["Next.js", "Tailwind CSS"],
    sections: [
      {
        heading: "Global Talent Acquisition Platform",
        paragraphs: [
          "In the international recruitment space, credibility is everything. Novotion needed a platform that could appeal to HR directors and executives in major markets like the USA and UK. We focused on a sleek, data-focused design that emphasizes their results-driven methodology.",
          "The platform clearly outlines their various RPO models, allowing potential clients to find the solution that best fits their organizational needs."
        ]
      },
      {
        type: "imageText",
        heading: "Data-Led Recruitment Branding",
        image: siteData.work.projects.novotion.detail,
        imageAlt: "Novotion Recruitment Interface",
        paragraphs: [
          "By using modern design systems and clean user interfaces, we ensured that the message of 'efficiency' and 'data' is conveyed at every touchpoint. We integrated strategic call-to-action elements throughout the site to maximize lead generation from interested organizations.",
          "The platform is built on Next.js for superior performance and SEO, ensuring high visibility for their global recruitment services."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "International Recruitment: Highlights solutions for USA and UK organizations with professional presentation.",
          "Strategic RPO Service Showcase: Explains outsourcing methodology and operational approach.",
          "Data-Driven Hiring: Communicates analytics-based strategies and acquisition expertise.",
          "Professional Corporate Design: Modern layouts and clean structures to establish credibility.",
          "Responsive Website Experience: Ensures smooth navigation across all devices and screen sizes.",
          "Lead Generation: Integrated inquiry systems to help connect with recruitment consultants."
        ]
      }
    ]
  },
  {
    slug: "drink2heal-wellness",
    projectName: "Drink2Heal",
    category: "WELLNESS PLATFORM",
    client: "Drink2Heal",
    image: siteData.work.projects.drink2heal.main,
    detailImage: siteData.work.projects.drink2heal.detail,
    description: "Drink2Heal is a visionary wellness platform that bridges the gap between ancient Vedic wisdom and modern nutritional science. We designed a vibrant, immersive digital experience that educates and inspires users to embrace a more holistic approach to health and vitality through natural, research-backed wellness concepts.",
    excerpt: "Vibrant holistic wellness platform blending traditional Vedic principles with modern health research and immersive UI.",
    images: [siteData.work.projects.drink2heal.detail],
    liveLink: "https://drink2heal.vercel.app/",
    tech: ["Next.js", "Tailwind CSS"],
    sections: [
      {
        heading: "The Intersection of Tradition & Science",
        paragraphs: [
          "The wellness market is flooded with generic advice. Drink2Heal wanted to offer something deeper—a philosophy rooted in timeless Vedic secrets but validated by modern research. We created a design language that reflects this duality: organic yet structured, ancient yet futuristic.",
          "The resulting platform is a content-rich environment where users can learn about the science of vitality while exploring a wide range of natural healing concepts."
        ]
      },
      {
        type: "imageText",
        heading: "A Holistic User Experience",
        image: siteData.work.projects.drink2heal.detail,
        imageAlt: "Drink2Heal Wellness Concept",
        paragraphs: [
          "The interface uses a calming, nature-inspired palette to create an immediate sense of peace and balance. We developed a unique navigation structure that allows users to explore health concepts based on their specific wellness goals.",
          "The mobile-optimized design ensures that users can access wellness wisdom and health routines whenever they need them, promoting a mindful and healthy lifestyle."
        ]
      },
      {
        heading: "Key Features & Functionalities",
        bullets: [
          "Vedic Wellness Integration: Blends traditional health principles with modern research.",
          "Holistic Health Presentation: Focuses on natural vitality, routines, and mind-body balance.",
          "Research-Backed Solutions: Communicates scientifically supported wellness concepts simply.",
          "Modern Wellness UI: Calming interface designed using modern UI principles for peace.",
          "Responsive Cross-Device Accessibility: Optimized for mobile, tablet, and desktop users.",
          "Strong Brand Storytelling: Visual content and typography used to establish wellness identity."
        ]
      }
    ]
  },
];

export function getAllWorkItems() {
  return workItems;
}

export function getWorkItemBySlug(slug) {
  return workItems.find((item) => item.slug === slug);
}
