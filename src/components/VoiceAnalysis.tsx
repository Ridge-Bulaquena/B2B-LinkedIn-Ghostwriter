
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Mic, TrendingUp, Users, MessageSquare } from "lucide-react";

const VoiceAnalysis = () => {
  const voiceMetrics = [
    { label: "Professional", value: 85, color: "bg-blue-500" },
    { label: "Inspirational", value: 72, color: "bg-green-500" },
    { label: "Educational", value: 68, color: "bg-purple-500" },
    { label: "Conversational", value: 91, color: "bg-orange-500" },
  ];

  const keyPhrases = [
    "empowering teams",
    "data-driven decisions", 
    "customer-centric approach",
    "scaling challenges",
    "market insights"
  ];

  const recentPosts = [
    {
      text: "Leadership isn't about having all the answers—it's about asking the right questions.",
      engagement: 234,
      tone: "Inspirational"
    },
    {
      text: "Our Q3 metrics show that customer retention is the new growth hack.",
      engagement: 189,
      tone: "Professional"
    },
    {
      text: "Building in public has been game-changing for our startup journey.",
      engagement: 312,
      tone: "Educational"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mic className="h-5 w-5 text-blue-600" />
            <span>Your Voice Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {voiceMetrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{metric.label}</span>
                  <span className="text-sm text-gray-600">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Signature Phrases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {keyPhrases.map((phrase) => (
              <Badge key={phrase} variant="outline" className="px-3 py-1">
                {phrase}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span>Recent Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-sm text-gray-700 mb-2">"{post.text}"</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{post.engagement} engagements</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {post.tone}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceAnalysis;
