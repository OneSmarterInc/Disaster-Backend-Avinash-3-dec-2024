export const dayOneMorning = [
  {
    sender: "Ben Carter",
    message:
      "(Thinking to himself) Probably another routine hiccup.",
  },
  {
    sender: "Ben Carter",
    message:
      "Hmm... I'll forward this to Kate. She'll handle it.",
  },
  {
    sender: "Ben Carter",
    message:
      "Kate, can you look into this? Let me know if I need to be in the loop.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Hey Ben, I saw your email. I thought it was just a minor glitch, but we've received a couple more reports. Still, everything seems under control.",
  },
  {
    sender: "Ben Carter",
    message:
      "Alright, keep me posted. And, Kate? If this escalates, don't hesitate to pull in external support. Better safe than sorry.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Will do, Ben",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Ben, it's getting worse. More applications are failing, and we've isolated the issue to data corruption errors. It's... it's not looking like a simple operational hiccup anymore.",
  },
  {
    sender: "Ben Carter",
    message:
      "What?! Alright, I'll be there. We need to handle this urgently.",
  },
];


export const dayOneEvening = [
  {
    sender: "Ben Carter",
    message:
      "We're in uncharted waters here. Before we make any decisions, we need to consider the ripple effects",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Agreed. We've yet to inform senior leadership. They'll want answers, and we don't have many right now",
  },
  {
    sender: "Liam Turner",
    message:
      "And when the news gets out, there will be panic. The CFO will be worried about the financial impact, and the legal team will be all over the potential breaches of SLAs and customer contracts.",
  },
  {
    sender: "Sophia Kim",
    message: "Speaking of SLAs, what's our commitment on uptime?",
  },
  {
    sender: "Mia Rodriguez",
    message:
      "99.9% annually. This outage, if it lasts a week, would breach that.",
  },
  {
    sender: "Ben Carter",
    message:
      "And that could lead to penalties, not to mention reputational damage. ",
  },
  {
    sender: "Kate Sullivan",
    message:
      "We might need to prepare for potential lawsuits, especially if client data is compromised or lost. ",
  },
  {
    sender: "Chloe Zhang",
    message:
      "We need a clear communication strategy. Maybe involve PR and have them draft a statement, just in case.",
  },
  {
    sender: "Liam Turner",
    message:
      "I'll coordinate with them. But how transparent should we be? ",
  },
  {
    sender: "Ben Carter",
    message:
      "We can't hide this. But let's be strategic about what we disclose and when.",
  },
  {
    sender: "Chloe Zhang",
    message:
      "(On screen) I understand the gravity, but the longer we wait, the harder recovery might be.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Chloe is right. We need to act. But we also need to think about the aftermath.",
  },
  {
    sender: "Ben Carter",
    message:
      "And I haven't even thought about the board. They'll want an emergency meeting. And then there's the shareholders...",
  },
  {
    sender: "Sophia Kim",
    message:
      "One step at a time, Ben. First, let's stabilize the situation, then manage the fallout.",
  },
  {
    sender: "Ben Carter",
    message:
      "Are any other systems affected on Site 1 and/or Site2?",
  },
  {
    sender: "Kate Sullivan",
    message:
      "No, neither our Microsoft email system nor our TRESCO VoIP are affected",
  },
  {
    sender: "Ben Carter",
    message:
      "Let's shut down all applications immediately.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "But remember, that may cause data corruption erros which might be difficult to recover.",
  },
  {
    sender: "Ben Carter",
    message:
      "Yes, but I don't see a any other way.  There will be some data loss, but I think we can recover from that.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "How about I get the data center to send a quick email to the company distribution list that IT is experiencing a major data center incident, and we will keep all notified as we know more?",
  },
  {
    sender: "Ben Carter",
    message:
      "Yes, that is an excellent idea.",
  },
];


