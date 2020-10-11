import React, { useEffect, useState } from 'react'
import styles from './styles'

export type ThemeToggleProps = {}

type Theme = 'light-theme' | 'dark-theme'

const loadTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('preferredTheme') || 'light-theme') as Theme
  }
  return 'light-theme'
}

const saveTheme = (theme: Theme) => {
  document.body.classList.remove('light-theme', 'dark-theme')
  document.body.classList.add(theme)

  if (typeof window !== 'undefined') {
    localStorage.setItem('preferredTheme', theme)
  }
}

const getToggledTheme = (theme: Theme): Theme => {
  return theme === 'light-theme' ? 'dark-theme' : 'light-theme'
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  const [theme, setTheme] = useState(loadTheme())

  // Only render after rehydrate to avoid stale info in ssr
  if (!hasMounted) {
    return null
  }

  const toggle = () => {
    const toggledTheme = getToggledTheme(theme)
    setTheme(toggledTheme)
    saveTheme(toggledTheme)
  }

  const icon = {
    'light-theme': <SunIcon color="black" />,
    'dark-theme': <MoonIcon color="white" />,
  }[theme]

  return (
    <button onClick={toggle} css={styles.toggle}>
      {icon}
    </button>
  )
}

const SunIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const MoonIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)
