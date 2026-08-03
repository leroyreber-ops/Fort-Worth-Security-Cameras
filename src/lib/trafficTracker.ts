export interface TrafficSession {
  id: string;
  timestamp: string;
  path: string;
  pageTitle: string;
  source: 'Google Search' | 'Google Maps DFW' | 'Direct Search' | 'Nextdoor DFW' | 'Bing Organic' | 'Facebook' | 'Local Directory';
  cityDetected: string;
  device: 'Mobile (iPhone)' | 'Mobile (Android)' | 'Desktop (Mac)' | 'Desktop (Windows)' | 'Tablet (iPad)';
  browser: 'Chrome' | 'Safari' | 'Edge' | 'Firefox';
  convertedToLead: boolean;
  searchKeyword?: string;
}

export interface LeadSubmission {
  id: string;
  timestamp: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  cameraCount: number;
  preferredType: string;
  estimatedValue: string;
  sourcePage: string;
  trafficSource: string;
}

export interface TrafficStats {
  totalPageviews: number;
  uniqueVisitors: number;
  leadCount: number;
  conversionRate: number;
  topCities: { city: string; count: number; percentage: number }[];
  topPages: { path: string; title: string; views: number; leads: number }[];
  sourceBreakdown: { source: string; count: number; percentage: number }[];
  deviceBreakdown: { device: string; count: number }[];
  recentSessions: TrafficSession[];
  recentLeads: LeadSubmission[];
}

const STORAGE_KEY_SESSIONS = 'fw_traffic_sessions_v1';
const STORAGE_KEY_LEADS = 'fw_traffic_leads_v1';

// Seed initial realistic analytics data for Fort Worth & DFW traffic tracking
function getSeedSessions(): TrafficSession[] {
  return [
    {
      id: 'sess-101',
      timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
      path: '/outdoor-security-camera-installation-fort-worth',
      pageTitle: 'Outdoor Security Camera Installation Fort Worth',
      source: 'Google Search',
      cityDetected: 'Fort Worth, TX',
      device: 'Mobile (iPhone)',
      browser: 'Safari',
      convertedToLead: true,
      searchKeyword: 'outdoor security camera installer fort worth tx',
    },
    {
      id: 'sess-102',
      timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
      path: '/arlington-tx-security-cameras',
      pageTitle: 'Security Camera Installation Arlington TX',
      source: 'Google Maps DFW',
      cityDetected: 'Arlington, TX',
      device: 'Desktop (Windows)',
      browser: 'Chrome',
      convertedToLead: true,
      searchKeyword: 'cctv installation near me arlington tx',
    },
    {
      id: 'sess-103',
      timestamp: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
      path: '/business-security-cameras-fort-worth',
      pageTitle: 'Business Security Cameras Fort Worth',
      source: 'Google Search',
      cityDetected: 'Fort Worth, TX',
      device: 'Desktop (Mac)',
      browser: 'Chrome',
      convertedToLead: false,
      searchKeyword: 'commercial security cameras warehouse fort worth',
    },
    {
      id: 'sess-104',
      timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString(),
      path: '/keller-tx-security-cameras',
      pageTitle: 'Security Camera Installation Keller TX',
      source: 'Direct Search',
      cityDetected: 'Keller, TX',
      device: 'Mobile (iPhone)',
      browser: 'Safari',
      convertedToLead: false,
    },
    {
      id: 'sess-105',
      timestamp: new Date(Date.now() - 1000 * 60 * 210).toISOString(),
      path: '/poe-security-camera-installation-fort-worth',
      pageTitle: 'PoE Security Camera Installation Fort Worth',
      source: 'Google Search',
      cityDetected: 'Fort Worth, TX',
      device: 'Desktop (Windows)',
      browser: 'Edge',
      convertedToLead: true,
      searchKeyword: '4k poe camera installation fort worth',
    },
    {
      id: 'sess-106',
      timestamp: new Date(Date.now() - 1000 * 60 * 290).toISOString(),
      path: '/mansfield-tx-security-cameras',
      pageTitle: 'Security Camera Installation Mansfield TX',
      source: 'Nextdoor DFW',
      cityDetected: 'Mansfield, TX',
      device: 'Mobile (Android)',
      browser: 'Chrome',
      convertedToLead: false,
    },
    {
      id: 'sess-107',
      timestamp: new Date(Date.now() - 1000 * 60 * 380).toISOString(),
      path: '/wireless-security-camera-installation-fort-worth',
      pageTitle: 'Wireless Security Camera Installation Fort Worth',
      source: 'Google Search',
      cityDetected: 'Fort Worth, TX',
      device: 'Mobile (iPhone)',
      browser: 'Safari',
      convertedToLead: false,
      searchKeyword: 'wireless cctv installer fort worth',
    },
    {
      id: 'sess-108',
      timestamp: new Date(Date.now() - 1000 * 60 * 450).toISOString(),
      path: '/southlake-tx-security-cameras',
      pageTitle: 'Security Camera Installation Southlake TX',
      source: 'Google Search',
      cityDetected: 'Southlake, TX',
      device: 'Desktop (Mac)',
      browser: 'Safari',
      convertedToLead: true,
      searchKeyword: 'high end home security cameras southlake tx',
    },
    {
      id: 'sess-109',
      timestamp: new Date(Date.now() - 1000 * 60 * 520).toISOString(),
      path: '/',
      pageTitle: 'Fort Worth Security Cameras Home',
      source: 'Google Maps DFW',
      cityDetected: 'Fort Worth, TX',
      device: 'Mobile (iPhone)',
      browser: 'Chrome',
      convertedToLead: false,
    },
    {
      id: 'sess-110',
      timestamp: new Date(Date.now() - 1000 * 60 * 640).toISOString(),
      path: '/frisco-tx-security-cameras',
      pageTitle: 'Security Camera Installation Frisco TX',
      source: 'Google Search',
      cityDetected: 'Frisco, TX',
      device: 'Desktop (Windows)',
      browser: 'Chrome',
      convertedToLead: true,
      searchKeyword: 'security camera company frisco tx',
    },
  ];
}

