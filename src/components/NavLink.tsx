import React from 'react';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

/**
 * Renders a real <a href> so crawlers can discover and follow internal links,
 * while still performing instant client-side SPA navigation on click
 * (no full page reload) for real users.
 */
export const NavLink: React.FC<NavLinkProps> = ({ to, onNavigate, children, onClick, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow modifier-key/middle clicks to open in a new tab normally.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    onNavigate(to);
    onClick?.(e);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
