// app/privacy-dashboard/page.tsx

import ExifRemover from "./ExifRemover";
import ExifScrubber from "./ExifScrubber";
import FakeFollowerFilter from "./FakeFollowerFilter";
import FollowersPrivacy from "./FollowersPrivacy";
import LocationFuzzingTool from "./LocationFuzzingTool";
import PrivacyScore from "./PrivacyScore";
import ProfileDataMinimizer from "./ProfileDataMinimizer";
import TagApprovalCenter from "./TagApprovalCenter";
import VPNSwitch from "./VPNSwitch";

export default function PrivacyDashboardPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-semibold mb-6">Privacy Dashboard</h1>

      <section className="border rounded-md p-4 shadow-sm">
        <FollowersPrivacy />
      </section>
      <section className="border rounded-md p-4 shadow-sm">
        <VPNSwitch />
      </section>

      <section className="border rounded-md p-4 shadow-sm">
        <TagApprovalCenter />
      </section>

      <section className="border rounded-md p-4 shadow-sm">
        <ExifRemover />
      </section>
    </div>
  );
}
