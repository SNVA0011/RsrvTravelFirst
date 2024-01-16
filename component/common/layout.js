import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useRouter } from "next/router";

export default function Layout({ children, lang }) {
  const router = useRouter();
  const homeurl = lang === "en" ? "/" : lang;

  return (
    <>
      <Header />

      <div
        className={`main-overflow flex-grow-1${
          router.pathname === "/flight/checkout" ? " chk" : ""
        }`}
      >
        {children}

        {router.pathname === "/flight/checkout/[checkout]" ||
        router.pathname === "/flight/flight-booking-confirmation" ||
        router.pathname === "/flight/listing" ? null : (
          <Footer />
        )}
      </div>
    </>
  );
}
