"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GDPRConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Inject InMobi CMP Script once on client
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = `
      (function() {
        var host = "www.themoneytizer.com";
        var element = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        var url = 'https://cmp.inmobi.com/choice/6Fv0cGNfc_bw8/' + host + '/choice.js?tag_version=V3';
        var uspTries = 0;
        var uspTriesLimit = 3;
        element.async = true;
        element.type = 'text/javascript';
        element.src = url;
        firstScript.parentNode.insertBefore(element, firstScript);

        function makeStub() {
          var TCF_LOCATOR_NAME = '__tcfapiLocator';
          var queue = [];
          var win = window;
          var cmpFrame;

          function addFrame() {
            var doc = win.document;
            var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

            if (!otherCMP) {
              if (doc.body) {
                var iframe = doc.createElement('iframe');
                iframe.style.cssText = 'display:none';
                iframe.name = TCF_LOCATOR_NAME;
                doc.body.appendChild(iframe);
              } else {
                setTimeout(addFrame, 5);
              }
            }
            return !otherCMP;
          }

          function tcfAPIHandler() {
            var gdprApplies;
            var args = arguments;

            if (!args.length) {
              return queue;
            } else if (args[0] === 'setGdprApplies') {
              if (
                args.length > 3 &&
                args[2] === 2 &&
                typeof args[3] === 'boolean'
              ) {
                gdprApplies = args[3];
                if (typeof args[2] === 'function') {
                  args[2]('set', true);
                }
              }
            } else if (args[0] === 'ping') {
              var retr = {
                gdprApplies: gdprApplies,
                cmpLoaded: false,
                cmpStatus: 'stub'
              };

              if (typeof args[2] === 'function') {
                args[2](retr);
              }
            } else {
              if(args[0] === 'init' && typeof args[3] === 'object') {
                args[3] = Object.assign(args[3], { tag_version: 'V3' });
              }
              queue.push(args);
            }
          }

          function postMessageEventHandler(event) {
            var msgIsString = typeof event.data === 'string';
            var json = {};

            try {
              if (msgIsString) {
                json = JSON.parse(event.data);
              } else {
                json = event.data;
              }
            } catch (ignore) {}

            var payload = json.__tcfapiCall;

            if (payload) {
              window.__tcfapi(
                payload.command,
                payload.version,
                function(retValue, success) {
                  var returnMsg = {
                    __tcfapiReturn: {
                      returnValue: retValue,
                      success: success,
                      callId: payload.callId
                    }
                  };
                  if (msgIsString) {
                    returnMsg = JSON.stringify(returnMsg);
                  }
                  if (event && event.source && event.source.postMessage) {
                    event.source.postMessage(returnMsg, '*');
                  }
                },
                payload.parameter
              );
            }
          }

          while (win) {
            try {
              if (win.frames[TCF_LOCATOR_NAME]) {
                cmpFrame = win;
                break;
              }
            } catch (ignore) {}

            if (win === window.top) {
              break;
            }
            win = win.parent;
          }
          if (!cmpFrame) {
            addFrame();
            win.__tcfapi = tcfAPIHandler;
            win.addEventListener('message', postMessageEventHandler, false);
          }
        }

        makeStub();

        var uspStubFunction = function() {
          var arg = arguments;
          if (typeof window.__uspapi !== uspStubFunction) {
            setTimeout(function() {
              if (typeof window.__uspapi !== 'undefined') {
                window.__uspapi.apply(window.__uspapi, arg);
              }
            }, 500);
          }
        };

        var checkIfUspIsReady = function() {
          uspTries++;
          if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
            console.warn('USP is not accessible');
          } else {
            clearInterval(uspInterval);
          }
        };

        if (typeof window.__uspapi === 'undefined') {
          window.__uspapi = uspStubFunction;
          var uspInterval = setInterval(checkIfUspIsReady, 6000);
        }
      })();
    `;
    document.body.appendChild(script);

    // Show consent banner if not accepted
    const hasConsent = localStorage.getItem("gdpr-consent");
    if (!hasConsent) {
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("gdpr-consent", "all");
    setShowConsent(false);

    if (window.__tcfapi) {
      window.__tcfapi("setConsent", 2, () => {}, { consentGiven: true });
    }
  };

  const acceptEssential = () => {
    localStorage.setItem("gdpr-consent", "essential");
    setShowConsent(false);
  };

  const openPreferences = () => {
    if (window.__tcfapi) {
      window.__tcfapi("showUi", 2, () => {});
    }
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Cookie Consent
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We use cookies to enhance your browsing experience, serve
                  personalized ads or content, and analyze our traffic. By
                  clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={openPreferences}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Preferences
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
