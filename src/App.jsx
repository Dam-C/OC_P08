import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import {
  HomeList,
  BannerImg,
  AboutKasa,
  SharedLayout,
  HomeItemPage,
} from "./components/_comp_index";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={
            <Fragment>
              <BannerImg
                page={"banner-img__image banner-img__image--home"}
                text={"Chez vous, partout et ailleurs"}
              />
              <HomeList />
            </Fragment>
          }
        />
        <Route path="/rental/:rentalId" element={<HomeItemPage />} />
        <Route path="/about" element={<AboutKasa />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <SharedLayout />
      </div>
    </>
  );
};

export default App;
