import type { ImageField } from '@prismicio/client';

/**
 * Extracts URL from Prismic ImageField
 */
export function getImageUrl(field: ImageField): string | null {
  if (!field || typeof field !== 'object') {
    return null;
  }
  
  // Check if it's a filled image field
  if ('url' in field && field.url) {
    return field.url;
  }
  
  return null;
}

/**
 * Preloads an array of image URLs with performance optimizations
 */
export function preloadImages(urls: (string | null)[], options: {
  priority?: 'high' | 'low';
  maxConcurrent?: number;
} = {}): Promise<void[]> {
  const { priority = 'low', maxConcurrent = 3 } = options;
  const validUrls = urls.filter((url): url is string => url !== null && url !== '');
  
  // Batch preloading to avoid overwhelming the browser
  const batches: string[][] = [];
  for (let i = 0; i < validUrls.length; i += maxConcurrent) {
    batches.push(validUrls.slice(i, i + maxConcurrent));
  }

  const preloadSingleImage = (url: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      // Check if image is already cached
      if (document.querySelector(`img[src="${url}"]`)) {
        resolve();
        return;
      }

      const img = new Image();
      
      // Set priority hints for modern browsers
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = priority;
      }
      
      // Set loading attribute for better performance
      img.loading = 'eager';
      
      // Add decode attribute for better rendering performance
      img.decoding = 'async';
      
      img.onload = () => {
        // Decode the image asynchronously
        if (img.decode) {
          img.decode().then(() => resolve()).catch(() => resolve());
        } else {
          resolve();
        }
      };
      
      img.onerror = () => {
        console.warn(`Failed to preload image: ${url}`);
        resolve(); // Don't reject to avoid stopping other preloads
      };
      
      img.src = url;
    });
  };

  // Process batches sequentially to avoid overwhelming the browser
  return batches.reduce(async (acc, batch) => {
    const results = await acc;
    const batchResults = await Promise.allSettled(
      batch.map(preloadSingleImage)
    );
    return [...results, ...batchResults.map(() => undefined)];
  }, Promise.resolve([] as void[]));
}

/**
 * Preloads images from Prismic ImageFields
 */
export function preloadPrismicImages(fields: (ImageField | null | undefined)[]): Promise<void[]> {
  const urls = fields.map(field => field ? getImageUrl(field) : null);
  return preloadImages(urls);
}

/**
 * Creates preload link elements for the document head
 */
export function createPreloadLinks(urls: (string | null)[]): string[] {
  return urls
    .filter((url): url is string => url !== null && url !== '')
    .map(url => `<link rel="preload" as="image" href="${url}" />`);
}
