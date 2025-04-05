import React from 'react';
//import './CategoryBar.css';

interface CategoryBarProps {
  selected: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { key: 'general', label: '전체' },
  { key: 'business', label: '경제' },
  { key: 'politics', label: '정치' },
  { key: 'entertainment', label: '문화' },
  { key: 'technology', label: '기술' },
  { key: 'sports', label: '스포츠' },
  { key: 'health', label: '건강' },
];

const CategoryBar: React.FC<CategoryBarProps> = ({ selected, onSelectCategory }) => {
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={selected === cat.key ? 'category-button active' : 'category-button'}
          onClick={() => onSelectCategory(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
