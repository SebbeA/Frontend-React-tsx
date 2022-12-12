// * importing all CSS
import './App.css';

// * importing BrowerRouterm Routes and Route for a easy way to jump between pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// * importing all views below
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import ProductManageView from './views/ProductManageView';

// * importing all Contexts
import ProductProvider from './contexts/contexts';
import ManageProvider from './contexts/manageContext';


function App() {

  return (
    // * Links all views so we easy can jump between pages
    <BrowserRouter>
    {/* Provider provides different values */}
      <ProductProvider>
      <ManageProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView /> } />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />  
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/manage" element={<ProductManageView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ManageProvider>
      </ProductProvider>
      
    </BrowserRouter>
  );
}

export default App;