export const dayTwoEarlyMorning = [
  {
    sender: "Ben Carter",
    message:
      "I have explained the situation to you.  We are now shutting down applications in a rolling manner and they are crashing.  We need your help with figuring out what’s going on and correcting it.",
  },
  {
    sender: "Tom Mitchell",
    message:
      "Ben - our team is on it.  We have called in our senior engineers and will be in touch",
  },

  {
    sender: "Tom Mitchell",
    message:
      "You and me both, Ben. We value our partnership with OrionTech, and we're just as baffled about this situation. But we're here for you.",
  },
  {
    sender: "Kate Sullivan",
    message: "(whispering to Ben) We need to understand their immediate protocols.",
  },
  {
    sender: "Ben Carter",
    message:
      "Tom, can you walk us through your immediate response protocols? We need to align our efforts.",
  },
  {
    sender: "Tom Mitchell",
    message:
      "Absolutely. I've already escalated this to our top-tier engineers. We're treating this with utmost priority.            ",
  },
  {
    sender: "Ben Carter",
    message:
      "I appreciate that, Tom. Let's work together and find a way out of this.            ",
  },
  {
    sender: "Tom Mitchell",
    message: "We're on it, Ben. We'll navigate this together",
  },
  {
    sender: "Ben Carter",
    message:
      "Julia, our CEO is understandably concerned. We've always spoken highly of your systems, and this has caught us off guard.",
  },
  {
    sender: "Julia Harper",
    message:
      "We're just as surprised, Ben. But we're committed to finding a solution. Our preliminary findings suggest the corruption is in the data headers.  Our team has been looking at this issue together with Tom's group. It looks like that one of the major disc controllers at the frame level (19 racks of discs) responsible for replicating the data has failed and has corrupted the data on ALL mirrored copies (three separate sets of storage across Site 1 and Site 2).",
  },
  {
    sender: "Sophia Kim",
    message:
      "That's consistent with our observations. But what could've caused it?",
  },
  {
    sender: "Julia Harper",
    message:
      "We're diving deep into that. It could be a software glitch or a rare hardware anomaly.",
  },
  {
    sender: "Mia Rodriguez",
    message:
      "We need to understand the root cause to ensure this doesn't happen again",
  },
  {
    sender: "Julia Harper",
    message:
      "Absolutely, Mia. Our goal is not just recovery but also understanding and preventing any future occurrences",
  },
  {
    sender: "Ben Carter",
    message: "Thanks, Julia. We're counting on your team.",
  },
  { sender: "Julia Harper", message: "We won't let you down, Ben." },
  {
    sender: "Ben Carter",
    message:
      "(To his internal team) Bottomline, with all the built-in redundancy, we did not have a good/non-corrupt set of data.  Because the storage system spreads all applications across multiple frames there were no set of application that had a know set of viable data.  That is a bad situation for us.",
  },
  {
    sender: "Tom Mitchell",
    message:
      "It looks like the only solution is to replace the bad controller, reboot the storage systems at Site 1, which would clear the write buffers (data waiting to be written to disc) of data and disconnect from the remote (Site 2) storage systems to preserve that environment",
  },
  {
    sender: "Ben Carter",
    message:
      "But what happens to systems that had failed or failed in the start-up?",
  },
  {
    sender: "Tom Mitchell",
    message:
      "Those would have to be restored from backup storage discs (previous generation of storage) or tape drives.  The systems were typically backed up at midnight; hence since the corruption started approximately six hours before the backup process started, the failed systems would lose 18 hours of data.",
  },
  {
    sender: "Ben Carter",
    message:
      "19 hours of data loss??!!  This is incredible.  BTW:  How long will this process take?",
  },
  {
    sender: "Tom Mitchell",
    message:
      "As far as we can estimate, it will probably take a week or longer to recover all the applications.",
  },
  {
    sender: "Ben Carter",
    message:
      "Julia, we're considering your team's proposed solution. But I've got to be honest, the stakes are high.  We just have to do better - a 1 week data loss is unacceptable.",
  },
  {
    sender: "Julia Harper",
    message: "I completely understand, Ben. We've been partners for years, and we want to ensure we navigate this challenge together.",
  },

  {
    sender: "Kate Sullivan",
    message:
      "We're in uncharted territory here, Julia. It's concerning.",
  },
  {
    sender: "Julia Harper",
    message: "I share your concern, Kate. We're pooling all our resources into this. It's a tricky situation, but we believe the solution has merit.",
  },
  {
    sender: "Ben Carter",
    message:
      "We've always trusted your expertise, Julia. Let's work together and find our way through this.",
  },
  {
    sender: "Julia Harper",
    message: "We're with you every step of the way, Ben",
  },
  {
    sender: "Ben Carter",
    message:
      "I know we're all anxious and concerned. This crisis is unprecedented, but we've weathered storms before. Our partnership with the storage vendor has been solid for years. We need to trust that, together, we'll find a solution.",
  },
  {
    sender: "Grace Patterson",
    message:
      "(Head of Legal) Our clients are getting restless. They need assurances.",
  },
  {
    sender: "Ben Carter",
    message:
      "I've been in touch with our key clients. Assured them we're doing everything possible. But we also need to be transparent about the challenges.",
  },
  {
    sender: "Raj Patel",
    message:
      "(CFO) The financial implications are severe. We need a solution, but we also need a contingency plan.",
  },
  {
    sender: "Ben Carter",
    message:
      "Agreed. I'm coordinating with both our internal teams and the vendor to get a clear timeline. But I need everyone here to support the message and keep our teams calm",
  },

  {
    sender: "Mr. Williams",
    message:
      "Ben, my team is getting jittery. We rely on your systems, and this outage is hurting us.",
  },
  {
    sender: "Ben Carter",
    message:
      "Mr. Williams, I completely understand. It's an unfortunate situation, but I assure you, we're working round the clock with our vendor. They've been our partners for years and have never let us down.",
  },
  {
    sender: "Mr. Williams",
    message:
      "I appreciate your reassurances, Ben. But we need timelines. Can you provide that?",
  },
  {
    sender: "Ben Carter",
    message:
      "We're aiming to have a clearer picture within the next few hours. As soon as I have concrete information, you'll be the first to know.",
  },
  {
    sender: "Mr. Williams",
    message:
      "I trust you, Ben. Please keep us updated.",
  },

  {
    sender: "Ben Carter",
    message:
      "Team, we need to stay united. The situation is fluid, and there's a lot we don't know. But infighting or panic won't help.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Ben's right. We've faced challenges before. We need to trust our processes and each other.",
  },
  {
    sender: "Liam Turner",
    message:
      "Communication is key. We need a united front, both internally and externally.",
  },
  {
    sender: "Ben Carter",
    message:
      "Let's ensure our teams are well-informed, and we're projecting calm and control. Together, we'll get through this.",
  },

  {
    sender: "Ben Carter",
    message:
      "The rumors are swirling, and the media has caught wind of our situation. We need to decide on a public statement.",
  },
  {
    sender: "Grace Patterson",
    message:
      "We need to be very careful with our wording. Any statement could have legal implications.",
  },
  {
    sender: "Liam Turner ",
    message:
      "While I understand the legal concerns, silence can be seen as an admission of guilt or ineptitude. We need to control the narrative.",
  },
  {
    sender: "Raj Patel ",
    message:
      "Any statement we make will also impact our stock price and investor relations. We have to strike the right balance",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Let's start with the basics. Why did this happen, what are we doing about it, and what's our commitment going forward?",
  },
  {
    sender: "Ben Carter",
    message:
      "I like that approach. Simple, direct, and transparent. Liam, can you draft something along those lines?",
  },
  {
    sender: "Liam Turner",
    message:
      "Certainly. How about this , We're aware of the technical issues impacting our services. Preliminary investigations indicate a system anomaly, which we, alongside our long-time partners, are working tirelessly to resolve. We understand the importance of our systems to our clients and are dedicated to restoring operations as swiftly as possible. We appreciate your patience and trust.",
  },
  {
    sender: "Grace Patterson",
    message:
      "That's a good starting point. Let's ensure we don't make any promises we can't keep. We need to be hopeful, yet cautious",
  },
  {
    sender: "Sophia Kim",
    message:
      "We should also mention that we're taking measures to prevent such incidents in the future, without going into specifics.",
  },
  {
    sender: "Ben Carter",
    message:
      "Agreed. Liam, can you incorporate that?",
  },
  {
    sender: "Liam Turner",
    message:
      "Sure. Additionally, we're committed to understanding the root cause and implementing measures to bolster our systems against future anomalies.",
  },
  {
    sender: "Ben Carter",
    message:
      "It's succinct and addresses the main concerns. Any objections?",
  },
  {
    sender: "Raj Patel",
    message:
      "It works for me. It's honest, transparent, and proactive.",
  },
  {
    sender: "Ben Carter",
    message:
      "Alright, let's finalize it and get it out there. We owe it to our clients and stakeholders to keep them informed.",
  },
];


