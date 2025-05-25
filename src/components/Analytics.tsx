
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, Heart, MessageCircle, Share, Eye } from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Impressions",
      value: "47.2K",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-blue-600"
    },
    {
      title: "Engagement Rate",
      value: "6.8%",
      change: "+2.1%",
      trend: "up",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "New Followers",
      value: "1,234",
      change: "+18.3%",
      trend: "up",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Comments",
      value: "892",
      change: "+5.7%",
      trend: "up",
      icon: MessageCircle,
      color: "text-purple-600"
    }
  ];

  const topPosts = [
    {
      content: "The biggest mistake I made as a first-time founder was thinking I needed to have all the answers...",
      impressions: 12500,
      engagement: 8.4,
      comments: 67,
      shares: 23
    },
    {
      content: "B2B sales in 2024: It's not about your product features anymore. It's about understanding your customer's transformation journey...",
      impressions: 9800,
      engagement: 7.2,
      comments: 45,
      shares: 18
    },
    {
      content: "Remote team management lesson: Trust is not given, it's built through consistent transparency...",
      impressions: 8900,
      engagement: 6.9,
      comments: 38,
      shares: 15
    }
  ];

  const weeklyData = [
    { day: "Mon", posts: 2, engagement: 6.2 },
    { day: "Tue", posts: 1, engagement: 7.8 },
    { day: "Wed", posts: 3, engagement: 5.9 },
    { day: "Thu", posts: 2, engagement: 8.1 },
    { day: "Fri", posts: 1, engagement: 6.7 },
    { day: "Sat", posts: 0, engagement: 0 },
    { day: "Sun", posts: 1, engagement: 5.4 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {metric.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span>Weekly Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-8">{day.day}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(day.engagement / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{day.engagement}%</span>
                    </div>
                  </div>
                  <Badge variant="outline">{day.posts} posts</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.engagement}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share className="h-3 w-3" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
