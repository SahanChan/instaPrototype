export default function PrivacyDashboardPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-semibold mb-6">Privacy Dashboard</h1>

      <section className="border rounded-md p-4 shadow-sm">
        <h2 className="text-lg font-medium mb-2">Account Visibility</h2>
        <p className="text-sm mb-2">
          Control who can see your posts and profile.
        </p>
        <button className="text-blue-600 hover:underline">
          Edit Visibility Settings
        </button>
      </section>

      <section className="border rounded-md p-4 shadow-sm">
        <h2 className="text-lg font-medium mb-2">Blocked Accounts</h2>
        <p className="text-sm mb-2">Manage users you've blocked.</p>
        <button className="text-blue-600 hover:underline">
          View Blocked Users
        </button>
      </section>

      <section className="border rounded-md p-4 shadow-sm">
        <h2 className="text-lg font-medium mb-2">Data Usage</h2>
        <p className="text-sm mb-2">
          View and manage how your data is being used.
        </p>
        <button className="text-blue-600 hover:underline">
          Manage Data Preferences
        </button>
      </section>

      <section className="border rounded-md p-4 shadow-sm">
        <h2 className="text-lg font-medium mb-2">Ad Preferences</h2>
        <p className="text-sm mb-2">Control what kinds of ads you see.</p>
        <button className="text-blue-600 hover:underline">
          Edit Ad Settings
        </button>
      </section>
    </div>
  );
}
