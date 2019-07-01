import "./styles/main.scss"
import "./components/jquery.ripples.js"
import { pushPage, showPage, getHash } from "./components/navigation.js"
import { placeBrandVideos } from "./components/media.js"
import {
  openVideoPlayer,
  incrVideo,
  closeVideoPlayer
} from "./components/videoPlayer.js"

// GLOBAL
$(".cpv-brand").click(() => pushPage("brand"))
$(".cpv-music").click(() => pushPage("music"))
$(".cpv-animation").click(() => pushPage("animation"))
$(".cpv-about").click(() => pushPage("about"))
$(".cpv-contact").click(() => pushPage("contact"))
$(".cpv-logo").click(() => pushPage(""))
$("body").click(e => {
  let menu = $("#cpv-menu")
  let button = $("#cpv-navbar-menu")
  if (e.target == button.get(0)) {
    if (!menu.hasClass("active")) menu.addClass("active")
    else menu.removeClass("active")
  } else {
    if (menu.hasClass("active")) menu.removeClass("active")
  }
})

// MEDIA
placeBrandVideos()

// MODAL
$("#modal-close").click(() => closeVideoPlayer())
$("#modal-left").click(() => incrVideo(-1))
$("#modal-right").click(() => incrVideo(1))

// SITE
showPage(getHash())
