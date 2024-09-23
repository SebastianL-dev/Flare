import { Poppins, Permanent_Marker, Lato } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
});

export const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
});
