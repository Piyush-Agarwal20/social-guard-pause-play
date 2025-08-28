import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

interface DownloadButtonProps {
  store: "app-store" | "play-store";
  variant?: "hero" | "default";
}

export const DownloadButton = ({ store, variant = "default" }: DownloadButtonProps) => {
  const isAppStore = store === "app-store";
  
  return (
    <Button
      variant={variant}
      size="lg"
      className="flex items-center gap-3 min-w-[200px]"
    >
      {isAppStore ? (
        <Apple className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6" />
      )}
      <div className="text-left">
        <div className="text-xs opacity-90">
          {isAppStore ? "Download on the" : "Get it on"}
        </div>
        <div className="text-sm font-semibold">
          {isAppStore ? "App Store" : "Google Play"}
        </div>
      </div>
    </Button>
  );
};