const videoDialog = document.getElementById("video-dialog");
const videoIframe = document.getElementById("video-iframe");

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

document.querySelectorAll("img").forEach((img) => {
  img.oncontextmenu = () => false;
});
try {
  document.querySelector(".back-banner").addEventListener("click", () => {
    location.replace("/library/pages");
  });
} catch {}

function print(file) {
  window.open(file, "_self");
}

function register() {
  location.assign("/policies.html");
}

function videoPlayer(btn) {
  const youtubeLink = btn.getAttribute("data-video");
  videoIframe.src = youtubeLink;
  videoDialog.showModal();
  document.querySelector(".close-button").style.display = "block";
}

function closeVideo() {
  videoIframe.src = "";
  videoDialog.close();
  document.querySelector(".close-button").style.display = "none";
}

function share() {
  navigator
    .share({
      files: ["beginning-ending/beginning-ending1.opus"],
    })
    .then(() => console.log("Successful share! 🎉"))
    .catch((err) => console.error(err));
}

document.querySelectorAll("audio").forEach((audio) => {
  audio.onplay = () => {
    document.querySelectorAll("audio").forEach((pausing) => {
      if (pausing != audio) {
        pausing.pause();
      }
    });
  };
});

var ids = [
  "beginning-ending",
  "nitya-parayana",
  "small-slokas",
  "krishna-ashtakam",
  "mahalakshmi-ashtakam",
  "lingashtakam",
  "dhukka-nivarana-ashtakam",
  "ranganatha-ashtakam",
  "achutha-ashtakam",
  "madhurashtakam",
  "totakashtakam",
  "balamukundaashtakam",
  "vaidyanatha-ashtakam",
  "ganesha-pancharatnam",
  "subrahmanya-pancharathnam",
  "shiva-panchakshara-stotram",
  "ashtalakshmi-stotram",
  "navagraha-stotram",
  "mahisasura-mardini-stotram",
  "sri-venkateswara-stotram",
  "hanuman-chalisa",
  "abirami-ammai-pathigam",
  "yaa-devi-sarva-bhuteshu",
  "sri-ramar-slokams",
  "nama-ramayanam",
  "ramachandra-mangalam",
  "thirupavai-pasuram1-5",
  "thirupavai-pasuram6-10",
  "thirupavai-pasuram27-30",
];

// make keywords for each sloka

