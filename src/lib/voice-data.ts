export interface VoiceDimension {
  dimension: string;
  definition: string;
  spectrumLeft: string;
  spectrumRight: string;
  examples: {
    [key: number]: string; // Key is the slider value (0-100), value is the example text
  };
}

export interface VoiceCategory {
  title: string;
  subtitle: string;
  dimensions: VoiceDimension[];
}

// Example data based on your images
export const voiceCategories: VoiceCategory[] = [
  {
    title: "Finding the right tone",
    subtitle: "Tone adapts by dialing up or down different dimensions based on context or audience",
    dimensions: [
      {
        dimension: "Formality",
        definition: "Degree of professionalism",
        spectrumLeft: "Casual",
        spectrumRight: "Formal",
        examples: {
          0: "Let's find your next role!",
          25: "Ready to explore opportunities?",
          50: "We're here to assist with your career search.",
          75: "We are prepared to support your professional journey.",
          100: "We are here to assist with your career search."
        }
      },
      {
        dimension: "Warmth",
        definition: "Level of emotional openness",
        spectrumLeft: "Distant",
        spectrumRight: "Friendly",
        examples: {
          0: "We've received your application.",
          25: "Your application has been received.",
          50: "Thanks for applying. We look forward to connecting with you.",
          75: "Thank you for your application! We're excited to review it.",
          100: "Thanks for applying. We look forward to connecting with you."
        }
      },
      {
        dimension: "Enthusiasm",
        definition: "Energy level in the communication",
        spectrumLeft: "Reserved",
        spectrumRight: "Excited",
        examples: {
          0: "This opportunity aligns with your background.",
          25: "This role matches your experience well.",
          50: "This could be an exciting next step in your career!",
          75: "We think you'll love this opportunity!",
          100: "This could be an exciting next step in your career!"
        }
      },
      {
        dimension: "Authority",
        definition: "Confidence and assertiveness of language",
        spectrumLeft: "Suggestive",
        spectrumRight: "Directive",
        examples: {
          0: "You may want to review this resume.",
          25: "Consider reviewing this candidate's profile.",
          50: "Please review this candidate. We believe they are a strong fit.",
          75: "Review this candidate immediately—they're an excellent match.",
          100: "Please review this candidate. We believe they are a strong fit."
        }
      },
      {
        dimension: "Humor",
        definition: "Use of wit or playfulness",
        spectrumLeft: "Serious",
        spectrumRight: "Playful",
        examples: {
          0: "We couldn't match your search.",
          25: "Your search didn't yield matches this time.",
          50: "Looks like your perfect job is playing hard to get. Try adjusting your filters!",
          75: "No luck yet? Your dream job might be fashionably late!",
          100: "Looks like your perfect job is playing hard to get. Try adjusting your filters!"
        }
      },
      {
        dimension: "Optimism",
        definition: "Positive framing or hopefulness",
        spectrumLeft: "Realistic",
        spectrumRight: "Upbeat",
        examples: {
          0: "Hiring may take longer this quarter.",
          25: "The current market presents some challenges.",
          50: "While hiring timelines are shifting, great talent is still available.",
          75: "Despite market changes, we're finding excellent candidates!",
          100: "While hiring timelines are shifting, great talent is still available."
        }
      },
      {
        dimension: "Urgency",
        definition: "How quickly action is encouraged",
        spectrumLeft: "Relaxed",
        spectrumRight: "Immediate",
        examples: {
          0: "Get back to us when you can.",
          25: "Please respond at your convenience.",
          50: "Let us know by 3 PM so we can move forward with scheduling.",
          75: "Please respond by 3 PM today to secure your interview slot.",
          100: "Let us know by 3 PM so we can move forward with scheduling."
        }
      }
    ]
  },
  {
    title: "Client-facing tone",
    subtitle: "Objective: Build trust, deliver strategic guidance, support confident decision-making.",
    dimensions: [
      {
        dimension: "Formality",
        definition: "Degree of professionalism",
        spectrumLeft: "Casual",
        spectrumRight: "Formal",
        examples: {
          0: "Here are some great candidates for you!",
          25: "We've identified strong candidates for your review.",
          50: "Attached is the candidate profiles we recommend based on your criteria.",
          75: "Please find the recommended candidate profiles for your consideration.",
          100: "Attached is the candidate profiles we recommend based on your criteria."
        }
      },
      {
        dimension: "Warmth",
        definition: "Level of emotional openness",
        spectrumLeft: "Distant",
        spectrumRight: "Friendly",
        examples: {
          0: "Your account has been updated.",
          25: "We've made the requested updates to your account.",
          50: "We're excited to support your hiring goals this quarter.",
          75: "We're thrilled to partner with you on this search!",
          100: "We're excited to support your hiring goals this quarter."
        }
      },
      {
        dimension: "Enthusiasm",
        definition: "Energy level in the communication",
        spectrumLeft: "Reserved",
        spectrumRight: "Excited",
        examples: {
          0: "This solution meets your requirements.",
          25: "This approach aligns with your stated needs.",
          50: "This solution aligns strongly with your current needs.",
          75: "We believe this solution will exceed your expectations!",
          100: "This solution aligns strongly with your current needs."
        }
      },
      {
        dimension: "Authority",
        definition: "Confidence and assertiveness of language",
        spectrumLeft: "Suggestive",
        spectrumRight: "Directive",
        examples: {
          0: "You might want to consider acting soon.",
          25: "We suggest moving forward in the near term.",
          50: "We advise moving forward quickly—top talent won't stay available long.",
          75: "Act now to secure this candidate before they accept another offer.",
          100: "We advise moving forward quickly—top talent won't stay available long."
        }
      },
      {
        dimension: "Humor",
        definition: "Use of wit or playfulness",
        spectrumLeft: "Serious",
        spectrumRight: "Playful",
        examples: {
          0: "Please review the attached materials.",
          25: "We recommend reviewing the enclosed documentation.",
          50: "Typically avoid humor for client communications",
          75: "Typically avoid humor for client communications",
          100: "Typically avoid humor for client communications"
        }
      },
      {
        dimension: "Optimism",
        definition: "Positive framing or hopefulness",
        spectrumLeft: "Realistic",
        spectrumRight: "Upbeat",
        examples: {
          0: "Market conditions are challenging.",
          25: "The current market presents some headwinds.",
          50: "Market conditions are challenging, but great candidates are out there.",
          75: "Despite market shifts, we're finding exceptional talent for you!",
          100: "Market conditions are challenging, but great candidates are out there."
        }
      },
      {
        dimension: "Urgency",
        definition: "How quickly action is encouraged",
        spectrumLeft: "Relaxed",
        spectrumRight: "Immediate",
        examples: {
          0: "Feel free to respond when convenient.",
          25: "Please let us know your thoughts when you have a moment.",
          50: "To avoid delays, we suggest scheduling interviews this week.",
          75: "Please respond by EOD to prevent losing this candidate.",
          100: "To avoid delays, we suggest scheduling interviews this week."
        }
      }
    ]
  },
  {
    title: "Candidate-facing tone",
    subtitle: "Objective: Spark connection, humanize the brand, drive shares and reactions.",
    dimensions: [
      {
        dimension: "Formality",
        definition: "Degree of professionalism",
        spectrumLeft: "Casual",
        spectrumRight: "Formal",
        examples: {
          0: "Hey James, we've got a new role that fits your experience.",
          25: "Hi James, we have an opportunity that matches your background.",
          50: "We're here to help you find a role where you can thrive.",
          75: "We are pleased to present opportunities aligned with your career goals.",
          100: "We're here to help you find a role where you can thrive."
        }
      },
      {
        dimension: "Warmth",
        definition: "Level of emotional openness",
        spectrumLeft: "Distant",
        spectrumRight: "Friendly",
        examples: {
          0: "Your profile has been reviewed.",
          25: "We've reviewed your application materials.",
          50: "We're here to help you find a role where you can thrive.",
          75: "We're so excited to help you take the next step in your journey!",
          100: "We're here to help you find a role where you can thrive."
        }
      },
      {
        dimension: "Enthusiasm",
        definition: "Energy level in the communication",
        spectrumLeft: "Reserved",
        spectrumRight: "Excited",
        examples: {
          0: "This position may interest you.",
          25: "This role aligns with your experience.",
          50: "This opportunity could be a great next step!",
          75: "We think you're going to love this role!",
          100: "This opportunity could be a great next step!"
        }
      },
      {
        dimension: "Authority",
        definition: "Confidence and assertiveness of language",
        spectrumLeft: "Suggestive",
        spectrumRight: "Directive",
        examples: {
          0: "You might want to consider applying soon.",
          25: "We encourage you to apply when you're ready.",
          50: "We recommend applying soon; it's a high-demand role.",
          75: "Apply now—this role won't be open for long!",
          100: "We recommend applying soon; it's a high-demand role."
        }
      },
      {
        dimension: "Humor",
        definition: "Use of wit or playfulness",
        spectrumLeft: "Serious",
        spectrumRight: "Playful",
        examples: {
          0: "Your job search continues.",
          25: "We're still working on finding the right match.",
          50: "Ready to ghost-proof your job search? Let's talk!",
          75: "Job hunting got you down? Let's find your perfect match!",
          100: "Ready to ghost-proof your job search? Let's talk!"
        }
      },
      {
        dimension: "Optimism",
        definition: "Positive framing or hopefulness",
        spectrumLeft: "Realistic",
        spectrumRight: "Upbeat",
        examples: {
          0: "The market is competitive right now.",
          25: "Finding the right role can take time in this market.",
          50: "We've seen lots of success for professionals with your background.",
          75: "Your background is exactly what companies are looking for!",
          100: "We've seen lots of success for professionals with your background."
        }
      },
      {
        dimension: "Urgency",
        definition: "How quickly action is encouraged",
        spectrumLeft: "Relaxed",
        spectrumRight: "Immediate",
        examples: {
          0: "Let's chat when you're ready.",
          25: "Reach out when you'd like to discuss next steps.",
          50: "Let's chat today to keep you in the running.",
          75: "Reply by noon to secure your interview slot!",
          100: "Let's chat today to keep you in the running."
        }
      }
    ]
  }
];
