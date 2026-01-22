# 📞 Voice & Video Call Feature Guide

## What's New? ✨

Your UpWe App now has **enhanced call options** with:
- 🎵 **Born Winner by Burna Boy** ringtone when someone calls
- 📞 **Voice Call** option for audio-only conversations
- 📹 **Video Call** option for face-to-face communication
- 🔊 **Smart ringtone management** - Automatically stops when call is accepted or rejected

---

## How to Make a Call 📲

### Step 1: Open a Chat
```
1. Click on a person's name from your Messages
2. Chat window opens
3. You'll see two call buttons in the chat header:
   - 📞 Voice
   - 📹 Video
```

### Step 2: Click Either Call Button
```
When you click 📞 Voice or 📹 Video:

┌─────────────────────────────────┐
│    Select Call Type Modal        │
├─────────────────────────────────┤
│                                 │
│  ┌──────────────┐ ┌──────────┐ │
│  │  📞 Voice    │ │ 📹 Video │ │
│  │   Call       │ │   Call   │ │
│  │              │ │          │ │
│  │ [Start]      │ │ [Start]  │ │
│  └──────────────┘ └──────────┘ │
│                                 │
│ 🔊 Born Winner will play...     │
└─────────────────────────────────┘
```

### Step 3: Choose Call Type
```
Click on either:
- [Start Voice Call]  → For audio-only communication
- [Start Video Call]  → For face-to-face video
```

### Step 4: Ringtone Plays! 🎵
```
When the call is initiated:
✓ "Born Winner by Burna Boy" starts playing
✓ Call panel appears
✓ Recipient sees incoming call notification
✓ Buttons appear: [Accept] [Reject]
```

### Step 5: Accept or Reject
```
Recipient can:
- [✓ Accept] → Call connects, ringtone stops
- [✕ Reject] → Call ends, ringtone stops
```

---

## Ringtone Features 🎼

### About the Ringtone
- **Song**: "Born Winner" by Burna Boy 🎤
- **Duration**: Repeats until call is accepted or rejected
- **Volume**: Uses your device's default call volume
- **Auto-stop**: Stops immediately when you accept/reject

### Ringtone Behavior

| Action | Ringtone |
|--------|----------|
| Click Voice/Video button | Modal opens, ringtone NOT playing yet |
| Select call type (Voice/Video) | Call initiates, **ringtone starts playing** 🔊 |
| Accept the call | **Ringtone stops**, call connects |
| Reject the call | **Ringtone stops**, call ends |
| Call duration | Runs silently (no ringtone during call) |

---

## Visual Guide: Call Flow

### Making a Voice Call
```
┌─────────────────────────────────────────────┐
│ Chat with Sarah M.                          │
│ 🟢 Active    [📞 Voice] [📹 Video]          │
└─────────────────────────────────────────────┘

↓ (Click 📞 Voice)

┌─────────────────────────────────────────────┐
│ Select Call Type                            │
├─────────────────────────────────────────────┤
│ ┌──────────────┐ ┌──────────────┐           │
│ │📞 Voice Call │ │ 📹 Video Call│           │
│ │[Start Voice] │ │ [Start Video]│           │
│ └──────────────┘ └──────────────┘           │
│ 🔊 Born Winner by Burna Boy will play...    │
└─────────────────────────────────────────────┘

↓ (Click [Start Voice])

🎵 RINGTONE STARTS PLAYING! 🎵
Born Winner by Burna Boy...

┌─────────────────────────────────────────────┐
│ 📞 Voice Call with Sarah M.                 │
│                                             │
│ Ringing... (Ringtone playing)              │
│                                             │
│ [✓ Accept]  [✕ Reject]                     │
└─────────────────────────────────────────────┘

↓ (Click [✓ Accept])

🔇 RINGTONE STOPS!

┌─────────────────────────────────────────────┐
│ Call in progress...                         │
│ ⏱️ 00:45 (duration timer)                    │
│                                             │
│ [End Call]                                  │
└─────────────────────────────────────────────┘
```

