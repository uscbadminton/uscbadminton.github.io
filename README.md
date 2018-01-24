# uscbadminton.github.io
USC Badminton website, created 21 December 2017 by @kelly0501

**Features to Implement**
- Add access to database in order for members to reserve courts
- 15 min timer on courts
- Special case for challenge court signups
- Can't signup if already on waitlist/on court
- Allow people to add themselves to MailChimp mailing list (core feature implemented 28 December 2017 using MailChimp signup form editor)
- Add instructional section so that future club officers can easily change information
- Clicking the logo header to return to home

**Current known issues to fix**  
- updated 30 December 2017
- whitespace still exists above the navigation bar
- navigation bar is static but page body floats above it, use `z-index` CSS property
- "USC Badminton" `id="logo_text"` is floating behind the navigation bar instead of below it when the page loads

**How to change logo**  
**How to change game schedule (via GitHub)** 
1. Navigate to the uscbadminton.github.io repository on GitHub 
2. Open "Game Schedule.html"
3. Find the pencil icon to edit the file  
![Edit game schedule](instructional/game_schedule3.png)
4. Find the `<table>` tag and its corresponding `<\table>` in the code editor  
![Schedule table tag](instructional/game_schedule4.png)