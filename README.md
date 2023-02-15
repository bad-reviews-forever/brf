# brF Design principles

I am designing a website called 'Bad Reviews FOREVER' or 'brF'. The website is created for immortalizing bad reviews. The layout of the website is as follows:

- The `<header>` takes up the full width of the page, and its `<h1>` title is styled to look like cuneiform engraved in ancient clay.
- The `<main>` content is centrally justified and has left and right margins, with an accent color matching the `<header>` background.
- The `<main>` content is composed of absolute-positioned block 100vh subsections with slightly varying background colors.
- Each 100vh section captures the scroll wheel to scroll its own content, if required.
- The first `<main>` section presents a short history about the 'complaint tablet to Ea-nasir'.
- Each 100vh section has at least one image or figure that contributes to the story.
- The story is told in a sometimes somber, sometimes hyperbolic or bombastic tone, similar to how 'drunk history' stories are structured.
- The story introduces the concept of an indelible bad review and supports the displeased customer named 'Nanni'.
- The `<main>` section explains how to record an indelible complaint, and the tablet will be made of copper.
- The second `<main>` section contains two elements that take roughly 50vh each.
  - The first element is a web form that allows users to record their bad review via a simple and thematic web form.
  - The second element is a slab styled after an engraved clay tablet that shows up to 2 previously submitted bad reviews, with a blank/template space for the user's review above. If there are not at least two user reviews to display, the slab will show up to 3 blank template spaces.
- The form contains six text entry areas, one checkbox, and one submit button.
  - The text entry areas are as follows:
        1. User name
        2. User location
        3. The complaint text, allowing up to 200 characters.
        4. The target of the complaint
        5. The target's occupation
        6. User email
  - The user can accept the offer on the checkbox that will contact them once 100 bad reviews are recorded.
  - The submitted bad reviews are displayed as an area graph using chart.js.
  - The chart y-axis tracks the number of bad reviews, and the x-axis shows bad reviews over time.
- When the user submits the form, a CSS/JavaScript animation etches the bad review into the slab element. The slab smoothly expands its 100vh container downwards offscreen to reveal more user reviews after the animation.
  - The slab can grow to show up to 15 reviews, taking up to 250vh by default.
  - A wide, short down-chevron at the bottom of the expansion allows for more reviews to be shown.
- The last `<main>` section describes in detail the plot to have a modern slab of indelible complaints displayed at the British museum alongside Nanni's.
  - Down the left-hand side of this written timeline runs a gradually thickening line that frames the bullet points for the events within the timeline and ends with an arrowhead pointing to the result of the new tablet being displayed.
  - Only then does the site confirm that the British museum has not been consulted on this and will be presented with the tablet as part of a live-recorded unannounced visit.
- The `<footer>` is a full-width splash that matches the dimensions and coloring of the `<header>`.
  - The `<footer>` contains a centered copyright notice and links to the website's terms of service, privacy policy, and contact page.
  