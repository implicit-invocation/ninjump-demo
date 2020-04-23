import {
  createBatch,
  createGameLoop,
  resizeCanvas,
  createOrthoCamera
} from "gdxjs";
import "./index.css";
import loadFontFile from "./loadFontFile";
import { AlignMode, TextType } from "./loadFontFile";
// import createWhiteText from "gl-white-texture";

const init = async () => {
  const canvas = document.getElementById("main");
  const [width, height] = resizeCanvas(canvas, 1);
  const gl = canvas.getContext("webgl");
  const batch = createBatch(gl);
  const cam = createOrthoCamera(width, height, width, height);
  // const whiteText = createWhiteText(gl);
  // const font = await loadFontFile(gl, canvas, "./arial-32px.fnt");
  // const font2 = await loadFontFile(gl, "./arial-15.fnt");
  const font = await loadFontFile(gl, "./arial-32px.fnt");
  const newText = font.setNewText(width);
  const newText3 = font.setNewText(width);
  // const newText2 = font2.setNewText(width);

  const CharSequence =
    "Using the Hello /nWorld/n    guide,    youll start  a timer.";
  let score = 0;
  const fontSize = 32;
  const posX = width / 2;
  const posY = (height * 2) / 3;
  gl.clearColor(0, 0, 0, 1);
  const update = delta => {
    gl.clear(gl.COLLOR_BUFFER_BIT);
    batch.setProjection(cam.combined);
    batch.begin();
    batch.setColor(1, 0, 0, 1);
    newText.setAlignMode(AlignMode.center);
    newText.setType(TextType.dynamic);
    newText.setFixedGlyphWidth(width);
    const CharSequence2 = `${score}`;
    newText.draw(batch, CharSequence2, posX, posY - 20, fontSize);

    newText3.setAlignMode(AlignMode.center);
    newText3.setType(TextType.static);
    newText3.setFixedGlyphWidth(width);
    newText3.draw(batch, CharSequence, posX, posY - 160, fontSize);

    // newText2.setAlignMode(AlignMode.center);
    // newText2.setFixedGlyphWidth(width / 1);
    // newText2.draw(batch, CharSequence, posX, posY - 60, fontSize);
    batch.end();
  };

  setInterval(() => {
    score += 1;
  }, 1000);
  createGameLoop(update);
};

init();
