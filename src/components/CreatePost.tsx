
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wand2, Copy, RefreshCw, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreatePost = () => {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const topics = [
    "Industry Insights",
    "Leadership Lessons",
    "Company Updates",
    "Personal Journey",
    "Market Trends",
    "Team Building",
    "Innovation",
    "Customer Success"
  ];

  const tones = [
    "Professional",
    "Thought Leader",
    "Inspirational",
    "Educational",
    "Conversational",
    "Bold & Confident"
  ];

  const samplePosts = [
    "Just wrapped up an incredible quarter with my team. The key to our 40% growth? Empowering every team member to own their decisions and celebrate their wins. Leadership isn't about having all the answers—it's about creating an environment where the best ideas can emerge from anywhere. What's your experience with distributed leadership?",
    "Three years ago, I thought scaling meant hiring faster. I was wrong. Real scaling means building systems that work without you. Today, our team operates seamlessly across 4 time zones because we invested in processes, not just people. The hardest part of being a founder? Learning when to step back.",
    "The best customer feedback I ever received: 'Your product didn't just solve our problem—it made us rethink our entire workflow.' Sometimes the biggest wins come not from building what customers ask for, but from understanding the problem behind their request. What's the most surprising feedback you've received?"
  ];

  const generatePost = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const randomPost = samplePosts[Math.floor(Math.random() * samplePosts.length)];
      setGeneratedPost(randomPost);
      setIsGenerating(false);
      toast({
        title: "Post Generated!",
        description: "Your LinkedIn post has been created in your voice.",
      });
    }, 2000);
  };

  const copyPost = () => {
    navigator.clipboard.writeText(generatedPost);
    toast({
      title: "Copied to Clipboard",
      description: "Your post is ready to share on LinkedIn.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wand2 className="h-5 w-5 text-blue-600" />
            <span>Create Your LinkedIn Post</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Content Topic</label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Voice Tone</label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your tone" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium">Trending Tags:</span>
            {["#Leadership", "#Entrepreneurship", "#B2B", "#SaaS", "#Growth"].map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                {tag}
              </Badge>
            ))}
          </div>

          <Button 
            onClick={generatePost} 
            disabled={!topic || !tone || isGenerating}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Generating Your Post...
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4 mr-2" />
                Generate LinkedIn Post
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedPost && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              value={generatedPost}
              onChange={(e) => setGeneratedPost(e.target.value)}
              className="min-h-[150px] resize-none"
              placeholder="Your generated post will appear here..."
            />
            
            <div className="flex space-x-2">
              <Button onClick={copyPost} variant="outline">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button onClick={generatePost} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4 mr-2" />
                Schedule Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreatePost;
