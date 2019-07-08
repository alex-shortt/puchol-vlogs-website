import { delay } from "../common/promises.js"
import { loadHome, unloadHome } from "./home.js"
import {
  placeBrandVideos,
  placeMusicVideos,
  placeVlogVideos,
  placeStudentVideos
} from "./media.js"

export function getHash() {
  return location.hash.replace(/^#/, "") || ""
}

export async function pushPage(page, overload) {
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  let title = page ? `Carlos Puchol Vlogs || ${jsUcfirst(page)}` : "CPV"
  let url = `#${page}`

  $(`.cpv-footer-icon`).removeClass("active")
  $(`.cpv-${page}`).addClass("active")

  await hidePages(page)

  if (!overload) {
    window.history.pushState({ page: page }, title, url)
    document.title = title
  }

  await showPage(getHash())
}

export async function hidePages(nextPage) {
  const fadePages = ["home", "cpv", "media", "student", "contact"]

  let stayInMedia = nextPage != "" && !$("#cpv").hasClass("hidden")

  unloadHome()

  fadePages.forEach(page => {
    if (stayInMedia && page == "cpv") return
    $(`#${page}`).addClass("fadeout")
  })

  await delay(750)

  fadePages.forEach(page => {
    if (stayInMedia && page == "cpv") return
    $(`#${page}`).addClass("hidden")
  })

  fadePages.forEach(page => {
    if (stayInMedia && page == "cpv") return
    $(`#${page}`).removeClass("fadeout")
  })
}

export async function showPage(page) {
  if (page == "") {
    $("#home").removeClass("hidden")
    loadHome()
  } else {
    $("#cpv").removeClass("hidden")

    $(`.cpv-footer-icon`).removeClass("active")
    $(`.cpv-${page}`).addClass("active")

    $("#media").scrollTop()

    if (page == "contact") {
      $("#contact").removeClass("hidden")
    } else {
      $("#media").removeClass("hidden")
    }

    if (page == "brand") {
      placeBrandVideos()
    } else if (page == "music") {
      placeMusicVideos()
    } else if (page == "vlogs") {
      placeVlogVideos()
    } else if (page == "student") {
      placeStudentVideos()
    }
  }
}

window.onpopstate = function(e) {
  pushPage(e.state.page, true)
}
