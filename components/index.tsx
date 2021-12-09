import p5Types from 'p5';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
});

export const Scene2d = () => {
  return (
    <Sketch
      setup={onSetup}
      draw={onDraw}
      windowResized={onWindowResized}
      keyPressed={onKeyPressed}
      keyReleased={onKeyReleased}
      mousePressed={onMousePressed}
      mouseReleased={onMouseReleased}
      mouseDragged={onMouseDragged}
      mouseWheel={onMouseWheel}
    />
  );
};

const onSetup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(window.innerWidth, window.innerHeight).parent(
    canvasParentRef,
  );
};

const onDraw = (p5: p5Types) => {
  p5.background(100);

  p5.fill(255);

  p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
};

const onWindowResized = (p5: p5Types) => {
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};

const onKeyPressed = (p5: p5Types) => {
  console.log('onKeyPressed', p5.key);
};

const onKeyReleased = (p5: p5Types) => {
  console.log('onKeyReleased', p5.key);
};

const onMousePressed = (p5: p5Types) => {
  console.log('onMousePressed', p5.mouseX, p5.mouseY);
};

const onMouseReleased = (p5: p5Types) => {
  console.log('onMouseReleased', p5.mouseX, p5.mouseY);
};

const onMouseDragged = (p5: p5Types) => {
  console.log('onMouseDragged', p5.mouseX, p5.mouseY);
};

const onMouseWheel = (p5: p5Types) => {};
