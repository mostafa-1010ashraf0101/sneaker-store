export const products = [
  {
    id: 1,
    name: "Nike Air Max Fury",
    brand: "Nike",
    category: "Running",
    price: 129.99,
    oldPrice: 179.99,
    description: "The Nike Air Max Fury delivers plush cushioning and a bold look. Max Air unit for impact protection.",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600",
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600"
        ]
      },
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600",
          "https://images.unsplash.com/photo-1520256862855-398228c41684?w=600"
        ]
      }
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    outOfStock: [43],
    inStock: 15,
    rating: 4.8,
    reviews: 234,
    reviewsList: [
      { id: 1, user: "Ahmed M.", rating: 5, comment: "Best shoes I ever bought! Super comfortable.", date: "2026-05-01", avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, user: "Sara K.", rating: 4, comment: "Great quality but runs a bit small.", date: "2026-04-28", avatar: "https://i.pravatar.cc/40?img=2" },
      { id: 3, user: "Omar H.", rating: 5, comment: "Worth every penny. Love the design!", date: "2026-04-20", avatar: "https://i.pravatar.cc/40?img=3" }
    ]
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    category: "Running",
    price: 189.99,
    oldPrice: 220.00,
    description: "Energy return like no other. Boost midsole technology for ultimate comfort on long runs.",
    colors: [
      {
        name: "Core Black",
        hex: "#1A1A1A",
        images: [
          "https://images.unsplash.com/photo-1556906781-9a412961c28e?w=600",
          "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600",
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600",
          "https://images.unsplash.com/photo-1603808033587-935942847de4?w=600"
        ]
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    outOfStock: [39, 44],
    inStock: 8,
    rating: 4.9,
    reviews: 412,
    reviewsList: [
      { id: 1, user: "Layla F.", rating: 5, comment: "Perfect for marathon training!", date: "2026-05-03", avatar: "https://i.pravatar.cc/40?img=5" },
      { id: 2, user: "Khaled R.", rating: 5, comment: "Cloud-like comfort. Amazing!", date: "2026-04-29", avatar: "https://i.pravatar.cc/40?img=6" }
    ]
  },
  {
    id: 3,
    name: "Puma RS-X Efekt",
    brand: "Puma",
    category: "Lifestyle",
    price: 99.99,
    oldPrice: 140.00,
    description: "Chunky retro-futuristic design. RS technology for enhanced cushioning and comfort.",
    colors: [
      {
        name: "White/Blue",
        hex: "#3B82F6",
        images: [
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600",
          "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600"
        ]
      }
    ],
    sizes: [40, 41, 42, 43, 44],
    outOfStock: [],
    inStock: 22,
    rating: 4.6,
    reviews: 189,
    reviewsList: [
      { id: 1, user: "Youssef A.", rating: 5, comment: "Super stylish! Gets compliments everywhere.", date: "2026-05-02", avatar: "https://i.pravatar.cc/40?img=7" },
      { id: 2, user: "Nour D.", rating: 4, comment: "Love the colors. Very comfortable.", date: "2026-04-25", avatar: "https://i.pravatar.cc/40?img=8" }
    ]
  },
  {
    id: 4,
    name: "New Balance 990v6",
    brand: "New Balance",
    category: "Running",
    price: 199.99,
    oldPrice: 199.99,
    description: "Made in USA. Premium suede and mesh upper with ENCAP midsole technology.",
    colors: [
      {
        name: "Grey",
        hex: "#6B7280",
        images: [
          "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600",
          "https://images.unsplash.com/photo-1552066344-2464c1135c32?w=600",
          "https://images.unsplash.com/photo-1524532787116-2ae1ab6b8afe?w=600",
          "https://images.unsplash.com/photo-1511556532299-8fdc834781bf?w=600"
        ]
      }
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    outOfStock: [46],
    inStock: 11,
    rating: 4.9,
    reviews: 567,
    reviewsList: [
      { id: 1, user: "Hassan E.", rating: 5, comment: "Premium quality. Worth the investment.", date: "2026-05-04", avatar: "https://i.pravatar.cc/40?img=9" },
      { id: 2, user: "Mariam S.", rating: 5, comment: "Best walking shoes ever!", date: "2026-04-30", avatar: "https://i.pravatar.cc/40?img=10" }
    ]
  },
  {
    id: 5,
    name: "Converse Chuck 70",
    brand: "Converse",
    category: "Lifestyle",
    price: 85.00,
    oldPrice: 110.00,
    description: "Premium canvas upper with vintage details. Ortholite insole for comfort.",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
          "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=600",
          "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600",
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600"
        ]
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    outOfStock: [38],
    inStock: 30,
    rating: 4.7,
    reviews: 1203,
    reviewsList: [
      { id: 1, user: "Ziad T.", rating: 5, comment: "Classic never dies!", date: "2026-05-05", avatar: "https://i.pravatar.cc/40?img=11" },
      { id: 2, user: "Dina W.", rating: 4, comment: "Great casual shoes.", date: "2026-04-27", avatar: "https://i.pravatar.cc/40?img=12" }
    ]
  },
  {
    id: 6,
    name: "Vans Old Skool",
    brand: "Vans",
    category: "Skate",
    price: 65.00,
    oldPrice: 75.00,
    description: "Iconic side stripe. Durable suede and canvas upper with waffle outsole.",
    colors: [
      {
        name: "Black/White",
        hex: "#1F2937",
        images: [
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
          "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=600",
          "https://images.unsplash.com/photo-1579338559194-a162d43bf842?w=600",
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
        ]
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    outOfStock: [],
    inStock: 45,
    rating: 4.8,
    reviews: 892,
    reviewsList: [
      { id: 1, user: "Karim N.", rating: 5, comment: "Perfect for skating!", date: "2026-05-06", avatar: "https://i.pravatar.cc/40?img=13" },
      { id: 2, user: "Fatma L.", rating: 5, comment: "Super durable and stylish.", date: "2026-04-26", avatar: "https://i.pravatar.cc/40?img=14" }
    ]
  }
];