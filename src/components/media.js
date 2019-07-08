import { brand, music, animation, student } from "./definitions.js"
import { openVideoPlayer } from "./videoPlayer.js"

function clearVideos() {
  $("#media").html("")
}

function insertContent(coll, ind) {
  const video = coll[ind]
  const dir = ind % 2 == 0 ? "left" : "right"
  const opDir = dir == "left" ? "right" : "left"
  const thumb = `https://img.youtube.com/vi/${video.video}/maxresdefault.jpg`

  $("#media").append(`<div id="video-${ind}" class="media-video ${dir}">
            <div class="media-video-overlay">
              <i class="fas fa-play"></i>
            </div>
            <div class="media-video-text">
              <h1 class="${dir}"><span>${video.topText}</span></h1>
              <h2 class="${opDir}"><span>${video.bottomText}</span></h2>
            </div>
            <div class="media-video-video ${dir}" style="background-image:url('${thumb}')"></div>
          </div>`)

  $(`#video-${ind}`).click(() => openVideoPlayer(ind))
}

export function placeBrandVideos() {
  clearVideos()
  for (let i = 0; i < brand.length; i++) {
    insertContent(brand, i)
  }
  $("#media").data({ collection: "brand" })
}

export function placeMusicVideos() {
  clearVideos()
  for (let i = 0; i < music.length; i++) {
    insertContent(music, i)
  }
  $("#media").data({ collection: "music" })
}

export function placeAnimationVideos() {
  clearVideos()
  for (let i = 0; i < animation.length; i++) {
    insertContent(animation, i)
  }
  $("#media").data({ collection: "animation" })
}

export function placeStudentVideos() {
  clearVideos()
  for (let i = 0; i < student.length; i++) {
    insertContent(student, i)
  }
  $("#media").data({ collection: "student" })
}
