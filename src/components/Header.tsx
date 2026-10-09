import React, { useState } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  Building2,
  BookOpen,
  Calendar,
  Phone,
  Clock,
  HeartPulse,
} from 'lucide-react';
import { NavigationTab } from '../types';
import { siteConfig } from '../data/fikesData';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilDropdownOpen, setProfilDropdownOpen] = useState(false);
  const [prodiDropdownOpen, setProdiDropdownOpen] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setProfilDropdownOpen(false);
        setProdiDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setProfilDropdownOpen(false);
    setProdiDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProfilActive = ['sejarah', 'visi-misi', 'struktur-organisasi', 'pimpinan'].includes(activeTab);
  const isProdiActive = ['s1-keperawatan', 'profesi-ners', 'd3-kebidanan'].includes(activeTab);

  return (
    <>
      {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-700 focus:text-white focus:rounded-lg focus:shadow-lg focus:text-xs focus:font-semibold"
      >
        Lewati ke Konten Utama
      </a>

      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      {/* Top micro-utility institutional banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-teal-400" />
              <span>{siteConfig.universityName}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{siteConfig.phone}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Senin - Jumat: 08.00 - 16.00 WIB</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.portals.portalMahasiswa}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors flex items-center gap-1 font-medium text-slate-200"
            >
              <span>Portal Mahasiswa</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={siteConfig.portals.portalDosen}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors flex items-center gap-1 font-medium text-slate-200"
            >
              <span>Portal Dosen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={siteConfig.portals.pmbOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 text-teal-300 font-medium transition-colors flex items-center gap-1"
            >
              <span>PMB Online</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand zone: Logo & Official Faculty Title */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
            aria-label="Beranda FIKES Universitas Ichsan Satya"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-102 transition-transform shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                FIKES UIS
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-400 tracking-normal mt-1">
                Fakultas Ilmu Kesehatan · Universitas Ichsan Satya
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            <button
              onClick={() => handleNavClick('beranda')}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeTab === 'beranda'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Beranda
            </button>

            {/* Dropdown Profil */}
            <div
              className="relative"
              onMouseEnter={() => setProfilDropdownOpen(true)}
              onMouseLeave={() => setProfilDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                  isProfilActive
                    ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
                onClick={() => setProfilDropdownOpen(!profilDropdownOpen)}
                aria-expanded={profilDropdownOpen}
              >
                <span>Profil</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${profilDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {profilDropdownOpen && (
                <div className="absolute left-0 mt-1 w-56 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNavClick('sejarah')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                      activeTab === 'sejarah'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>Sejarah Institusi</span>
                    <span className="text-[10px] text-slate-400">2007 - 2022</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('visi-misi')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                      activeTab === 'visi-misi'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    Visi & Misi Fakultas
                  </button>
                  <button
                    onClick={() => handleNavClick('struktur-organisasi')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                      activeTab === 'struktur-organisasi'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    Struktur Organisasi
                  </button>
                  <button
                    onClick={() => handleNavClick('pimpinan')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                      activeTab === 'pimpinan'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    Pimpinan Fakultas
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown Program Studi */}
            <div
              className="relative"
              onMouseEnter={() => setProdiDropdownOpen(true)}
              onMouseLeave={() => setProdiDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                  isProdiActive
                    ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
                onClick={() => setProdiDropdownOpen(!prodiDropdownOpen)}
                aria-expanded={prodiDropdownOpen}
              >
                <span>Program Studi</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${prodiDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {prodiDropdownOpen && (
                <div className="absolute left-0 mt-1 w-60 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNavClick('s1-keperawatan')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                      activeTab === 's1-keperawatan'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>S1 Keperawatan</span>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">S.Kep.</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('profesi-ners')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                      activeTab === 'profesi-ners'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>Pendidikan Profesi Ners</span>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">Ns.</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('d3-kebidanan')}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                      activeTab === 'd3-kebidanan'
                        ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>D3 Kebidanan</span>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">A.Md.Keb.</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('akademik')}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeTab === 'akademik'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Akademik
            </button>

            <button
              onClick={() => handleNavClick('berita')}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeTab === 'berita'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Informasi & Berita
            </button>

            <button
              onClick={() => handleNavClick('riset-publikasi')}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeTab === 'riset-publikasi'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Riset & Publikasi
            </button>

            <button
              onClick={() => handleNavClick('kontak')}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeTab === 'kontak'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/80 dark:bg-teal-950/40'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Kontak
            </button>
          </nav>

          {/* Actions: Dark/Light Mode toggle & Mobile menu button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={isDarkMode ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-600" />
              )}
            </button>

            <a
              href={siteConfig.portals.pmbOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-teal-700 dark:bg-teal-600 hover:bg-teal-800 dark:hover:bg-teal-500 rounded-lg transition-colors shadow-sm"
            >
              <span>Pendaftaran PMB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick('beranda')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'beranda'
                ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 font-semibold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Beranda
          </button>

          {/* Mobile Profil Section */}
          <div className="pt-1 pb-1 border-t border-slate-100 dark:border-slate-800/80">
            <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Profil Fakultas
            </div>
            <button
              onClick={() => handleNavClick('sejarah')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 'sejarah'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Sejarah Institusi (2007 - 2022)
            </button>
            <button
              onClick={() => handleNavClick('visi-misi')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 'visi-misi'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Visi & Misi Fakultas
            </button>
            <button
              onClick={() => handleNavClick('struktur-organisasi')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 'struktur-organisasi'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Struktur Organisasi
            </button>
            <button
              onClick={() => handleNavClick('pimpinan')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 'pimpinan'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Pimpinan Fakultas
            </button>
          </div>

          {/* Mobile Prodi Section */}
          <div className="pt-1 pb-1 border-t border-slate-100 dark:border-slate-800/80">
            <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Program Studi
            </div>
            <button
              onClick={() => handleNavClick('s1-keperawatan')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 's1-keperawatan'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              S1 Keperawatan (S.Kep.)
            </button>
            <button
              onClick={() => handleNavClick('profesi-ners')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 'profesi-ners'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Pendidikan Profesi Ners (Ns.)
            </button>
            <button
              onClick={() => handleNavClick('d3-kebidanan')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium pl-6 ${
                activeTab === 'd3-kebidanan'
                  ? 'text-teal-700 dark:text-teal-400 font-semibold bg-teal-50/60 dark:bg-teal-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              D3 Kebidanan (A.Md.Keb.)
            </button>
          </div>

          <button
            onClick={() => handleNavClick('akademik')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'akademik'
                ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 font-semibold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Akademik & Portals
          </button>

          <button
            onClick={() => handleNavClick('berita')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'berita'
                ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 font-semibold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Informasi & Berita
          </button>

          <button
            onClick={() => handleNavClick('riset-publikasi')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'riset-publikasi'
                ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 font-semibold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Riset & Publikasi
          </button>

          <button
            onClick={() => handleNavClick('kontak')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'kontak'
                ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 font-semibold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Kontak & Lokasi
          </button>

          {/* Quick External Links in Drawer */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <a
              href={siteConfig.portals.portalMahasiswa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg"
            >
              <span>Portal Mahasiswa SIAKAD</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.portals.portalDosen}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg"
            >
              <span>Portal Dosen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.portals.pmbOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-white bg-teal-700 rounded-lg"
            >
              <span>Penerimaan Mahasiswa Baru (PMB)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
