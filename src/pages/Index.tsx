
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CreatePost from "@/components/CreatePost";
import VoiceAnalysis from "@/components/VoiceAnalysis";
import ContentCalendar from "@/components/ContentCalendar";
import Analytics from "@/components/Analytics";

const Index = () => {
  const [activeTab, setActiveTab] = useState("create");

  const renderContent = () => {
    switch (activeTab) {
      case "create":
        return <CreatePost />;
      case "voice":
        return <VoiceAnalysis />;
      case "calendar":
        return <ContentCalendar />;
      case "analytics":
        return <Analytics />;
      case "trending":
        return (
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500">Trending Topics coming soon...</p>
          </div>
        );
      case "audience":
        return (
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500">Audience Insights coming soon...</p>
          </div>
        );
      default:
        return <CreatePost />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
