// Facts that are the same in every language.

export const profile = {
  name: "Muhammad Ismail",
  brand: "heyIsmail",
  email: "ismaeel.kheshgi@gmail.com",
  github: "https://github.com/ismailkhan4",
  linkedin: "https://www.linkedin.com/in/heyismail",
  calendar: "https://cal.com/heyismail/15min",
  photo: "/me.png",
  city: "Lahore",
  countryCode: "PK",
  employer: { name: "ARVO", url: "https://arvo.com.pk" },
  /** Set to a path in /public (e.g. "/muhammad-ismail-cv.pdf") once the CV exists. */
  cv: null as string | null,
} as const;

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Native",
  "REST APIs",
] as const;
