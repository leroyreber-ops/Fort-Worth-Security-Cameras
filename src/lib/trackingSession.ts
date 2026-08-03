import { detectPageInterestArea } from './industryDetection';

export interface FormTrackingInfo {
  websiteSource: string;
  submittedFromPage: string;
  submittedFromUrl: string;
  landingPage: string;
  landingUrl: string;
  referrer: string;
  rawReferrer: string;
  sessionStartTime: string;
  interestArea: string;
  pageType: string;
}

const STORAGE_KEY_LANDING_PAGE = 'fw_landing_page';
const STORAGE_KEY_LANDING_URL = 'fw_landing_url';
const STORAGE_KEY_REFERRER = 'fw_initial_referrer';
const STORAGE_KEY_SESSION_START = 'fw_session_start';

export function getFormTrackingInfo(): FormTrackingInfo {
  if (typeof window === 'undefined') {
    const pageDetails = detectPageInterestArea('/');
    return {
      websiteSource: 'fortworthsecuritycameras.com',
      submittedFromPage: '/',
      submittedFromUrl: 'https://fortworthsecuritycameras.com/',
      landingPage: '/',
      landingUrl: 'https://fortworthsecuritycameras.com/',
      referrer: 'Direct Visit',
      rawReferrer: '',
      sessionStartTime: new Date().toLocaleString(),
      interestArea: pageDetails.interestArea,
      pageType: pageDetails.pageType,
    };
  }

  // 1. Domain / Website source
  const websiteSource = window.location.hostname || 'fortworthsecuritycameras.com';

  // 2. Current submission page
  const submittedFromPage = window.location.pathname || '/';
  const submittedFromUrl = window.location.href;

  const pageDetails = detectPageInterestArea(submittedFromPage);

  // 3. Store or retrieve initial landing page
  let landingPage = sessionStorage.getItem(STORAGE_KEY_LANDING_PAGE);
  let landingUrl = sessionStorage.getItem(STORAGE_KEY_LANDING_URL);
  let storedReferrer = sessionStorage.getItem(STORAGE_KEY_REFERRER);
  let sessionStart = sessionStorage.getItem(STORAGE_KEY_SESSION_START);

  if (!landingPage) {
    landingPage = submittedFromPage;
    landingUrl = submittedFromUrl;
    try {
      sessionStorage.setItem(STORAGE_KEY_LANDING_PAGE, landingPage);
      sessionStorage.setItem(STORAGE_KEY_LANDING_URL, landingUrl);
    } catch (e) {
      console.warn('sessionStorage not available', e);
    }
  }

  const currentReferrer = document.referrer;
  if (!storedReferrer) {
    storedReferrer = currentReferrer || 'Direct Search / Organic';
    try {
      sessionStorage.setItem(STORAGE_KEY_REFERRER, storedReferrer);
    } catch (e) {
      console.warn('sessionStorage not available', e);
    }
  }

  if (!sessionStart) {
    sessionStart = new Date().toLocaleString();
    try {
      sessionStorage.setItem(STORAGE_KEY_SESSION_START, sessionStart);
    } catch (e) {
      console.warn('sessionStorage not available', e);
    }
  }

  // Format readable traffic source from storedReferrer
  let readableReferrer = storedReferrer;
  const refLower = storedReferrer.toLowerCase();
  if (refLower.includes('google.com/maps') || refLower.includes('maps.google')) {
    readableReferrer = 'Google Maps DFW Local Business Listing';
  } else if (refLower.includes('google.com') || refLower.includes('google')) {
    readableReferrer = 'Google Organic Search';
  } else if (refLower.includes('bing.com')) {
    readableReferrer = 'Bing Search Engine';
  } else if (refLower.includes('facebook.com') || refLower.includes('fb.com')) {
    readableReferrer = 'Facebook DFW Local Group';
  } else if (refLower.includes('nextdoor.com')) {
    readableReferrer = 'Nextdoor DFW Community';
  } else if (!storedReferrer || storedReferrer === 'Direct Search / Organic' || refLower.includes(websiteSource)) {
    readableReferrer = 'Direct Web Search / Bookmark';
  }

  return {
    websiteSource,
    submittedFromPage,
    submittedFromUrl,
    landingPage: landingPage || '/',
    landingUrl: landingUrl || submittedFromUrl,
    referrer: readableReferrer,
    rawReferrer: storedReferrer,
    sessionStartTime: sessionStart,
    interestArea: pageDetails.interestArea,
    pageType: pageDetails.pageType,
  };
}
