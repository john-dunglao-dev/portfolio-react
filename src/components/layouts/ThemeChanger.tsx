import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useState } from 'react';
import { useCapitalization } from '../../hooks/useCapitalization';
import { Themes } from './models/Theme';
import { createPortal } from 'react-dom';

function ThemeChanger() {
  const themeOptions = [
    { label: useCapitalization(Themes.LIGHT), value: Themes.LIGHT },
    { label: useCapitalization(Themes.DARK), value: Themes.DARK },
    { label: useCapitalization(Themes.DRACULA), value: Themes.DRACULA },
    { label: useCapitalization(Themes.NORD), value: Themes.NORD },
    { label: useCapitalization(Themes.MONOKAI), value: Themes.MONOKAI },
    {
      label: useCapitalization(Themes.SOLARIZED_DARK),
      value: Themes.SOLARIZED_DARK,
    },
    {
      label: useCapitalization(Themes.SOLARIZED_LIGHT),
      value: Themes.SOLARIZED_LIGHT,
    },
    { label: useCapitalization(Themes.GITHUB), value: Themes.GITHUB },
    { label: useCapitalization(Themes.GITHUB_DARK), value: Themes.GITHUB_DARK },
    { label: useCapitalization(Themes.ONE_DARK), value: Themes.ONE_DARK },
    { label: useCapitalization(Themes.MATERIAL), value: Themes.MATERIAL },
    {
      label: useCapitalization(Themes.HIGH_CONTRAST),
      value: Themes.HIGH_CONTRAST,
    },
    { label: useCapitalization(Themes.SEPIA), value: Themes.SEPIA },
    { label: useCapitalization(Themes.SYNTHWAVE), value: Themes.SYNTHWAVE },
    { label: useCapitalization(Themes.FOREST), value: Themes.FOREST },
    { label: useCapitalization(Themes.OCEAN), value: Themes.OCEAN },
  ];

  const storageTheme = localStorage.getItem('selectedTheme');
  const [selectedTheme, setSelectedTheme] = useState(
    storageTheme ? JSON.parse(storageTheme) : themeOptions[9]
  );
  document.documentElement.setAttribute('class', selectedTheme.value);

  const handleThemeChange = (theme: (typeof themeOptions)[0]) => {
    setSelectedTheme(theme);
    document.documentElement.setAttribute('class', theme.value);
    localStorage.setItem('selectedTheme', JSON.stringify(theme));
  };

  return (
    <Listbox
      value={selectedTheme}
      onChange={handleThemeChange}
      as="div"
      className="relative inline-block"
    >
      <ListboxButton className="border border-secondary rounded text-secondary px-4 py-1">
        Current Theme: {selectedTheme.label}
      </ListboxButton>

      {createPortal(
        <ListboxOptions
          anchor="bottom"
          className="lg:[--anchor-gap:12px] my-2 border border-secondary rounded bg-background shadow-lg max-h-60! w-(--button-width) overflow-y-auto py-2 z-50"
        >
          {themeOptions.map((option) => (
            <ListboxOption
              className="px-3 py-1 hover:bg-selection cursor-pointer"
              key={option.value}
              value={option}
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>,
        document.body
      )}
    </Listbox>
  );
}

export default ThemeChanger;
