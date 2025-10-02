"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { VoiceDimension } from "@/lib/voice-data";

interface VoiceGuidelineTableProps {
  dimensions: VoiceDimension[];
}

// Helper function to get the closest example based on slider value
const getExampleForValue = (dimension: VoiceDimension, value: number): string => {
  const keys = Object.keys(dimension.examples)
    .map(Number)
    .sort((a, b) => a - b);

  // Find the closest key to the current value
  let closestKey = keys[0];
  let minDiff = Math.abs(value - closestKey);

  for (const key of keys) {
    const diff = Math.abs(value - key);
    if (diff < minDiff) {
      minDiff = diff;
      closestKey = key;
    }
  }

  return dimension.examples[closestKey];
};

export function VoiceGuidelineTable({ dimensions }: VoiceGuidelineTableProps) {
  // Initialize slider values at 50 (middle)
  const [sliderValues, setSliderValues] = useState<Record<string, number>>(
    dimensions.reduce((acc, dim) => ({ ...acc, [dim.dimension]: 50 }), {})
  );

  const handleSliderChange = (dimension: string, value: number[]) => {
    setSliderValues(prev => ({ ...prev, [dimension]: value[0] }));
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border/30 shadow-2xl bg-gradient-to-br from-background via-background to-muted/10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[#8B0000] via-[#A01010] to-[#8B0000]">
            <th className="border-r border-white/10 px-8 py-6 text-left text-[13px] font-bold uppercase tracking-wider text-white/95">
              Dimension
            </th>
            <th className="border-r border-white/10 px-8 py-6 text-left text-[13px] font-bold uppercase tracking-wider text-white/95">
              Definition
            </th>
            <th className="border-r border-white/10 px-8 py-6 text-left text-[13px] font-bold uppercase tracking-wider text-white/95">
              Spectrum Range
            </th>
            <th className="px-8 py-6 text-left text-[13px] font-bold uppercase tracking-wider text-white/95">
              Examples
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/20">
          {dimensions.map((dimension, index) => {
            const isEven = index % 2 === 0;
            const currentValue = sliderValues[dimension.dimension] ?? 50;
            const currentExample = getExampleForValue(dimension, currentValue);

            return (
              <tr
                key={dimension.dimension}
                className={`group transition-all duration-200 hover:bg-muted/20 ${
                  isEven ? "bg-muted/10" : "bg-background"
                }`}
              >
                <td className="border-r border-border/20 px-8 py-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-1 rounded-full bg-gradient-to-b from-primary/60 to-primary/20 group-hover:from-primary group-hover:to-primary/40 transition-all" />
                    <span className="text-[15px] font-bold tracking-tight text-foreground/90">
                      {dimension.dimension}
                    </span>
                  </div>
                </td>
                <td className="border-r border-border/20 px-8 py-8">
                  <p className="text-[14px] leading-relaxed text-muted-foreground/80 font-medium">
                    {dimension.definition}
                  </p>
                </td>
                <td className="border-r border-border/20 px-8 py-8">
                  <div className="space-y-5 max-w-md">
                    {/* Labels */}
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                        {dimension.spectrumLeft}
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                        {dimension.spectrumRight}
                      </span>
                    </div>
                    {/* Slider */}
                    <Slider
                      value={[currentValue]}
                      onValueChange={(value) =>
                        handleSliderChange(dimension.dimension, value)
                      }
                      max={100}
                      step={1}
                      className="w-full cursor-pointer"
                    />
                  </div>
                </td>
                <td className="px-8 py-8">
                  <div className="relative min-h-[4rem] flex items-center">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full" />
                    <p className="pl-4 text-[15px] leading-relaxed text-foreground/85 font-medium transition-all duration-500 ease-out">
                      <span className="inline-block animate-in fade-in-0 slide-in-from-left-2 duration-500" key={currentExample}>
                        &ldquo;{currentExample}&rdquo;
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
