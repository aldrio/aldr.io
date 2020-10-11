import React from 'react'

export type ThemeToggleProps = {}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const toggle = () => {
    const preferredTheme =
      localStorage.getItem('preferredTheme') || 'light-theme'
    const toggledTheme =
      preferredTheme === 'light-theme' ? 'dark-theme' : 'light-theme'

    document.body.classList.remove(preferredTheme)
    document.body.classList.add(toggledTheme)

    localStorage.setItem('preferredTheme', toggledTheme)
  }

  return <button onClick={toggle}>Switch theme</button>
}
