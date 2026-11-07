import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { menu } from '../data/menu';
import { categoryNames, englishDish } from '../data/menu-en';
import type { Language } from '../config/locale';

function normalize(value: string) {
  return value.toLowerCase().replace(/ß/g, 'ss').replace(/\u00ad/g, '')
    .normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

export default function MenuExplorer({ lang }: { lang: Language }) {
  const en = lang === 'en';
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  const term = normalize(query.trim());
  const groups = en ? menu.map(group => ({ ...group, title: categoryNames[group.id], dishes: group.dishes.map(englishDish) })) : menu;
  const visible = groups.filter(group => !category || category === group.id).map(group => ({
    ...group,
    dishes: group.dishes.filter(dish => normalize(`${dish.name} ${dish.detail ?? ''}`).includes(term)),
  })).filter(group => group.dishes.length > 0);
  const count = visible.reduce((sum, group) => sum + group.dishes.length, 0);
  const searchLabel = en ? 'Search dishes' : 'Gericht suchen';

  return (
    <div className="menu-explorer">
      <div className="menu-controls" hidden={!ready}>
        <fieldset>
          <legend className="eyebrow">{en ? 'Filter by category' : 'Nach Kategorie filtern'}</legend>
          <div className="filters">
            {[{ id: '', title: en ? 'All' : 'Alle' }, ...groups].map(group =>
              <button key={group.id} type="button" aria-pressed={category === group.id}
                onClick={() => setCategory(group.id)}>{group.title}</button>
            )}
          </div>
        </fieldset>
        <label className="menu-search"><Search size={20} aria-hidden="true"/><span className="sr-only">{searchLabel}</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={searchLabel}/></label>
        <p className="sr-only" role="status">{count} {en ? (count === 1 ? 'result' : 'results') : (count === 1 ? 'Eintrag' : 'Einträge')}</p>
      </div>
      {!count && <p className="empty">{en ? 'No dishes match your selection.' : 'Für diese Auswahl haben wir keine Einträge gefunden.'}</p>}
      {visible.map(group => (
        <section className="menu-category" key={group.id} id={group.id} aria-labelledby={`title-${group.id}`}>
          <h2 id={`title-${group.id}`}>{group.title}</h2>
          <ul className="menu-list">
            {group.dishes.map(dish => <li key={dish.name}><h3>{dish.name}</h3>{dish.detail && <p>{dish.detail}</p>}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}
