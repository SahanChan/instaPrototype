export default function SettingsPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      {/* Account Settings */}
      <section>
        <h2 className="text-lg font-medium mb-2">Account</h2>
        <ul className="space-y-2">
          <li className="border-b pb-2">
            <button className="w-full text-left">Change Password</button>
          </li>
          <li className="border-b pb-2">
            <button className="w-full text-left">Privacy Settings</button>
          </li>
          <li className="border-b pb-2">
            <button className="w-full text-left">Notifications</button>
          </li>
        </ul>
      </section>

      {/* App Settings */}
      <section>
        <h2 className="text-lg font-medium mb-2">App</h2>
        <ul className="space-y-2">
          <li className="border-b pb-2">
            <button className="w-full text-left">Language</button>
          </li>
          <li className="border-b pb-2">
            <button className="w-full text-left">Dark Mode</button>
          </li>
        </ul>
      </section>

      {/* Logout */}
      <section>
        <button className="text-red-600 font-medium">Log Out</button>
      </section>
    </div>
  );
}
