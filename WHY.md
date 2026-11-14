# Why I made my own version of Tab Snooze

I'm a tab hoarder. Some of my open tabs are things I'll need on Thursday. Others are articles I mean to read this weekend, or reminders that only matter next month. Tab Snooze is the best way I've found to deal with that. You tell a tab when you want it back, and it disappears until then. It's like the snooze button in an email inbox, but for tabs.

I've relied on it for a long time, so I noticed when things started going wrong.

## The original story, briefly

Tab Snooze started at [tabsnooze.com](https://tabsnooze.com). When Chrome switched to its new extension format (Manifest V3), the original stopped working. A developer called csandapp stepped in and published [a version that still works](https://chromewebstore.google.com/detail/kgnigbfnfjgpfaiaafcbgdkpalapiinb) ([source here](https://github.com/csandapp/tab-snooze-extension-continued)). That's the version I was using, and I'm grateful it exists. Without it, there'd be nothing to build on.

## What was bugging me

**Tabs came back twice.** Sometimes a snoozed tab would wake up and I'd get two copies of it. If several tabs woke at once, I'd get a mess. That's the worst kind of bug for a tool like this, because the whole point is to make tab clutter go away, not double it. The cause turned out to be timing: under the right conditions, the wake-up check ran twice before it had marked the tabs as handled. "Repeat last snooze" had a similar problem. I fixed both.

**Snoozing was one tab at a time.** At the end of a project I might have fifteen related tabs open and want them all back on Monday. Clicking through them one by one is tedious. So I added two shortcuts:
- **Snooze all tabs in this window** (`Ctrl+Shift+A`). Pick one time and the whole window goes to sleep. The tab you're on stays open so the window doesn't vanish.
- **Snooze just the tabs you've selected.** Shift-click or Ctrl-click a few tabs, open Tab Snooze, and whatever time you pick applies to all of them.

**Everything waking at once was overwhelming.** The flip side of snoozing lots of tabs is that they all come back at once. Twelve tabs exploding into your window at 9am isn't a gentle reminder. Now, if three or more wake together, you get one tidy list page instead. From there you can open what you want, re-snooze the rest, or throw some away. The threshold is a setting, and you can turn it off.

**The time choices were too coarse.** "Later today" meant one fixed time. "Next week" meant Monday morning. "Weekend" meant Saturday morning. In practice that means everything piles up at the same moment. I wanted to say "about two hours from now" or "Wednesday afternoon" with a single click. So the Later Today, Weekend, Next Week and Next Month buttons now each show a small grid of nine actual times, color-coded morning, afternoon and evening. The one you picked last time is outlined, because I usually want the same slot again.

**Small annoyances.** When picking a custom date for today, the time used to default to the start of the workday, which is often already in the past. Now it defaults to the next half hour. I also dropped the `Alt+J` shortcut for the snoozed list; the list is still one click away in the popup.

## Who this is for

Mostly me, honestly. That's why it's called "Tab Snooze (MINE)". But if you use Tab Snooze and you've hit the duplicate-tab bug, or you snooze tabs in batches, these changes might help you too. It isn't on the Chrome Web Store, so you install it by hand; the [README](./README.md#installation) walks you through it in a couple of minutes.

A couple of honest caveats:
- I fix things by editing the built extension directly. That's not how software is normally maintained, but it let me fix the bugs I cared about without rebuilding the whole project.
- The original's analytics code is still in there and may still send usage data to the original developer's analytics account.
- None of the original code is mine. My changes are MIT-licensed; everything else belongs to the people who built Tab Snooze in the first place. See [NOTICE](./NOTICE) for the details.

If you hit a bug or have an idea, open an issue.
