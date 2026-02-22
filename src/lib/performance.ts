/**
 * Performance Optimization Utilities
 *
 * Advanced performance optimizations for the Anclora Nexus portfolio
 */

import React from "react";

// Virtualization utilities for long lists
export const createVirtualizer = (options: {
  containerHeight: number;
  itemHeight: number;
  totalItems: number;
  overscan?: number;
}) => {
  const { containerHeight, itemHeight, totalItems, overscan = 5 } = options;

  return {
    getVisibleRange: (scrollTop: number) => {
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan,
      );
      const endIndex = Math.min(
        totalItems - 1,
        Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan,
      );
      return { startIndex, endIndex };
    },

    getItemStyle: (index: number) => ({
      position: "absolute" as const,
      top: index * itemHeight,
      left: 0,
      right: 0,
      height: itemHeight,
    }),
  };
};

// Intersection Observer utilities
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {},
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  const observer = new IntersectionObserver(callback, defaultOptions);

  return {
    observe: (element: Element) => observer.observe(element),
    unobserve: (element: Element) => observer.unobserve(element),
    disconnect: () => observer.disconnect(),
  };
};

// Debounce utility with leading edge
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Memoization utility
export const memoize = <T extends (...args: any[]) => any>(func: T): T => {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

// Resource preloading utilities
export class ResourcePreloader {
  private static images = new Map<string, HTMLImageElement>();
  private static fonts = new Map<string, FontFace>();

  static preloadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      if (ResourcePreloader.images.has(src)) {
        resolve(ResourcePreloader.images.get(src)!);
        return;
      }

      const img = new Image();
      img.onload = () => {
        ResourcePreloader.images.set(src, img);
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  static preloadFont(
    fontFamily: string,
    fontWeight: string = "400",
  ): Promise<FontFace> {
    return new Promise((resolve, reject) => {
      const key = `${fontFamily}-${fontWeight}`;

      if (ResourcePreloader.fonts.has(key)) {
        resolve(ResourcePreloader.fonts.get(key)!);
        return;
      }

      const fontFace = new FontFace(
        fontFamily,
        `url('/fonts/${fontFamily.toLowerCase().replace(/\s+/g, "-")}.woff2')`,
      );

      fontFace
        .load()
        .then(() => {
          document.fonts.add(fontFace);
          ResourcePreloader.fonts.set(key, fontFace);
          resolve(fontFace);
        })
        .catch(reject);
    });
  }

  static preloadResources(
    resources: { type: "image" | "font"; src: string; weight?: string }[],
  ): Promise<void[]> {
    return Promise.all(
      resources.map((resource) => {
        if (resource.type === "image") {
          return ResourcePreloader.preloadImage(resource.src);
        } else {
          return ResourcePreloader.preloadFont(resource.src, resource.weight);
        }
      }),
    ).then(() => []);
  }
}

// Performance monitoring utilities
export class PerformanceMonitor {
  private static measurements = new Map<string, number>();

  static startMeasurement(name: string): void {
    PerformanceMonitor.measurements.set(name, performance.now());
  }

  static endMeasurement(name: string): number {
    const startTime = PerformanceMonitor.measurements.get(name);
    if (!startTime) {
      console.warn(`Measurement ${name} was not started`);
      return 0;
    }

    const duration = performance.now() - startTime;
    PerformanceMonitor.measurements.delete(name);
    return duration;
  }

  static measureAsync<T>(name: string, asyncFn: () => Promise<T>): Promise<T> {
    PerformanceMonitor.startMeasurement(name);

    return asyncFn().then((result) => {
      const duration = PerformanceMonitor.endMeasurement(name);
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
      return result;
    });
  }

  static getMemoryUsage(): any | null {
    return (performance as any).memory || null;
  }

  static getNavigationTiming(): PerformanceNavigationTiming | null {
    const navigationEntries = performance.getEntriesByType("navigation");
    return navigationEntries.length > 0
      ? (navigationEntries[0] as PerformanceNavigationTiming)
      : null;
  }
}

// Lazy loading utilities
export class LazyLoader {
  private static loadedModules = new Set<string>();
  private static loadingPromises = new Map<string, Promise<any>>();

  static async loadModule<T>(
    importFn: () => Promise<{ default: T }>,
    key: string,
  ): Promise<T> {
    if (LazyLoader.loadedModules.has(key)) {
      return (await importFn()).default;
    }

    if (LazyLoader.loadingPromises.has(key)) {
      return (await LazyLoader.loadingPromises.get(key)!).default;
    }

    const loadingPromise = importFn();
    LazyLoader.loadingPromises.set(key, loadingPromise);

    try {
      const loadedModule = await loadingPromise;
      LazyLoader.loadedModules.add(key);
      LazyLoader.loadingPromises.delete(key);
      return loadedModule.default;
    } catch (error) {
      LazyLoader.loadingPromises.delete(key);
      throw error;
    }
  }

  static createLazyComponent<T extends React.ComponentType<any>>(
    importFn: () => Promise<{ default: T }>,
    key: string,
    fallback?: React.ReactNode,
  ): React.FC<React.ComponentProps<T>> {
    return function LazyComponent(props: React.ComponentProps<T>) {
      const [Component, setComponent] = React.useState<T | null>(null);
      const [error, setError] = React.useState<Error | null>(null);

      React.useEffect(() => {
        let isMounted = true;

        LazyLoader.loadModule(importFn, key)
          .then((loadedModule) => {
            if (isMounted) {
              setComponent(() => loadedModule);
            }
          })
          .catch((err: Error) => {
            if (isMounted) {
              setError(err);
            }
          });

        return () => {
          isMounted = false;
        };
      }, []);

      if (error) {
        return React.createElement(
          "div",
          {},
          `Error loading component: ${error.message}`,
        );
      }

      if (!Component) {
        return fallback || React.createElement("div", {}, "Loading...");
      }

      return React.createElement(Component!, props);
    };
  }
}

// Bundle size optimization utilities
export class BundleOptimizer {
  static async optimizeBundle(): Promise<void> {
    // This would typically be handled by build tools,
    // but we can implement runtime optimizations here

    // Clear unused modules from memory
    if (typeof window !== "undefined" && (window as any).__webpack_require__) {
      const webpackRequire = (window as any).__webpack_require__;

      // Clear module cache for unused modules
      Object.keys(webpackRequire.cache || {}).forEach((id) => {
        const cachedModule = webpackRequire.cache[id];
        if (cachedModule && !cachedModule.hot && cachedModule.exports) {
          cachedModule.exports = null;
        }
      });
    }
  }

  static async getBundleStats(): Promise<any> {
    if (typeof (window as any).__webpack_require__ !== "undefined") {
      const webpackRequire = (window as any).__webpack_require__;
      return {
        modules: Object.keys(webpackRequire.cache || {}),
        totalModules: Object.keys(webpackRequire.cache || {}).length,
      };
    }
    return null;
  }
}

// Export all utilities
const performanceUtils = {
  createVirtualizer,
  createIntersectionObserver,
  debounce,
  throttle,
  memoize,
  ResourcePreloader,
  PerformanceMonitor,
  LazyLoader,
  BundleOptimizer,
};

export default performanceUtils;
