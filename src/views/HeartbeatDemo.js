//import HeartbeatDemo from './HeartbeatDemo';
import React, { useEffect } from 'react';
import {Heartbeat} from './heartbeat.js'
import { Box, Container, Typography, Tabs, Tab, Button } from "@mui/material";
const OPENCV_URI = "https://docs.opencv.org/master/opencv.js";
let HAARCASCADE_URI = "haarcascade_frontalface_alt.xml"
const HeartbeatDemo = () => {
  async function loadOpenCv(uri) {
    return new Promise(function(resolve, reject) {
      console.log("starting to load opencv");
      var tag = document.createElement('script');
      tag.src = uri;
      tag.async = true;
      tag.type = 'text/javascript'
      tag.onload = () => {
        cv['onRuntimeInitialized'] = () => {
          console.log("opencv ready");
          resolve();
        }
      };
      tag.onerror = () => {
        throw new URIError("opencv didn't load correctly.");
      };
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
  }
  
  // Initialize Heartbeat after OpenCV is loaded
  let initHeartbeat = async () => {
    await loadOpenCv(OPENCV_URI); // Load OpenCV.js
    console.log(cv);
     /* global cv */
    let heartbeat = new Heartbeat("webcam", "canvas", HAARCASCADE_URI, 30, 6, 250); // Initialize Heartbeat
    heartbeat.init();
  };
  //var ready = loadOpenCv(OPENCV_URI);
  
  // useEffect(() => {
  //   // Function to access webcam and render video on canvas
  //   const initWebcam = async () => {
  //     // Access webcam
  //     const video = document.getElementById('webcam');
  //     const canvas = document.getElementById('canvas');
  //     const ctx = canvas.getContext('2d');

  //     try {
  //      const stream = await navigator.mediaDevices.getUserMedia({ video: true,  });
  //      video.srcObject = stream;
  //    // let demo = new Heartbeat("webcam", "canvas", HAARCASCADE_URI, 30, 6, 250);
  //     //var ready = loadOpenCv(OPENCV_URI);
  //    // video.srcObject = demo;

  //       // Draw video on canvas
  //       const drawCanvas = () => {
  //         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  //         requestAnimationFrame(drawCanvas);
  //       };

  //       video.onloadedmetadata = () => {
  //         canvas.width = video.videoWidth;
  //         canvas.height = video.videoHeight;
  //         //drawCanvas();
  //       };
  //     } catch (err) {
  //       console.error('Error accessing webcam:', err);
  //     }
  //   };
   // ready.then(function() {
   //   heartbeat.init();
   // });
    //initWebcam();
 
    // Clean up
  //   return () => {
  //     const video = document.getElementById('webcam');
  //     //const stream = video.demo
  //   //   if (stream) {
  //   //     const tracks = stream.getTracks();
  //   //     tracks.forEach(track => track.stop());
  //   //   }
  //   };
  // }, []);

  return (
    <div>
      <h1>Heartbeat demo</h1>
      <p>This demo runs a simple variant of rPPG directly in your browser to measure your heart rate based on subtle changes in skin color.</p>
      <p>For best results, try in a constantly well-lit space with minimal device and subject motion.</p>
      <Button onClick={initHeartbeat}>Track</Button> 
      <div>
    <video hidden id="webcam" width="640" height="480"></video>
    <canvas id="canvas" width="640" height="480"></canvas>
  </div>
    </div>
  );
};

export default HeartbeatDemo;
