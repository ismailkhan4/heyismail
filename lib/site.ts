// Facts that are the same in every language.

export const profile = {
  name: "Ismail Muhammad",
  brand: "heyIsmail",
  email: "ismaeel.kheshgi@gmail.com",
  github: "https://github.com/ismailkhan4",
  linkedin: "https://www.linkedin.com/in/heyismail",
  instagram: "https://www.instagram.com/hey.ismail1",
  facebook: "https://www.facebook.com/heyismail.dev",
  calendar: "https://cal.com/heyismail/15min",
  photo: "/me.png",
  city: "Lahore",
  countryCode: "PK",
  employer: { name: "ARVO", url: "https://arvo.com.pk" },
  /** Set to a path in /public (e.g. "/ismail-muhammad-cv.pdf") once the CV exists. */
  cv: null as string | null,
} as const;

/** Pages other than the homepage (paths without the locale prefix). */
export const routes = {
  caseStudy: "/work/barrierefrei-studio",
} as const;

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Native",
  "REST APIs",
] as const;
