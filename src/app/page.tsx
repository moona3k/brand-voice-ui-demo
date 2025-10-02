"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoiceGuidelineTable } from "@/components/VoiceGuidelineTable";
import { voiceCategories } from "@/lib/voice-data";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-background/98 to-muted/30 pb-24">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,theme(colors.primary/12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom,theme(colors.muted/40),transparent_60%)]" />

      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-16 px-8 pt-16 sm:px-12 lg:px-16">
        {/* Header */}
        <header className="space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-card/95 via-background/90 to-muted/40 p-12 shadow-2xl backdrop-blur-sm sm:p-14">
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/50 bg-gradient-to-r from-primary/15 to-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-primary shadow-sm"
                >
                  Brand Voice Lab
                </Badge>
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                  Brand Voice Guideline Visualizer
                </h1>
                <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground/90 sm:text-xl font-medium">
                  Explore how each tonal dimension shifts language in real time. Adjust the spectrum sliders
                  and watch examples update instantly to match your desired tone.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 shadow-sm">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground/80">Live examples update as you slide</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-muted-foreground/80">Real-time tone analysis</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs for different categories */}
        <Tabs defaultValue="0" className="w-full space-y-10">
          <div className="relative">
            <TabsList className="inline-flex h-auto w-full items-center justify-start gap-2 rounded-2xl border border-border/40 bg-gradient-to-br from-muted/40 via-muted/30 to-background/50 p-2 shadow-lg backdrop-blur-sm">
              {voiceCategories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="relative rounded-xl px-8 py-4 text-[15px] font-bold tracking-tight text-muted-foreground transition-all duration-300 hover:text-foreground data-[state=active]:bg-gradient-to-br data-[state=active]:from-background data-[state=active]:via-background/95 data-[state=active]:to-muted/10 data-[state=active]:text-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-primary/5"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {voiceCategories.map((category, index) => (
            <TabsContent
              key={index}
              value={index.toString()}
              className="mt-0 space-y-8 focus-visible:outline-none data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:duration-700"
            >
              {/* Category header */}
              <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-card/90 via-card/80 to-background/70 p-10 shadow-xl backdrop-blur-sm">
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/8 blur-3xl" />
                <div className="relative flex items-start gap-5">
                  <div className="h-20 w-1.5 rounded-full bg-gradient-to-b from-primary via-primary/80 to-primary/30 shadow-lg shadow-primary/20" />
                  <div className="space-y-3">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-[17px] text-muted-foreground/90 font-medium leading-relaxed max-w-4xl">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Table */}
              <VoiceGuidelineTable dimensions={category.dimensions} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
