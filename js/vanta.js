export function InyectVantaBirds(container) {
  VANTA.BIRDS({
    el: container,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color1: 0x2a66,
    color2: 0x8c7f7,
    birdSize: 1.2,
    wingSpan: 27.0,
    separation: 50.0,
    alignment: 84.0,
    cohesion: 1.0,
    quantity: 4.0,
    speedLimit: 6.0,
  });
}
