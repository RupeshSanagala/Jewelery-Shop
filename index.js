// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { RouterProvider } from 'react-router-dom'; // Import BrowserRouter for routing
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppRouter from './MainRouting/Routing';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <RouterProvider routing={AppRouter}></RouterProvider>
//   </React.StrictMode>
// );


// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './MainRouting/Routing'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

