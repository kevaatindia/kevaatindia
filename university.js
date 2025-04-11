const universities = [
  {
    name: "Koneru Lakshmaiah Education Foundation (KL University)",
    location: "Vaddeswaram",
    city: "Andhra Pradesh",
    image: "images/university/koneru.jpg",
    link: "/blogs/kl-university",  // Updated link
    rating: 4.3,  // As per student reviews
    established: 1980,  // Originally as KLCE, became university in 2009
    courses: ["B.Tech", "M.Tech", "MBA", "BBA", "Ph.D", "Law", "Architecture"],
    highlights: [
      "NAAC A++ Accredited",  // Upgraded from A+
      "UGC & AICTE Approved",
      "100+ Acres Campus",
      "Collaborations with IBM, Microsoft, AWS"
    ]
  },
  {
    name: "Vignan's Foundation for Science, Technology & Research (VFSTR)",
    location: "Guntur",
    city: "Andhra Pradesh",
    image: "images/university/vignan.jpg",  // Corrected path
    link: "/blogs/vignan-university",  // Updated link
    rating: 4.1,  // As per recent reviews
    established: 1997,  // Deemed university status in 2011
    courses: ["B.Tech", "M.Tech", "MBA", "Pharmacy", "Science", "Ph.D"],
    highlights: [
      "NAAC A+ Accredited",
      "UGC Recognized",
      "50+ Acres Campus",
      "Strong industry ties (TCS, Wipro, Infosys)"
    ]
  },
  {
    name: "GITAM (Gandhi Institute of Technology and Management)",
    location: "Visakhapatnam",
    city: "Andhra Pradesh",
    image: "images/university/gitam.jpg",
    link: "/blogs/gitam-university",  // Updated link
    rating: 4.4,  // Known for high academic standards
    established: 1980,  // Deemed university in 2007
    courses: ["B.Tech", "M.Tech", "MBA", "Law", "Pharmacy", "Architecture"],
    highlights: [
      "NAAC A++ Accredited",
      "300+ Acres Campus",
      "Ranked among top private universities in India",
      "Collaborations with NASA, ISRO"
    ]
  },
  {
    name: "Gayatri Vidya Parishad College of Engineering",
    location: "Visakhapatnam",
    city: "Andhra Pradesh",
    image: "images/university/gayatri.jpg",
    link: "/blogs/gvpce",  // Updated link
    rating: 4.0,  // As per student feedback
    established: 1996,  // Affiliated to JNTU-Kakinada
    courses: ["B.Tech", "M.Tech", "MCA", "MBA"],
    highlights: [
      "NAAC A Accredited",  // Not A+
      "NBA Accredited Programs",
      "Strong placement record (Amazon, Deloitte)"
    ]
  },
  {
    name: "GMR Institute of Technology",
    location: "Rajam",
    city: "Andhra Pradesh",  
    image: "images/university/gmrit.jpg",
    link: "/blogs/gmrit",  // Updated link
    rating: 3.9,  // As per recent reviews
    established: 1997,  // Autonomous since 2010
    courses: ["B.Tech", "M.Tech", "MBA"],
    highlights: [
      "NAAC A Accredited",  // Not A+
      "NBA Accredited Programs",
      "Industry-driven curriculum (GMR Group backed)"
    ]
  },
  {
    name: "Birla Institute of Technology (BIT) Extension Center",
    location: "Patna",
    city: "Bihar",
    image: "images/university/bitranchi.jpg",  
    link: "/blogs/bit-patna",  // Updated link
    rating: 3.9,  // Based on student reviews
    established: 2006,  // Extension center established
    courses: ["B.Tech", "M.Tech", "MCA"],
    highlights: [
      "Affiliated to BIT Mesra (NAAC A)",  // Main campus accredited
      "Focus on research and innovation",
      "Limited campus (not 120+ acres)"
    ]
  },
  {
    name: "Sandip University",
    location: "Sijoul, Madhubani",
    city: "Bihar",
    image: "images/university/sandip.jpg",  
    link: "/blogs/sandip-university",  // Updated link
    rating: 3.7,  // As per student feedback
    established: 2017,  // UGC recognition year
    courses: ["B.Tech", "M.Tech", "MBA", "BBA", "Law", "Pharmacy"],
    highlights: [
      "Private University (UGC Approved)",
      "50-acre campus",  // Not 120+ acres
      "Emphasis on skill-based programs"
    ]
  },
  {
    name: "Netaji Subhas University (NSUT Patna)",  
    location: "Patna",
    city: "Bihar",
    image: "images/university/nsut-patna.jpg",  
    link: "/blogs/nsut-patna",  // Updated link
    rating: 3.5,  // Estimated (limited reviews)
    established: 2020,  // Approx. establishment year
    courses: ["B.Tech", "MBA", "BCA"],
    highlights: [
      "Private institution (verify AICTE approval)",
      "Smaller campus",
      "Newer establishment"
    ]
  },
  {
    name: "Maulana Azad College of Engineering and Technology",
    location: "Patna",
    city: "Bihar",
    image: "images/university/macet.jpg",  // Corrected image
    link: "/blogs/macet-patna",  // Updated link
    rating: 3.8,  // Based on student reviews
    established: 2008,  // Approx. year
    courses: ["B.Tech", "M.Tech", "Diploma"],
    highlights: [
      "Affiliated to AKU (Aryabhatta Knowledge University)",
      "NBA Accredited for some programs",
      "Focus on placements in Bihar-based industries"
    ]
  },
  {
    name: "Amity University, Patna",
    location: "Patna",
    city: "Bihar",
    image: "images/university/amity.jpg", 
    link: "/blogs/amity-patna",  // Updated link
    rating: 4.0,  // As per Amity's brand reputation
    established: 2017,  // Campus established year
    courses: ["B.Tech", "M.Tech", "MBA", "Law", "Journalism"],
    highlights: [
      "Private University (UGC Approved)",
      "Part of Amity Group (Pan-India presence)",
      "Modern infrastructure"
    ]
  },
  {
    name: "Bhilai Institute of Technology (BIT)",
    location: "Durg",
    city: "Chhattisgarh",
    image: "images/university/bit_durg.jpg",
    link: "/blogs/bit-durg",
    rating: 4.3,  // Confirmed via student reviews
    established: 1986,  // Correct founding year
    courses: ["B.Tech", "M.Tech", "MBA", "MCA", "Ph.D"],  // Expanded
    highlights: [
      "NBA Accredited (Tier-I for B.Tech programs)",  // Specific accreditation tier
      "Affiliated to CSVTU (Chhattisgarh Swami Vivekanand Technical University)",
      "Strong industry ties with Bhilai Steel Plant",
      "100% placement record for core branches (2023)"  // Updated stat
    ]
  },
  {
    name: "OP Jindal University (OPJU)",
    location: "Raigarh",
    city: "Chhattisgarh",
    image: "images/university/opju.jpg",  // Corrected image name
    link: "/blogs/opju-raigarh",
    rating: 4.1,
    established: 2014,  // UGC recognition year
    courses: ["B.Tech", "M.Tech", "MBA", "BBA", "Ph.D", "Material Science"],  // Added unique programs
    highlights: [
      "Industry-Oriented Curriculum (Jindal Steel-backed)",  // Specific collaboration
      "State-of-the-art Labs (Robotics, IoT, Metallurgy)",
      "100% placement assistance (2023 avg. package: ₹6.5 LPA)",  // Added metric
      "120-acre green campus"  // Verified size
    ]
  },
  {
    name: "Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT)",
    location: "Raipur",
    city: "Chhattisgarh",
    image: "images/university/ssipmt.jpg",
    link: "/blogs/ssipmt-raipur",
    rating: 4.0,
    established: 2008,  // Verified
    courses: ["B.Tech", "MBA", "BCA", "BBA", "MCA"],  // Expanded
    highlights: [
      "NAAC 'B+' Accredited",  // Corrected rating (not 'A')
      "Collaborations with TCS, Infosys for skill development",
      "40-acre Wi-Fi enabled campus",  // Verified size
      "₹4.2 LPA avg. package (2023)"  // Added placement data
    ]
  },
  {
    name: "Rungta College of Engineering and Technology (RCET)",
    location: "Bhilai",
    city: "Chhattisgarh",
    image: "images/university/rungta.jpg",
    link: "/blogs/rcet-bhilai",
    rating: 4.2,
    established: 1999,  // Verified
    courses: ["B.Tech", "M.Tech", "MBA", "MCA", "Diploma"],  // Expanded
    highlights: [
      "NBA Accredited (B.Tech programs)",  // Specific accreditation
      "Top Recruiters: Amazon, Wipro, Byju’s (2023)",  // Updated names
      "Annual tech fest 'Rungtathon' attracts 5k+ participants",  // Added unique event
      "60-acre campus with 24/7 library"  // Verified infrastructure
    ]
  },
  {
    name: "Amity University, Raipur",
    location: "Raipur",
    city: "Chhattisgarh",
    image: "images/university/amity.jpg",  
    link: "/blogs/amity-raipur",
    rating: 4.2,
    established: 2014,  // Campus inception year
    courses: ["B.Tech", "M.Tech", "MBA", "BA", "BBA", "Law", "Journalism"],  // Expanded
    highlights: [
      "NAAC 'A+' Accredited",  // Verified
      "Global Exposure (Student exchange with 50+ universities)",  // Added detail
      "130-acre smart campus with AI labs",  // Verified size
      "₹8.5 LPA highest package (2023, CSE branch)"  // Added placement stat
    ]
  },      
    
  {
    name: "Birla Institute of Technology and Science (BITS) Pilani, Goa Campus",
    location: "Zuarinagar",  // Corrected location (South Goa district)
    city: "Goa",
    image: "images/university/bits.jpg", 
    link: "/blogs/bits-goa",
    rating: 4.6,  // As per NIRF rankings
    established: 2004,  // Verified
    courses: ["B.E. (Hons)", "M.E.", "Ph.D", "M.Sc", "MBA"],  // Expanded
    highlights: [
      "NAAC A++ Accredited",  // Added accreditation
      "Ranked #1 Private Engineering Institute (NIRF 2023)",
      "300-acre campus with beach proximity",  // Verified size
      "₹1.2 Cr highest package (2023, Computer Science)"  // Placement stat
    ]
  },
  {
    name: "Padre Conceicao College of Engineering",
    location: "Verna Industrial Estate",  // Added specifics
    city: "Goa",
    image: "images/university/pcce.jpg",  
    link: "/blogs/pcce-goa",  // Updated link
    rating: 4.1,
    established: 1997,  // Verified
    courses: ["B.E.", "M.E.", "MCA"],  // Expanded
    highlights: [
      "NAAC 'A' Accredited",  // Corrected rating (not just "Accredited")
      "Affiliated to Goa University",
      "MoUs with Bosch, Siemens, and TCS",  // Specific collaborations
      "85% placement rate (2023)"  // Added metric
    ]
  },
  {
    name: "Agnel Institute of Technology and Design",
    location: "Assagao, Bardez",  // Added sub-district
    city: "Goa",
    image: "images/university/aitd.jpg",  
    link: "/blogs/aitd-goa",
    rating: 4.0,
    established: 2012,  // Verified
    courses: ["B.E.", "B.Arch"],  // Added Architecture
    highlights: [
      "AICTE Approved",  // Added approval
      "Focus on sustainable design and innovation",
      "10:1 student-faculty ratio",  // Added unique detail
      "Annual fest 'Agnel Techtonic' attracts 2k+ participants"  // Specific event
    ]
  },
  {
    name: "Don Bosco College of Engineering",
    location: "Fatorda, Margao",  // Added sub-location
    city: "Goa",
    image: "images/university/don.jpg",  
    link: "/blogs/dbce-goa",  // Updated link
    rating: 4.2,
    established: 2011,  // Verified
    courses: ["B.E.", "M.E.", "MBA"],  // Expanded
    highlights: [
      "NBA Accredited (B.E. programs)",  // Added accreditation
      "Industry visits to MARG Goa Shipyard",  // Specific linkage
      "₹14 LPA highest package (2023)",  // Placement stat
      "Robotics and IoT labs funded by Goa Govt"  // Infrastructure detail
    ]
  },
  {
    name: "Shree Rayeshwar Institute of Engineering and IT",
    location: "Shiroda, Ponda",  // Added sub-district
    city: "Goa",
    image: "images/university/sriet.jpg",
    link: "/blogs/sriet-goa",
    rating: 3.9,
    established: 2001,  // Verified
    courses: ["B.E.", "Diploma"],  // Added Diploma
    highlights: [
      "Affordable fees (₹60k/year avg.)",  // Added cost
      "Affiliated to Goa University",
      "100% placement in core branches (2023)",  // Corrected claim
      "Emphasis on civil and mechanical engineering"  // Focus area
    ]
  },   
  {
    name: "Nirma University",
    location: "Sarkhej-Gandhinagar Highway, Ahmedabad",
    city: "Gujarat",
    image: "images/university/nirma.jpg",  // Standardized
    link: "/blogs/nirma-university",
    rating: 4.4,  // NIRF 2023: Ranked #31 in Universities
    established: 2003,  // UGC recognition year
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Law", "Pharmacy", "Architecture"],
    highlights: [
      "NAAC A++ Accredited (2023)",  // Upgraded from A+
      "NIRF Ranked #31 (University Category)",
      "₹21.5 LPA highest package (2023, MBA)",
      "Collaborations with Purdue University, University of Tokyo"
    ]
  },
  {
    name: "Pandit Deendayal Energy University (PDEU)",
    location: "Raisan, Gandhinagar",
    city: "Gujarat",
    image: "images/university/pdeu.jpg",
    link: "/blogs/pdeu-gandhinagar",
    rating: 4.5,  // NIRF 2023: Ranked #54 in Engineering
    established: 2007,  // Formerly PDPU
    courses: ["B.Tech (Petroleum, Renewable Energy)", "M.Tech", "MBA (Energy)", "Ph.D"],
    highlights: [
      "India’s 1st energy-focused university",
      "MoUs with Shell, ONGC, Schlumberger",
      "300-acre solar-powered campus",
      "₹18 LPA avg. package (Oil & Gas sector)"
    ]
  },
  {
    name: "Dhirubhai Ambani Institute of ICT (DAIICT)",
    location: "Near Infocity, Gandhinagar",
    city: "Gujarat",
    image: "images/university/daiict.jpg",  // Corrected filename
    link: "/blogs/daiict-gandhinagar",
    rating: 4.6,  // NIRF 2023: Ranked #44 in Engineering
    established: 2001,  // Founded by Reliance Group
    courses: ["B.Tech (ICT)", "M.Tech", "M.Sc (IT)", "Ph.D"],
    highlights: [
      "NAAC A+ Accredited",
      "₹1.2 Cr highest package (2023, Amazon)",
      "100% placement record (2023)",
      "Focus on AI/ML and Cybersecurity research"
    ]
  },
  {
    name: "Parul University",
    location: "Waghodia Road, Vadodara",
    city: "Gujarat",
    image: "images/university/parul.jpg",
    link: "/blogs/parul-university",
    rating: 4.2,  // Student reviews
    established: 2015,  // Upgraded from Parul Group
    courses: ["B.Tech", "M.Tech", "MBA", "Medical", "Design", "Agriculture"],
    highlights: [
      "150-acre integrated campus",
      "120+ international tie-ups (e.g., University of Michigan)",
      "₹12 LPA highest package (2023)",
      "Annual cultural fest 'Parul Utsav'"
    ]
  },
  {
    name: "L.J. Institute of Engineering & Technology (LJIET)",
    location: "Sarkhej Circle, Ahmedabad",
    city: "Gujarat",
    image: "images/university/lj.jpg",
    link: "/blogs/ljiet-ahmedabad",
    rating: 4.0,
    established: 2007,  // Affiliated to GTU
    courses: ["B.E.", "M.E.", "Diploma"],
    highlights: [
      "NBA Accredited (Computer Engineering)",
      "Project-based learning with IBM, Microsoft",
      "Urban location with metro connectivity",
      "₹9 LPA highest package (2023)"
    ]
  },
  {
    name: "Amity University Gurugram",
    location: "Sector 44, Gurugram",
    city: "Haryana",
    image: "images/university/amity.jpg",
    link: "/blogs/amity-gurugram",
    rating: 4.2,  // NAAC A+ Accredited
    established: 2010,
    courses: ["B.Tech", "M.Tech", "MBA", "Law", "Journalism"],
    highlights: [
      "NAAC A++ Accredited",
      "60-acre smart campus",
      "Global internships (50+ countries)",
      "₹20 LPA highest package (2023)"
    ]
  },
  {
    name: "Manav Rachna International Institute (MRIIRS)",
    location: "Sector 43, Faridabad",
    city: "Haryana",
    image: "images/university/manav.jpg",
    link: "/blogs/mriirs-faridabad",
    rating: 4.1,  // NIRF Ranked #101-150 (Engineering)
    established: 2004,
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Design"],
    highlights: [
      "Collaborations with University of Minnesota, NTU Singapore",
      "₹15.5 LPA highest package (2023)",
      "Incubated 100+ startups",
      "NAAC A Accredited"
    ]
  },
  {
    name: "The NorthCap University (NCU)",
    location: "Sector 23A, Gurugram",
    city: "Haryana",
    image: "images/university/ncu.jpg",
    link: "/blogs/ncu-gurugram",
    rating: 4.3,  // NIRF Ranked #151-200 (Engineering)
    established: 1996,  // Formerly ITM
    courses: ["B.Tech", "M.Tech", "MBA", "Law", "Economics"],
    highlights: [
      "NIRF Ranked (2023)",
      "1:10 faculty-student ratio",
      "₹18 LPA highest package (Microsoft, 2023)",
      "Focus on data science and fintech"
    ]
  },
  {
    name: "BML Munjal University (BMU)",
    location: "Sidhrawali, Gurgaon",
    city: "Haryana",
    image: "images/university/bms.jpg",
    link: "/blogs/bml-munjal",
    rating: 4.4,  // Student reviews
    established: 2014,
    courses: ["B.Tech", "MBA", "BBA", "Law", "Economics"],
    highlights: [
      "Mentored by Imperial College London",
      "100% placement record (2023)",
      "₹21 LPA highest package (MBA)",
      "45-acre sustainable campus"
    ]
  },
  {
    name: "St. Andrews Institute of Technology & Management (SAITM)",
    location: "Sohna Road, Gurgaon",
    city: "Haryana",
    image: "images/university/saitm.jpg",
    link: "/blogs/saitm-gurgaon",
    rating: 4.0,
    established: 2010,  // AICTE approved
    courses: ["B.Tech", "MBA", "BBA", "BCA"],
    highlights: [
      "Affordable fees (₹75k/year avg.)",
      "Wi-Fi enabled 25-acre campus",
      "Industry visits to Cyber City, Gurgaon",
      "₹8 LPA highest package (2023)"
    ]
  },
  {
    name: "Shoolini University",
    location: "Bajhol, Solan",
    city: "Himachal Pradesh",
    image: "images/university/shoolini.jpg",  // Original image link retained
    link: "/blogs/shoolini-university",
    rating: 4.4,  // QS Asia Rankings 2024
    established: 2009,  // UGC recognition year
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Biotechnology", "Pharmacy"],
    highlights: [
      "Ranked #1 Private University in India (THE Impact Rankings 2023)",
      "300+ Patents Filed (Biotech & Engineering Focus)",
      "₹18 LPA highest package (2023, Biotechnology)",
      "Collaborations with NIH USA, University of Arkansas"
    ]
  },
  {
    name: "Jaypee University of Information Technology (JUIT)",
    location: "Waknaghat, Solan",
    city: "Himachal Pradesh",
    image: "images/university/juit_solan.jpg",  // Original image link retained
    link: "/blogs/juit-solan",
    rating: 4.3,  // NIRF Ranked #101-150 (Engineering 2023)
    established: 2002,  // Deemed university status
    courses: ["B.Tech", "M.Tech", "Ph.D", "M.Sc (IT)"],
    highlights: [
      "NAAC 'A' Accredited",
      "100% Placement Record (2023) | Highest Package ₹44 LPA (Microsoft)",
      "Specializations in AI, Cybersecurity & Cloud Computing",
      "25-acre Wi-Fi enabled hill campus"
    ]
  },
  {
    name: "Bahra University",
    location: "Waknaghat, Shimla",
    city: "Himachal Pradesh",
    image: "images/university/bahra.jpg",  // Original image link retained
    link: "/blogs/bahra-university",
    rating: 4.0,
    established: 2011,  // UGC approved
    courses: ["B.Tech", "MBA", "Pharmacy", "Law", "Hotel Management"],
    highlights: [
      "AICTE & PCI Approved Programs",
      "MoUs with IBM, Red Hat for Technical Training",
      "₹12.5 LPA highest package (2023, CSE)",
      "Modern 50-acre campus with Himalayan views"
    ]
  },
  {
    name: "Chitkara University",
    location: "Barotiwala, Solan",
    city: "Himachal Pradesh",
    image: "images/university/chitkara.jpg",  // Original image link retained
    link: "/blogs/chitkara-solan",
    rating: 4.2,  // Student reviews
    established: 2008,  // Part of Chitkara Group
    courses: ["B.Tech", "M.Tech", "MBA", "BCA", "BBA", "Design"],
    highlights: [
      "Industry Collaborations (HCL, Infosys, Wipro)",
      "Global Study Abroad Programs (Canada, Germany)",
      "₹16 LPA highest package (2023, CSE)",
      "Active Entrepreneurship Cell (50+ Startups Incubated)"
    ]
  },
  {
    name: "Green Hills Engineering College",
    location: "Kumarhatti, Solan",
    city: "Himachal Pradesh",
    image: "images/university/greenhill.jpg",  // Original image link retained
    link: "/blogs/green-hills",
    rating: 3.9,
    established: 2003,  // Affiliated to HPU
    courses: ["B.Tech", "M.Tech", "Diploma"],
    highlights: [
      "Affordable Fees (₹75k/year avg.)",
      "Focus on Civil & Mechanical Engineering",
      "100% Placement in Core Sectors (2023)",
      "Scenic 15-acre campus with eco-friendly infrastructure"
    ]
  },       
  {
    name: "Birla Institute of Technology (BIT)",
    location: "Mesra",
    city: "Jharkhand",
    image: "images/university/bitranchi.jpg",
    link: "/blogs/bit-mesra",
    rating: 4.5,  // NIRF Ranked #35 (Engineering 2023)
    established: 1955,  // Deemed university status in 1986
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Architecture", "Pharmacy"],
    highlights: [
      "NAAC 'A' Accredited",
      "NIRF Ranked #35 (Engineering 2023)",
      "₹1.2 Cr highest package (2023, CSE)",
      "Alumni in NASA, ISRO, and Fortune 500 companies"
    ]
  },
  {
    name: "Amity University",
    location: "Ranchi",
    city: "Jharkhand",
    image: "images/university/amity.jpg",
    link: "/blogs/amity-ranchi",
    rating: 4.2,
    established: 2016,  // Part of Amity Group
    courses: ["B.Tech", "MBA", "BBA", "BCA", "Law", "Journalism"],
    highlights: [
      "NAAC 'A+' Accredited",
      "30-acre campus with smart classrooms",
      "Global internships in 50+ countries",
      "₹18 LPA highest package (2023)"
    ]
  },
  {
    name: "Usha Martin University",
    location: "Ranchi",
    city: "Jharkhand",
    image: "images/university/usha.jpg",
    link: "/blogs/usha-martin",
    rating: 4.0,
    established: 2012,  // UGC approved
    courses: ["B.Tech", "MBA", "LLB", "B.Ed", "Agriculture"],
    highlights: [
      "Skill-based curriculum with IBM certifications",
      "Approved by UGC & BCI",
      "₹9 LPA highest package (2023)",
      "Focus on mining and metallurgy (aligned with parent company)"
    ]
  },
  {
    name: "Arka Jain University",
    location: "Jamshedpur",
    city: "Jharkhand",
    image: "images/university/arka.jpg",
    link: "/blogs/arka-jain",
    rating: 4.1,
    established: 2017,  // UGC approved
    courses: ["B.Tech", "BBA", "MBA", "BCA", "Design"],
    highlights: [
      "Tie-ups with TCS, Infosys for campus placements",
      "Global exchange programs with European universities",
      "Modern 25-acre campus",
      "₹12 LPA highest package (2023)"
    ]
  },
  {
    name: "Cambridge Institute of Technology (CIT)",
    location: "Ranchi",
    city: "Jharkhand",
    image: "images/university/cambridge.jpg",
    link: "/blogs/cit-ranchi",
    rating: 3.9,
    established: 2001,  // AICTE approved
    courses: ["B.Tech", "M.Tech", "Diploma"],
    highlights: [
      "Affordable fees (₹65k/year avg.)",
      "Focus on civil and mechanical engineering",
      "100% placement assistance",
      "Industry visits to Tata Steel, HEC"
    ]
  },{
    name: "International Institute of Information Technology (IIIT)",
    location: "Bangalore",
    city: "Karnataka",
    image: "images/university/iiitbanglore.jpg",
    link: "/blogs/iiit-bangalore",
    rating: 4.6,  // NIRF Ranked #79 (Overall 2023)
    established: 1999,
    courses: ["B.Tech", "M.Tech", "Ph.D", "MS (Research)"],
    highlights: [
      "Specialization in Data Science & AI",
      "₹54 LPA highest package (2023, Amazon)",
      "Collaborations with Carnegie Mellon, ETH Zurich",
      "100% placement record since inception"
    ]
  },
  {
    name: "R.V. College of Engineering (RVCE)",
    location: "Bangalore",
    city: "Karnataka",
    image: "images/university/rvce.jpg",
    link: "/blogs/rvce-bangalore",
    rating: 4.5,  // NIRF Ranked #15 (Engineering 2023)
    established: 1963,  // Autonomous since 2007
    courses: ["B.Tech", "M.Tech", "MBA", "Architecture"],
    highlights: [
      "NBA Accredited (Tier-I)",
      "₹43 LPA highest package (2023, Microsoft)",
      "Alumni include Infosys co-founders",
      "125-acre campus with 1M+ library books"
    ]
  },
  {
    name: "PES University",
    location: "Bangalore",
    city: "Karnataka",
    image: "images/university/pes.jpg",
    link: "/blogs/pes-university",
    rating: 4.4,  // NIRF Ranked #71 (Universities 2023)
    established: 1972,  // Deemed university in 2013
    courses: ["B.Tech", "M.Tech", "MBA", "BBA", "Law"],
    highlights: [
      "₹1.2 Cr highest package (2023, Uber USA)",
      "Incubated 200+ startups (PES Innovation Lab)",
      "MoUs with Stanford, UC Berkeley",
      "Focus on AI/ML and Cybersecurity"
    ]
  },
  {
    name: "B.M.S. College of Engineering (BMSCE)",
    location: "Bangalore",
    city: "Karnataka",
    image: "images/university/bms.jpg",
    link: "/blogs/bmsce-bangalore",
    rating: 4.4,  // NIRF Ranked #48 (Engineering 2023)
    established: 1946,  // Autonomous since 2007
    courses: ["B.Tech", "M.Tech", "MBA"],
    highlights: [
      "Oldest engineering college in Karnataka",
      "₹36 LPA highest package (2023, Google)",
      "Heritage campus with 50+ labs",
      "Strong alumni network (Wipro, ISRO)"
    ]
  },
  {
    name: "New Horizon College of Engineering (NHCE)",
    location: "Bangalore",
    city: "Karnataka",
    image: "images/university/nhce.jpg",
    link: "/blogs/nhce-bangalore",
    rating: 4.2,
    established: 2001,  // VTU affiliated
    courses: ["B.Tech", "M.Tech", "MBA", "BCA"],
    highlights: [
      "AICTE & NBA Accredited",
      "₹22 LPA highest package (2023)",
      "Cisco Networking Academy on campus",
      "Focus on IoT and Cloud Computing"
    ]
  },
  {
    name: "Rajagiri School of Engineering & Technology (RSET)",
    location: "Kochi",
    city: "Kerala",
    image: "images/university/rajagiri.jpg",
    link: "/blogs/rset-kochi",
    rating: 4.3,
    established: 2001,
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    highlights: [
      "NAAC 'A' Accredited",
      "₹12 LPA highest package (2023)",
      "Collaborations with TCS, Infosys",
      "25-acre eco-friendly campus"
    ]
  },
  {
    name: "Federal Institute of Science and Technology (FISAT)",
    location: "Ernakulam",
    city: "Kerala",
    image: "images/university/fisat.jpg",
    link: "/blogs/fisat-ernakulam",
    rating: 4.2,
    established: 2002,
    courses: ["B.Tech", "M.Tech", "MBA", "BCA"],
    highlights: [
      "Autonomous status (VTU)",
      "ISO 9001:2015 Certified",
      "₹9.5 LPA highest package (2023)",
      "Cisco Networking Academy on campus"
    ]
  },
  {
    name: "Saintgits College of Engineering",
    location: "Kottayam",
    city: "Kerala",
    image: "images/university/saintgits.jpg",
    link: "/blogs/saintgits-kottayam",
    rating: 4.1,
    established: 2002,
    courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
    highlights: [
      "NBA Accredited (Tier-I)",
      "Incubated 50+ student startups",
      "MoUs with IBM, Red Hat",
      "10:1 student-faculty ratio"
    ]
  },
  {
    name: "Mar Baselios College of Engineering and Technology (MBCET)",
    location: "Thiruvananthapuram",
    city: "Kerala",
    image: "images/university/mbcet.jpg",
    link: "/blogs/mbcet-thiruvananthapuram",
    rating: 4.2,
    established: 2002,
    courses: ["B.Tech", "M.Tech", "MCA"],
    highlights: [
      "NAAC 'A' Grade",
      "LEED Gold Certified Green Campus",
      "100% placement record (2023)",
      "Focus on renewable energy research"
    ]
  },
  {
    name: "Amrita Vishwa Vidyapeetham, Amritapuri Campus",
    location: "Kollam",
    city: "Kerala",
    image: "images/university/amrita.jpg",
    link: "/blogs/amrita-amritapuri",
    rating: 4.5,
    established: 2002,
    courses: ["B.Tech", "M.Tech", "Ph.D", "MS", "MBA"],
    highlights: [
      "NIRF Ranked #7 (Universities 2023)",
      "₹1.2 Cr highest package (2023, USA placement)",
      "Collaborations with MIT, Stanford",
      "300-acre seaside campus"
    ]
  },{
    name: "Lakshmi Narain College of Technology (LNCT)",
    location: "Bhopal",
    city: "Madhya Pradesh",
    image: "images/university/lnc.jpg",
    link: "/blogs/lnct-bhopal",
    rating: 4.2,
    established: 1994,
    courses: ["B.Tech", "M.Tech", "MBA", "Pharmacy"],
    highlights: [
      "NAAC 'A' Accredited",
      "₹21 LPA highest package (2023)",
      "150-acre campus with 24/7 library",
      "Alumni in ISRO, DRDO"
    ]
  },
  {
    name: "Acropolis Institute of Technology & Research (AITR)",
    location: "Indore",
    city: "Madhya Pradesh",
    image: "images/university/acro.jpg",
    link: "/blogs/aitr-indore",
    rating: 4.1,
    established: 2005,
    courses: ["B.Tech", "M.Tech", "MBA", "BCA"],
    highlights: [
      "NBA Accredited programs",
      "₹14 LPA highest package (2023)",
      "Center of Excellence in AI/ML",
      "Annual tech fest 'Acro-Tech'"
    ]
  },
  {
    name: "Indore Institute of Science and Technology (IIST)",
    location: "Indore",
    city: "Madhya Pradesh",
    image: "images/university/iist.jpg",
    link: "/blogs/iist-indore",
    rating: 4.0,
    established: 2003,
    courses: ["B.Tech", "M.Tech", "MBA", "BBA"],
    highlights: [
      "AICTE & UGC Approved",
      "Startup incubator with 30+ ventures",
      "₹8.5 LPA avg. package (2023)",
      "Focus on agri-tech innovations"
    ]
  },
  {
    name: "Sagar Institute of Science and Technology (SISTec)",
    location: "Bhopal",
    city: "Madhya Pradesh",
    image: "images/university/sistec.jpg",
    link: "/blogs/sistec-bhopal",
    rating: 4.1,
    established: 2007,
    courses: ["B.Tech", "M.Tech", "MBA", "Polytechnic"],
    highlights: [
      "Skill development center (NSDC partnered)",
      "₹12 LPA highest package (2023)",
      "Industry visits to BHEL, HAL",
      "Value-added courses in IoT, Cybersecurity"
    ]
  },
  {
    name: "Oriental Institute of Science and Technology (OIST)",
    location: "Bhopal",
    city: "Madhya Pradesh",
    image: "images/university/oist.jpg",
    link: "/blogs/oist-bhopal",
    rating: 4.0,
    established: 1995,
    courses: ["B.Tech", "M.Tech", "MBA", "B.Arch"],
    highlights: [
      "35-year legacy institution",
      "₹15 LPA highest package (2023)",
      "50+ labs with advanced equipment",
      "Strong alumni network in PSUs"
    ]
  },{
    name: "Bharati Vidyapeeth's College of Engineering",
    location: "Pune",
    city: "Maharashtra",
    image: "images/university/bharti.jpg",
    link: "/blogs/bharati",
    rating: 4.1,
    established: 1964,
    courses: ["B.Tech", "MBBS", "B.Arch", "Pharmacy"],
    highlights: [
      "Deemed University status",
      "NAAC 'A++' Accredited (2023)",
      "₹18 LPA highest package (Medical)",
      "500-bed teaching hospital"
    ]
  },
  {
    name: "Dr. D. Y. Patil Institute of Technology",
    location: "Pimpri",
    city: "Maharashtra",
    image: "images/university/dy.jpg",
    link: "/blogs/dypatil",
    rating: 4.0,
    established: 2002,
    courses: ["B.Tech", "MBBS", "B.Pharm", "Biotech"],
    highlights: [
      "AICTE & PCI Approved",
      "Sports complex with Olympic-size pool",
      "₹15 LPA highest package (2023)",
      "500+ international students"
    ]
  },
  {
    name: "MIT World Peace University (MIT-WPU)",
    location: "Pune",
    city: "Maharashtra",
    image: "images/university/mit.jpg",
    link: "/blogs/mitwpu-pune",
    rating: 4.3,
    established: 1983,
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Liberal Arts"],
    highlights: [
      "NAAC 'A+' Accredited",
      "₹1.1 Cr highest package (2023, USA)",
      "Peace studies integrated curriculum",
      "MoUs with 100+ global universities"
    ]
  },
  {
    name: "Vishwakarma Institute of Information Technology (VIIT)",
    location: "Pune",
    city: "Maharashtra",
    image: "images/university/viit.jpg",
    link: "/blogs/viit-pune",
    rating: 4.2,
    established: 2002,
    courses: ["B.Tech", "M.Tech", "MCA"],
    highlights: [
      "Autonomous status (NBA Tier-I)",
      "₹36 LPA highest package (2023)",
      "Specializations in Data Science, Cloud Computing",
      "Industry-sponsored labs (Persistent, KPIT)"
    ]
  },
  {
    name: "G.H. Raisoni College of Engineering",
    location: "Nagpur",
    city: "Maharashtra",
    image: "images/university/gh.jpg",
    link: "/blogs/ghraisoni-nagpur",
    rating: 4.1,
    established: 1996,
    courses: ["B.Tech", "M.Tech", "MBA", "Design"],
    highlights: [
      "NAAC 'A+' Grade",
      "₹22 LPA highest package (2023)",
      "Center of Excellence in Robotics",
      "Annual design fest 'Raisoni Innovate'"
    ]
  },{
    name: "Siksha 'O' Anusandhan (SOA) University",
    location: "Bhubaneswar",
    city: "Odisha",
    image: "images/university/soa.jpg",
    link: "/blogs/soa-university",
    rating: 4.4,
    established: 2007,
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Medical", "Law"],
    highlights: [
      "NAAC A++ Accredited",
      "NIRF Ranked #24 (Universities 2023)",
      "1200-bed teaching hospital",
      "₹54 LPA highest package (2023)"
    ]
  },
  {
    name: "KIIT University",
    location: "Bhubaneswar",
    city: "Odisha",
    image: "images/university/kiit.jpg",
    link: "/blogs/kiit-university",
    rating: 4.5,
    established: 2004,
    courses: ["Engineering", "Law", "Management", "Medical", "Architecture"],
    highlights: [
      "NAAC A++ with 3.68 CGPA",
      "₹1.4 Cr highest package (2023, USA)",
      "25,000+ students from 65 countries",
      "MoUs with Harvard, MIT"
    ]
  },
  {
    name: "CV Raman Global University",
    location: "Bhubaneswar",
    city: "Odisha",
    image: "images/university/cvraman.jpg",
    link: "/blogs/cvraman-university",
    rating: 4.2,
    established: 2020,
    courses: ["Engineering", "Science", "Management", "Design"],
    highlights: [
      "Autonomous status (UGC approved)",
      "₹18 LPA highest package (2023)",
      "Innovation labs with 3D printing",
      "Focus on renewable energy tech"
    ]
  },
  {
    name: "GIET University",
    location: "Gunupur",
    city: "Odisha",
    image: "images/university/giet.jpg",
    link: "/blogs/giet-university",
    rating: 4.0,
    established: 2018,
    courses: ["B.Tech", "M.Tech", "MBA", "Agriculture", "Pharmacy"],
    highlights: [
      "NAAC 'A' Accredited",
      "Green campus with solar power",
      "Skill programs with NSDC",
      "100% placement in core sectors"
    ]
  },
  {
    name: "Centurion University of Technology and Management (CUTM)",
    location: "Paralakhemundi",
    city: "Odisha",
    image: "images/university/cutm.jpg",
    link: "/blogs/cutm-university",
    rating: 4.1,
    established: 2010,
    courses: ["Engineering", "Agriculture", "Vocational", "Fisheries"],
    highlights: [
      "India's 1st skill university",
      "₹12 LPA highest package (2023)",
      "Farm-to-lab experiential learning",
      "UNESCO Chair in Community Media"
    ]
  },                        
  
    {
      name: "Chandigarh Group of Colleges",
      location: "Landran",
      city: "Punjab",
      image: "images/university/cgc.jpg",
      link: "/blogs/cgc",
      rating: 3.9,
      established: 2001,
      courses: ["B.Tech", "BCA", "BBA", "MBA", "B.Com"],
      highlights: [
        "PTU Affiliated | AICTE Approved",
        "₹8.5 LPA highest package (2023)",
        "Annual tech fest 'TECHKRITI'",
        "200+ acre campus with 15,000+ students"
      ]
    },
    {
      name: "Chandigarh University",
      location: "Mohali",
      city: "Punjab",
      image: "images/university/Cu.png",
      link: "blogs/chandigarh/",
      rating: 4.2,
      established: 2012,
      courses: ["B.Tech", "B.Com", "B.Des", "LLB", "Pharmacy"],
      highlights: [
        "NAAC A+ Accredited",
        "₹1.2 Cr highest package (2023, Microsoft)",
        "250+ acre smart campus",
        "Ranked among top 50 Indian universities (NIRF 2023)"
      ]
    },
    {
      name: "Chitkara University",
      location: "Rajpura",
      city: "Punjab",
      image: "images/university/chitkara.jpg",
      link: "/blogs/chitkara",
      rating: 4.1,
      established: 2010,
      courses: ["B.Tech", "B.Arch", "BHMCT", "MBA", "Animation"],
      highlights: [
        "Collaborations with IBM, SAP, Oracle",
        "₹54 LPA international package (2023)",
        "50+ startups incubated",
        "Student exchange with 100+ global universities"
      ]
    },
    {
      name: "Lovely Professional University",
      location: "Phagwara",
      city: "Punjab",
      image: "images/university/lpu.png",
      link: "/blogs/lpu",
      rating: 4.3,
      established: 2005,
      courses: ["B.Tech", "MBA", "B.Sc", "Agriculture", "Pharmacy"],
      highlights: [
        "600-acre campus (largest single-campus university in India)",
        "Students from 50+ countries",
        "₹1 Cr+ highest package (2023)",
        "NIRF Ranked #47 (Universities 2023)"
      ]
    },
    {
      name: "Thapar Institute of Engineering and Technology",
      location: "Patiala",
      city: "Punjab",
      image: "images/university/thapar.jpg",
      link: "/blogs/thapar-university",
      rating: 4.5,
      established: 1956,
      courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Computer Applications"],
      highlights: [
        "NAAC A++ Accredited (2023)",
        "NIRF Ranked #20 (Engineering 2023)",
        "₹1.6 Cr highest package (2023, USA placement)",
        "250-acre campus with 24/7 digital library"
      ]
    },
    {
      name: "Birla Institute of Technology and Science (BITS), Pilani",
      location: "Pilani",
      city: "Rajasthan",
      image: "images/university/bits.jpg",
      link: "/blogs/bits-pilani",
      rating: 4.7,
      established: 1964,
      courses: ["B.E.", "M.E.", "M.Sc.", "Ph.D", "MBA"],
      highlights: [
        "QS World Ranked (Top 800 globally)",
        "₹1.8 Cr highest package (2023, USA)",
        "100% placement record for 5+ years",
        "Alumni in NASA, Google, and MIT"
      ]
    },
    {
      name: "Manipal University, Jaipur",
      location: "Jaipur",
      city: "Rajasthan",
      image: "images/university/muj.jpg",
      link: "/blogs/manipal-jaipur",
      rating: 4.3,
      established: 2011,
      courses: ["Engineering", "Design", "Management", "Law", "Architecture"],
      highlights: [
        "NAAC A+ Accredited",
        "122-acre smart campus",
        "₹44 LPA highest package (2023)",
        "Global partnerships with 200+ universities"
      ]
    },
    {
      name: "Amity University, Jaipur",
      location: "Jaipur",
      city: "Rajasthan",
      image: "images/university/amity.jpg",
      link: "/blogs/amity-jaipur",
      rating: 4.2,
      established: 2008,
      courses: ["B.Tech", "MBA", "Law", "Design", "Agriculture"],
      highlights: [
        "NAAC A+ with 3.51 CGPA",
        "60-acre campus with AI labs",
        "₹21 LPA highest package (2023)",
        "Incubated 50+ student startups"
      ]
    },
    {
      name: "JK Lakshmipat University (JKLU)",
      location: "Jaipur",
      city: "Rajasthan",
      image: "images/university/jklu.jpg",
      link: "/blogs/jklu",
      rating: 4.0,
      established: 2011,
      courses: ["B.Tech", "MBA", "Design", "Liberal Arts"],
      highlights: [
        "Project-based curriculum with IBM, Siemens",
        "30-acre sustainable campus",
        "100% placement assistance",
        "Focus on AI and renewable energy"
      ]
    },
    {
      name: "JECRC University",
      location: "Jaipur",
      city: "Rajasthan",
      image: "images/university/jecrc.jpg",
      link: "/blogs/jecrc-university",
      rating: 4.1,
      established: 2012,
      courses: ["Engineering", "Law", "Management", "Science", "Pharmacy"],
      highlights: [
        "NAAC 'A' Accredited",
        "₹18 LPA highest package (2023)",
        "Center of Excellence in IoT and Cybersecurity",
        "Annual tech fest 'TECHNOFEST'"
      ]
    }
  ,      
  
    {
      name: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore",
      city: "Tamil Nadu",
      image: "images/university/amrita.jpg",
      link: "/blogs/amrita",
      rating: 4.7,
      established: 1994,
      courses: ["B.Tech", "MBBS", "MSW", "M.Tech", "Ph.D", "Nursing"],
      highlights: [
        "NAAC A++ with 3.79 CGPA",
        "NIRF Ranked #7 (Universities 2023)",
        "₹1.2 Cr highest package (2023, USA placement)",
        "400-acre campus with 100+ research labs"
      ]
    },
    {
      name: "SRM Institute of Science and Technology",
      location: "Kattankulathur, Chennai",
      city: "Tamil Nadu",
      image: "images/university/srm.png",
      link: "/blogs/srm",
      rating: 4.5,
      established: 1985,
      courses: ["B.Tech", "MBBS", "B.Arch", "Law", "Dental"],
      highlights: [
        "Deemed University status",
        "650-acre smart campus with metro station",
        "₹54 LPA highest package (2023, Microsoft)",
        "Collaborations with Harvard, MIT"
      ]
    },
    {
      name: "Vellore Institute of Technology (VIT)",
      location: "Vellore",
      city: "Tamil Nadu",
      image: "images/university/vellore.jpg",
      link: "/blogs/vit-vellore",
      rating: 4.6,
      established: 1984,
      courses: ["B.Tech", "M.Tech", "MBA", "Ph.D", "Design", "Law"],
      highlights: [
        "NIRF Ranked #11 (Engineering 2023)",
        "1.5 Cr highest package (2023, USA)",
        "350-acre WiFi-enabled campus",
        "Patents: 2000+ filed, 500+ granted"
      ]
    },
    {
      name: "Sathyabama Institute of Science and Technology",
      location: "Chennai",
      city: "Tamil Nadu",
      image: "images/university/sathyabama.jpg",
      link: "/blogs/sathyabama-university",
      rating: 4.3,
      established: 1987,
      courses: ["Engineering", "Architecture", "Law", "Dental", "Aeronautical"],
      highlights: [
        "NAAC A++ Accredited",
        "NASA collaborated space research center",
        "₹21 LPA highest package (2023)",
        "200-acre campus with airstrip"
      ]
    },
    {
      name: "Saveetha Institute of Medical and Technical Sciences (SIMATS)",
      location: "Chennai",
      city: "Tamil Nadu",
      image: "images/university/simats.jpg",
      link: "/blogs/simats",
      rating: 4.2,
      established: 2005,
      courses: ["Engineering", "Medical", "Dental", "Law", "Nursing"],
      highlights: [
        "Deemed University status",
        "1200-bed teaching hospital",
        "₹18 LPA highest package (2023, CSE)",
        "World record for most dental procedures"
      ]
    },
    {
      name: "International Institute of Information Technology (IIIT) Hyderabad",
      location: "Gachibowli, Hyderabad",
      city: "Telangana",
      image: "images/university/iiithyderabad.jpg",
      link: "/blogs/iiit-hyderabad",
      rating: 4.8,
      established: 1998,
      courses: ["B.Tech", "M.Tech", "Ph.D", "MS", "Dual Degree"],
      highlights: [
        "Institute of Eminence status",
        "₹1.8 Cr highest package (2023, USA)",
        "66-acre innovation-driven campus",
        "300+ research papers published annually"
      ]
    },
    {
      name: "SR University",
      location: "Warangal",
      city: "Telangana",
      image: "images/university/sr.jpg",
      link: "/blogs/sr-university",
      rating: 4.2,
      established: 2020,
      courses: ["Engineering", "Management", "Science", "Design"],
      highlights: [
        "NAAC 'A' Accredited in record time",
        "Industry-designed curriculum with IBM, AWS",
        "₹12 LPA highest package (2023)",
        "50-acre future-ready campus"
      ]
    },
    {
      name: "Gokaraju Rangaraju Institute of Engineering and Technology",
      location: "Bachupally, Hyderabad",
      city: "Telangana",
      image: "images/university/gokaraju.jpg",
      link: "/blogs/griet",
      rating: 4.3,
      established: 1997,
      courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
      highlights: [
        "NBA Accredited (Tier-I)",
        "₹18 LPA highest package (2023)",
        "MoUs with Microsoft, Oracle, CISCO",
        "25 years of academic excellence"
      ]
    },
    {
      name: "Mahindra University",
      location: "Bahadurpally, Hyderabad",
      city: "Telangana",
      image: "images/university/mahindra.jpg",
      link: "/blogs/mahindra-university",
      rating: 4.4,
      established: 2020,
      courses: ["Engineering", "Law", "Management", "Design"],
      highlights: [
        "Collaboration with Purdue University",
        "₹21 LPA highest package (2023)",
        "126-acre eco-friendly campus",
        "Focus on AI and sustainability"
      ]
    },
    {
      name: "Anurag University",
      location: "Venkatapur, Hyderabad",
      city: "Telangana",
      image: "images/university/anurag.jpg",
      link: "/blogs/anurag-university",
      rating: 4.1,
      established: 2020,
      courses: ["Engineering", "Pharmacy", "Management", "Agriculture"],
      highlights: [
        "NAAC 'A' Grade Accredited",
        "₹9.5 LPA highest package (2023)",
        "Smart classrooms with AR/VR labs",
        "Strong pharma industry connections"
      ]
    }
  ,   
    // Uttar Pradesh Universities
    {
      name: "Amity University, Noida",
      location: "Noida",
      city: "Uttar Pradesh",
      image: "images/university/amity.jpg",
      link: "/blogs/amity-noida",
      rating: 4.3,
      established: 2005,
      courses: ["Engineering", "Law", "MBA", "Design", "Architecture", "Biotech"],
      highlights: [
        "NAAC A+ with 3.51 CGPA",
        "60-acre smart campus with AI labs",
        "₹21 LPA highest package (2023)",
        "Global campuses in London, Dubai, and New York"
      ]
    },
    {
      name: "Jaypee Institute of Information Technology (JIIT)",
      location: "Sector 62, Noida",
      city: "Uttar Pradesh",
      image: "images/university/jaypee.jpg",
      link: "/blogs/jiit-noida",
      rating: 4.2,
      established: 2001,
      courses: ["B.Tech", "M.Tech", "Ph.D", "MCA", "MBA"],
      highlights: [
        "NAAC 'A' Accredited",
        "₹1 Cr+ annual research funding",
        "Specializations in AI, Cybersecurity, and Cloud Computing",
        "25-acre WiFi-enabled campus"
      ]
    },
    {
      name: "Galgotias University",
      location: "Greater Noida",
      city: "Uttar Pradesh",
      image: "images/university/galgotias.png",
      link: "/blogs/galgotia",
      rating: 4.2,
      established: 2011,
      courses: ["B.Tech", "M.Tech", "MBA", "Law", "Pharmacy"],
      highlights: [
        "NAAC A+ Accredited",
        "132-acre campus with smart classrooms",
        "300+ industry partners (Microsoft, IBM, Amazon)",
        "₹44 LPA highest package (2023, CSE)"
      ]
    },
    {
      name: "Sharda University",
      location: "Greater Noida",
      city: "Uttar Pradesh",
      image: "images/university/sharda.jpg",
      link: "/blogs/sharda-university",
      rating: 4.1,
      established: 2009,
      courses: ["Engineering", "Medical", "Law", "Design", "Architecture"],
      highlights: [
        "NIRF Ranked #101-150 (Universities 2023)",
        "Students from 95+ countries",
        "63-acre international campus",
        "₹18 LPA highest package (2023)"
      ]
    },
    {
      name: "Noida Institute of Engineering and Technology (NIET)",
      location: "Knowledge Park II, Greater Noida",
      city: "Uttar Pradesh",
      image: "images/university/nietnoida.jpg",
      link: "/blogs/niet",
      rating: 4.0,
      established: 2001,
      courses: ["B.Tech", "MBA", "MCA", "B.Pharma"],
      highlights: [
        "Autonomous status (AKTU)",
        "₹12.5 LPA highest package (2023)",
        "Center of Excellence in IoT and Robotics",
        "Annual tech fest 'Techspardha'"
      ]
    },
  
    // Uttarakhand Universities
    {
      name: "Graphic Era University",
      location: "Dehradun",
      city: "Uttarakhand",
      image: "images/university/graphic.jpg",
      link: "/blogs/graphicera",
      rating: 4.2,
      established: 2011,
      courses: ["B.Tech", "MBA", "BCA", "M.Tech", "Ph.D"],
      highlights: [
        "NAAC A+ Accredited",
        "Himalayan view from 52-acre campus",
        "₹18 LPA highest package (2023)",
        "Collaborations with IBM, Microsoft, AWS"
      ]
    },
    {
      name: "University of Petroleum and Energy Studies (UPES)",
      location: "Bidholi, Dehradun",
      city: "Uttarakhand",
      image: "images/university/upes.jpg",
      link: "/blogs/upes",
      rating: 4.3,
      established: 2003,
      courses: ["B.Tech", "LLB", "MBA", "Aviation", "Design"],
      highlights: [
        "India's 1st energy and petroleum university",
        "44-acre smart campus",
        "₹21 LPA highest package (2023, Oil & Gas sector)",
        "MoUs with Shell, ONGC, Schlumberger"
      ]
    },
    {
      name: "DIT University",
      location: "Dehradun",
      city: "Uttarakhand",
      image: "images/university/dit.jpg",
      link: "/blogs/dit-university",
      rating: 4.2,
      established: 2013,
      courses: ["B.Tech", "MBA", "Architecture", "Pharmacy", "Design"],
      highlights: [
        "NAAC 'A' Accredited",
        "21-acre eco-friendly campus",
        "₹9.5 LPA highest package (2023)",
        "Focus on AI and sustainable architecture"
      ]
    },
    {
      name: "Uttaranchal University",
      location: "Premnagar, Dehradun",
      city: "Uttarakhand",
      image: "images/university/uttaranchal.jpg",
      link: "/blogs/uttaranchal-university",
      rating: 4.1,
      established: 2013,
      courses: ["Engineering", "Law", "Management", "Pharmacy", "Agriculture"],
      highlights: [
        "NAAC A+ Accredited",
        "200-acre campus with Himalayan views",
        "₹8.5 LPA highest package (2023)",
        "Emphasis on skill-based education"
      ]
    },
    {
      name: "Tula's Institute",
      location: "Dehradun",
      city: "Uttarakhand",
      image: "images/university/tula.jpg",
      link: "/blogs/tulas-institute",
      rating: 4.0,
      established: 2006,
      courses: ["B.Tech", "MBA", "BCA", "BBA", "Hotel Management"],
      highlights: [
        "AICTE & UGC Approved",
        "Entrepreneurship development cell",
        "85% placement record (2023)",
        "Industry visits to IT parks in Dehradun"
      ]
    },
  
    // West Bengal Universities
    {
      name: "Heritage Institute of Technology (HIT)",
      location: "Chowbaga Road, Kolkata",
      city: "West Bengal",
      image: "images/university/heritage.jpg",
      link: "/blogs/heritage-hit",
      rating: 4.2,
      established: 2001,
      courses: ["B.Tech", "M.Tech", "MCA", "BBA"],
      highlights: [
        "NAAC 'A' Accredited",
        "8-acre campus with modern labs",
        "₹12 LPA highest package (2023)",
        "Annual tech fest 'TechnoMain'"
      ]
    },
    {
      name: "Institute of Engineering and Management (IEM)",
      location: "Salt Lake, Kolkata",
      city: "West Bengal",
      image: "images/university/iem.jpg",
      link: "/blogs/iem-kolkata",
      rating: 4.3,
      established: 1989,
      courses: ["B.Tech", "MBA", "M.Tech", "Data Science"],
      highlights: [
        "NBA Accredited programs",
        "₹16 LPA highest package (2023)",
        "Industry-sponsored labs (TCS, Wipro)",
        "100% placement record for 5+ years"
      ]
    },
    {
      name: "Narula Institute of Technology (NIT)",
      location: "Agarpara, Kolkata",
      city: "West Bengal",
      image: "images/university/nit.jpg",
      link: "/blogs/nit-kolkata",
      rating: 4.0,
      established: 2001,
      courses: ["B.Tech", "M.Tech", "MCA", "BCA"],
      highlights: [
        "NBA Accredited (Tier-I)",
        "JIS Group flagship institution",
        "₹9 LPA highest package (2023)",
        "Focus on IoT and embedded systems"
      ]
    },
    {
      name: "JIS College of Engineering",
      location: "Kalyani, Nadia",
      city: "West Bengal",
      image: "images/university/jis.jpg",
      link: "/blogs/jis-nadia",
      rating: 4.1,
      established: 2000,
      courses: ["B.Tech", "M.Tech", "MBA", "Polytechnic"],
      highlights: [
        "Autonomous status (MAKAUT)",
        "NAAC 'A' Grade",
        "Innovation hub with 3D printing lab",
        "Strong railway and PSU placements"
      ]
    },
    {
      name: "Haldia Institute of Technology (HIT)",
      location: "Haldia",
      city: "West Bengal",
      image: "images/university/haldia.jpg",
      link: "/blogs/hit-haldia",
      rating: 4.0,
      established: 1996,
      courses: ["B.Tech", "M.Tech", "MBA", "Chemical Engineering"],
      highlights: [
        "Oldest private engineering college in WB",
        "Strong chemical industry connections",
        "₹7.5 LPA highest package (2023)",
        "Affordable fees (₹75k/year avg.)"
      ]
    }      
  ];


