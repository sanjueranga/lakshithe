// components/header.tsx
import { ThemeToggleButton } from "./theme-toggle-button";

export function Header() {
  return (
    <header className="fixed top-0 right-0 p-4 z-50">
      <ThemeToggleButton />
    </header>
  );
}
