import { Suspense } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Registers } from "./pages/Registers";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registers" element={<Registers />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
