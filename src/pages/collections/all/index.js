import { Inter } from "next/font/google";
import Header from "@/pages/header";
import Footer from "@/pages/footer";
import CatalogContent from "./CatalogContent";
import CookieFooter from "@/pages/cookiefooter";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <main className={inter.className}>
      <Header />
      <CatalogContent />
      <Footer />
      <CookieFooter />
    </main>
  );
};

export default Page;
