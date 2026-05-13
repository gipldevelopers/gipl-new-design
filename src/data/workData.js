import { siteData } from "./siteData";

export const workItems = [
  {
    slug: "houspire-interior-design",
    projectName: "Houspire",
    category: "INTERIOR DESIGN PLATFORM",
    client: "Houspire",
    image: siteData.work.projects.houspire.main,
    detailImage: siteData.work.projects.houspire.detail,
    description: "Houspire specializes in creating smart, modern, and personalized interior design solutions that simplify the entire home transformation journey.",
    excerpt: "One of India's fastest-growing interior design platforms trusted by thousands of homeowners for transparent and efficient home transformations.",
    images: [siteData.work.projects.houspire.detail],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "AWS"],
    sections: [
      {
        heading: "At Houspire",
        paragraphs: [
          "At Houspire, we specialize in creating smart, modern, and personalized interior design solutions that simplify the entire home transformation journey. Our work focuses on combining innovative technology, creative design expertise, and trusted execution partners to deliver beautiful living spaces quickly and transparently.",
          "We help homeowners visualize their dream interiors through photorealistic 3D designs, enabling them to make confident decisions before execution begins. Every project is carefully planned with detailed itemized budgets to ensure complete cost transparency and eliminate hidden charges.",
          "Our platform connects customers directly with verified and trusted vendors, ensuring quality workmanship, timely delivery, and a hassle-free experience without the risk of scams or unreliable contractors.",
          "With an average delivery timeline of just 48–72 hours, Houspire has become one of India’s fastest-growing interior design platforms trusted by thousands of homeowners."
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
        type: "imageText",
        heading: "Our Expertise",
        image: siteData.work.projects.houspire.detail,
        imageAlt: "Houspire Expertise",
        paragraphs: [
          "We offer specialized design services across various home areas to create a cohesive living environment."
        ],
        bullets: [
          "Living Room Interiors",
          "Modular Kitchen Designs",
          "Bedroom Interiors",
          "Full Home Interior Solutions",
          "Space Planning & Furniture Layouts",
          "Modern & Luxury Interior Concepts"
        ]
      },
      {
        heading: "Why Clients Trust Houspire",
        paragraphs: [
          "Our commitment to quality and transparency has made us a leader in the digital interior design space."
        ],
        bullets: [
          "2,847+ homes designed every month",
          "4.8★ customer rating from 247+ reviews",
          "Affordable design packages starting at ₹499",
          "Reliable, transparent, and scam-free process",
          "Modern technology-driven interior solutions"
        ]
      },
      {
        heading: "Technology Powering Our Work",
        paragraphs: [
          "Houspire uses a modern and scalable technology ecosystem to ensure seamless user experience, fast performance, and secure operations."
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
    description: "Complete daycare provider marketplace and management solution that connects parents with trusted daycare services.",
    excerpt: "A comprehensive platform for automated enrollment, staff scheduling, and parent communication in the childcare industry.",
    images: [siteData.work.projects.askNani.detail],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Vercel", "AWS", "Google Authentication", "JWT Authentication"],
    sections: [
      {
        heading: "At Ask Nani",
        paragraphs: [
          "At Ask Nani, we developed a complete daycare marketplace and daycare management ecosystem that simplifies childcare operations for both parents and daycare providers. The platform was designed to solve the common challenges faced by modern parents in finding trusted daycare services while helping daycare centers manage their operations efficiently through automation.",
          "The platform allows parents to easily discover daycare centers, compare facilities, check availability, complete registrations, and communicate directly with providers through a seamless digital experience. At the same time, daycare administrators gain access to a centralized management system for enrollment handling, attendance monitoring, staff scheduling, and parent communication.",
          "Our solution helps daycare businesses reduce manual work, improve operational efficiency, and deliver a more transparent and organized childcare experience."
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
    description: "Full-scale ERP system built specifically for security service companies that automates guard management and operations.",
    excerpt: "Automates shift scheduling, incident reporting, and payroll, eliminating manual spreadsheets for security firms.",
    images: [siteData.work.projects.foreverSecurity.detail],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "AWS EC2", "AWS RDS", "AWS S3", "Twilio", "WhatsApp API", "Docker", "PM2"],
    sections: [
      {
        heading: "At Forever Security",
        paragraphs: [
          "At Forever Security, we engineered a powerful ERP platform specifically built for security service companies to digitally manage guards, operations, incident reporting, payroll tracking, and workforce coordination from a single centralized system.",
          "Traditional security agencies often rely heavily on spreadsheets, manual attendance records, and disconnected communication channels. Our ERP solution transformed these operations into an automated and scalable digital workflow that improves efficiency, accountability, and operational visibility.",
          "The system enables security agencies to manage guard assignments, monitor attendance, automate scheduling, generate invoices, track payments, and handle incident reports in real-time."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Reduced manual workforce management",
          "Improved guard accountability and reporting",
          "Faster scheduling and operational coordination",
          "Simplified payroll and billing operations",
          "Centralized security business management"
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
    description: "Modern cloud-enabled POS system designed for retail businesses that handles billing and inventory in real-time.",
    excerpt: "Handles multi-device synchronization and sales reporting, perfect for single stores or multiple outlets.",
    images: [siteData.work.projects.theGvoice.detail],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "AWS", "Vercel", "Service Worker", "Docker"],
    sections: [
      {
        heading: "At The GVoice",
        paragraphs: [
          "At The GVoice, we developed a cloud-enabled Point of Sale (POS) system tailored for modern retail businesses looking to streamline billing, inventory management, and multi-device retail operations.",
          "The platform was designed to support both single-store retailers and multi-outlet businesses by offering fast billing systems, real-time stock monitoring, synchronized inventory tracking, and advanced sales analytics through a scalable cloud infrastructure.",
          "The system improves retail efficiency, reduces inventory errors, and provides business owners with complete visibility into sales performance and stock management."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Faster and more efficient billing operations",
          "Improved inventory accuracy and stock management",
          "Better business insights through sales analytics",
          "Seamless retail operations across devices and locations",
          "Reduced operational downtime"
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
    description: "Professional business website showcasing Akhil Industry's services and offerings.",
    excerpt: "Clean, professional presentation of service portfolios and company expertise.",
    images: [siteData.work.projects.akhilIndustry.detail],
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "At Akhil Industry",
        paragraphs: [
          "At Akhil Industry, we created a professional business website focused on presenting the company’s industrial services, expertise, and capabilities through a modern and corporate digital presence.",
          "The website was strategically designed to improve the company’s online visibility, establish credibility, and provide potential clients with easy access to company information and service offerings."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Enhanced online business presence",
          "Improved client engagement opportunities",
          "Professional digital branding",
          "Better accessibility for potential customers"
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
    description: "Clean, service-focused website highlighting residential and commercial cleaning solutions.",
    excerpt: "Features clear service type outlines and emphasizes a reliable, eco-friendly approach.",
    images: [siteData.work.projects.starxCleaning.detail],
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "At StarX Cleaning",
        paragraphs: [
          "At StarX Cleaning, we designed and developed a modern service-focused business website that effectively showcases the company’s residential and commercial cleaning services through a clean, professional, and user-friendly digital experience.",
          "The primary goal of the project was to build a trustworthy online presence that highlights StarX Cleaning’s commitment to reliability, hygiene, eco-friendly cleaning solutions, and customer satisfaction.",
          "The platform was carefully optimized to provide a smooth browsing experience across all devices while maintaining a visually appealing and conversion-focused interface."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Strengthened online brand identity",
          "Improved customer trust and engagement",
          "Simplified service discovery and booking process",
          "Better accessibility across devices",
          "Enhanced professional digital presence"
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
    description: "Business site featuring Giant Asia's mission, products, and service range.",
    excerpt: "Designed for clarity and easy navigation presenting key company details to potential clients.",
    images: [siteData.work.projects.giantAsia.detail],
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "At Giant Asia",
        paragraphs: [
          "At Giant Asia, we developed a professional corporate business website focused on presenting the company’s mission, services, products, and business values through a clean and highly structured digital platform.",
          "The website was designed to establish a strong online identity while helping potential clients, partners, and stakeholders easily understand the company’s offerings and industry presence.",
          "The platform combines intuitive navigation, responsive design, and business-focused content presentation to deliver a smooth and informative user experience."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Improved professional online presence",
          "Better visibility for products and services",
          "Enhanced client communication and engagement",
          "Stronger corporate branding and credibility"
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
    description: "Food-centric website showcasing Maati Food's menu, specialties, and culinary offerings.",
    excerpt: "Provides users with a flavorful introduction to the brand and its gastronomic identity.",
    images: [siteData.work.projects.maatiFood.detail],
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "At Maati Food",
        paragraphs: [
          "At Maati Food, we designed and developed a food-centric website that visually represents the brand’s culinary identity, menu offerings, and specialty food products through an engaging and modern digital experience.",
          "The website was created to help users explore the brand’s food philosophy, discover signature dishes, and connect with the company through a clean, visually rich, and customer-friendly interface.",
          "Special attention was given to visual presentation, food imagery, and responsive design to create an appetizing and immersive browsing experience."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Improved digital branding for the food business",
          "Better customer engagement through visual presentation",
          "Simplified food discovery and inquiries",
          "Enhanced mobile accessibility and user experience"
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
    description: "Professional medical website for ENT care services offering key information about treatments.",
    excerpt: "Showcases medical expertise and patient care philosophy provided by Dr. Aashima Chopra.",
    images: [siteData.work.projects.entcare.detail],
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "At EntCare – Dr. Aashima Chopra",
        paragraphs: [
          "At EntCare – Dr. Aashima Chopra, we developed a professional healthcare website designed to provide patients with reliable information about ENT treatments, healthcare services, doctor expertise, and patient care facilities.",
          "The website was built with a clean medical-focused interface that emphasizes trust, professionalism, accessibility, and patient convenience.",
          "The platform combines informative healthcare content, responsive design, and streamlined appointment management functionality to improve patient experience."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Improved online visibility for healthcare services",
          "Better patient communication and accessibility",
          "Enhanced trust through professional digital branding",
          "Simplified appointment and inquiry process"
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
    description: "Technology-focused site presenting Tech Mora's digital solutions and tech products.",
    excerpt: "Offers visitors insights into the company's services and technological strengths.",
    images: [siteData.work.projects.techMora.detail],
    tech: ["WordPress", "HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Hostinger"],
    sections: [
      {
        heading: "At Tech Mora",
        paragraphs: [
          "At Tech Mora, we created a modern technology-focused business website designed to showcase the company’s digital solutions, technical capabilities, and innovative service offerings through a clean and professional online platform.",
          "The website was developed to help the company establish a strong technology-driven brand identity while presenting its expertise, portfolio, and client success stories effectively.",
          "The platform focuses on modern UI design, responsive performance, and simplified service presentation to improve visitor engagement."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Stronger technology brand identity",
          "Improved lead generation opportunities",
          "Better presentation of digital services",
          "Enhanced customer trust and engagement"
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
    description: "Professional security services website with custom PHP-based admin panel.",
    excerpt: "Allows non-technical staff to easily update content without developer support.",
    images: [siteData.work.projects.rapidoForce.detail],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Custom CMS Admin Panel"],
    sections: [
      {
        heading: "At Rapido Force Security Services",
        paragraphs: [
          "At Rapido Force Security Services, we designed and developed a professional security services website integrated with a fully customized PHP-based CMS admin panel that enables non-technical staff to independently manage and update website content.",
          "The platform was built to improve operational flexibility, simplify website management, and establish a strong professional online identity for the security company.",
          "Special focus was placed on usability, admin accessibility, and streamlined content management operations."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Faster website content management",
          "Reduced operational dependency on developers",
          "Improved digital branding and professionalism",
          "Better client communication and accessibility"
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
    description: "Full-featured e-commerce website with smart product categories and variants.",
    excerpt: "Built for easy product management and scalability with a custom admin panel.",
    images: [siteData.work.projects.divinSpiritual.detail],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Custom Admin Panel"],
    sections: [
      {
        heading: "At Divin Spiritual Healing",
        paragraphs: [
          "At Divin Spiritual Healing, we developed a complete e-commerce platform designed to provide users with a smooth online shopping experience while enabling the business to efficiently manage products, categories, orders, and customer interactions.",
          "The project focused on creating a modern and flexible e-commerce solution with smart product organization, responsive user interfaces, and simplified administration workflows.",
          "The platform supports product variants, category management, secure transactions, and mobile-friendly shopping experiences."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Improved online sales capabilities",
          "Simplified product and order management",
          "Better customer shopping experience",
          "Enhanced scalability for future growth"
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
    description: "Strategic recruitment solutions helping USA and UK organizations hire faster.",
    excerpt: "Cut recruitment costs and build high-performing teams through data-led RPO solutions.",
    images: [siteData.work.projects.novotion.detail],
    tech: ["Next.js", "Tailwind CSS"],
    sections: [
      {
        heading: "At Novotion Services",
        paragraphs: [
          "At Novotion Services, we developed a modern recruitment-focused business platform designed to present the company’s strategic hiring solutions, RPO services, and international recruitment expertise for USA and UK organizations.",
          "The platform was created to communicate the company’s ability to help businesses hire faster, reduce recruitment costs, and build high-performing teams through data-driven recruitment processes.",
          "The website combines modern design systems, clean user interfaces, and conversion-focused structures to generate business inquiries."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Stronger international recruitment branding",
          "Better client acquisition opportunities",
          "Improved professional online visibility",
          "Enhanced trust and service presentation"
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
    description: "Wellness platform blending ancient Vedic wisdom with modern scientific research.",
    excerpt: "Creates health solutions based on timeless secrets of true vitality and modern research.",
    images: [siteData.work.projects.drink2heal.detail],
    tech: ["Next.js", "Tailwind CSS"],
    sections: [
      {
        heading: "At Drink2Heal",
        paragraphs: [
          "At Drink2Heal, we designed and developed a modern wellness platform that combines ancient Vedic wisdom with modern scientific approaches to promote holistic health, vitality, and natural wellness solutions.",
          "The platform was built to create an engaging and informative digital experience that introduces users to research-backed wellness concepts and natural healing philosophies.",
          "Our focus was to create a visually immersive and content-driven experience that reflects balance, wellness, mindfulness, and modern health awareness."
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
      },
      {
        heading: "Business Impact",
        bullets: [
          "Enhanced digital wellness brand presence",
          "Better engagement through educational wellness content",
          "Improved accessibility across devices",
          "Stronger connection with health-conscious audiences"
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
