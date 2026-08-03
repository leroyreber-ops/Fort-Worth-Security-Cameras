import { getPageImages, PageImageBundle, BRAND_ASSETS } from './imagesData';
import { IndustryPageInfo } from '../types';

export interface IndustryAssetConfig {
  heroBg: string;
  rightCard: string;
  gallery: string[];
  badgeText: string;
  primaryAlt: string;
  imageGuidance?: string;
}

export const defaultIndustryAsset: IndustryAssetConfig = {
  heroBg: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=80',
  rightCard: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
  ],
  badgeText: 'Fort Worth Industry Security Specialist',
  primaryAlt: 'Fort Worth Security Camera System Installation'
};

export function getIndustryAssets(industryData: IndustryPageInfo): IndustryAssetConfig {
  const images: PageImageBundle = getPageImages(industryData.slug);
  const heroBg = industryData.heroImage || images.heroBg || defaultIndustryAsset.heroBg;
  const rightCard = industryData.imageUrl || images.rightCard || images.heroBg || defaultIndustryAsset.rightCard;

  return {
    heroBg,
    rightCard,
    gallery: [
      images.gallery1 || images.rightCard,
      images.gallery2 || images.heroBg,
      images.gallery3 || defaultIndustryAsset.gallery[2],
      images.gallery4 || defaultIndustryAsset.gallery[3]
    ],
    badgeText: `${industryData.category || 'Fort Worth'} Security Specialist`,
    primaryAlt: `${industryData.name} Security Camera System Installation in Fort Worth TX`,
    imageGuidance: industryData.imageGuidance || `Commercial-grade 4K PoE surveillance camera setup customized for ${industryData.name}.`
  };
}

export const industryAssets = {
  getAssets: getIndustryAssets,
  defaultAsset: defaultIndustryAsset
};
