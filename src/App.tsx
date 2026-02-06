import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Tools } from '@/pages/Tools';
import { SubscriptionPage } from '@/pages/Subscription';
import { ConsultationPage } from '@/pages/Consultation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
