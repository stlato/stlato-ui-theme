# stlato-ui-theme

[![npm version](https://badge.fury.io/js/stlato-ui-theme.svg)](https://badge.fury.io/js/stlato-ui-theme)

Emotion and Tailwind theme generator powered by Style Dictionary
(Under Construction)

## Install

```bash
yarn add stlato-ui-theme
```

## How to use

### With Emotion

```js
import { css } from 'emotion';
import { theme } from 'stlato-ui-theme';

const root = css`
  color: ${theme.color.text.primary.value};
`;
```

### With Tailwind

```js
import { css } from 'emotion';
import { theme, typographyPlugin } from 'stlato-ui-theme';

module.exports = {
  theme,
  plugins: [typographyPlugin],
};
```

### Customization

```js
import { createTheme } from 'stlato-ui-theme';

const yourOwnTheme = createTheme({ ...yourOwnConfig });
```
