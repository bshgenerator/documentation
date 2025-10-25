import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import * as LucideIcons from 'lucide-react'
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    ...LucideIcons
  }
}