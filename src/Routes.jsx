import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./components/root";
import { NotFound } from "./pages/NotFound";
import Contact from "./components/contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<NotFound />}>
        <Route path="/contacts/:id" element={<Contact />}></Route>
      </Route>
    </>
  )
);
