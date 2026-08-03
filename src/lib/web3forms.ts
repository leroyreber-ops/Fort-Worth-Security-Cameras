export interface Web3FormsSubmission {
  name: string;
  phone: string;
  email: string;
  city?: string;
  propertyType?: string;
  cameraCount?: number | string;
  preferredService?: string;
  interestArea?: string;
  comments?: string;
  websiteSource?: string;
  sourceUrl?: string;
  sourcePathname?: string;
  landingPage?: string;
  landingUrl?: string;
  cameFrom?: string;
  referrer?: string;
  contactMethod?: string;
  urgent?: boolean;
  estimateRange?: string;
  subject?: string;
  [key: string]: any;
}

// Support environment variable or default fallback key
export const DEFAULT_WEB3FORMS_KEY =
  ((import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY as string) ||
  'd8d0fffe-6b62-44b0-ab9f-f5d2a6a93745';

export const sendWeb3FormSubmission = async (
  formData: Web3FormsSubmission,
  customAccessKey?: string
): Promise<{ success: boolean; message: string }> => {
  const accessKey = customAccessKey || DEFAULT_WEB3FORMS_KEY;

  const payload = {
    access_key: accessKey,
    subject:
      formData.subject ||
      `New Lead: ${formData.name} - ${formData.preferredService || 'Security Camera System'} (${formData.city || 'Fort Worth'})`,
    from_name: 'Fort Worth Security Cameras Lead Tracker',
    replyto: formData.email || undefined,
    to_email: 'leroyreber@gmail.com',
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    city: formData.city || 'Fort Worth',
    property_type: formData.propertyType || 'Residential / Commercial',
    camera_count: formData.cameraCount || 'N/A',
    preferred_service: formData.preferredService || 'General Security System',
    detected_interest_area_or_industry: formData.interestArea || 'General Security System',
    preferred_contact_method: formData.contactMethod || 'Phone / Text',
    urgent_response: formData.urgent ? 'YES - Same-Day Request' : 'Standard',
    estimated_price_range: formData.estimateRange || 'N/A',
    comments: formData.comments || 'No additional notes provided.',
    website_submitted_from: formData.websiteSource || (typeof window !== 'undefined' ? window.location.hostname : 'fortworthsecuritycameras.com'),
    submission_page_pathname: formData.sourcePathname || (typeof window !== 'undefined' ? window.location.pathname : '/'),
    submission_page_full_url: formData.sourceUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    initial_landing_page: formData.landingPage || formData.sourcePathname || '/',
    initial_landing_full_url: formData.landingUrl || formData.sourceUrl || '',
    came_from_button_or_form: formData.cameFrom || 'Direct Web Form',
    traffic_referrer_origin: formData.referrer || (typeof document !== 'undefined' ? document.referrer : 'Direct Visit'),
    submitted_at_time: new Date().toLocaleString(),
  };

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      return {
        success: true,
        message: data.message || 'Form submitted successfully!',
      };
    } else {
      console.warn('Web3Forms response notice:', data);
      return {
        success: false,
        message:
          data.message ||
          'Web3Forms submission failed. Please verify your Web3Forms access key.',
      };
    }
  } catch (error: any) {
    console.error('Web3Forms dispatch error:', error);
    return {
      success: false,
      message: error?.message || 'Network error submitting form.',
    };
  }
};
