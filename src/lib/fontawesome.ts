// ──────────────────────────────────────────────
// NorthStar Life Coaching — Font Awesome Configuration
// ──────────────────────────────────────────────

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faArrowRight,
  faBars,
  faBolt,
  faBriefcase,
  faCalendar,
  faCalendarCheck,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faClock,
  faCompass,
  faEnvelope,
  faHandshake,
  faHeart,
  faMapMarkerAlt,
  faPhone,
  faQuoteLeft,
  faSearch,
  faShield,
  faStar,
  faTimes,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Prevent Font Awesome from adding its CSS automatically since we import it manually
config.autoAddCss = false;

// Register all icons used across the site
library.add(
  // Solid icons — UI & Navigation
  faArrowRight,
  faBars,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faSearch,
  faTimes,

  // Solid icons — Brand & Features
  faBolt,
  faBriefcase,
  faCalendar,
  faCalendarCheck,
  faCheck,
  faClock,
  faCompass,
  faHandshake,
  faHeart,
  faQuoteLeft,
  faShield,
  faStar,
  faUser,
  faUsers,

  // Brand icons — Social Media
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube
);
