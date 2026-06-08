import brand02 from "@/assets/brand/IMG-20260608-WA0002.jpg.asset.json";
import brand03 from "@/assets/brand/IMG-20260608-WA0003.jpg.asset.json";
import brand06 from "@/assets/brand/IMG-20260608-WA0006.jpg.asset.json";
import brand08 from "@/assets/brand/IMG-20260608-WA0008.jpg.asset.json";
import brand16 from "@/assets/brand/IMG-20260608-WA0016.jpg.asset.json";

export type SubBranch = { name: string; area: string };
export type Branch = {
  slug: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  intro: string;
  image: string;
  established: string;
  subBranches: SubBranch[];
  specialties: string[];
};

export const branches: Branch[] = [
  {
    slug: "chennai",
    city: "Chennai",
    region: "Tamil Nadu — Head Office",
    address: "No. 14, 2nd Floor, GST Road, Tambaram, Chennai — 600045",
    phone: "97894 49019",
    email: "chennai@isquareconstruction.com",
    image: brand08.url,
    established: "2010",
    intro:
      "Our flagship Chennai head office leads project delivery across the metropolitan region with senior engineers, in-house architects and a dedicated quality team.",
    specialties: ["Residential Villas", "High-Rise Apartments", "Corporate Interiors", "Turnkey Solutions"],
    subBranches: [
      { name: "Anna Nagar Studio", area: "West Chennai — Residential & Design" },
      { name: "OMR IT Corridor Hub", area: "South Chennai — Commercial & Tech Parks" },
      { name: "ECR Project Office", area: "Coastal — Luxury Villas & Beach Homes" },
      { name: "Velachery Branch", area: "South — Independent Houses" },
      { name: "Porur Site Office", area: "West — Apartments & Layouts" },
      { name: "Adyar Interior Studio", area: "Central — Premium Interiors" },
    ],
  },
  {
    slug: "coimbatore",
    city: "Coimbatore",
    region: "Tamil Nadu — Western Region",
    address: "3rd Floor, Trichy Road, Ramanathapuram, Coimbatore — 641045",
    phone: "90031 33987",
    email: "coimbatore@isquareconstruction.com",
    image: brand06.url,
    established: "2015",
    intro:
      "The Coimbatore regional office serves the textile capital with industrial sheds, modern bungalows and gated community developments.",
    specialties: ["Industrial Sheds", "Modern Bungalows", "Gated Communities"],
    subBranches: [
      { name: "Saravanampatti Hub", area: "IT Corridor Projects" },
      { name: "Peelamedu Office", area: "Residential & Renovation" },
      { name: "Singanallur Site", area: "Industrial & Warehousing" },
      { name: "Vadavalli Studio", area: "Premium Villas" },
    ],
  },
  {
    slug: "madurai",
    city: "Madurai",
    region: "Tamil Nadu — Southern Region",
    address: "1st Floor, K.K. Nagar Main Road, Madurai — 625020",
    phone: "97894 49019",
    email: "madurai@isquareconstruction.com",
    image: brand16.url,
    established: "2018",
    intro:
      "The Madurai branch caters to temple-city residences, commercial complexes and educational institution builds.",
    specialties: ["Traditional Homes", "Commercial Complexes", "Institutional Builds"],
    subBranches: [
      { name: "Anna Nagar Branch", area: "Central Madurai Residential" },
      { name: "Tirupparankundram Office", area: "Suburban Villas" },
      { name: "Avaniyapuram Site", area: "Layouts & Plotted Developments" },
    ],
  },
  {
    slug: "trichy",
    city: "Trichy",
    region: "Tamil Nadu — Central Region",
    address: "2nd Floor, Cantonment Main Road, Trichy — 620001",
    phone: "90031 33987",
    email: "trichy@isquareconstruction.com",
    image: brand03.url,
    established: "2019",
    intro:
      "Our Trichy office delivers premium homes and commercial spaces with the same 250+ quality checks across central Tamil Nadu.",
    specialties: ["Premium Homes", "Retail Showrooms", "Renovations"],
    subBranches: [
      { name: "Srirangam Studio", area: "Heritage Residential" },
      { name: "Thillai Nagar Hub", area: "Modern Apartments" },
      { name: "K.K. Nagar Office", area: "Commercial Builds" },
    ],
  },
  {
    slug: "bengaluru",
    city: "Bengaluru",
    region: "Karnataka — Inter-State Office",
    address: "5th Floor, 100ft Road, Indiranagar, Bengaluru — 560038",
    phone: "97894 49019",
    email: "bengaluru@isquareconstruction.com",
    image: brand02.url,
    established: "2022",
    intro:
      "Our Bengaluru office extends iSquare's standards to Karnataka with a focus on tech-corridor villas and modern interiors.",
    specialties: ["Luxury Villas", "Tech-Park Interiors", "Smart Homes"],
    subBranches: [
      { name: "Whitefield Studio", area: "East — IT Corridor Villas" },
      { name: "HSR Layout Office", area: "South — Modern Interiors" },
      { name: "Sarjapur Site", area: "South-East — Plotted Villas" },
      { name: "Hebbal Hub", area: "North — Apartments" },
      { name: "Jayanagar Branch", area: "Central — Renovations" },
      { name: "Electronic City Office", area: "South — Smart Homes" },
    ],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);
