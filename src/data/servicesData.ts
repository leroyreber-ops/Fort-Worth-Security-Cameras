import { ReviewItem, IndustryInfo, ServiceInfo } from '../types';

export const CORE_SERVICES: ServiceInfo[] = [
  {
    slug: 'residential-security-camera-installations-in-fort-worth',
    title: 'Home Security Camera Installation',
    h1: 'Home Security Camera Installation Fort Worth',
    shortDesc: 'Custom residential surveillance with 4K resolution, mobile app control, and zero monthly fees.',
    fullDesc: 'Protect your home and loved ones with Fort Worth’s premier residential security camera installation. We conceal all cables, install weatherproof 4K turret and bullet cameras, and configure instant phone notifications when human or vehicle motion is detected.',
    iconName: 'Home',
    features: ['4K Ultra HD Resolution', 'Color Night Vision', 'No Monthly Subscription Fees', 'Smart Phone App Access'],
    useCases: ['Front porch & doorbell', 'Driveway & garage approach', 'Backyard & patio perimeters', 'Side alleyways']
  },
  {
    slug: 'commercial-security-camera-installations-in-fort-worth',
    title: 'Commercial CCTV Installation',
    h1: 'Commercial Security Camera Installation Fort Worth',
    shortDesc: 'Enterprise surveillance systems for offices, warehouses, retail stores, and multi-tenant buildings.',
    fullDesc: 'Custom-engineered commercial security camera solutions in Fort Worth. Protect assets, prevent employee theft, resolve liability disputes, and integrate POS transaction video overlays with enterprise NVR storage.',
    iconName: 'Building2',
    features: ['Multi-site Centralized Management', 'POS Cash Register Overlay', '30-90 Day Video Archiving', 'Vandal-Proof Metal Domes'],
    useCases: ['Retail sales floors', 'Warehouse loading docks', 'Cash registers & safes', 'Parking lot perimeters']
  },
  {
    slug: 'security-camera-repair-fort-worth',
    title: 'CCTV Repair & Maintenance',
    h1: 'Security Camera Repair Fort Worth',
    shortDesc: 'Fast troubleshooting for offline cameras, fuzzy video, damaged wiring, and NVR hard drive issues.',
    fullDesc: 'Don’t leave your Fort Worth property vulnerable. Our certified technicians diagnose and repair camera outages, re-crimp Ethernet connectors, replace blown power supplies, and restore NVR network connectivity.',
    iconName: 'Wrench',
    features: ['Same-Day Dispatch Available', 'Cable & Power Testing', 'NVR/DVR Password Resets', 'Lens Cleaning & Alignment'],
    useCases: ['Offline camera recovery', 'Blurry night vision fix', 'Cut Ethernet cable repair', 'App disconnect troubleshooting']
  },
  {
    slug: 'poe-security-camera-installation-fort-worth',
    title: 'PoE IP Camera Systems',
    h1: 'PoE Security Camera Installation Fort Worth',
    shortDesc: 'Single Cat6 cable delivers power, 4K video, audio, and remote controls with zero signal drop.',
    fullDesc: 'Power over Ethernet (PoE) represents the highest tier of security camera technology. Wired directly into a gigabit PoE switch or NVR, PoE cameras run without signal lag or WiFi jamming concerns.',
    iconName: 'Cpu',
    features: ['Dedicated Cat6 Gigabit Speeds', 'Immune to WiFi Interference', 'UPS Battery Backup Ready', 'Multi-Terabyte Enterprise RAID'],
    useCases: ['High-density commercial sites', 'Acreage residential estates', '24/7 continuous recording', 'LPR plate capture']
  },
  {
    slug: 'wireless-security-camera-installation-fort-worth',
    title: 'Wireless Camera Systems',
    h1: 'Wireless Security Camera Installation Fort Worth',
    shortDesc: 'Clean cable-free installation for historical buildings, rented offices, and detached structures.',
    fullDesc: 'High-gain encrypted WiFi camera installations that bypass wall destruction while delivering crystal-clear HD video. Equipped with solar panel recharging or low-voltage hardwire power.',
    iconName: 'Wifi',
    features: ['Zero Invasive Wall Drilling', 'Dual-Band WiFi 6 Encryption', 'Solar Panel Option', 'Instant Push Alerts'],
    useCases: ['Leased office suites', 'Historical Fort Worth homes', 'Detached garages & sheds', 'Temporary jobsite monitoring']
  }
];