// Each entry contains keywords and the first few words of each sloka/stotram/ashtakam from library.html
var keywords = [
  // beginning-ending
  "beginning and ending slokas beginning and ending slokams beginning ending slokas beginning ending slokams pranava mantra beja aksharam om vinayagar slokams palum theli thenum mooshika vahana vakratunda mahakaya surya koti samaprabha agajanana padmarkam gajananam bhutaganadi sevitam saraswati devi maanikka veena guru mantram guru brahma guru vishnu guru devo maheshwara shanthi mantram asatoma sadgamaya sahanavavatu pavamana mantram om shantih shantih shantih",
  // nitya-parayana
  "nitya parayana slokas nitya parayana slokams karadarshana karaagre vasate lakshmi bhooma devi samudra vasane devi parvata sthana mandite vishnu patni namastubhyam paada sparsham kshamasva me sun god slokam adityaaya cha somaya snanam bath snanam slokam ganga cha yamune chaiva godavari saraswati hayagreevar slokam jnananandam mayam devam annapurne slokam annapurne sadapurne shankara prana vallabhe deepam slokam shubham karoti kalyanam night slokam ramaskandam hanumantam",
  // small-slokas
  "small slokas vinayakar slokam pundhiyil vaithadi saraswathi devi slokam vishwaroope vishaalaakshi krishnar slokam govindaya namo namaha sri ranganathar sloka bhajeham sri murugan sloka brahmanya devam jai hanuman sloka madh karyam sadhaya devi sloka sharanye tryambake sudarshana slokam vishnur margam pradarshaya anekadantham bhaktaanaam saraswati devi slokam sa mam pattu tvameva sarvam mama vishnu slokam vande vissnnum shiva bhagavan slokam jaya jaya karunaabdhe lakshmi devi slokam sarasijam vande durga devi slokam namastasyaih shanthi mantram om shantih shantih shantih",
  // krishna-ashtakam
  "krishna ashtakam krishnam vande jagat gurum prathar uthaya ya padeth smaranath thasya nasyathi vasudeva sutam devam kamsa chanura mardanam devaki paramanandam krishnam vande jagadgurum",
  // mahalakshmi-ashtakam
  "mahalakshmi ashtakam namastestu mahaamaye shreepeethe sura poojite shankha chakra gada haste mahalakshmi namostute padmasana sthite devi parabrama swaroopini paramesi jaganmatah mahalakshmi namostute sarva mangala mangalye shive sarvartha sadhike sharanye tryambake devi narayani namostute",
  // lingashtakam
  "lingashtakam brahma murari surarchita lingam nirmala bhasita shobhita lingam janmaja dukha vinasaka lingam tat pranamaami sadaa shiva lingam devamuni pravararchita lingam kama daham karuna kara lingam",
  // dhukka-nivarana-ashtakam
  "dhukka nivarana ashtakam sharanagatam sharanagatam sharanagatam sharanagatam sharanagatam sharanagatam sharanagatam sharanagatam",
  // ranganatha-ashtakam
  "ranganatha ashtakam sri rangam rangaraja paduka sevana preeti ranga natha ashtakam",
  // achutha-ashtakam
  "achutha ashtakam achyutam keshavam rama narayanam krishna damodaram vasudevam harim shridharam madhavam gopika vallabham janaki nayakam ramachandram bhaje",
  // madhurashtakam
  "madhurashtakam adharam madhuram vadanam madhuram nayanam madhuram hasitam madhuram hridayam madhuram gamanam madhuram madhuradhipater akhilam madhuram",
  // totakashtakam
  "totakashtakam viditakhila shastra sudha jaladhe mahito punitah stotram totakashtakam",
  // balamukundaashtakam
  "balamukunda ashtakam kararavindena padaaravindam mukharavinde viniveshayantam vatasya patrasya pute shayanam balamukundam manasa smarami",
  // vaidyanatha-ashtakam
  "vaidyanatha ashtakam shri rama soumitri jatayu veda shadananaadi arpitapada padmam shri neelakantham pranamami nityam shri vaidyanatham tam aham namami",
  // ganesha-pancharatnam
  "ganesha pancharatnam mudakaratha modakam sada vimukti sadhakam kaladaravindam ganesha pancharatnam",
  // subrahmanya-pancharathnam
  "subrahmanya pancharathnam sadanam kumarasya devasya shambhoh subrahmanya pancharatnam",
  // shiva-panchakshara-stotram
  "shiva panchakshara stotram nagendra haraya trilochanaya bhasmanga ragaya maheswaraya nityaya shuddhaya digambaraya tasmai nakaraya namah shivaya",
  // ashtalakshmi-stotram
  "ashtalakshmi stotram adilakshmi namosthute dhanyalakshmi namosthute dhairyalakshmi namosthute gajalakshmi namosthute santanalakshmi namosthute vijayalakshmi namosthute vidyalakshmi namosthute dhanayalakshmi namosthute",
  // navagraha-stotram
  "navagraha stotram suryaaya somaaya mangalaaya budhaaya guru shukra shanibhyashcha rahave ketave namah",
  // mahisasura-mardini-stotram
  "mahisasura mardini stotram ayi giri nandini nandhitha medhini vishva vinodhini nandinute girivara vindhya shirodhi nivasini vishnu vilaasini jishnu nuthe bhagavati he shiti kantha kutumbini bhoori kutumbini bhoori krute",
  // sri-venkateswara-stotram
  "sri venkateswara stotram kamalakucha choochuka kunkumatho niyatharunitatula neelatano kamalaayatha lochana venkatesa priyam vadane kritham",
  // hanuman-chalisa
  "hanuman chalisa shri guru charan saroj raj nij manu mukuru sudhari barnau raghuvar bimal jasu jo dayaku phal chari",
  // abirami-ammai-pathigam
  "abirami ammai pathigam abirami andhadhi abirami pathigam",
  // yaa-devi-sarva-bhuteshu
  "yaa devi sarva bhuteshu ya devi sarva bhuteshu shakti roopena samsthita namastasyai namastasyai namastasyai namo namah",
  // sri-ramar-slokams
  "sri ramar slokams shri rama rama rameti rame rame manorame sahasranama tattulyam rama nama varanane",
  // nama-ramayanam
  "nama ramayanam shuddha brahma paratpara ram kausalya sukhavardhana ram",
  // ramachandra-mangalam
  "ramachandra mangalam mangalam kosalendraya mahaniya gunatmane chakravarti tanujaya sarva bhoomaya mangalam",
  // thirupavai-pasuram1-5
  "thirupavai pasuram 1-5 margazhi thingal madhi nirainda nannalal vaiyathu vaikundam",
  // thirupavai-pasuram6-10
  "thirupavai pasuram 6-10 pullum silambina kana pullaraiyan koilil",
  // thirupavai-pasuram27-30
  "thirupavai pasuram 27-30 karavaigal pin senru kandru kanbanakal",
];