export const dayTwoLateMorning = [
  {
    sender: "Sophia Kim",
    message:
      "The Worldwide Customer Service team has just sent out an announcement to all customers. They've explained the outage",
  },
  {
    sender: "Ben Carter",
    message:
      "Good. Transparency is crucial right now. What about our internal users?",
  },
  {
    sender: "Liam Turner",
    message:
      "An outage update has just been sent to all of them. We're keeping everyone in the loop.",
  },
  {
    sender: "Ben Carter",
    message:
      "What can we do if the vendor finds no solutions other than what they have offered us already?",
  },
  {
    sender: "Kate Sullivan",
    message:
      "We need to develop a worst-case scenario.",
  },
  {
    sender: "Jabari Nkosi",
    message:
      "We do have a contingency plan I have put into place.  In addition, we have a team loating the tape cassetts for the most critical applications, most which are the service dispatching and spare parts systems required to provide 24/7 support on a Global Basis.",
  },
  {
    sender: "Mia Rodriguez",
    message:
      "The storage vendor's has offered a fix. We are validating it.    The vendor discovered that when the storage units write from the buffer to a block/sector/chunk on the actually drive, there is a header and end of block that the surround the actual data. The data corruption is in the header information and not within the application data. They believe they can fix the problem by recalculating the header information and rewriting to disc the corrected information.  They have flushed (cleared) the buffers and have read all the blocks of the impacted storage frame to understand how many headers need to be fixed.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "Fantastic! Let's prioritize the restoration. Our U.S.-based Worldwide Customer Service applications should be first",
  },
  {
    sender: "Ben Carter",
    message:
      "Agreed. I've got the prioritization list right here. Let's get WCS up and running. We'll also send out an internal message about the planned restorations",
  },
  {
    sender: "Sophia Kim",
    message:
      "In parallel, I suggest we start with all Tier 1 and Tier 2 applications. The WCS apps in Europe and the Middle East, the Global Product Database, Web Services, and Professional Services applications should be next",
  },
  { sender: "Ben Carter", message: "Sounds like a plan. Let's execute" },


  {
    sender: "Kate Sullivan",
    message: "It's time to begin the ERP system restoration",
  },
  {
    sender: "Mia Rodriguez",
    message: "It's going to be a significant task. The ERP system is vast",
  },
  {
    sender: "Ben Carter",
    message:
      "We've come this far. Let's keep the momentum going. Keep me updated on the progress",
  },
  {
    sender: "Sophia Kim",
    message:
      "All Tier 3 and Tier 4 applications are in the process of being restored. We're on track",
  },
  {
    sender: "Ben Carter",
    message:
      "looking visibly tired but satisfied) Great job, team. It's been a long day, but we're getting there. Let's keep pushing",
  },
  {
    sender: "Liam Turner",
    message:
      "The feedback from internal users has been positive. They appreciate the timely updates and transparency",
  },
  {
    sender: "Ben Carter",
    message:
      "Communication has been our strength through this. Let's ensure we maintain it as we work towards full restoration",
  },
];


