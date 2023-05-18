import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import Contact from "./components/contact";
import Root, { loader as rootLoader  } from "./components/root";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<NotFound />} loader={rootLoader}>
        <Route path="/contacts/:id" element={<Contact />}></Route>
      </Route>
    </>
  )
);
