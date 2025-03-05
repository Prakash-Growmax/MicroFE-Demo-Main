import { useMediaQuery, useTheme } from '@mui/material';
import { QueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { drawerWidth } from './constants/general.constant';
import { DrawerOpen_LocalKey } from './constants/storage.constant';
// import MainLayout from './pages/Mainlayout';

// const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
//   const location = useLocation();
//   const noLayoutRoutes = ['/', '/login']; // Routes without MainLayout

//   return noLayoutRoutes.includes(location.pathname) ? (
//     <>{children}</> // Render without MainLayout
//   ) : (
//     <MainLayout>{children}</MainLayout> // Wrap other routes in MainLayout
//   );
// };

// **Query Client for React Query**
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTab = useMediaQuery(theme.breakpoints.down('md'));

  // **Persistent Sidebar State**
  const [sideDrawerOpen, setSideDrawerOpen] = useState(() => {
    const savedState = localStorage.getItem(DrawerOpen_LocalKey);
    return savedState ? JSON.parse(savedState) : !(isMobile || isTab);
  });

  const [historyList, setHistoryList] = useState(false);
  const [sideDrawerWidth, setSideDrawerWidth] = useState<number>(drawerWidth);

  // **Main Content Margin Based on Sidebar**
  const MainLayout_MarginLeft = useMemo(
    () => sideDrawerWidth + 16,
    [sideDrawerWidth]
  );

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      setSideDrawerWidth(Math.max(width * 0.175, 200));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // **Provide Sidebar Context Globally**
  const drawerConfig = useMemo(
    () => ({
      sideDrawerOpen,
      setSideDrawerOpen,
      historyList,
      setHistoryList,
      sideDrawerWidth,
      MainLayout_MarginLeft,
    }),
    [sideDrawerOpen, historyList, sideDrawerWidth, MainLayout_MarginLeft]
  );

  return 'hello';
  // <ThemeProvider>
  //   <ErrorBoundary>
  //     <AuthProvider>
  //       <QueryClientProvider client={queryClient}>
  //         <AppContext.Provider value={drawerConfig}>
  //           <BrowserRouter>
  //             <ChatLayout>
  //               <LayoutWrapper>
  //                 {' '}
  //                 {/* ✅ Conditional Layout Wrapping */}
  //                 <Suspense>
  //                   <AppRoutes />{' '}
  //                   {/* ✅ Only AppRoutes updates on route change */}
  //                 </Suspense>
  //               </LayoutWrapper>
  //             </ChatLayout>
  //           </BrowserRouter>
  //           <Toaster />
  //         </AppContext.Provider>
  //       </QueryClientProvider>
  //     </AuthProvider>
  //   </ErrorBoundary>
  // </ThemeProvider>
}

export default App;