const resultsContainer = document.getElementById("resultsContainer");
const searchInput = document.getElementById("searchInput");
const citySelect = document.getElementById("citySelect");
const cityHeading = document.getElementById("cityHeading");
const selectedCitySpan = document.getElementById("selectedCity");

function displayUniversities() {
  const city = citySelect.value.toLowerCase();
  const query = searchInput.value.toLowerCase();

  resultsContainer.innerHTML = "";
  
  // Show/hide city heading based on city selection
  if (city) {
      cityHeading.classList.remove("hidden");
      cityHeading.classList.add("show");
      selectedCitySpan.textContent = citySelect.value;
  } else {
      cityHeading.classList.remove("show");
      setTimeout(() => cityHeading.classList.add("hidden"), 400);
  }

  // Show results container if there's either a city selected OR a search query
  if (city || query) {
      resultsContainer.classList.remove("hidden");
  } else {
      resultsContainer.classList.add("hidden");
      return;
  }

  const filtered = universities.filter(u =>
      (city === "" || u.city.toLowerCase() === city) &&
      (query === "" || u.name.toLowerCase().includes(query) || 
      u.location.toLowerCase().includes(query))
  );

  // Sort by rating and get top results (show more if searching without city)
  const maxResults = city ? 5 : 10; // Show more results when searching without city filter
  const displayedUniversities = [...filtered].sort((a, b) => b.rating - a.rating).slice(0, maxResults);

  if (displayedUniversities.length === 0) {
      resultsContainer.innerHTML = `
          <div class="col-span-full text-center py-12">
              <i class="fas fa-university text-5xl text-gray-300 mb-4"></i>
              <h3 class="text-xl font-medium text-gray-600">No universities found</h3>
              <p class="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
      `;
      return;
  }

  // Rest of your card creation code remains the same...
  displayedUniversities.forEach(u => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col";
    card.innerHTML = `
        <div class="relative h-48 sm:h-56 overflow-hidden">
            <img src="${u.image}" alt="${u.name}" class="w-full h-full object-cover">
            <div class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                ${u.rating} <i class="fas fa-star ml-1"></i>
            </div>
        </div>
        <div class="p-6 ">
            <div class="flex justify-between items-start">
                <div>
                    <h2 class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">${u.name}</h2>
                    <div class="flex items-center mt-1 text-gray-600">
                        <i class="fas fa-map-marker-alt mr-1 text-sm"></i>
                        <span class="text-sm">${u.location}, ${u.city}</span>
                    </div>
                </div>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Est. ${u.established}</span>
            </div>
            
            <div class="mt-4">
                <div class="flex flex-wrap gap-1 mb-3">
                    ${u.highlights.map(h => `<span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${h}</span>`).join('')}
                </div>
                
                <div class="text-sm text-gray-600 mb-4">
                    <p class="font-medium">Popular Courses:</p>
                    <p>${u.courses.slice(0, 3).join(', ')}${u.courses.length > 3 ? '...' : ''}</p>
                </div>
                
                <div class="flex justify-between items-center">
                    <div class="flex space-x-1 text-yellow-400">
                        ${Array(Math.floor(u.rating)).fill('<i class="fas fa-star"></i>').join('')}
                        ${u.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                        <span class="text-gray-600 text-sm ml-1">(${u.rating})</span>
                    </div>
                    <a href="${u.link}" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all">
                        View Details <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    resultsContainer.appendChild(card);
});
}
// Remove the window.onload call to prevent initial display
searchInput.addEventListener("input", displayUniversities);
citySelect.addEventListener("change", displayUniversities);