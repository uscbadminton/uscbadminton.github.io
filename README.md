# uscbadminton.github.io
USC Badminton website, created 21 December 2017 by @kelly0501 and built from scratch.

**Features to Implement**
- Add access to database in order for members to reserve courts
- 15 min [timer](https://www.w3schools.com/howto/howto_js_countdown.asp) on courts
- Special case for challenge court signups
- Can't signup if already on waitlist/on court
- Allow people to add themselves to MailChimp mailing list (core feature implemented 28 December 2017 using MailChimp signup form editor)
- Add instructional section so that future club officers can easily change information
- Clicking the logo header to return to home (use `a href`)
- Tidy up Contact/[Social Media icons](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)
- Can change navbar to `<header>` tag

**Current known issues to fix**  
- updated 26 January 2018
- ~~whitespace still exists above the navigation bar~~
- ~~navigation bar is static but page body floats above it~~ use `z-index` CSS property
- ~~"USC Badminton" `id="logo_text"` is floating behind the navigation bar instead of below it when the page loads~~
- limitation of validation through JavaScript however user can disable front-end JavaScript so that they can enter anything they want into fields

**What to Update Every Semester**
- Practice schedule
- Game schedule
- Lyon Center hours

**How to change logo**  
**How to change game schedule (via GitHub)** 
1. Navigate to the uscbadminton.github.io repository on GitHub 
2. Open "game_schedule.html"
3. Find the pencil icon to edit the file  
![Edit game schedule](instructional/game_schedule3.png)
4. Find the `<table>` tag and its corresponding `<\table>` in the code editor  
![Schedule table tag](instructional/game_schedule4.png)

**Moving data between Google Sheets and Firebase (via `firebase-import`)**
1. On your Google Sheet, go to File > Download As... > Comma-Separated Values (.csv)
2. sfsd

**Moving data between Google Sheets and Firebase (via GoogleScript Sync)**
1. Follow [this tutorial](https://www.sohamkamani.com/blog/2017/03/09/sync-data-between-google-sheets-and-firebase/)

