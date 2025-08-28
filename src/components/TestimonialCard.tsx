import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating?: number;
}

export const TestimonialCard = ({ quote, author, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="bg-teal-50 border-teal-100 shadow-soft">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
          ))}
        </div>
        <blockquote className="text-gray-900 mb-4 font-medium">
          "{quote}"
        </blockquote>
        <cite className="text-gray-600 font-medium">– {author}</cite>
      </CardContent>
    </Card>
  );
};