function searchSlokas(searchbarValue) {
  const sidebar = document.querySelector(".side-bar");
  const allLinks = sidebar.querySelectorAll(".list-item");

  // Remove previous "no result" message if any
  const noResultId = "no-sloka-result";
  let noResult = document.getElementById(noResultId);
  if (noResult) noResult.remove();

  if (!searchbarValue || searchbarValue.trim() === "") {
    // Show all links and all headings if search is empty
    allLinks.forEach((link) => {
      link.parentElement.style.display = "";
    });
    // Show all headings
    sidebar.querySelectorAll("h1, h2").forEach((heading) => {
      heading.style.display = "block";
    });
    sidebar.querySelectorAll("ul.contents").forEach((ul) => {
      ul.style.display = "block";
    });
    return;
  }

  const search = searchbarValue.trim().toLowerCase();

  let found = false;
  allLinks.forEach((link) => {
    const text = link.textContent.toLowerCase();
    if (text.includes(search)) {
      link.parentElement.style.display = "";
      found = true;
    } else {
      link.parentElement.style.display = "none";
    }
  });

  // Hide headings if their list is empty (all <p> hidden)
  sidebar.querySelectorAll("ul.contents").forEach((ul) => {
    const visibleItems = Array.from(ul.children).filter(
      (p) => p.style.display !== "none"
    );
    if (visibleItems.length === 0) {
      ul.style.display = "none";
      // Hide the heading just before this ul
      let prev = ul.previousElementSibling;
      while (prev && !(prev.tagName && prev.tagName.match(/^H[2]$/))) {
        prev = prev.previousElementSibling;
      }
      if (prev) prev.style.display = "none";
    } else {
      ul.style.display = "";
      // Show the heading just before this ul
      let prev = ul.previousElementSibling;
      while (prev && !(prev.tagName && prev.tagName.match(/^H[2]$/))) {
        prev = prev.previousElementSibling;
      }
      if (prev) prev.style.display = "";
    }
  });

  // Show a message if nothing found
  if (!found) {
    noResult = document.createElement("p");
    noResult.id = noResultId;
    noResult.style.color = "red";
    noResult.style.textAlign = "center";
    noResult.textContent = `No slokam found for "${searchbarValue}"`;
    sidebar.appendChild(noResult);
  }
}

document.getElementById("search-bar").addEventListener("keydown", (e) => {
  eventSource = e.key ? "typed" : "clicked";
});
document.getElementById("search-bar").addEventListener("input", (e) => {
  if (eventSource === "clicked") {
    searchSlokas(e.target.value);
  }
});
