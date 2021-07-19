const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

// const firstpoint = { x: null, y: null };
// const midpoint = { x: null, y: null };
// const lastpoint = { x: null, y: null };



function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  // console.log(results.poseLandmarks)
  // firstpoint.x = results.poseLandmarks[12].x;
  // firstpoint.y = results.poseLandmarks[12].y;
  // midpoint.x = results.poseLandmarks[14].x;
  // midpoint.y = results.poseLandmarks[14].y;
  // lastpoint.x = results.poseLandmarks[16].x;
  // lastpoint.y = results.poseLandmarks[16].y;
  // console.log(firstpoint, midpoint, lastpoint);
  canvasCtx.drawImage(
    results.image, 0, 0, canvasElement.width, canvasElement.height);
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
    { color: '#00FF00', lineWidth: 4 });
  drawLandmarks(canvasCtx, results.poseLandmarks,
    { color: '#FF0000', lineWidth: 2 });
  drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION,
    { color: '#C0C0C070', lineWidth: 1 });
  drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS,
    { color: '#CC0000', lineWidth: 5 });
  drawLandmarks(canvasCtx, results.leftHandLandmarks,
    { color: '#00FF00', lineWidth: 2 });
  drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,
    { color: '#00CC00', lineWidth: 5 });
  drawLandmarks(canvasCtx, results.rightHandLandmarks,
    { color: '#FF0000', lineWidth: 2 });
  canvasCtx.restore();
}

const holistic = new Holistic({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
  }
});
holistic.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
holistic.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await holistic.send({ image: videoElement });
  },
  width: 1280,
  height: 720
});
camera.start();