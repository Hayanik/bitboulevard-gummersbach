import { useEffect, useState } from 'react';
import { Search, X, UtensilsCrossed, Salad, Flame, Pizza, Beef, CookingPot, SlidersHorizontal } from 'lucide-react';
import { menu, allergenNames, matchesDish } from '../data/menu';
import type { Language } from '../config/locale';

const icons = [Salad, Flame, Pizza, Beef, CookingPot];
export default function MenuExplorer({ lang }: { lang: Language }) {
  const en = lang === 'en';
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('card');
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  const reset = () => { setCategory(''); setQuery(''); setSort('card'); };
  const groups = menu.map(group => ({ ...group, dishes: group.dishes.filter(dish => matchesDish(dish, group, query)) }));
  const visible = groups.filter(group => !category || category === group.id).map(group => ({
    ...group, dishes: [...group.dishes].sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : 0),
  })).filter(group => group.dishes.length);
  const count = visible.reduce((sum, group) => sum + group.dishes.length, 0);
  const money = (cents: number) => new Intl.NumberFormat(en ? 'en-IE' : 'de-DE', { style: 'currency', currency: 'EUR' }).format(cents / 100);

  return <div className="menu-explorer" id="gerichte">
    <div className="menu-controls menu-console" hidden={!ready}>
      <div className="menu-console-head"><p className="eyebrow"><SlidersHorizontal size={16} aria-hidden="true"/>{en ? 'Find your favourite' : 'Finde deinen Favoriten'}</p><span>49 {en ? 'dishes & extras' : 'Gerichte & Extras'}</span></div>
      <div className="menu-search-row">
        <div className="menu-search"><Search size={22} aria-hidden="true"/><label className="sr-only" htmlFor="dish-search">{en ? 'Search names, ingredients or dish numbers' : 'Namen, Zutaten oder Kartennummer suchen'}</label><input id="dish-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={en ? 'Gyros, tuna, 25a …' : 'Gyros, Thunfisch, 25a …'} aria-describedby="search-help"/>{query && <button className="icon-button" type="button" onClick={() => setQuery('')} aria-label={en ? 'Clear search' : 'Suche leeren'}><X size={18} aria-hidden="true"/></button>}</div>
        <label className="menu-sort"><span id="dish-sort-label">{en ? 'Order by' : 'Sortierung'}</span><select aria-labelledby="dish-sort-label" value={sort} onChange={event => setSort(event.target.value)}><option value="card">{en ? 'Menu order' : 'Wie auf der Karte'}</option><option value="low">{en ? 'Price: low to high' : 'Preis aufsteigend'}</option><option value="high">{en ? 'Price: high to low' : 'Preis absteigend'}</option></select></label>
      </div>
      <p className="search-help" id="search-help">{en ? 'Search in German or English. Multiple words narrow your results. Sorting applies within each category. Pizza prices sort by the 20 cm size.' : 'Suche auf Deutsch oder Englisch. Mehrere Begriffe grenzen ein. Sortiert wird je Kategorie. Bei Pizza zählt für die Sortierung die Größe 20 cm.'}</p>
      <fieldset><legend className="sr-only">{en ? 'Filter by category' : 'Nach Kategorie filtern'}</legend><div className="filters menu-tabs">
        <button type="button" aria-pressed={!category} onClick={() => setCategory('')}><UtensilsCrossed size={17} aria-hidden="true"/>{en ? 'All' : 'Alle'}<span>{groups.reduce((n, g) => n + g.dishes.length, 0)}</span></button>
        {groups.map((group, i) => { const Icon = icons[i]; return <button key={group.id} type="button" aria-pressed={category === group.id} onClick={() => setCategory(group.id)}><Icon size={17} aria-hidden="true"/>{en ? group.titleEn : group.title}<span>{group.dishes.length}</span></button>; })}
      </div></fieldset>
      <div className="menu-results"><p role="status" aria-live="polite" aria-atomic="true">{count} {en ? (count === 1 ? 'result' : 'results') : (count === 1 ? 'Treffer' : 'Treffer')}{query && <> · “{query}”</>}</p>{(query || category || sort !== 'card') && <button className="text-link" type="button" onClick={reset}>{en ? 'Reset filters' : 'Filter zurücksetzen'}<X size={15} aria-hidden="true"/></button>}</div>
    </div>
    {!count && <div className="empty"><Search size={32} aria-hidden="true"/><h2>{en ? 'Nothing on the plate yet.' : 'Noch nichts auf dem Teller.'}</h2><p>{en ? 'Try a different ingredient or clear the filters.' : 'Probiere eine andere Zutat oder setze die Filter zurück.'}</p><button className="button button-dark" type="button" onClick={reset}>{en ? 'Show the full menu' : 'Ganze Karte anzeigen'}</button></div>}
    {visible.map(group => <section className="menu-category" key={group.id} id={group.id} aria-labelledby={'title-' + group.id}>
      <div className="menu-category-head"><h2 id={'title-' + group.id}>{en ? group.titleEn : group.title}</h2><span>{String(group.dishes.length).padStart(2, '0')}</span></div>
      <ul className="menu-list">{group.dishes.map(dish => <li key={dish.number || dish.name}>
        <div className="dish-heading"><span className="dish-number">{dish.number ? '#' + dish.number : '—'}</span><h3>{en ? dish.nameEn : dish.name}</h3></div>
        {dish.detail && <p>{en ? dish.detailEn : dish.detail}</p>}
        <div className="dish-bottom"><div>{dish.allergens.length > 0 && <details className="dish-allergens"><summary>{en ? 'Allergens' : 'Allergene'} · {dish.allergens.join(', ')}</summary><p>{dish.allergens.map(code => allergenNames[code][en ? 1 : 0]).join(' · ')}<br/>{en ? 'As labelled on the original menu.' : 'Kennzeichnung laut Originalkarte.'}</p></details>}</div>
        <div className="dish-prices">{dish.large ? <><span><small>20 cm</small>{money(dish.price)}</span><span><small>24 cm</small>{money(dish.large)}</span></> : <span>{money(dish.price)}</span>}</div></div>
      </li>)}</ul>
    </section>)}
  </div>;
}
