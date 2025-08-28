import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DownloadButton } from "@/components/DownloadButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { 
  Shield, 
  Settings, 
  Target, 
  CheckCircle, 
  Clock, 
  Users, 
  Smartphone,
  Brain,
  Heart
} from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import problemStats from "@/assets/problem-stats.png";
import solutionGuard from "@/assets/solution-guard.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ✨ Take Back Control of Your Time
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Social Guard helps you pause before scrolling. Add fun quizzes, mindful habits, or quick tasks before opening apps like Instagram, YouTube, or TikTok.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <DownloadButton store="app-store" variant="hero" />
                <DownloadButton store="play-store" variant="hero" />
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={heroPhoneMockup} 
                alt="Social Guard app interface showing quiz before Instagram"
                className="max-w-xs lg:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-1">
              <img 
                src={problemStats} 
                alt="Statistics showing time wasted on social media"
                className="max-w-sm"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                We spend hours doomscrolling.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Average 3+ hours daily social media use</p>
                </div>
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Leads to lost productivity, poor focus, low mood</p>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Willpower isn't enough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Social Guard: Your Pause Button for Better Living
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Choose your pause activity: quiz, deep breath, goal writing, or custom habit</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Works with Instagram, YouTube, TikTok & more</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">You stay in control — not restrictive</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={solutionGuard} 
                alt="Social Guard protecting apps with a shield"
                className="max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Set up Social Guard in minutes and start building healthier digital habits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HowItWorksStep
              step={1}
              title="Select apps you want to guard"
              description="Choose which social media apps you want to add a pause to"
              icon={<Smartphone className="w-8 h-8" />}
            />
            <HowItWorksStep
              step={2}
              title="Set your quiz / task"
              description="Pick from quizzes, breathing exercises, or custom habits"
              icon={<Settings className="w-8 h-8" />}
            />
            <HowItWorksStep
              step={3}
              title="Try to open the app → Social Guard appears"
              description="Your chosen activity appears before the app opens"
              icon={<Shield className="w-8 h-8" />}
            />
            <HowItWorksStep
              step={4}
              title="Complete the task → app opens 🎉"
              description="Finish your task and mindfully access your app"
              icon={<Target className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              People love their time back 💙
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of users building healthier digital habits
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <TestimonialCard
              quote="Cut my Instagram time by 40% in a week."
              author="Rohan"
            />
            <TestimonialCard
              quote="Keeps me mindful without being restrictive."
              author="Sneha"
            />
            <TestimonialCard
              quote="Finally broke my TikTok addiction!"
              author="Alex"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Free to start. Upgrade if you want more.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Plan</h3>
                <div className="text-3xl font-bold text-primary mb-6">$0</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Guard up to 2 apps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>1 task type</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Start Free Today
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-medium border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Plan</h3>
                <div className="text-3xl font-bold text-primary mb-6">$2.99<span className="text-lg text-gray-600">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Unlimited apps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Full customization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Button variant="hero" className="w-full">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Will it block me completely?
                </h3>
                <p className="text-gray-600">
                  No, it just makes you pause with your chosen task. You're always in control and can access your apps after completing the activity.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Which apps does it work with?
                </h3>
                <p className="text-gray-600">
                  Instagram, YouTube, TikTok, and any app you choose. You have full control over which apps to guard.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Is my data safe?
                </h3>
                <p className="text-gray-600">
                  Yes, we don't track or share your app usage. All data stays on your device and is completely private.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Guard Your Time?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who've taken back control of their digital habits with Social Guard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton store="app-store" />
            <DownloadButton store="play-store" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Social Guard</h3>
              <p className="text-gray-400">
                Take back control of your time with mindful pauses before social media.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
              <p className="text-gray-400">© 2025 Social Guard</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;