import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