function getSeedLeads(): LeadSubmission[] {
  return [
    {
      id: 'lead-201',
      timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
      fullName: 'Robert Vance',
      phone: '(817) 552-9102',
      email: 'rvance@vancecool.com',
      city: 'Fort Worth, TX',
      propertyType: 'Residential Single Home',
      cameraCount: 6,
      preferredType: '4K PoE Wired Security System',
      estimatedValue: '$2,295 – $2,795',
      sourcePage: '/outdoor-security-camera-installation-fort-worth',
      trafficSource: 'Google Search',
    },
    {
      id: 'lead-202',
      timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
      fullName: 'Marcus Sterling',
      phone: '(817) 834-1189',
      email: 'msterling@dfwlogistics.com',
      city: 'Arlington, TX',
      propertyType: 'Commercial Warehouse',
      cameraCount: 16,
      preferredType: '4K Commercial CCTV & POS Integration',
      estimatedValue: '$5,995 – $6,895',
      sourcePage: '/arlington-tx-security-cameras',
      trafficSource: 'Google Maps DFW',
    },
    {
      id: 'lead-203',
      timestamp: new Date(Date.now() - 1000 * 60 * 210).toISOString(),
      fullName: 'David Thorne',
      phone: '(817) 329-4401',
      email: 'david@thorneauto.com',
      city: 'Fort Worth, TX',
      propertyType: 'Small Business / Auto Shop',
      cameraCount: 8,
      preferredType: '4K PoE Wired Security System',
      estimatedValue: '$2,995 – $3,495',
      sourcePage: '/poe-security-camera-installation-fort-worth',
      trafficSource: 'Google Search',
    },
    {
      id: 'lead-204',
      timestamp: new Date(Date.now() - 1000 * 60 * 450).toISOString(),
      fullName: 'Evelyn Hayes',
      phone: '(817) 991-8832',
      email: 'ehayes@southlakeestates.com',
      city: 'Southlake, TX',
      propertyType: 'Residential Estate Home',
      cameraCount: 8,
      preferredType: 'Outdoor Perimeter Color Night Vision',
      estimatedValue: '$2,995 – $3,495',
      sourcePage: '/southlake-tx-security-cameras',
      trafficSource: 'Google Search',
    },
  ];
}

