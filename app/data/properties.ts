export type Property = {
  id: number;
  title: string;
  price: string;
  location: string;
  details: string;
  beds: number;
  baths: number;
  area: string;
  type: string;
  status: string;
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Harbor View Villa",
    price: "$1,240,000",
    location: "Beverly Hills, CA",
    details: "Ocean-facing modern villa with private lounge deck",
    beds: 4,
    baths: 3,
    area: "2,930 sq ft",
    type: "Villa",
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Skyline Residence",
    price: "$960,000",
    location: "Downtown Austin, TX",
    details: "Bright penthouse with skyline views and rooftop pool",
    beds: 3,
    baths: 2,
    area: "2,110 sq ft",
    type: "Apartment",
    status: "New",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Maple Creek Townhome",
    price: "$780,000",
    location: "Scottsdale, AZ",
    details: "Contemporary three-level home near parks and transit",
    beds: 3,
    baths: 2,
    area: "1,860 sq ft",
    type: "Townhouse",
    status: "Popular",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Oak Tree Estate",
    price: "$1,890,000",
    location: "Miami, FL",
    details: "Private courtyard home with garden suite and spa",
    beds: 5,
    baths: 4,
    area: "3,620 sq ft",
    type: "Villa",
    status: "Luxury",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
];

export const neighborhoods = [
  {
    name: "Downtown Living",
    subtitle: "Walkable luxury",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Waterfront Homes",
    subtitle: "Sunset views",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Family Estates",
    subtitle: "Parks and schools",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
];