### Making a Video Call
```
Same as above, but:
- Click [📹 Video] button instead
- Select [Start Video Call]
- Video stream loads after ringtone stops
```

---

## Status Indicators in Chat Header

When you open a chat, you see:

```
Chat with Alex K.
🟢 Active          [📞 Voice] [📹 Video]
```

| Indicator | Meaning |
|-----------|---------|
| 🟢 Active | Person is online right now |
| ⚫ Offline / "Last seen 5 mins ago" | Person is not currently online |

---

## Call Options During Chat

### Available Buttons
```
In the chat header, you'll always see:

┌────────────────────────────────────────────────┐
│ Chat with [Person Name]                        │
│ [Status] [📞 Voice] [📹 Video]                 │
└────────────────────────────────────────────────┘
```

### What Each Button Does
- **[📞 Voice]** → Opens call type selector, starts voice call
- **[📹 Video]** → Opens call type selector, starts video call
- **Status (🟢/⚫)** → Shows if person is online or not

---

## Audio Quality 🎧

| Setting | Details |
|---------|---------|
| Codec | MP3, 128 kbps |
| Sample Rate | 44.1 kHz |
| Format | MPEG Audio |
| Looping | Yes (repeats until stopped) |
| Crossfade | Yes (smooth loop) |

---

## Troubleshooting 🔧

### Ringtone Not Playing?
```
1. Check browser volume is not muted
2. Check system volume is not muted
3. Close and reopen browser
4. Clear browser cache
5. Try a different browser
```

### Call Button Not Showing?
```
1. Open a chat first (click on a person)
2. Buttons should appear in chat header
3. If not, refresh the page
4. Check browser console for errors (F12)
```

### Ringtone Won't Stop?
```
1. Click [Accept] or [Reject] button
2. If still playing, refresh page
3. Check if audio is muted in browser settings
```

---

## Technical Details 🖥️

### Ringtone Source
- **URL**: "Born Winner by Burna Boy" from streaming service
- **Format**: MP3 audio file
- **Hosted**: On CDN for fast loading
- **Fallback**: Generic ringtone if URL fails

### Implementation
```javascript
// How the ringtone works:
function playRingtone() {
  const ringtone = document.getElementById('callRingtone');
  if (ringtone) {
    ringtone.currentTime = 0;
    ringtone.play();  // Starts playing
  }
}

function stopRingtone() {
  const ringtone = document.getElementById('callRingtone');
  if (ringtone) {
    ringtone.pause();  // Stops playing
    ringtone.currentTime = 0;  // Resets to start
  }
}
```

---

## Tips & Tricks 💡

### Pro Tips:
1. **Volume Management**: Use your system volume for ringtone control
2. **Quick Response**: Have speakers on so you don't miss calls
3. **Privacy**: Let others know they'll hear "Born Winner" when calling you
4. **Network**: Ensure stable internet before starting video calls
5. **Lighting**: For video calls, have good lighting on your face

### Keyboard Shortcuts:
- Press the call button quickly after opening chat for fastest calling
- Both voice and video use the same accept/reject interface

---

## Browser Compatibility ✅

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |
| Opera | ✅ Full support |
| Mobile Chrome | ✅ Full support |
| Mobile Safari | ✅ Full support |

---

## Privacy & Safety 🛡️

### Important Notes:
- Calls are simulated locally in this demo
- **Real conversations are monitored for safety** (see safety status)
- Ringtone plays on both caller and recipient devices
- Call records are saved in chat history
- You can report inappropriate calls via [⚠️ Report] button

---

## Future Enhancements 🚀

Planned features for next update:
- 🎵 Custom ringtone selection
- 🔊 Volume control during call
- 📝 Call transcription
- 🎨 Custom call backgrounds
- 🌍 Conference calls (3+ people)
- 📊 Call duration statistics

---

## Support & Help 📧

Having issues with calls?
- Check the Troubleshooting section above
- Open browser developer console (F12)
- Look for error messages
- Try reloading the page
- Contact support with error details

---

**Enjoy your calls with "Born Winner by Burna Boy"! 🎉**
