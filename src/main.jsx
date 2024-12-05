import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContadorApp from "./ContadorApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>
);
