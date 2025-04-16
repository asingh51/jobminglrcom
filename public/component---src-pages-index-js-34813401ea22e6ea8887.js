"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{6558:function(e,t,a){a.r(t);var n=a(7294),r=a(5009),s=a(9505),o=a(1883),i=a(8032);t.default=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:l,1:c}=(0,n.useState)(""),m=(()=>{const e=/iPhone|iPad|iPod/i.test(navigator.userAgent),t=/Android/i.test(navigator.userAgent);return e?"https://apps.apple.com/us/app/jobminglr/id6738838504":t?"https://play.google.com/store/apps/details?id=com.jobminglr.in.android&utm_source=na_Med":"https://www.jobminglr.app/"})();return n.createElement(r.Z,null,n.createElement(s.Z,{title:"Home",description:"JobMinglr – Swipe to hire platform connecting job seekers and recruiters. Find jobs or candidates with a swipe."}),n.createElement("section",{className:"bg-brandGreen text-white text-center py-20 px-4 relative"},n.createElement(i.S,{src:"../images/JobApplication.jpg",alt:"JobMinglr Hero",className:"absolute inset-0 w-full h-full opacity-30 object-cover",__imageData:a(8781)}),n.createElement("div",{className:"relative z-10"},n.createElement("h1",{className:"text-4xl sm:text-5xl font-bold mb-4"},"Swipe. Connect. Hired."),n.createElement("p",{className:"text-lg sm:text-xl mb-8"},"Your next career move is just a swipe away. Join JobMinglr and experience a new way to find the perfect match."),n.createElement("div",{className:"flex justify-center flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0"},n.createElement(o.Link,{to:"/features",className:"bg-white text-brandGreen font-semibold px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300"},"Learn How It Works"),n.createElement(o.Link,{to:m,target:"_blank",className:"bg-white text-brandGreen font-semibold px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300"},"Download JobMinglr")),n.createElement("span",{className:"block text-3xl mt-12 animate-bounce cursor-pointer",onClick:()=>{return e="jobMinglrForSection",void(null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"}));var e,t}},"⌄"))),n.createElement("section",{id:"jobMinglrForSection",className:"container mx-auto py-16 px-6 text-center"},n.createElement("h2",{className:"text-3xl font-bold mb-12"},"Who is JobMinglr for?"),n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8"},["Job Seekers","Recruiters","Companies"].map((e=>n.createElement("div",{key:e},n.createElement("h3",{className:"text-2xl font-semibold mb-3"},e),n.createElement("p",{className:"text-gray-700"},"Job Seekers"===e?"Swipe through personalized job openings. AI-driven recommendations and instant notifications.":"Recruiters"===e?"Quickly connect with top talent. Swipe profiles and chat instantly.":"Streamline your hiring process with our swipe-to-hire platform. Find candidates faster.")))))),n.createElement("section",{className:"bg-gray-50 py-16 px-6"},n.createElement("div",{className:"container mx-auto text-center"},n.createElement("h2",{className:"text-3xl font-bold mb-8"},"Why JobMinglr?"),n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"},["Swipe Matching","AI Suggestions","In-App Chat","Mobile Optimized"].map((e=>n.createElement("div",{key:e,className:"bg-white p-4 rounded-lg shadow transition hover:shadow-lg"},n.createElement("h3",{className:"font-semibold"},e),n.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Swipe Matching"===e?"Fast, intuitive swipe-based browsing.":"AI Suggestions"===e?"Personalized AI-driven recommendations.":"In-App Chat"===e?"Instant messaging built right into the platform.":"Fully optimized mobile experience."))))),n.createElement(o.Link,{to:"/features",className:"mt-10 inline-block text-brandGreen hover:underline"},"See all features »"))),n.createElement("section",{className:"container mx-auto text-center py-16 px-6"},n.createElement("h2",{className:"text-2xl font-bold mb-4"},"Stay in the loop"),n.createElement("p",{className:"mb-6 text-gray-700"},"Join our newsletter for updates on JobMinglr’s launch in Austin, TX, and upcoming features."),n.createElement("form",{onSubmit:async e=>{e.preventDefault();const a={name:"Subscriber",email:l,message:"Subscribe"};try{(await fetch("https://it96ohh4nc.execute-api.us-east-1.amazonaws.com/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?(t(!0),setTimeout((()=>t(!1)),4e3),c("")):console.error("Failed to send subscription")}catch(n){console.error("Error submitting subscription:",n)}},className:"max-w-md mx-auto flex flex-col sm:flex-row gap-4"},n.createElement("input",{type:"email",required:!0,placeholder:"Your email address",value:l,onChange:e=>c(e.target.value),className:"flex-1 px-4 py-2 border rounded focus:ring-2 focus:ring-brandGreen-light"}),n.createElement("button",{type:"submit",className:"bg-brandGreen text-white px-6 py-2 rounded hover:bg-brandGreen-dark transition"},"Subscribe")),e&&n.createElement("div",{className:"mt-6 inline-flex items-center bg-brandGreen text-white px-5 py-3 rounded-lg shadow animate-fade-in-out"},n.createElement("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})),"You're subscribed! Thanks for joining.")),n.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-4 right-4"},n.createElement(i.S,{src:"../images/qr-placeholder.png",alt:"Download JobMinglr App",className:"w-24 h-24 shadow-lg rounded",__error:'No data found for image "../images/qr-placeholder.png"\n              undefinedCould not read image data file "/Users/abhaysingh/jobminglrcom/jobminglrcom/.cache/caches/gatsby-plugin-image/1556080616.json". \nThis may mean that the images in "/Users/abhaysingh/jobminglrcom/jobminglrcom/src/pages/index.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})))}},8781:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181828","images":{"fallback":{"src":"/static/88dd34608593ee7d5ef59476fdc51af0/b887d/JobApplication.jpg","srcSet":"/static/88dd34608593ee7d5ef59476fdc51af0/a486a/JobApplication.jpg 153w,\\n/static/88dd34608593ee7d5ef59476fdc51af0/e79d0/JobApplication.jpg 306w,\\n/static/88dd34608593ee7d5ef59476fdc51af0/b887d/JobApplication.jpg 612w","sizes":"(min-width: 612px) 612px, 100vw"},"sources":[{"srcSet":"/static/88dd34608593ee7d5ef59476fdc51af0/f9497/JobApplication.webp 153w,\\n/static/88dd34608593ee7d5ef59476fdc51af0/af002/JobApplication.webp 306w,\\n/static/88dd34608593ee7d5ef59476fdc51af0/ff087/JobApplication.webp 612w","type":"image/webp","sizes":"(min-width: 612px) 612px, 100vw"}]},"width":612,"height":428}')}}]);
//# sourceMappingURL=component---src-pages-index-js-34813401ea22e6ea8887.js.map