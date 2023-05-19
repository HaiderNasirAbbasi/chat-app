import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import Contact, { loader as contactLoader } from "./components/contact.jsx";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./components/root";
import Edit, { action as editAction } from "./components/Edit";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Root />}
        errorElement={<NotFound />}
        loader={rootLoader}
        action={rootAction}
      >
        <Route
          path="/contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
        ></Route>
        <Route
          path="/contacts/:contactId/edit"
          element={<Edit />}
          loader={contactLoader}
          action={editAction}
        ></Route>
      </Route>
    </>
  )
);
