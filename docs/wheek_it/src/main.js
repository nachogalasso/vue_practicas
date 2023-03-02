import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// FONTAWESOME ICONS
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faImage, faSquarePollHorizontal, faFaceSmile, faCalendar, faLocationDot, faHouseChimneyWindow, faHashtag,
faBell, faEnvelope, faBookmark, faList, faUser, faGrip } from '@fortawesome/free-solid-svg-icons'
// import { faGif } from '@fortawesome/free-regular-svg-icons'

library.add(
	faImage,
	faSquarePollHorizontal,
	faFaceSmile,
	faCalendar,
	faLocationDot,
	faHouseChimneyWindow,
	faHashtag,
	faBell,
	faEnvelope,
	faBookmark,
	faList,
	faUser,
	faGrip
);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
