
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Edit } from "lucide-react";

const ContentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const scheduledPosts = [
    {
      id: 1,
      date: "2024-01-15",
      time: "09:00",
      title: "Leadership Insights",
      status: "scheduled",
      engagement: "High",
      preview: "The biggest lesson I learned this quarter..."
    },
    {
      id: 2,
      date: "2024-01-16",
      time: "14:30",
      title: "Market Analysis",
      status: "draft",
      engagement: "Medium",
      preview: "B2B buyers are changing, and so should our approach..."
    },
    {
      id: 3,
      date: "2024-01-17",
      time: "11:15",
      title: "Team Building",
      status: "scheduled",
      engagement: "High",
      preview: "Remote team culture isn't about ping pong tables..."
    },
    {
      id: 4,
      date: "2024-01-18",
      time: "16:00",
      title: "Industry Trends",
      status: "idea",
      engagement: "Medium",
      preview: "AI is reshaping B2B sales, but not how you think..."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-green-100 text-green-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      case "idea": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case "High": return "text-green-600";
      case "Medium": return "text-yellow-600";
      case "Low": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Content Calendar</span>
            </CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheduledPosts.map((post) => (
              <Card key={post.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={getStatusColor(post.status)}>
                        {post.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sm">{post.title}</h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {post.preview}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.date} at {post.time}</span>
                      </div>
                      <span className={getEngagementColor(post.engagement)}>
                        {post.engagement} Est.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Scheduled</span>
                <span className="font-semibold text-green-600">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Drafts</span>
                <span className="font-semibold text-yellow-600">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Ideas</span>
                <span className="font-semibold text-blue-600">7</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Best Times</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>Weekdays: <span className="font-semibold">9-11 AM</span></div>
              <div>Lunch: <span className="font-semibold">12-2 PM</span></div>
              <div>Evening: <span className="font-semibold">5-7 PM</span></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Content Mix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>Leadership: <span className="font-semibold">40%</span></div>
              <div>Industry: <span className="font-semibold">30%</span></div>
              <div>Personal: <span className="font-semibold">20%</span></div>
              <div>Company: <span className="font-semibold">10%</span></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentCalendar;