export const dayThreeMorning = [
  {
    sender: "Ben Carter",
    message:
      "(Voice slightly strained) Good morning. We've made progress, but ERP remains a challenge",
  },
  {
    sender: "COO",
    message:
      "(On call) Ben, we've invested heavily in these systems. How did we end up here?",
  },
  {
    sender: "Ben Carter",
    message:
      "We're still investigating, but right now, our focus is on restoring operations",
  },

  {
    sender: "Mia Rodriguez",
    message:
      "(Sounding exhausted) System One ERP is live again.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "(With a hint of frustration) This should have been resolved sooner. Why did it take this long?",
  },
  {
    sender: "Ben Carter",
    message:
      "We're doing our best, Kate. It's an unprecedented situation",
  },

  {
    sender: "Liam Turner",
    message:
      "The ERP system is down again. This is a nightmare!",
  },
  { sender: "Sophia Kim", message: "(Pointedly) Maybe if we'd received timely updates from the storage vendor, we could've anticipated this." },

  {
    sender: "Ben Carter",
    message: "Let's not play the blame game now. We need solutions, not accusations.",
  },

  {
    sender: "Tom Mitchell",
    message: "The corruption seems to be in the end of block record.Kate ",
  },
  {
    sender: "Kate Sullivan",
    message:
      "(Sarcastically) Oh, another surprise! Were there any other minor details we missed?",
  },

  {
    sender: "Ben Carter",
    message:
      "(Interjecting) Let's stay focused. We need to work together, not against each other",
  },

  {
    sender: "Sophia Kim",
    message:
      "Let's try the backup again.",
  },

  {
    sender: "Mia Rodriguez",
    message:
      "(Frustrated) This can't be right! Who validated these backup processes?",
  },
  {
    sender: "Liam Turner",
    message:
      "(Defensively) We've followed protocols to the letter. This isn't a standard issue!",
  },
  {
    sender: "Ben Carter",
    message:
      "Enough! We can't fracture now. We need unity and focus.",
  },
];

