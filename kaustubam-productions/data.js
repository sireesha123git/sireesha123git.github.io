/* KP-WOW website content.
   To add a video: copy one line, change the fields, save.
   at   = release time in India (the card goes live on its own after this time)
   url  = the YouTube link (leave "" if you don't have it yet)
   img  = picture in the img folder                                         */

const CHANNEL = "https://www.youtube.com/@KP-WOW-WorldofWonders";        // series channel
const STUDIO_CHANNEL = "https://www.youtube.com/@KaustubamProductions"; // ad films channel
const SHORTS  = CHANNEL + "/shorts";

/* Social links shown as round icons in the top bar. Leave "" to hide an icon. */
const SOCIAL = {
  youtube:   CHANNEL,
  linkedin:  "https://www.linkedin.com/company/146894652/",
  instagram:"https://www.instagram.com/kaustubamproductions/"
};

const SITE = {
  wof: {
    teasers: [
      { name: "Ganesh Chaturthi", title: "Ganesh Chaturthi in 10 Seconds", place: "India", at: "2026-09-16T18:00:00+05:30", url: "https://youtube.com/shorts/rKL92jOOi1I", img: "ganesh" },
      { name: "Oktoberfest", title: "Oktoberfest in 10 Seconds", place: "Germany", at: "2026-09-17T18:00:00+05:30", url: "https://youtube.com/shorts/7m-bYQcnf5M", img: "oktoberfest" },
      { name: "Día de los Muertos", title: "Day of the Dead in 10 Seconds", place: "Mexico", at: "2026-09-23T18:00:00+05:30", url: "https://youtube.com/shorts/w0i0w-Q65lk", img: "muertos" },
      { name: "Hanami", title: "Hanami in 10 Seconds", place: "Japan", at: "2026-09-30T18:00:00+05:30", url: "https://youtube.com/shorts/fVD9AgzJk4s", img: "hanami" },
      { name: "Halloween", title: "Halloween in 10 Seconds", place: "Ireland & USA", at: "2026-10-07T18:00:00+05:30", url: "https://youtube.com/shorts/sJM0tfeSpAs", img: "halloween" },
      { name: "Dussehra", title: "Dussehra in 10 Seconds", place: "India", at: "2026-10-14T18:00:00+05:30", url: "https://youtube.com/shorts/MNwyRbiHdFU", img: "dussehra" },
      { name: "Thanksgiving", title: "Thanksgiving in 10 Seconds", place: "USA", at: "2026-10-21T18:00:00+05:30", url: "https://youtube.com/shorts/lYAb_qo6d64", img: "thanksgiving" },
      { name: "Diwali", title: "Diwali in 10 Seconds", place: "India", at: "2026-11-01T18:00:00+05:30", url: "https://youtube.com/shorts/SkbTgbgBxLw", img: "diwali" },
      { name: "Chinese New Year", title: "Chinese New Year in 10 Seconds", place: "China", at: "2026-11-08T18:00:00+05:30", url: "https://youtube.com/shorts/cHVxQvY31AU", img: "cny" }
    ],
    finals: [
      { name: "Ganesh Chaturthi", title: "Ganesh Chaturthi: Welcoming Lord Ganesha", place: "India", at: "2026-09-14T18:00:00+05:30", url: "https://youtu.be/pvPkAe9xsoQ", img: "ganesh" },
      { name: "Oktoberfest", title: "Oktoberfest: Munich’s Famous Folk Festival", place: "Germany", at: "2026-09-18T18:00:00+05:30", url: "https://youtu.be/-4Wzw-ovvxw", img: "oktoberfest" },
      { name: "Día de los Muertos", title: "Día de los Muertos: Mexico’s Day of the Dead", place: "Mexico", at: "2026-09-25T18:00:00+05:30", url: "https://youtu.be/sHDSZ_Fuymo", img: "muertos" },
      { name: "Hanami", title: "Hanami: Japan’s Cherry Blossom Festival", place: "Japan", at: "2026-10-02T18:00:00+05:30", url: "https://youtu.be/T6-WU36zd_4", img: "hanami" },
      { name: "Halloween", title: "Halloween: Then & Now", place: "Ireland & USA", at: "2026-10-09T18:00:00+05:30", url: "https://youtu.be/f3-2qfbs5Iw", img: "halloween" },
      { name: "Dussehra", title: "Dussehra: The Victory of Good Over Evil", place: "India", at: "2026-10-16T18:00:00+05:30", url: "https://youtu.be/c_cTu5pABAY", img: "dussehra" },
      { name: "Thanksgiving", title: "Thanksgiving: America’s Day of Gratitude", place: "USA", at: "2026-10-23T18:00:00+05:30", url: "https://youtu.be/4n_q--TjnFs", img: "thanksgiving" },
      { name: "Diwali", title: "Diwali: India’s Festival of Lights", place: "India", at: "2026-11-02T18:00:00+05:30", url: "https://youtu.be/S5X-LjO1D8g", img: "diwali" },
      { name: "Chinese New Year", title: "Chinese New Year: The Spring Festival", place: "China", at: "2026-11-09T18:00:00+05:30", url: "https://youtu.be/-28t001kgQ0", img: "cny" }
    ]
  },
  woc: {
    teasers: [],
    finals: [],
    upcoming: ["Intel", "Google", "Amazon", "Cisco", "Apple"]
  },
  wob: {
    teasers: [],
    finals: [],
    upcoming: ["Season 1 · Episode 1", "Season 1 · Episode 2", "Season 1 · Episode 3"]
  },
  woa: {            /* World of Ads: no teasers, only the finished ad films */
    teasers: [],
    finals: [
      { name: "Vamsee Dental Care", title: "Pain out Smile in", place: "Tirupati, India", at: "2026-10-01T18:00:00+05:30", url: "https://www.youtube.com/watch?v=TvW2zqPYt1Q", thumb: "https://i.ytimg.com/vi/TvW2zqPYt1Q/hqdefault.jpg", note: "Ad film · Telugu" },
      { name: "Vamsee Dental Care", title: "Vamsee Dental Care, Tirupati", place: "Tirupati, India", at: "2026-10-01T18:00:00+05:30", url: "https://www.youtube.com/watch?v=hk16C8yKP4c", thumb: "https://i.ytimg.com/vi/hk16C8yKP4c/hqdefault.jpg", note: "Ad film · Telugu" },
      { name: "Vamsee Dental Care", title: "A beautiful smile story", place: "Tirupati, India", at: "2026-10-01T18:00:00+05:30", url: "https://www.youtube.com/watch?v=r5qm_Iq3-qU", thumb: "https://i.ytimg.com/vi/r5qm_Iq3-qU/hqdefault.jpg", note: "Ad film · Telugu" }
    ],
    upcoming: []
  }
};

/* Payment details for the Pay & Support page. Empty values show "email us" instead. */
const PAY={
  payeeName:"Kaustubam Productions",
  paypalEmail:"kaustubamproductions@gmail.com",          // e.g. kaustubamproductions@gmail.com
  paypalMe:"kaustubamproductions",             // the part after paypal.me/
  upiId:"sireesha.n.1@okicici",                // e.g. name@okicici
  upiName:"Sireesha Nallagatla",              // name shown in the UPI app
  bank:{accountName:"",accountNumber:"",ifsc:"",bankName:"",branch:""},
  showBankDetails:false    // true = show bank account on the page; false = "email us for bank details"
};