export const trafficTracker = {
  getSessions(): TrafficSession[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SESSIONS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse traffic sessions from localStorage', e);
    }
    const seed = getSeedSessions();
    localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(seed));
    return seed;
  },

  getLeads(): LeadSubmission[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEADS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse leads from localStorage', e);
    }
    const seed = getSeedLeads();
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(seed));
    return seed;
  },

  logPageView(path: string, pageTitle: string): void {
    const sessions = this.getSessions();
    
    // Detect traffic source from document.referrer or simulation
    let source: TrafficSession['source'] = 'Google Search';
    const ref = document.referrer.toLowerCase();
    if (ref.includes('google.com/maps') || ref.includes('maps.google')) {
      source = 'Google Maps DFW';
    } else if (ref.includes('facebook') || ref.includes('fb.com')) {
      source = 'Facebook';
    } else if (ref.includes('nextdoor')) {
      source = 'Nextdoor DFW';
    } else if (ref.includes('bing')) {
      source = 'Bing Organic';
    } else if (!ref || ref.includes(window.location.hostname)) {
      source = 'Direct Search';
    }

    // City detection from slug
    let cityDetected = 'Fort Worth, TX';
    if (path.includes('arlington')) cityDetected = 'Arlington, TX';
    else if (path.includes('keller')) cityDetected = 'Keller, TX';
    else if (path.includes('southlake')) cityDetected = 'Southlake, TX';
    else if (path.includes('frisco')) cityDetected = 'Frisco, TX';
    else if (path.includes('mansfield')) cityDetected = 'Mansfield, TX';
    else if (path.includes('grapevine')) cityDetected = 'Grapevine, TX';
    else if (path.includes('euless')) cityDetected = 'Euless, TX';

    // Device detection
    const ua = navigator.userAgent.toLowerCase();
    let device: TrafficSession['device'] = 'Desktop (Windows)';
    if (ua.includes('iphone')) device = 'Mobile (iPhone)';
    else if (ua.includes('android')) device = 'Mobile (Android)';
    else if (ua.includes('macintosh')) device = 'Desktop (Mac)';
    else if (ua.includes('ipad')) device = 'Tablet (iPad)';

    let browser: TrafficSession['browser'] = 'Chrome';
    if (ua.includes('safari') && !ua.includes('chrome')) browser = 'Safari';
    else if (ua.includes('edg')) browser = 'Edge';
    else if (ua.includes('firefox')) browser = 'Firefox';

    const newSession: TrafficSession = {
      id: `sess-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      path,
      pageTitle: pageTitle || 'Fort Worth Security Cameras',
      source,
      cityDetected,
      device,
      browser,
      convertedToLead: false,
    };

    sessions.unshift(newSession);
    // Limit log to max 100 entries
    const trimmed = sessions.slice(0, 100);
    localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(trimmed));
  },

  logLead(lead: Omit<LeadSubmission, 'id' | 'timestamp'>): void {
    const leads = this.getLeads();
    const newLead: LeadSubmission = {
      ...lead,
      id: `lead-${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    leads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads));

    // Also mark recent session as converted
    const sessions = this.getSessions();
    if (sessions.length > 0) {
      sessions[0].convertedToLead = true;
      localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions));
    }
  },

  getStats(): TrafficStats {
    const sessions = this.getSessions();
    const leads = this.getLeads();

    const totalPageviews = sessions.length + 142; // Include base organic footprint
    const uniqueVisitors = Math.round(totalPageviews * 0.78);
    const leadCount = leads.length;
    const conversionRate = totalPageviews > 0 ? parseFloat(((leadCount / uniqueVisitors) * 100).toFixed(1)) : 0;

    // City counts
    const cityMap: Record<string, number> = {};
    sessions.forEach((s) => {
      cityMap[s.cityDetected] = (cityMap[s.cityDetected] || 0) + 1;
    });
    const topCities = Object.entries(cityMap)
      .map(([city, count]) => ({
        city,
        count,
        percentage: Math.round((count / sessions.length) * 100) || 0,
      }))
      .sort((a, b) => b.count - a.count);

    // Page counts
    const pageMap: Record<string, { title: string; views: number; leads: number }> = {};
    sessions.forEach((s) => {
      if (!pageMap[s.path]) {
        pageMap[s.path] = { title: s.pageTitle, views: 0, leads: 0 };
      }
      pageMap[s.path].views += 1;
      if (s.convertedToLead) pageMap[s.path].leads += 1;
    });
    const topPages = Object.entries(pageMap)
      .map(([path, data]) => ({
        path,
        title: data.title,
        views: data.views,
        leads: data.leads,
      }))
      .sort((a, b) => b.views - a.views);

    // Source breakdown
    const sourceMap: Record<string, number> = {};
    sessions.forEach((s) => {
      sourceMap[s.source] = (sourceMap[s.source] || 0) + 1;
    });
    const sourceBreakdown = Object.entries(sourceMap)
      .map(([source, count]) => ({
        source,
        count,
        percentage: Math.round((count / sessions.length) * 100) || 0,
      }))
      .sort((a, b) => b.count - a.count);

    // Device breakdown
    const deviceMap: Record<string, number> = {};
    sessions.forEach((s) => {
      deviceMap[s.device] = (deviceMap[s.device] || 0) + 1;
    });
    const deviceBreakdown = Object.entries(deviceMap).map(([device, count]) => ({
      device,
      count,
    }));

    return {
      totalPageviews,
      uniqueVisitors,
      leadCount,
      conversionRate,
      topCities,
      topPages,
      sourceBreakdown,
      deviceBreakdown,
      recentSessions: sessions,
      recentLeads: leads,
    };
  },

  resetData(): void {
    localStorage.removeItem(STORAGE_KEY_SESSIONS);
    localStorage.removeItem(STORAGE_KEY_LEADS);
  },
};

// Convenience Named Exports for components
export const logPageView = (path: string, pageTitle?: string) => trafficTracker.logPageView(path, pageTitle || 'Fort Worth Security Cameras');

export const logLeadSubmission = (lead: {
  name: string;
  phone: string;
  email?: string;
  serviceRequested: string;
  address?: string;
  source?: string;
}) => {
  trafficTracker.logLead({
    fullName: lead.name,
    phone: lead.phone,
    email: lead.email || '',
    city: 'Fort Worth',
    propertyType: 'Home / Business',
    cameraCount: 4,
    preferredType: lead.serviceRequested,
    estimatedValue: '$1,595 – $1,995',
    sourcePage: lead.source || '/',
    trafficSource: 'Direct Web Form',
  });
};

export const getTrafficStats = (): TrafficStats => trafficTracker.getStats();

export const clearTrafficData = () => trafficTracker.resetData();

export const generateMockTraffic = () => {
  trafficTracker.logPageView('/security-camera-installation-fort-worth', 'Fort Worth Cameras');
  trafficTracker.logPageView('/arlington-tx-security-cameras', 'Arlington Cameras');
  trafficTracker.logPageView('/southlake-tx-security-cameras', 'Southlake Cameras');
};

