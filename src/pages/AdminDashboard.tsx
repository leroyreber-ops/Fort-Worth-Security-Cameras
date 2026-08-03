import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  BarChart3,
  Users,
  Eye,
  TrendingUp,
  Globe,
  Smartphone,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  RefreshCw,
  Trash2,
  ArrowUpRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import {
  getTrafficStats,
  generateMockTraffic,
  clearTrafficData,
  TrafficStats,
} from '../lib/trafficTracker';

interface AdminDashboardProps {
  onNavigate: (path: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [stats, setStats] = useState<TrafficStats>(getTrafficStats());
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'pages' | 'live'>('overview');
  const [notification, setNotification] = useState<string | null>(null);

  const refreshData = () => {
    setStats(getTrafficStats());
  };

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  const handleSeedData = () => {
    generateMockTraffic();
    refreshData();
    showNotify('Sample traffic & lead analytics seeded successfully!');
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all recorded traffic data?')) {
      clearTrafficData();
      refreshData();
      showNotify('All analytics data cleared.');
    }
  };

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Admin Analytics Dashboard', path: '/admin' },
        ]}
        onNavigate={onNavigate}
        variant="dark"
      />
      {/* Top Header / Admin Bar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight text-white">
                  DFW Security Admin Analytics
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                  Live Internal Mode
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Fort Worth & DFW Service Area Traffic & Lead Attribution Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refreshData}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
              title="Refresh Analytics"
            >
              <RefreshCw className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleSeedData}
              className="px-3.5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Seed Sample Data</span>
            </button>

            <button
              onClick={handleClearData}
              className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold transition-all flex items-center gap-1.5"
              title="Reset Analytics"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 ml-2"
            >
              View Main Site &rarr;
            </button>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 mt-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          {[
            { id: 'overview', label: 'Overview Metrics', icon: BarChart3 },
            { id: 'leads', label: `Lead Submissions (${stats.leadCount})`, icon: Users },
            { id: 'pages', label: 'Top Pages & Cities', icon: Globe },
            { id: 'live', label: 'Live Traffic Stream', icon: Clock },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Total Page Views</span>
              <Eye className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-black text-white">{stats.totalPageviews.toLocaleString()}</div>
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <span className="text-emerald-400 font-bold flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> 100% Organic & Local
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Total Lead Inquiries</span>
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400">{stats.leadCount}</div>
            <div className="text-xs text-slate-400">Quotes & SMS Call Requests</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Conversion Rate</span>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-black text-amber-400">{stats.conversionRate}%</div>
            <div className="text-xs text-slate-400">Visitor to Quote Lead</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Unique Visitors</span>
              <MapPin className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-indigo-400">{stats.uniqueVisitors.toLocaleString()}</div>
            <div className="text-xs text-slate-400">Fort Worth & DFW Area</div>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Traffic Sources Breakdown */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Traffic Sources & Channels</span>
                </h3>
                <span className="text-xs font-bold text-slate-400">Referrer Breakdown</span>
              </div>

              <div className="space-y-3 pt-2">
                {stats.sourceBreakdown.map((item) => (
                  <div key={item.source} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-200">{item.source}</span>
                      <span className="text-slate-400">
                        {item.count} visits ({item.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device & Platform Breakdown */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Device & User Platform</span>
                </h3>
                <span className="text-xs font-bold text-slate-400">Mobile vs Desktop</span>
              </div>

              <div className="space-y-3 pt-2">
                {stats.deviceBreakdown.map((item) => {
                  const pct = Math.round((item.count / (stats.recentSessions.length || 1)) * 100);
                  return (
                    <div key={item.device} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-200">{item.device}</span>
                        <span className="text-slate-400">
                          {item.count} views ({pct}%)
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Recent Leads */}
            <div className="lg:col-span-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Latest Lead Inquiries</span>
                </h3>
                <button
                  onClick={() => setActiveTab('leads')}
                  className="text-xs font-bold text-blue-400 hover:underline"
                >
                  View All Leads ({stats.leadCount}) &rarr;
                </button>
              </div>

              {stats.recentLeads.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-xs space-y-2">
                  <p>No customer leads recorded yet in this session.</p>
                  <p className="text-slate-600">
                    Click "Seed Sample Data" above to test lead management features!
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-800/60">
                  {stats.recentLeads.slice(0, 5).map((lead) => (
                    <div
                      key={lead.id}
                      className="py-3 flex flex-wrap items-center justify-between gap-4 text-xs hover:bg-slate-800/30 px-2 rounded-lg transition-all"
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-100">{lead.fullName}</div>
                        <div className="text-slate-400 font-mono flex items-center gap-3">
                          <span>{lead.phone}</span>
                          {lead.email && <span>• {lead.email}</span>}
                        </div>
                      </div>

                      <div className="space-y-0.5 text-right">
                        <div className="font-semibold text-emerald-400">{lead.preferredType}</div>
                        <div className="text-slate-500 text-[11px] font-mono">
                          {new Date(lead.timestamp).toLocaleDateString()}{' '}
                          {new Date(lead.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: LEADS LIST */}
        {activeTab === 'leads' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-white">All Incoming Customer Leads</h3>
                <p className="text-xs text-slate-400">
                  Real-time customer quote requests & contact submissions
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                {stats.leadCount} Total Submissions
              </span>
            </div>

            {stats.recentLeads.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-xs space-y-3">
                <Users className="w-8 h-8 text-slate-600 mx-auto" />
                <p>No customer quote leads logged yet.</p>
                <button
                  onClick={handleSeedData}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Seed Test Leads
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider font-extrabold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Customer Name</th>
                      <th className="p-3">Contact Information</th>
                      <th className="p-3">Requested Service / Location</th>
                      <th className="p-3">Est. Value</th>
                      <th className="p-3">Source Page</th>
                      <th className="p-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {stats.recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-800/40 transition-all">
                        <td className="p-3 font-bold text-white">{lead.fullName}</td>
                        <td className="p-3 font-mono space-y-0.5">
                          <div className="text-emerald-400 flex items-center gap-1">
                            <PhoneCall className="w-3 h-3" />
                            <span>{lead.phone}</span>
                          </div>
                          {lead.email && (
                            <div className="text-slate-400 flex items-center gap-1 text-[11px]">
                              <Mail className="w-3 h-3" />
                              <span>{lead.email}</span>
                            </div>
                          )}
                        </td>
                        <td className="p-3 font-semibold text-blue-300">
                          {lead.preferredType}
                        </td>
                        <td className="p-3 text-emerald-400 font-bold">
                          {lead.estimatedValue}
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[11px]">
                            {lead.sourcePage || 'Direct Website'}
                          </span>
                        </td>
                        <td className="p-3 text-slate-400 font-mono text-[11px]">
                          {new Date(lead.timestamp).toLocaleDateString()}{' '}
                          {new Date(lead.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: TOP PAGES */}
        {activeTab === 'pages' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-white">Top Performing Landing Pages</h3>
                <p className="text-xs text-slate-400">
                  Most viewed city & keyword pages on the website
                </p>
              </div>
            </div>

            {stats.topPages.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-xs space-y-2">
                <p>No page visits recorded yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {stats.topPages.map((page) => (
                  <div
                    key={page.path}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-white text-xs font-mono">{page.path}</div>
                      <div className="text-[11px] text-slate-400">
                        {page.title}
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-lg font-black text-blue-400">{page.views}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                          Views
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate(page.path)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
                        title="Visit Page"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: LIVE TRAFFIC STREAM */}
        {activeTab === 'live' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-Time Visitor Log</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Live session activity and source HTTP referrers
                </p>
              </div>
            </div>

            {stats.recentSessions.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-xs">
                No recent page visits recorded.
              </div>
            ) : (
              <div className="space-y-2">
                {stats.recentSessions.map((hit) => (
                  <div
                    key={hit.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-white font-mono">{hit.path}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span>Source: {hit.source}</span>
                        <span>•</span>
                        <span>City: {hit.cityDetected}</span>
                        <span>•</span>
                        <span>{hit.device} ({hit.browser})</span>
                      </div>
                    </div>

                    <div className="text-slate-500 font-mono text-[11px]">
                      {new Date(hit.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
