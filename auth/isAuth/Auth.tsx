import { BehaviorSubject } from "rxjs";

// Create a BehaviorSubject
const authSubject = new BehaviorSubject(false);
const showAuthSubject = new BehaviorSubject("none");
const navigateAfterAuthSubject = new BehaviorSubject("");

// Update the authentication status
export const authenticate = (authenticated: boolean) =>
  authSubject.next(authenticated);

export const showAuth = (toggle: string, navigateAfterAuth?: string) => {
  showAuthSubject.next(toggle);
  navigateAfterAuthSubject.next(navigateAfterAuth ? navigateAfterAuth : "");
  const timer = setTimeout(() => {
    if (typeof window !== "undefined") {
      const tagName = document.getElementsByTagName("html")[0];
      toggle !== "none"
        ? (tagName.style.overflow = "hidden")
        : (tagName.style.overflow = "auto");
    }
  }, 10);
  return () => clearTimeout(timer);
};

// Export the BehaviorSubjects as observables
export const authObservable = authSubject.asObservable();
export const showAuthObservable = showAuthSubject.asObservable();
export const navigateAfterAuthObservable =
  navigateAfterAuthSubject.asObservable();