export const dayFourMorning = [
  {
    sender: "Kate Sullivan",
    message:
      "There has got to be a better way than to accept the 9-hour old backup",
  },
  {
    sender: "Ben Carter",
    message:
      "I am going to call in favor at the ERP Vendor leadership and contact Gajinder Singh “Gajji.”  We have worked together for a long time and he knows us well.",
  },
  {
    sender: "Gajji",
    message:
      "(On a call with Ben Carter and Kate Sullivan) I understand where you are.  My team reviewed the issue.  We think the primary database is safe.  But there were two temporary files used to complete inventory transactions were corrupted",
  },
  {
    sender: "Ben Carter",
    message:
      "Gajji, is there anything you can do?",
  },
  {
    sender: "Gajji",
    message:
      "We might be able to replace these two files from our development system which is housed in site 2 on a non-replicated storage frame.  But, Ben, this is not something we can do without senior leadership (ours and yours and Disk Vendor’s) and you assuming risk responsibility.  Your CEO to ours….",
  },
  {
    sender: "Ben Carter",
    message:
      "I will arrange that call.",
  },
  {
    sender: "Sophia Kim",
    message:
      "(Whispering to Kate) Are we sure this is going to work? If it doesn't...",
  },
  {
    sender: "Kate Sullivan",
    message:
      "We have to trust them. It's our best shot.",
  },
  {
    sender: "Liam Turner",
    message:
      "What was that? Did it fail?",
  },

  {
    sender: "System One Developer #1",
    message:
      "Hold on, it's an expected hiccup. Let's rerun the process.",
  },

  {
    sender: "System One Developer #2",
    message:
      "(murmuring to Gajji) There's a minor glitch. The file from Site 2 isn't syncing as expected.",
  },
  {
    sender: "Gajji",
    message:
      "(Firmly) Find a workaround. We can't afford a full stop here.",
  },
  {
    sender: "Ben Carter",
    message:
      "(to Gajji) Time's ticking, Gajji. How are we looking?",
  },
  { sender: "Gajji", message: "(calmly) Challenges are expected, Ben. We'll get through this." },
  {
    sender: "Mia Rodriguez",
    message: "The sync... it's stabilizing!",
  },
  {
    sender: "Sophia Kim",
    message:
      "We're not out of the woods yet. Let's see it through.",
  },

  {
    sender: "Liam Turner",
    message:
      "Validation complete. Everything looks good. ERP is back up!",
  },
  {
    sender: "Ben Carter",
    message:
      "(sighing with profound relief) Gajji, you and your team are magicians.",
  },
  {
    sender: "Gajji",
    message:
      "(smiling) No magic, just determination and teamwork.",
  },
];