export const INDUSTRIES_SERVED: IndustryInfo[] = [
  {
    slug: 'restaurants',
    name: 'Restaurants & Bars',
    description: 'Monitor kitchen safety, cash registers, inventory stockrooms, and dining areas to prevent theft and slip-and-fall claims.',
    recommendedSetup: '4K Vandal Domes over registers + IP67 Bullet cameras for outdoor patio and dumpster lines.',
    keyConcerns: ['POS cash tracking', 'Kitchen safety compliance', 'After-hours dumpster theft', 'Customer slip-and-fall claims']
  },
  {
    slug: 'warehouses',
    name: 'Warehouses & Logistics',
    description: 'Protect high-value inventory, oversee loading docks, track forklift traffic, and record shipping trailer license plates.',
    recommendedSetup: 'Long-range PTZ cameras + 4K Varifocal PoE cameras mounted on high warehouse rafters.',
    keyConcerns: ['Loading dock cargo theft', 'Forklift safety monitoring', 'Trailer license plate tracking', 'Perimeter fence breaches']
  },
  {
    slug: 'retail-stores',
    name: 'Retail Stores & Boutique Shops',
    description: 'Deter shoplifting, verify cashier transactions, analyze foot traffic patterns, and provide evidence for insurance.',
    recommendedSetup: 'Turret cameras with POS receipt overlay + wide-angle 180° fisheye entry cameras.',
    keyConcerns: ['Shoplifting deterrence', 'Cash drawer reconciliation', 'Organized retail crime', 'Employee discount fraud']
  },
  {
    slug: 'auto-dealerships',
    name: 'Auto Dealerships & Repair Shops',
    description: 'Secure vehicle lots overnight, deter catalytic converter theft, and monitor service bay work areas.',
    recommendedSetup: 'Active deterrent thermal & 4K optical cameras with strobe lights and audio warnings.',
    keyConcerns: ['Catalytic converter theft', 'Overnight lot trespassing', 'Vehicle damage liability', 'Key box security']
  },
  {
    slug: 'gas-stations',
    name: 'Gas Stations & Convenience Stores',
    description: '24/7 high-impact surveillance to record pump island license plates, cash registers, and parking spaces.',
    recommendedSetup: 'LPR (License Plate Recognition) cameras at entry driveways + 4K audio cameras inside.',
    keyConcerns: ['Fuel theft drive-offs', 'Counterfeit bills & fraud', 'Overnight clerk protection', 'Parking lot altercations']
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: '1',
    author: 'Michael Torres',
    location: 'Fort Worth (Benbrook area)',
    rating: 5,
    date: '2026-01-15',
    text: 'Excellent security camera installation! The team was professional, installed 8 cameras around my property in one day. Crystal clear 4K quality and no messy cables visible. Highly recommend Fort Worth Security Cameras!',
    serviceType: 'Residential 4K PoE System'
  },
  {
    id: '2',
    author: 'Jennifer Martinez',
    location: 'Fort Worth (Hulen)',
    rating: 5,
    date: '2026-01-10',
    text: 'Best CCTV company in Fort Worth! They installed cameras for our retail store in Hulen. The system catches everything and integrates perfectly with our POS system. Worth every penny.',
    serviceType: 'Commercial Business CCTV'
  },
  {
    id: '3',
    author: 'David Chen',
    location: 'Fort Worth (Westcliff)',
    rating: 5,
    date: '2026-01-05',
    text: 'Outstanding service from start to finish. Installed security cameras at our Westcliff home. The mobile app is fantastic - I can check my cameras from anywhere. Professional installers, fair pricing.',
    serviceType: 'Home Surveillance System'
  },
  {
    id: '4',
    author: 'Sarah Johnson',
    location: 'Fort Worth (Ridglea Hills)',
    rating: 5,
    date: '2025-12-28',
    text: 'Had security cameras installed in Ridglea Hills. The team was courteous, cleaned up after themselves, and explained everything clearly. Night vision works perfectly. Great local company!',
    serviceType: 'Outdoor Security Camera Installation'
  },
  {
    id: '5',
    author: 'Robert Williams',
    location: 'Fort Worth (Alliance Corridor)',
    rating: 5,
    date: '2025-12-20',
    text: 'Top-notch CCTV installation for our warehouse in Alliance. Installed 24 cameras with centralized monitoring. The system is reliable and the support team is responsive. Couldn’t ask for better service.',
    serviceType: 'Commercial Warehouse Surveillance'
  }
];
