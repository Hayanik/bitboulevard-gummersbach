type Dish = { name: string; detail?: string };
type Category = { id: string; title: string; dishes: Dish[] };

export const menu: Category[] = [
  { id: 'vorspeisen', title: 'Vorspeisen & Salate', dishes: [
    { name: 'Gefüllte Weinblätter', detail: 'Sechs Stück mit Tzatziki.' },
    { name: 'Tzatziki' }, { name: 'Saganaki', detail: 'Frittierter Schafskäse in Panade, dazu Oliven, Peperoni, Gurke und Tomate.' },
    { name: 'Bauernsalat', detail: 'Mit Schafskäse, Oliven, Peperoni, Tomaten, Gurken und Zwiebeln.' },
    { name: 'Gegrillte Champignons', detail: 'Dazu Knoblauchsauce.' }, { name: 'Schafskäse' },
    { name: 'Garnelenpfännchen', detail: 'Mit Knoblauchsauce.' }, { name: 'Biugiourdi', detail: 'Schafskäse aus dem Ofen.' },
    { name: 'Salat mit Thunfisch und Käse' }, { name: 'Salat mit Hähnchenbrust' },
    { name: 'Gegrillte Peperoni', detail: 'Dazu Knoblauchsauce.' }, { name: 'Salat mit Garnelen' },
  ] },
  { id: 'spezialitaeten', title: 'Griechische Spezialitäten', dishes: [
    { name: 'Gyrosteller', detail: 'Dazu Pommes, Tzatziki und Zwiebeln.' },
    { name: 'Souvlaki nach Bauernart', detail: 'Zwei Schweinenackenspieße mit Salat, Tzatziki und Pommes.' },
    { name: 'Bifteki', detail: 'Mit Schafskäse gefüllt. Dazu Salat, Pommes und Tzatziki.' },
    { name: 'Grillteller nach Art des Hauses', detail: 'Mit Gyros, Souvlaki, Hähnchensteak und Schweinefilet.' },
    { name: 'Hähnchensouvlaki', detail: 'Dazu Pommes, Salat und Tzatziki.' },
    { name: 'Gyros mit Bauern­souvlaki' }, { name: 'Pita Hähnchen' }, { name: 'Pita Gyros' },
    { name: 'Gyrospfännchen mit Metaxasauce', detail: 'Mit Gouda und Schafskäse überbacken.' },
    { name: 'Gyros mit Champignonrahmsauce' }, { name: 'Gyros mit Pfeffersauce' },
  ] },
  { id: 'pizza', title: 'Pizza', dishes: [
    { name: 'Pizza Margherita', detail: 'Mit Käse und Tomatensauce.' },
    { name: 'Pizza Saloniki', detail: 'Mit Schinken und Salami.' },
    { name: 'Pizza Tonno', detail: 'Mit Zwiebeln und Thunfisch.' },
    { name: 'Pizza Funghi' }, { name: 'Pizza Aginara' }, { name: 'Pizza Toscana' }, { name: 'Pizza Salami' },
    { name: 'Pizza Trieste' }, { name: 'Pizza Vegetarisch' },
    { name: 'Pizza Bit Boulevard', detail: 'Mit Gyros, Peperoni, Pilzen, Schinken und Salami.' },
    { name: 'Pizza Mykonos' }, { name: 'Pizza Spezial' }, { name: 'Pizza Hawaii' },
    { name: 'Pizza Hellas', detail: 'Mit Gyros, Oliven, Peperoni und Schafskäse.' },
  ] },
  { id: 'fleisch', title: 'Fleischgerichte', dishes: [
    { name: 'Schnitzel Wiener Art', detail: 'Dazu Salat und Pommes.' },
    { name: 'Schweinefiletmedaillons', detail: 'Wahlweise mit Pfefferrahmsauce oder Kräuterbutter.' },
    { name: 'Rumpsteak', detail: 'Wahlweise mit Kräuterbutter oder Pfeffersauce.' },
    { name: 'Hähnchenbruststeak', detail: 'Dazu Kräuterbutter, Salat und Pommes.' },
    { name: 'Paprikaschnitzel' }, { name: 'Champignonrahmschnitzel' }, { name: 'Pfefferrahmschnitzel' },
  ] },
  { id: 'beilagen', title: 'Saucen & Beilagen', dishes: [
    { name: 'Pommes frites' }, { name: 'Kroketten' }, { name: 'Reis' },
    { name: 'Kräuterbutter' }, { name: 'Pfeffersauce' }, { name: 'Champignonrahmsauce' },
  ] },
  { id: 'getraenke', title: 'Getränke', dishes: [
    { name: 'Bitburger Pils' }, { name: 'Kölsch' }, { name: 'Grauburgunder' },
    { name: 'Cola' }, { name: 'Cola Zero' }, { name: 'Fanta' }, { name: 'Sprite' },
    { name: 'Fassbrause Zitrone' }, { name: 'Bitter Lemon' }, { name: 'Red Bull' },
    { name: 'Goldmalz' }, { name: 'Vodka' }, { name: 'Whiskey' },
  ] },
];
