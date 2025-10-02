export type DimensionId =
  | "formality"
  | "warmth"
  | "enthusiasm"
  | "authority"
  | "humor"
  | "optimism"
  | "urgency";

export type SpectrumStep = {
  id: string;
  label: string;
  description: string;
  example: string;
  highlights?: string[];
};

export type ToneDimension = {
  id: DimensionId;
  title: string;
  definition: string;
  spectrum: {
    leftLabel: string;
    rightLabel: string;
  };
  guidance: string;
  callout?: string;
  defaultStepId: string;
  steps: SpectrumStep[];
};

export type ToneProfile = {
  id: string;
  label: string;
  audience: string;
  objective: string;
  summary: string;
  tags: string[];
  dimensions: ToneDimension[];
};

const baseDimensionDefinitions: Record<DimensionId, Omit<ToneDimension, "guidance" | "callout" | "defaultStepId" | "steps">> = {
  formality: {
    id: "formality",
    title: "Formality",
    definition: "Degree of professionalism expressed in language and formatting.",
    spectrum: {
      leftLabel: "Casual",
      rightLabel: "Formal",
    },
  },
  warmth: {
    id: "warmth",
    title: "Warmth",
    definition: "Level of emotional openness and personal connection.",
    spectrum: {
      leftLabel: "Distant",
      rightLabel: "Friendly",
    },
  },
  enthusiasm: {
    id: "enthusiasm",
    title: "Enthusiasm",
    definition: "Energy level conveyed through verbs, punctuation, and pacing.",
    spectrum: {
      leftLabel: "Reserved",
      rightLabel: "Excited",
    },
  },
  authority: {
    id: "authority",
    title: "Authority",
    definition: "Confidence and assertiveness when delivering recommendations.",
    spectrum: {
      leftLabel: "Suggestive",
      rightLabel: "Directive",
    },
  },
  humor: {
    id: "humor",
    title: "Humor",
    definition: "Use of playful language, wit, or levity.",
    spectrum: {
      leftLabel: "Serious",
      rightLabel: "Playful",
    },
  },
  optimism: {
    id: "optimism",
    title: "Optimism",
    definition: "Balance of realism versus positive framing.",
    spectrum: {
      leftLabel: "Realistic",
      rightLabel: "Upbeat",
    },
  },
  urgency: {
    id: "urgency",
    title: "Urgency",
    definition: "How quickly the message encourages action.",
    spectrum: {
      leftLabel: "Relaxed",
      rightLabel: "Immediate",
    },
  },
};

const mergeDimension = (
  id: DimensionId,
  overrides: Pick<ToneDimension, "guidance" | "callout" | "defaultStepId" | "steps">
): ToneDimension => ({
  ...baseDimensionDefinitions[id],
  ...overrides,
});

