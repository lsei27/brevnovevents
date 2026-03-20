"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";
import cs from "@/lib/dictionaries/cs";
import en from "@/lib/dictionaries/en";

type ConsentState = {
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  analytics_storage: "granted" | "denied";
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function CookieConsent() {
  const locale = useLocale();
  const dict = locale === "en" ? en : cs;
  const t = dict.cookieConsent;

  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    const savedConsent = localStorage.getItem("cookie_consent");
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsed: ConsentState = JSON.parse(savedConsent);
        setAnalyticsConsent(parsed.analytics_storage === "granted");
        setMarketingConsent(parsed.ad_storage === "granted");

        // Push update immediately on load if previously saved
        if (typeof window.gtag === "function") {
          window.gtag("consent", "update", parsed);
        }
      } catch (e) {
        console.error("Failed to parse cookie consent", e);
        setShowBanner(true);
      }
    }
  }, []);

  const handleSave = (state: ConsentState) => {
    localStorage.setItem("cookie_consent", JSON.stringify(state));

    // Update Google Consent Mode v2
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", state);
    } else {
      // Fallback: push consent update in gtag-compatible format
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(["consent", "update", state]);
    }

    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    handleSave({
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  };

  const rejectAll = () => {
    handleSave({
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  };

  const saveSettings = () => {
    handleSave({
      ad_storage: marketingConsent ? "granted" : "denied",
      ad_user_data: marketingConsent ? "granted" : "denied",
      ad_personalization: marketingConsent ? "granted" : "denied",
      analytics_storage: analyticsConsent ? "granted" : "denied",
    });
  };

  return (
    <>
      {/* Floating Button always accessible when banner is hidden */}
      {!showBanner && !showSettings && (
        <button
          onClick={() => setShowSettings(true)}
          className="fixed bottom-4 right-4 z-40 rounded-full bg-brand-black/80 p-3 text-brand-white shadow-lg backdrop-blur-md transition-colors hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-black overflow-hidden group"
          aria-label={t.cookieButtonLabel}
          title="Cookies"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:scale-110"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 12.5v.01" />
            <path d="M12 16v.01" />
            <path d="M11 11v.01" />
            <path d="M15 17v.01" />
          </svg>
        </button>
      )}
      {/* Banner */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-gray-dark/20 bg-brand-black/95 p-6 backdrop-blur-md shadow-2xl">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <h2 className="text-lg font-bold text-brand-white">
                {t.title}
              </h2>
              <p className="mt-2 text-sm text-brand-white/70">
                {t.text}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm font-medium text-brand-white/70 hover:text-brand-white transition-colors py-2 px-4"
              >
                {t.settings}
              </button>
              <Button onClick={rejectAll} variant="secondary">
                {t.reject}
              </Button>
              <Button onClick={acceptAll} variant="primary">
                {t.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-brand-gray-dark/20 bg-brand-black p-6 md:p-8">
            <h2 className="text-2xl font-bold">{t.settingsTitle}</h2>
            <p className="mt-4 text-sm text-brand-white/70">
              {t.settingsText}
            </p>

            <div className="mt-8 space-y-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-brand-white">{t.necessary}</h3>
                  <p className="mt-1 text-xs text-brand-white/60">
                    {t.necessaryDesc}
                  </p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-brand-red">
                  <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-brand-white">{t.analytics}</h3>
                  <p className="mt-1 text-xs text-brand-white/60">
                    {t.analyticsDesc}
                  </p>
                </div>
                <button
                  onClick={() => setAnalyticsConsent(!analyticsConsent)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    analyticsConsent ? "bg-brand-red" : "bg-brand-gray-dark/40"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      analyticsConsent ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-brand-white">{t.marketing}</h3>
                  <p className="mt-1 text-xs text-brand-white/60">
                    {t.marketingDesc}
                  </p>
                </div>
                <button
                  onClick={() => setMarketingConsent(!marketingConsent)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    marketingConsent ? "bg-brand-red" : "bg-brand-gray-dark/40"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      marketingConsent ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-end gap-4 sm:flex-row">
              <Button onClick={() => setShowSettings(false)} variant="secondary">
                {t.back}
              </Button>
              <Button onClick={saveSettings} variant="primary">
                {t.save}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
