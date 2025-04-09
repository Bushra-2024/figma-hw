'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
   <div className="flex flex-col gap-2">
  <select
    id="language-select"
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    defaultValue={i18n.language}
    className="border border-gray-300 rounded-md p-2"
  >
    <option value="en">English</option>
    <option value="tj">Tajik</option>
  </select>
</div>

  );
}