export const toneProfiles: ToneProfile[] = [
  {
    id: "client",
    label: "Client-facing",
    audience: "Hiring managers & stakeholders",
    objective: "Build trust, deliver strategic guidance, support confident decisions.",
    summary:
      "Consultative and steady. Prioritize clarity over flair, and use confident language that signals partnership.",
    tags: ["Insight-led", "Strategic", "Measured"],
    dimensions: [
      mergeDimension("formality", {
        guidance: "Lead with polished structure and concrete takeaways to reinforce credibility.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "casual",
            label: "Casual",
            description: "Light touch, conversational phrasing.",
            example: "Let's hop on a quick call to walk through the candidate slate together.",
            highlights: ["hop on a quick call", "together"],
          },
          {
            id: "balanced",
            label: "Consultative",
            description: "Clean sentences with approachable tone.",
            example:
              "Attached is the candidate profile we recommend based on your priorities for Q4.",
            highlights: ["recommend", "your priorities"],
          },
          {
            id: "formal",
            label: "Formal",
            description: "Structured, precise wording and formatting.",
            example:
              "Please review the enclosed candidate profiles at your convenience and share any revisions.",
            highlights: ["please review", "enclosed"],
          },
        ],
      }),
      mergeDimension("warmth", {
        guidance: "Balance empathy with professional distance--warm, not familiar.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "distant",
            label: "Reserved",
            description: "Neutral greetings and acknowledgements.",
            example: "We've received your hiring brief and are preparing recommendations.",
            highlights: ["received", "preparing"],
          },
          {
            id: "balanced",
            label: "Approachable",
            description: "Acknowledges partnership and support.",
            example: "We're excited to support your hiring goals this quarter.",
            highlights: ["excited", "support"],
          },
          {
            id: "friendly",
            label: "Warm",
            description: "Personal touches that reinforce collaboration.",
            example: "Thanks again for trusting us with this search--we're here whenever you need us.",
            highlights: ["Thanks again", "trusting us"],
          },
        ],
      }),
      mergeDimension("enthusiasm", {
        guidance: "Signal momentum without sounding salesy.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "reserved",
            label: "Steady",
            description: "Matter-of-fact updates.",
            example: "This solution aligns closely with the requirements you outlined last week.",
            highlights: ["aligns closely", "requirements"],
          },
          {
            id: "balanced",
            label: "Confident",
            description: "Positive but grounded language.",
            example: "This solution aligns strongly with your current needs and timeline.",
            highlights: ["aligns strongly", "current needs"],
          },
          {
            id: "excited",
            label: "Driven",
            description: "High-energy cues focused on outcomes.",
            example: "We're energized by how well this shortlist maps to your hiring plan.",
            highlights: ["energized", "maps"],
          },
        ],
      }),
      mergeDimension("authority", {
        guidance: "Make clear recommendations backed by evidence.",
        defaultStepId: "directive",
        steps: [
          {
            id: "suggestive",
            label: "Suggestive",
            description: "Offers options and questions.",
            example: "You may want to review these profiles before tomorrow's sync.",
            highlights: ["may want", "review"],
          },
          {
            id: "balanced",
            label: "Guiding",
            description: "States recommendation with rationale.",
            example: "We recommend advancing Priya and Isaiah; their experience directly matches your brief.",
            highlights: ["recommend advancing", "directly matches"],
          },
          {
            id: "directive",
            label: "Directive",
            description: "Clear next step and urgency.",
            example: "We advise moving forward quickly--top talent won't stay available long.",
            highlights: ["advise", "moving forward quickly"],
          },
        ],
      }),
      mergeDimension("humor", {
        guidance: "Keep things straight-forward; levity is rare and purposeful.",
        callout: "Typically avoid humor for client communications.",
        defaultStepId: "serious",
        steps: [
          {
            id: "serious",
            label: "Serious",
            description: "Direct, polished language.",
            example: "We're available to troubleshoot any blockers as they come up.",
            highlights: ["available", "troubleshoot"],
          },
          {
            id: "balanced",
            label: "Light",
            description: "Gentle warmth, no jokes.",
            example: "We'll keep things moving so you can stay focused on strategy.",
            highlights: ["keep things moving", "focused"],
          },
          {
            id: "playful",
            label: "Playful",
            description: "Occasional phrasing to ease tension.",
            example: "Consider us your quick-response squad--just say the word.",
            highlights: ["quick-response squad"],
          },
        ],
      }),
      mergeDimension("optimism", {
        guidance: "Balance realism with confidence in outcomes.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "realistic",
            label: "Pragmatic",
            description: "Level-set expectations clearly.",
            example: "Market conditions are tight, so timelines may flex this month.",
            highlights: ["market conditions", "may flex"],
          },
          {
            id: "balanced",
            label: "Positive",
            description: "Hopeful without overstating certainty.",
            example: "Market conditions are challenging, but great candidates are out there.",
            highlights: ["challenging", "great candidates"],
          },
          {
            id: "upbeat",
            label: "Upbeat",
            description: "Framing that spotlights opportunity.",
            example: "We're seeing strong traction in your talent pool--momentum is on your side.",
            highlights: ["strong traction", "momentum"],
          },
        ],
      }),
      mergeDimension("urgency", {
        guidance: "Create momentum without pressure--clients need space to align.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "relaxed",
            label: "Relaxed",
            description: "Flexible timing cues.",
            example: "Share notes when convenient and we'll incorporate them into next week's shortlist.",
            highlights: ["when convenient", "next week's shortlist"],
          },
          {
            id: "balanced",
            label: "Prompt",
            description: "Encourages timely action.",
            example: "To avoid delays, let's confirm feedback before Thursday's review.",
            highlights: ["avoid delays", "confirm feedback"],
          },
          {
            id: "immediate",
            label: "Immediate",
            description: "Signals time-sensitive impact.",
            example: "Please share sign-off by 3 PM so we can secure interviews this week.",
            highlights: ["Please share", "secure interviews"],
          },
        ],
      }),
    ],
  },
  {
    id: "candidate",
    label: "Candidate-facing",
    audience: "Prospects & active talent",
    objective: "Spark connection, humanize the brand, drive replies and conversions.",
    summary:
      "Friendly energy with motivational language. Show candidates the path forward and keep them excited to engage.",
    tags: ["Encouraging", "Personal", "Momentum"],
    dimensions: [
      mergeDimension("formality", {
        guidance: "Stay conversational while keeping instructions clear.",
        defaultStepId: "casual",
        steps: [
          {
            id: "casual",
            label: "Casual",
            description: "Everyday phrasing and contractions.",
            example: "Hey James, we've got a new role that fits your experience.",
            highlights: ["Hey James", "fits your experience"],
          },
          {
            id: "balanced",
            label: "Polished",
            description: "Friendly yet structured.",
            example: "Hi James, we spotted a role that aligns nicely with what you shared.",
            highlights: ["Hi James", "aligns nicely"],
          },
          {
            id: "formal",
            label: "Formal",
            description: "Used for executive or sensitive outreach.",
            example: "Hello James, we identified an opportunity that matches your background precisely.",
            highlights: ["Hello James", "matches your background"],
          },
        ],
      }),
      mergeDimension("warmth", {
        guidance: "Lean into empathy--show you're rooting for them.",
        defaultStepId: "friendly",
        steps: [
          {
            id: "distant",
            label: "Neutral",
            description: "Straightforward updates.",
            example: "We're reaching out with an update on your application.",
            highlights: ["reaching out", "update"],
          },
          {
            id: "balanced",
            label: "Supportive",
            description: "Signals partnership.",
            example: "We're here to help you find a role where you can thrive.",
            highlights: ["here to help", "thrive"],
          },
          {
            id: "friendly",
            label: "Friendly",
            description: "Adds enthusiasm and encouragement.",
            example: "We're cheering you on--let's find the role you deserve!",
            highlights: ["cheering you on", "role you deserve"],
          },
        ],
      }),
      mergeDimension("enthusiasm", {
        guidance: "Keep momentum high--showcase wins and future possibilities.",
        defaultStepId: "excited",
        steps: [
          {
            id: "reserved",
            label: "Reserved",
            description: "Measured optimism.",
            example: "This opportunity lines up with the priorities you mentioned.",
            highlights: ["lines up", "priorities"],
          },
          {
            id: "balanced",
            label: "Bright",
            description: "Adds positive adjectives.",
            example: "This opportunity could be a great next step for you.",
            highlights: ["great next step"],
          },
          {
            id: "excited",
            label: "Celebratory",
            description: "High energy, emoji-friendly.",
            example: "This role could be a game-changer--ready to explore it?",
            highlights: ["game-changer", "ready to explore"],
          },
        ],
      }),
      mergeDimension("authority", {
        guidance: "Guide the process while staying collaborative.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "suggestive",
            label: "Suggestive",
            description: "Gentle nudges.",
            example: "We recommend applying soon if it feels like a fit.",
            highlights: ["recommend", "feels like a fit"],
          },
          {
            id: "balanced",
            label: "Guiding",
            description: "Clear direction with choice.",
            example: "We recommend applying soon; it's a high-demand role and we'd love to refer you.",
            highlights: ["recommend applying", "high-demand"],
          },
          {
            id: "directive",
            label: "Directive",
            description: "Specific step and timing.",
            example: "Let's submit your application today so we can get you in front of the hiring manager.",
            highlights: ["submit your application today", "get you in front"],
          },
        ],
      }),
      mergeDimension("humor", {
        guidance: "Use playful language to humanize the brand.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "serious",
            label: "Straightforward",
            description: "No jokes, just clarity.",
            example: "We couldn't match your search yet, but we're on it.",
            highlights: ["we're on it"],
          },
          {
            id: "balanced",
            label: "Playful",
            description: "Light metaphors or wordplay.",
            example: "Ready to ghost-proof your job search? Let's talk!",
            highlights: ["ghost-proof", "Let's talk"],
          },
          {
            id: "playful",
            label: "High Play",
            description: "Use when audience responds well to levity.",
            example: "Your dream role called--it wants to meet you this week!",
            highlights: ["dream role called", "meet you"],
          },
        ],
      }),
      mergeDimension("optimism", {
        guidance: "Show belief in their trajectory without overpromising.",
        defaultStepId: "upbeat",
        steps: [
          {
            id: "realistic",
            label: "Grounded",
            description: "Names the challenge.",
            example: "The market is competitive, so responses can take a couple weeks.",
            highlights: ["market is competitive", "couple weeks"],
          },
          {
            id: "balanced",
            label: "Hopeful",
            description: "Encouraging outlook.",
            example: "We've seen lots of success for professionals with your background.",
            highlights: ["lots of success", "your background"],
          },
          {
            id: "upbeat",
            label: "Upbeat",
            description: "Highlights possibility.",
            example: "We've seen lots of success for professionals with your background--let's add you to that list.",
            highlights: ["add you to that list"],
          },
        ],
      }),
      mergeDimension("urgency", {
        guidance: "Encourage timely replies so momentum stays high.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "relaxed",
            label: "Relaxed",
            description: "Flexible timeline.",
            example: "Circle back whenever you're ready and we'll keep the intro warm.",
            highlights: ["whenever you're ready", "keep the intro warm"],
          },
          {
            id: "balanced",
            label: "Prompt",
            description: "Suggests timeframe.",
            example: "Let's chat today to keep you in the running.",
            highlights: ["chat today", "keep you in the running"],
          },
          {
            id: "immediate",
            label: "Immediate",
            description: "Signals urgency.",
            example: "Can you send over a quick yes by 3 PM so we can lock your interview?",
            highlights: ["quick yes", "lock your interview"],
          },
        ],
      }),
    ],
  },
  {
    id: "social",
    label: "Social media",
    audience: "Public channels & community",
    objective: "Spark engagement, celebrate wins, and drive shares.",
    summary:
      "High-energy and shareable. Keep posts punchy, spotlight emotion, and differentiate between candidate and client angles.",
    tags: ["Vibrant", "Share-worthy", "Brand-forward"],
    dimensions: [
      mergeDimension("formality", {
        guidance: "Lead with approachable voice that still reflects expertise.",
        defaultStepId: "casual",
        steps: [
          {
            id: "casual",
            label: "Casual",
            description: "Short, first-person snippets.",
            example: "Your next opportunity could be a click away.",
            highlights: ["click away"],
          },
          {
            id: "balanced",
            label: "Balanced",
            description: "Mix of casual and consultative.",
            example: "Your next opportunity could be closer than you think--here's the link.",
            highlights: ["closer than you think"],
          },
          {
            id: "formal",
            label: "Formal",
            description: "Occasional for thought leadership.",
            example: "Explore open roles tailored to your expertise at the link below.",
            highlights: ["tailored to your expertise"],
          },
        ],
      }),
      mergeDimension("warmth", {
        guidance: "Stay enthusiastically supportive toward both audiences.",
        defaultStepId: "friendly",
        steps: [
          {
            id: "distant",
            label: "Info-first",
            description: "Facts over feelings.",
            example: "Hiring is hard. That's why we're here.",
            highlights: ["we're here"],
          },
          {
            id: "balanced",
            label: "Encouraging",
            description: "Blends empathy and value.",
            example: "We're here to help you find a role where you can thrive.",
            highlights: ["help you", "thrive"],
          },
          {
            id: "friendly",
            label: "Friendly",
            description: "Use emojis and shoutouts.",
            example: "We love seeing candidates thrive--let's find your next win!",
            highlights: ["love", "next win"],
          },
        ],
      }),
      mergeDimension("enthusiasm", {
        guidance: "Celebrate loudly--spotlight success and momentum.",
        defaultStepId: "excited",
        steps: [
          {
            id: "reserved",
            label: "Calm",
            description: "Low-key posts.",
            example: "Landed the job? Let's celebrate that win.",
            highlights: ["celebrate"],
          },
          {
            id: "balanced",
            label: "Amped",
            description: "Starter emojis & exclamation.",
            example: "Landed the job? Let's celebrate that win 🎉",
            highlights: ["🎉"],
          },
          {
            id: "excited",
            label: "Hype",
            description: "High-energy CTA.",
            example: "Just placed a stellar developer on a fast-moving team--who's next?",
            highlights: ["stellar", "who's next"],
          },
        ],
      }),
      mergeDimension("authority", {
        guidance: "Share actionable guidance without sounding rigid.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "suggestive",
            label: "Suggestive",
            description: "Invites conversation.",
            example: "Want to stand out? Tailor your resume to the role.",
            highlights: ["stand out", "Tailor"],
          },
          {
            id: "balanced",
            label: "Guiding",
            description: "Clear advice with supportive tone.",
            example: "Want to stand out? Tailor your resume to the role--here's a template to start.",
            highlights: ["template", "start"],
          },
          {
            id: "directive",
            label: "Directive",
            description: "Strong call-to-action.",
            example: "Here's what top candidates do: tailor the resume, add proof, hit send today.",
            highlights: ["hit send today"],
          },
        ],
      }),
      mergeDimension("humor", {
        guidance: "Use wit to boost engagement, especially for candidate angles.",
        callout: "Dial humor down when speaking to clients.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "serious",
            label: "Straight",
            description: "No punchlines, just value.",
            example: "Hiring fast? We move faster.",
            highlights: ["move faster"],
          },
          {
            id: "balanced",
            label: "Witty",
            description: "A wink or sly remark.",
            example: "Your resume called. It wants a refresh. Need a hand?",
            highlights: ["resume called", "refresh"],
          },
          {
            id: "playful",
            label: "Playful",
            description: "Bold humor & emojis.",
            example: "Your resume called. It wants a refresh--good thing we brought the tools 🧰",
            highlights: ["🧰", "resume called"],
          },
        ],
      }),
      mergeDimension("optimism", {
        guidance: "Keep energy high while acknowledging realities.",
        defaultStepId: "balanced",
        steps: [
          {
            id: "realistic",
            label: "Realistic",
            description: "Data-first tone.",
            example: "A great hire can transform your team--let's find them together.",
            highlights: ["transform", "together"],
          },
          {
            id: "balanced",
            label: "Optimistic",
            description: "Highlights momentum.",
            example: "A better opportunity could be just one conversation away.",
            highlights: ["one conversation away"],
          },
          {
            id: "upbeat",
            label: "Radiant",
            description: "Paints the success story.",
            example: "The next great hire could be one DM away--let's make the intro!",
            highlights: ["one DM away", "make the intro"],
          },
        ],
      }),
      mergeDimension("urgency", {
        guidance: "Channel FOMO while staying respectful.",
        defaultStepId: "immediate",
        steps: [
          {
            id: "relaxed",
            label: "Relaxed",
            description: "Gentle nudge.",
            example: "Apply now--roles move quickly.",
            highlights: ["move quickly"],
          },
          {
            id: "balanced",
            label: "Prompt",
            description: "Specific timeframe.",
            example: "Need a project team fast? We can deliver in as little as 48 hours.",
            highlights: ["48 hours", "deliver"],
          },
          {
            id: "immediate",
            label: "Immediate",
            description: "High urgency CTA.",
            example: "Need a project team fast? We can deliver in as little as 48 hours--DM us today.",
            highlights: ["DM us today", "48 hours"],
          },
        ],
      }),
    ],
  },
];

export const profileIds = toneProfiles.map((profile) => profile.id);
