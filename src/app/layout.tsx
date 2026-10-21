import type { Metadata } from 'next';
import './globals.css';
import { Shell } from '@/components/Portfolio';
export const metadata: Metadata = {title:{default:'Erfan Bashar — Core Banking & Systems Analyst',template:'%s | Erfan Bashar'},description:'Core banking, systems analysis, technical business analysis, SQL development, and application support.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en"><body><Shell>{children}</Shell></body></html>}