export const dayFiveMorning = [
  {
    sender: "Kate Sullivan",
    message: "(Looking at the systems dashboard) Everything seems stable. We're almost there.",
  },
  {
    sender: "Liam Turner",
    message:
      "A few more checks and validations, and we should be good to go.",
  },
  {
    sender: "Sophia  Kim",
    message:
      "It's been a long journey. I can't believe we're finally seeing the light at the end of the tunnel.",
  },



  {
    sender: "Ben Carter",
    message:
      "(Voice filled with emotion) Team, as of now, the recovery process is complete. We've weathered the storm.",
  },

  {
    sender: "Mia Rodriguez",
    message: "It feels surreal. I can't believe we made it.",
  },
  {
    sender: "Kate Sullivan",
    message:
      "It was a team effort. Every single person here played a part.",
  },

  {
    sender: "Ben Carter",
    message:
      "(To the Communications Lead) Make sure the announcement is clear and reassuring. We owe it to our users and stakeholders to communicate transparently about the crisis resolution.",
  },
  {
    sender: "Communications Lead",
    message:
      "Absolutely, Ben. We'll ensure it's comprehensive and conveys gratitude for everyone's patience and support.",
  },


  {
    sender: "Kate Sullivan",
    message: "(Joining him) We did it, Ben",
  },
  {
    sender: "Ben Carter",
    message: "We did, Kate. It was a test of our resilience, teamwork, and determination. I couldn't be prouder",
  },
  {
    sender: "Kate Sullivan",
    message: "Here's to hoping we never have to go through something like this again",
  },
  {
    sender: "Ben Carter",
    message: "(smiling) Fingers crossed.",
  },
  {
    sender: "Ben Carter",
    message: "I have provided a detailed briefing to you about what happened at OrionTech.  The crisis is not over.  Measures are in place to prevent future distruptions."
  },
  {
    sender:"Client 1",
    message: "Ben, thank you for your detailed communications.  We appreciate OrionTech’s commitment to all of us."
  },
  {
    sender:"Client 2",
    message: "I also think that the communications channel has been very open and I appreciate being in the know."
  },
  {
    sender: "Ben Carter",
    message: "(To himself) So, it was never about the actual data on the discs...",
  },
  {
    sender: "Kate Sullivan",
    message: "(walking in with a cup of coffee) Go through the report?",
  },
  {
    sender: "Ben Carter",
    message: "Yes. It's surprising. Site 2's mirrored copy was never corrupted. The issue was in the controller buffers, not the discs themselves",
  },
  {
    sender: "Kate Sullivan",
    message: "(Sighing) If only we'd known. We could've restored everything within a day",
  },
  {
    sender: "Ben Carter",
    message: "It's a learning experience for all of us. The vendor's oversight had a huge impact. But on the bright side, they're compensating with new hardware and software worth about three million dollars.",
  },
  {
    sender: "Kate Sullivan",
    message: "That's something, at least. But the real lesson here is the importance of thorough investigation. We can't just skim the surface, especially in critical situations",
  },

  {
    sender: "Ben Carter",
    message: "You're right. It's not just about fixing the immediate issue; it's about understanding the root cause. We need to be better prepared next time",
  },
  {
    sender: "Kate Sullivan",
    message: "Here's hoping there isn't a next time.",
  },
  {
    sender: "Ben Carter",
    message: "(Smiling wryly) Agreed",
  },
  {
    sender: "Gajji",
    message: "Ben, I can't apologize enough for the oversight. But I'm grateful for how you and your team handled the situation",
  },
  {
    sender: "Ben Carter",
    message: "We're partners, Gajji. When one of us faces a challenge, we face it together. That's how we've always worked",
  },
  {
    sender: "Gajji",
    message: "True. This incident has taught us a lot. It's made us realize the gaps in our processes and how crucial thorough investigations are.",
  },
  {
    sender: "Ben Carter",
    message: "And it's also shown us the strength of our partnership. When things went south, you didn't abandon us. Your team went above and beyond to find a solution",
  },


  {
    sender: "Gajji",
    message: "It was our responsibility. And I'm glad we could navigate through it together",
  },
  {
    sender: "Ben Carter",
    message: "This incident, surprisingly, has solidified our trust. We've seen each other's commitment during a crisis",
  },
  {
    sender: "Gajji",
    message: "It's often said that you get to know the true character of a person or an organization during challenging times. I'm proud of how both our teams responded",
  },
  {
    sender: "Ben Carter",
    message: "So am I. Let's take the lessons from this incident and ensure we're better prepared in the future.",
  },
  {
    sender: "Gajji",
    message: "(Raising his coffee mug) To a stronger partnership and a brighter future",
  },
  {
    sender: "Ben Carter",
    message: "(Clinking his mug with Gajji's) To resilience and collaboration",
  },

];