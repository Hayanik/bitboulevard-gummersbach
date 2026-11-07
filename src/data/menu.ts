// Transcribed from the four published original menu images, retrieved 2026-11-07.
// Prices in euro cents. Allergen letters reproduce the printed card, not a completeness assessment.
export type Dish = {
  number: string; name: string; nameEn: string; price: number;
  detail?: string; detailEn?: string; allergens: string[]; large?: number;
};
export type Category = { id: string; title: string; titleEn: string; dishes: Dish[] };
export const menu: Category[] = [
  {
    "id": "vorspeisen",
    "title": "Vorspeisen & Salate",
    "titleEn": "Starters & salads",
    "dishes": [
      {
        "number": "3",
        "name": "Vorspeisenteller „Bit Boulevard“",
        "nameEn": "Bit Boulevard starter platter",
        "price": 1600,
        "detail": "Verschiedene griechische Kleinigkeiten.",
        "detailEn": "A selection of Greek small dishes.",
        "allergens": []
      },
      {
        "number": "4",
        "name": "Tzatziki",
        "nameEn": "Tzatziki",
        "price": 500,
        "allergens": [
          "G"
        ]
      },
      {
        "number": "5",
        "name": "Schafskäse natur",
        "nameEn": "Sheep’s cheese",
        "price": 750,
        "detail": "Mit Tomaten, Gurken, Oliven und Peperoni.",
        "detailEn": "With tomatoes, cucumber, olives and pickled peppers.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "6",
        "name": "Saganaki, frittiert",
        "nameEn": "Fried saganaki",
        "price": 990,
        "detail": "Panierter Schafskäse mit Gurken, Tomaten, Oliven und Peperoni.",
        "detailEn": "Breaded sheep’s cheese with cucumber, tomatoes, olives and pickled peppers.",
        "allergens": [
          "A",
          "G"
        ]
      },
      {
        "number": "14",
        "name": "Biugiourdi",
        "nameEn": "Biugiourdi",
        "price": 990,
        "detail": "Schafskäse aus dem Ofen mit Tomaten, Oliven, Zwiebeln und Peperoni.",
        "detailEn": "Oven-baked sheep’s cheese with tomatoes, olives, onions and pickled peppers.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "70",
        "name": "Garnelenpfännchen",
        "nameEn": "Prawns in a pan",
        "price": 1450,
        "detail": "In Knoblauchsauce.",
        "detailEn": "In garlic sauce.",
        "allergens": [
          "B"
        ]
      },
      {
        "number": "71",
        "name": "Gegrillte Champignons",
        "nameEn": "Grilled mushrooms",
        "price": 750,
        "detail": "In Knoblauchsauce.",
        "detailEn": "In garlic sauce.",
        "allergens": []
      },
      {
        "number": "72",
        "name": "Gegrillte Peperoni",
        "nameEn": "Grilled peppers",
        "price": 750,
        "detail": "In Knoblauchsauce.",
        "detailEn": "In garlic sauce.",
        "allergens": []
      },
      {
        "number": "88",
        "name": "Bunter Salat mit Garnelen",
        "nameEn": "Seasonal salad with prawns",
        "price": 1800,
        "detail": "Mit Essig-Öl-Dressing und Brot.",
        "detailEn": "With oil and vinegar dressing and bread.",
        "allergens": [
          "B"
        ]
      },
      {
        "number": "8",
        "name": "Bunter Salat mit Hähnchenbrust",
        "nameEn": "Seasonal salad with chicken breast",
        "price": 1450,
        "detail": "Mit Essig-Öl-Dressing und Brot.",
        "detailEn": "With oil and vinegar dressing and bread.",
        "allergens": []
      },
      {
        "number": "7",
        "name": "Bunter Salat mit Thunfisch & Käse",
        "nameEn": "Seasonal salad with tuna & cheese",
        "price": 1450,
        "detail": "Mit Essig-Öl-Dressing und Brot.",
        "detailEn": "With oil and vinegar dressing and bread.",
        "allergens": [
          "D",
          "G"
        ]
      },
      {
        "number": "11",
        "name": "Bauernsalat",
        "nameEn": "Greek salad",
        "price": 1250,
        "detail": "Mit Tomaten, Gurken, Zwiebeln, Oliven, Peperoni und Schafskäse. Essig-Öl-Dressing und Brot.",
        "detailEn": "With tomatoes, cucumber, onions, olives, pickled peppers and sheep’s cheese. Oil and vinegar dressing and bread.",
        "allergens": [
          "G"
        ]
      }
    ]
  },
  {
    "id": "spezialitaeten",
    "title": "Griechische Spezialitäten",
    "titleEn": "Greek specialities",
    "dishes": [
      {
        "number": "26",
        "name": "Gyrosteller",
        "nameEn": "Gyros plate",
        "price": 1490,
        "detail": "Mit Tzatziki, Pommes, Zwiebeln und Beilagensalat.",
        "detailEn": "With tzatziki, fries, onions and a side salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "28",
        "name": "Gyrospfännchen mit Metaxasauce",
        "nameEn": "Gyros in Metaxa sauce",
        "price": 1590,
        "detail": "Mit Schafskäse oder Gouda überbacken. Dazu Pommes und Salat.",
        "detailEn": "Baked with your choice of sheep’s cheese or Gouda. Served with fries and salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "73",
        "name": "Souvlaki-Teller nach Bauernart",
        "nameEn": "Country-style souvlaki plate",
        "price": 1590,
        "detail": "Zwei Schweinenackenspieße mit Tzatziki, Pommes und Salat.",
        "detailEn": "Two pork neck skewers with tzatziki, fries and salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "25",
        "name": "Grillteller nach Art des Hauses",
        "nameEn": "House mixed grill",
        "price": 2090,
        "detail": "Gyros, Hähnchensteak, Souvlaki und Schweinefilet mit Tzatziki, Pommes, Schafskäse und Salat.",
        "detailEn": "Gyros, chicken steak, souvlaki and pork fillet with tzatziki, fries, sheep’s cheese and salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "25a",
        "name": "Grillteller für 2 Personen",
        "nameEn": "House mixed grill for two",
        "price": 4000,
        "detail": "Gyros, Hähnchensteak, Souvlaki und Schweinefilet mit Tzatziki, Pommes, Schafskäse und Salat.",
        "detailEn": "Gyros, chicken steak, souvlaki and pork fillet with tzatziki, fries, sheep’s cheese and salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "74",
        "name": "Hähnchensouvlaki",
        "nameEn": "Chicken souvlaki",
        "price": 1690,
        "detail": "Mit Tzatziki, Pommes und Salat.",
        "detailEn": "With tzatziki, fries and salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "",
        "name": "Fischteller „Bit Boulevard“",
        "nameEn": "Bit Boulevard fish platter",
        "price": 2350,
        "detail": "Zander, Lachs, Calamari und Garnelen. Dazu hausgemachter Rote-Bete-Dip und Reis.",
        "detailEn": "Pike-perch, salmon, calamari and prawns with homemade beetroot dip and rice.",
        "allergens": [
          "B",
          "D"
        ]
      }
    ]
  },
  {
    "id": "pizza",
    "title": "Pizza · 20 & 24 cm",
    "titleEn": "Pizza · 20 & 24 cm",
    "dishes": [
      {
        "number": "40",
        "name": "Pizza Margherita",
        "nameEn": "Pizza Margherita",
        "price": 600,
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 800
      },
      {
        "number": "41",
        "name": "Pizza Funghi",
        "nameEn": "Pizza Funghi",
        "price": 700,
        "detail": "Mit Pilzen.",
        "detailEn": "With mushrooms.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 900
      },
      {
        "number": "42",
        "name": "Pizza Tonno",
        "nameEn": "Pizza Tonno",
        "price": 800,
        "detail": "Mit Thunfisch und Zwiebeln.",
        "detailEn": "With tuna and onions.",
        "allergens": [
          "A",
          "C",
          "D",
          "G"
        ],
        "large": 1000
      },
      {
        "number": "43",
        "name": "Pizza Trieste",
        "nameEn": "Pizza Trieste",
        "price": 800,
        "detail": "Mit Schinken und Pilzen.",
        "detailEn": "With ham and mushrooms.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1000
      },
      {
        "number": "44",
        "name": "Pizza Salami",
        "nameEn": "Pizza Salami",
        "price": 800,
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1000
      },
      {
        "number": "45",
        "name": "Pizza Toscana",
        "nameEn": "Pizza Toscana",
        "price": 850,
        "detail": "Mit Thunfisch, Schinken und Zwiebeln.",
        "detailEn": "With tuna, ham and onions.",
        "allergens": [
          "A",
          "C",
          "D",
          "G"
        ],
        "large": 1050
      },
      {
        "number": "46",
        "name": "Pizza Hellas",
        "nameEn": "Pizza Hellas",
        "price": 950,
        "detail": "Mit Gyros, Schafskäse, Oliven und Peperoni.",
        "detailEn": "With gyros, sheep’s cheese, olives and pickled peppers.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1190
      },
      {
        "number": "47",
        "name": "Pizza Aginara",
        "nameEn": "Pizza Aginara",
        "price": 950,
        "detail": "Mit Artischocken, Schinken, Krabben und Zwiebeln.",
        "detailEn": "With artichokes, ham, shrimp and onions.",
        "allergens": [
          "A",
          "B",
          "C",
          "G"
        ],
        "large": 1150
      },
      {
        "number": "48",
        "name": "Pizza Hawaii",
        "nameEn": "Pizza Hawaii",
        "price": 850,
        "detail": "Mit Schinken und Ananas.",
        "detailEn": "With ham and pineapple.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1050
      },
      {
        "number": "49",
        "name": "Pizza Spezial",
        "nameEn": "Pizza Spezial",
        "price": 950,
        "detail": "Mit Champignons, Salami, Schinken, Krabben und Zwiebeln.",
        "detailEn": "With mushrooms, salami, ham, shrimp and onions.",
        "allergens": [
          "A",
          "B",
          "C",
          "G"
        ],
        "large": 1150
      },
      {
        "number": "50",
        "name": "Pizza Bit Boulevard",
        "nameEn": "Pizza Bit Boulevard",
        "price": 950,
        "detail": "Mit Gyros, Pilzen, Salami, Schinken und Peperoni.",
        "detailEn": "With gyros, mushrooms, salami, ham and pickled peppers.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1190
      },
      {
        "number": "51",
        "name": "Pizza Vegetarisch",
        "nameEn": "Vegetarian pizza",
        "price": 900,
        "detail": "Mit Mais, Artischocken, frischen Tomaten, Paprika und Zwiebeln.",
        "detailEn": "With sweetcorn, artichokes, fresh tomatoes, bell peppers and onions.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1100
      },
      {
        "number": "52",
        "name": "Pizza Mykonos",
        "nameEn": "Pizza Mykonos",
        "price": 900,
        "detail": "Mit Schafskäse, frischen Tomaten, Peperoni und Zwiebeln.",
        "detailEn": "With sheep’s cheese, fresh tomatoes, pickled peppers and onions.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1100
      },
      {
        "number": "53",
        "name": "Pizza Saloniki",
        "nameEn": "Pizza Saloniki",
        "price": 800,
        "detail": "Mit Salami und Schinken.",
        "detailEn": "With salami and ham.",
        "allergens": [
          "A",
          "C",
          "G"
        ],
        "large": 1000
      }
    ]
  },
  {
    "id": "fleisch",
    "title": "Fleischgerichte",
    "titleEn": "Meat dishes",
    "dishes": [
      {
        "number": "75",
        "name": "Champignonrahmschnitzel",
        "nameEn": "Schnitzel in creamy mushroom sauce",
        "price": 1650,
        "detail": "Mit Kroketten oder Pommes und Salat.",
        "detailEn": "With croquettes or fries and salad.",
        "allergens": [
          "A",
          "G"
        ]
      },
      {
        "number": "23",
        "name": "Paprikaschnitzel",
        "nameEn": "Schnitzel in pepper sauce",
        "price": 1600,
        "detail": "Mit Kroketten oder Pommes und Salat.",
        "detailEn": "With croquettes or fries and salad.",
        "allergens": [
          "A"
        ]
      },
      {
        "number": "76",
        "name": "Pfefferrahmschnitzel",
        "nameEn": "Schnitzel in creamy peppercorn sauce",
        "price": 1600,
        "detail": "Mit Kroketten oder Pommes und Salat.",
        "detailEn": "With croquettes or fries and salad.",
        "allergens": [
          "A",
          "G"
        ]
      },
      {
        "number": "78",
        "name": "Schnitzel Wiener Art",
        "nameEn": "Viennese-style schnitzel",
        "price": 1500,
        "detail": "Mit Pommes und Salat.",
        "detailEn": "With fries and salad.",
        "allergens": [
          "A"
        ]
      },
      {
        "number": "20",
        "name": "Medaillons vom Schweinefilet · Pfefferrahm",
        "nameEn": "Pork fillet medallions · peppercorn cream",
        "price": 1850,
        "detail": "Mit Kroketten, Pfefferrahmsauce und Beilagensalat.",
        "detailEn": "With croquettes, creamy peppercorn sauce and a side salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "21",
        "name": "Medaillons vom Schweinefilet · Kräuterbutter",
        "nameEn": "Pork fillet medallions · herb butter",
        "price": 1750,
        "detail": "Mit Pommes, Kräuterbutter und Beilagensalat.",
        "detailEn": "With fries, herb butter and a side salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "16",
        "name": "Rumpsteak · Kräuterbutter",
        "nameEn": "Rump steak · herb butter",
        "price": 2750,
        "detail": "Ca. 200 g. Mit Pommes, Kräuterbutter und Beilagensalat.",
        "detailEn": "Approx. 200 g. With fries, herb butter and a side salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "17",
        "name": "Rumpsteak · Pfeffersauce",
        "nameEn": "Rump steak · peppercorn sauce",
        "price": 2850,
        "detail": "Ca. 200 g. Mit Kroketten, Pfeffersauce und Beilagensalat.",
        "detailEn": "Approx. 200 g. With croquettes, peppercorn sauce and a side salad.",
        "allergens": [
          "G"
        ]
      },
      {
        "number": "82",
        "name": "Hähnchenbruststeak",
        "nameEn": "Chicken breast steak",
        "price": 1690,
        "detail": "Mit Pommes, Kräuterbutter und Beilagensalat.",
        "detailEn": "With fries, herb butter and a side salad.",
        "allergens": [
          "G"
        ]
      }
    ]
  },
  {
    "id": "beilagen",
    "title": "Beilagen & Extras",
    "titleEn": "Sides & extras",
    "dishes": [
      {
        "number": "",
        "name": "Pommes",
        "nameEn": "Fries",
        "price": 300,
        "allergens": []
      },
      {
        "number": "",
        "name": "Kroketten",
        "nameEn": "Croquettes",
        "price": 300,
        "allergens": []
      },
      {
        "number": "",
        "name": "Ketchup / Mayonnaise",
        "nameEn": "Ketchup / mayonnaise",
        "price": 50,
        "allergens": []
      },
      {
        "number": "",
        "name": "Pfeffersauce",
        "nameEn": "Peppercorn sauce",
        "price": 250,
        "allergens": []
      },
      {
        "number": "",
        "name": "Rahmsauce",
        "nameEn": "Cream sauce",
        "price": 250,
        "allergens": []
      },
      {
        "number": "",
        "name": "Metaxasauce",
        "nameEn": "Metaxa sauce",
        "price": 250,
        "allergens": []
      },
      {
        "number": "",
        "name": "Kräuterbutter",
        "nameEn": "Herb butter",
        "price": 250,
        "allergens": []
      }
    ]
  }
];
export const allergenNames: Record<string, [string, string]> = {
 A: ['Weizen', 'Wheat'], B: ['Krebstiere', 'Crustaceans'], C: ['Eier', 'Eggs'],
 D: ['Fisch', 'Fish'], E: ['Erdnüsse', 'Peanuts'], F: ['Soja', 'Soy'],
 G: ['Milch', 'Milk'], H: ['Schalenfrüchte', 'Tree nuts'], I: ['Sellerie', 'Celery'],
 J: ['Senf', 'Mustard'], K: ['Sesamsamen', 'Sesame'], L: ['Schwefeldioxid', 'Sulphur dioxide'],
 M: ['Lupinen', 'Lupin'], N: ['Weichtiere', 'Molluscs'],
};
export function normalizeSearch(value: string) {
 return value.toLowerCase().replace(/ß/g, 'ss').replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
  .normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\b(zaziki|tsatsiki)\b/g, 'tzatziki');
}
export function matchesDish(dish: Dish, group: Category, query: string) {
 const number = query.trim().match(/^(?:#|nr\.?\s*)?(\d+[a-z]?)$/i);
 if (number) return dish.number.toLowerCase() === number[1].toLowerCase();
 const haystack = normalizeSearch([dish.number, dish.name, dish.nameEn, dish.detail, dish.detailEn, group.title, group.titleEn,
  dish.name === 'Tzatziki' ? 'Zaziki Tsatsiki' : '', dish.large ? '20 cm 24 cm klein gross small large' : ''].join(' '));
 return normalizeSearch(query).split(' ').filter(Boolean).every(term => haystack.includes(term));
}
