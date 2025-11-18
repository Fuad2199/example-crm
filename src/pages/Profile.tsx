import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Edit2, Save, X, Bell, Settings, LogOut, Briefcase, TrendingUp, Users, CheckCircle, Copy, Check } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [emailCopied, setEmailCopied] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  
  const [userData, setUserData] = useState({
    name: 'Michael Harrison',
    role: 'Chief Executive Officer',
    email: 'michael.harrison@techsales.com',
    phone: '+1 (555) 987-6543',
    department: 'Executive Leadership',
    position: 'CEO & Founder',
    joined: 'March 1, 2019',
    address: '500 Innovation Drive, Silicon Valley, CA 94025',
    about: 'Visionary technology leader with 20+ years of experience in the electronics industry. Founded TechSales with a mission to revolutionize B2B electronics distribution through innovative CRM solutions and customer-first strategies.',
    initials: 'MH'
  });

  const [editData, setEditData] = useState({...userData});

  const metrics = [
    { label: 'Company Revenue', value: '$47.8M', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Total Employees', value: '284', icon: Users, color: 'text-blue-600' },
    { label: 'Active Clients', value: '1,247', icon: Briefcase, color: 'text-purple-600' },
    { label: 'Growth Rate', value: '+127%', icon: CheckCircle, color: 'text-orange-600' }
  ];

  const activities = [
    { action: 'Approved Q4 strategic partnership with GlobalTech', time: '3 hours ago', type: 'deal' },
    { action: 'Board meeting: Reviewed annual performance metrics', time: '1 day ago', type: 'meeting' },
    { action: 'Keynote speech at Electronics Innovation Summit', time: '3 days ago', type: 'event' },
    { action: 'Signed enterprise agreement with Fortune 500 client', time: '5 days ago', type: 'deal' },
    { action: 'Town hall: Company-wide Q&A session', time: '1 week ago', type: 'meeting' }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({...userData});
  };

  const handleSave = () => {
    setUserData({...editData});
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({...userData});
    setIsEditing(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(userData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div 
                className="relative cursor-pointer group"
                onClick={() => setShowImageUpload(!showImageUpload)}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white text-xl font-semibold shadow-lg">
                  {userData.initials}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all flex items-center justify-center">
                  <Edit2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">{userData.name}</h1>
                <p className="text-slate-600">{userData.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-slate-600" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-800">Profile Summary</h2>
                {!isEditing && (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-slate-800">{userData.email}</p>
                      <button
                        onClick={copyEmail}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-100 rounded"
                        title="Copy email"
                      >
                        {emailCopied ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Phone</p>
                    <p className="text-sm text-slate-800">{userData.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Position</p>
                    <p className="text-sm text-slate-800">{userData.position}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Department</p>
                    <p className="text-sm text-slate-800">{userData.department}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Joined</p>
                    <p className="text-sm text-slate-800">{userData.joined}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-2">About Me</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{userData.about}</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 mt-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <metric.icon className={`w-6 h-6 ${metric.color} mx-auto mb-2`} />
                    <p className="text-2xl font-bold text-slate-800">{metric.value}</p>
                    <p className="text-xs text-slate-600 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tabs Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'personal'
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Personal Info
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Account Settings
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'activity'
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Activity Log
                </button>
              </div>

              <div className="p-6">
                {/* Personal Info Tab */}
                {activeTab === 'personal' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.name}
                            onChange={(e) => setEditData({...editData, name: e.target.value})}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">{userData.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={editData.email}
                            onChange={(e) => setEditData({...editData, email: e.target.value})}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">{userData.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={editData.phone}
                            onChange={(e) => setEditData({...editData, phone: e.target.value})}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">{userData.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Position
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.position}
                            onChange={(e) => setEditData({...editData, position: e.target.value})}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">{userData.position}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Address
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editData.address}
                          onChange={(e) => setEditData({...editData, address: e.target.value})}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">{userData.address}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        About Me
                      </label>
                      {isEditing ? (
                        <textarea
                          value={editData.about}
                          onChange={(e) => setEditData({...editData, about: e.target.value})}
                          rows={4}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">{userData.about}</p>
                      )}
                    </div>

                    {isEditing && (
                      <div className="flex gap-3 pt-4">
                        <button
                          onClick={handleSave}
                          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          <Save className="w-4 h-4" />
                          Save Changes
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center gap-2 px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                        >
                          <X className="w-4 h-4" />
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Account Settings Tab */}
                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Security</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                          <span className="text-sm text-slate-700">Email notifications for new deals</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                          <span className="text-sm text-slate-700">Desktop notifications</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                          <span className="text-sm text-slate-700">Weekly performance summary</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Activity Log Tab */}
                {activeTab === 'activity' && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-slate-800 font-medium">{activity.action}</p>
                            <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}