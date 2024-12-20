import { Outfit } from 'next/font/google'
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps{
    children: ReactNode;
}
const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
  })
export const Layout = ({children} : LayoutProps) => {
  return (
    <>
    <div className={outfit.className}>
    <Header />
    {children}
    </div>
    </>
  );
};

export default Layout;