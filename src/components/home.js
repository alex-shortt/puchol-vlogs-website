import { delay } from "../common/promises.js"

export async function loadHome() {
  $("#home-logo").removeClass("invisible")
  await delay(750)
  $("#home-brand").removeClass("invisible")
  await delay(500)
  $("#home-music").removeClass("invisible")
  await delay(500)
  $("#home-vlogs").removeClass("invisible")
  await delay(500)
  $("#home-student").removeClass("invisible")
  await delay(500)
  $("#home-contact").removeClass("invisible")
  await delay(500)
}

export function unloadHome() {
  $("#home-logo").addClass("invisible")
  $("#home-brand").addClass("invisible")
  $("#home-music").addClass("invisible")
  $("#home-vlogs").addClass("invisible")
  $("#home-student").addClass("invisible")
  $("#home-contact").addClass("invisible")
}

// HOME
$("#home").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04
})
