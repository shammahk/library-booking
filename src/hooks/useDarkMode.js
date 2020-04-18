import React from 'react';

const preferredScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function useDarkMode() {
    const [isDark, setDark] = React.useState(preferredScheme);

    return { isDark, setDark }
}