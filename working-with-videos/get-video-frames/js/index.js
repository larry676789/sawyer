/**
 * step 1: open file system and grab video
 * step 2: grab the video track and create a new processor 
 * step 3: create a new transform stream that will save the video frames
 * step 4: create class to expose all functions "class" is a group of functions and properties
 */
async function getFile() {
    // Open file picker and destructure the result the first handle
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();

    const video = document.getElementById("video-player")
    video.src = URL.createObjectURL(file)
    return file;
  }
  
  // create a variable to hold the button element for reference check https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

  const button = document.getElementById("file-picker")

  // next we want to attach a event listener for the "click" event https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  
  button.addEventListener("click", getFile) 

  // create the transformer