import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { NavLink } from './NavLink';
import { getDynamicBreadcrumbs } from '../lib/breadcrumbs';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  path?: string;
  titleOverride?: string;
  onNavigate: (path: string) => void;
  className?: string;
  variant?: 'light' | 'dark' | 'slate';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  path,
  titleOverride,
  onNavigate,
  className = '',
  variant = 'light',
}) => {
  const currentPathname =
    path || (typeof window !== 'undefined' ? window.location.pathname : '/');

  const resolvedItems =
    items && items.length > 0
      ? items
      : getDynamicBreadcrumbs(currentPathname, { title: titleOverride });

  if (!resolvedItems || resolvedItems.length === 0) return null;

  const baseUrl = 'https://fortworthsecuritycameras.com';

  // Construct JSON-LD BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: resolvedItems.map((item, index) => {
      let itemUrl = baseUrl;
      if (item.path) {
        if (item.path.startsWith('http')) {
          itemUrl = item.path;
        } else {
          const cleanPath = item.path.startsWith('/') ? item.path : `/${item.path}`;
          itemUrl = `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
        }
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: itemUrl,
      };
    }),
  };

  // Color theme classes based on variant
  const themeClasses = {
    light: {
      container: 'bg-white border-b border-slate-200 text-slate-600',
      link: 'text-slate-600 hover:text-[#007EFF] hover:underline',
      active: 'text-slate-900 font-semibold',
      separator: 'text-slate-400',
      icon: 'text-slate-500',
    },
    dark: {
      container: 'bg-slate-950 border-b border-slate-800 text-slate-300',
      link: 'text-slate-300 hover:text-white hover:underline',
      active: 'text-white font-semibold',
      separator: 'text-slate-600',
      icon: 'text-slate-400',
    },
    slate: {
      container: 'bg-slate-900 border-b border-slate-800 text-slate-300',
      link: 'text-slate-300 hover:text-[#007EFF] hover:underline',
      active: 'text-white font-semibold',
      separator: 'text-slate-600',
      icon: 'text-[#007EFF]',
    },
  };

  const currentTheme = themeClasses[variant] || themeClasses.light;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`py-2.5 px-4 text-xs font-medium ${currentTheme.container} ${className}`}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
          <ol className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
            {resolvedItems.map((item, index) => {
              const isLast = index === resolvedItems.length - 1;
              const isHome = index === 0 && item.label.toLowerCase() === 'home';

              return (
                <li key={index} className="flex items-center gap-1.5">
                  {!isLast && item.path ? (
                    <NavLink
                      to={item.path!}
                      onNavigate={onNavigate}
                      className={`inline-flex items-center gap-1 transition-colors ${currentTheme.link}`}
                    >
                      {isHome && <Home className={`w-3.5 h-3.5 ${currentTheme.icon}`} />}
                      <span>{item.label}</span>
                    </NavLink>
                  ) : (
                    <span
                      aria-current={isLast ? 'page' : undefined}
                      className={`inline-flex items-center gap-1 ${
                        isLast ? currentTheme.active : currentTheme.link
                      }`}
                    >
                      {isHome && <Home className={`w-3.5 h-3.5 ${currentTheme.icon}`} />}
                      <span>{item.label}</span>
                    </span>
                  )}

                  {!isLast && (
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${currentTheme.separator}`} />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};
